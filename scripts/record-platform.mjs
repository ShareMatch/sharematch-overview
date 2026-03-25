import puppeteer from "puppeteer";
import { mkdir } from "fs/promises";
import { execSync } from "child_process";
import path from "path";

const URL = process.env.RWA_URL || "https://rwa.sharematch.me";
const EMAIL = process.env.RWA_EMAIL;
const PASSWORD = process.env.RWA_PASSWORD;

if (!EMAIL || !PASSWORD) {
  console.error("Set RWA_EMAIL and RWA_PASSWORD environment variables");
  process.exit(1);
}
const OUTPUT_DIR = path.resolve("scripts/frames");
const VIDEO_OUT = path.resolve("public/videos/platform-walkthrough.mp4");

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function main() {
  await mkdir(OUTPUT_DIR, { recursive: true });
  await mkdir(path.dirname(VIDEO_OUT), { recursive: true });

  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--window-size=1280,720"],
    defaultViewport: { width: 1280, height: 720 },
  });

  const page = await browser.newPage();

  let frameIndex = 0;
  let capturing = false;
  let captureTimer;

  function startCapture() {
    capturing = true;
    const capture = async () => {
      if (!capturing) return;
      try {
        await page.screenshot({
          path: path.join(OUTPUT_DIR, `frame_${String(frameIndex).padStart(6, "0")}.png`),
          type: "png",
        });
        frameIndex++;
      } catch (_) {}
      if (capturing) captureTimer = setTimeout(capture, 100);
    };
    capture();
  }

  function stopCapture() {
    capturing = false;
    if (captureTimer) clearTimeout(captureTimer);
  }

  try {
    // 1. Load platform
    console.log("Loading platform...");
    await page.goto(URL, { waitUntil: "networkidle2", timeout: 30000 });
    await sleep(2000);

    // 2. Open login modal via test ID
    console.log("Opening login...");
    await page.click('[data-testid="topbar-login-button"]').catch(() =>
      page.evaluate(() => {
        const btns = [...document.querySelectorAll("button")];
        const b = btns.find((b) => b.textContent.trim() === "Log In");
        if (b) b.click();
      })
    );
    await sleep(2000);

    // 3. Fill credentials using role-based selectors
    console.log("Filling credentials...");
    await page.evaluate((email) => {
      const inputs = [...document.querySelectorAll("input")];
      const emailInput = inputs.find(
        (i) => i.placeholder?.includes("example") || i.type === "email" || i.getAttribute("aria-label")?.includes("Email")
      );
      if (emailInput) {
        // Use native setter to trigger React state
        const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
        nativeInputValueSetter.call(emailInput, email);
        emailInput.dispatchEvent(new Event("input", { bubbles: true }));
        emailInput.dispatchEvent(new Event("change", { bubbles: true }));
      }
    }, EMAIL);
    await sleep(500);

    await page.evaluate((pw) => {
      const inputs = [...document.querySelectorAll("input")];
      const pwInput = inputs.find((i) => i.type === "password");
      if (pwInput) {
        const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
        nativeInputValueSetter.call(pwInput, pw);
        pwInput.dispatchEvent(new Event("input", { bubbles: true }));
        pwInput.dispatchEvent(new Event("change", { bubbles: true }));
      }
    }, PASSWORD);
    await sleep(1000);

    // 4. Submit login
    console.log("Submitting login...");
    await page.click('[data-testid="login-submit-button"]').catch(() =>
      page.evaluate(() => {
        const btns = [...document.querySelectorAll("button")];
        const b = btns.find((b) => b.textContent.trim() === "Login");
        if (b) b.click();
      })
    );

    console.log("Waiting for login...");
    await sleep(6000);

    // Verify login succeeded
    const loggedIn = await page.evaluate(() => {
      return document.body.innerText.includes("SMT") || document.body.innerText.includes("Portfolio");
    });
    console.log(`Login ${loggedIn ? "succeeded" : "may have failed"}`);

    // ---- START RECORDING ----
    console.log("Starting recording...");
    startCapture();

    // Scene 1: Logged-in homepage (3s)
    console.log("Scene 1: Homepage with portfolio...");
    await sleep(3000);

    // Scene 2: Scroll down through markets (5s)
    console.log("Scene 2: Scrolling markets...");
    for (let i = 0; i < 25; i++) {
      await page.evaluate(() => window.scrollBy(0, 25));
      await sleep(200);
    }
    await sleep(1000);

    // Scene 3: Scroll back to top (2s)
    console.log("Scene 3: Back to top...");
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: "smooth" }));
    await sleep(2000);

    // Scene 4: Click next carousel arrow (3s)
    console.log("Scene 4: Carousel navigation...");
    await page.evaluate(() => {
      const btns = [...document.querySelectorAll("button")];
      const next = btns.find((b) => b.getAttribute("aria-label")?.includes("Next") || b.textContent.includes("Next"));
      if (next) next.click();
    });
    await sleep(1500);
    await page.evaluate(() => {
      const btns = [...document.querySelectorAll("button")];
      const next = btns.find((b) => b.getAttribute("aria-label")?.includes("Next") || b.textContent.includes("Next"));
      if (next) next.click();
    });
    await sleep(1500);

    // Scene 5: Click into EPL market (4s)
    console.log("Scene 5: EPL market...");
    await page.evaluate(() => {
      const link = document.querySelector('a[href="/market/EPL"]');
      if (link) link.click();
    });
    await sleep(4000);

    // Scene 6: Browse market, scroll down (4s)
    console.log("Scene 6: Browsing EPL...");
    for (let i = 0; i < 20; i++) {
      await page.evaluate(() => window.scrollBy(0, 30));
      await sleep(200);
    }
    await sleep(1000);

    // Scene 7: Scroll back up and click a Buy button (3s)
    console.log("Scene 7: Buying an asset...");
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: "smooth" }));
    await sleep(1500);
    await page.evaluate(() => {
      const btns = [...document.querySelectorAll("button")];
      const buy = btns.find((b) => b.textContent.trim() === "Buy");
      if (buy) buy.click();
    });
    await sleep(3000);

    // Scene 8: Navigate to HAL AI (4s)
    console.log("Scene 8: HAL AI Analytics...");
    await page.goto(`${URL}/ai-analytics`, { waitUntil: "networkidle2", timeout: 15000 });
    await sleep(3000);

    // Scene 9: Click an AI suggestion (4s)
    console.log("Scene 9: AI suggestion...");
    await page.evaluate(() => {
      const els = [...document.querySelectorAll("div, button, span")];
      const suggestion = els.find((e) => e.textContent.includes("Analyze the top F1"));
      if (suggestion) suggestion.click();
    });
    await sleep(5000);

    // Scene 10: Final pause (2s)
    console.log("Scene 10: Final...");
    await sleep(2000);

    stopCapture();
    console.log(`Captured ${frameIndex} frames`);

    if (frameIndex > 10) {
      console.log("Converting to MP4...");
      execSync(
        `ffmpeg -y -framerate 10 -i "${OUTPUT_DIR}/frame_%06d.png" -c:v libx264 -pix_fmt yuv420p -vf "scale=1280:720" -preset fast -crf 20 "${VIDEO_OUT}"`,
        { stdio: "inherit" }
      );
      console.log(`Video saved: ${VIDEO_OUT}`);
    }
  } catch (err) {
    stopCapture();
    console.error("Error:", err.message);
    await page.screenshot({ path: path.join(OUTPUT_DIR, "debug-error.png") }).catch(() => {});
  } finally {
    await browser.close();
  }

  try {
    execSync(`rm -rf "${OUTPUT_DIR}"`);
    console.log("Cleaned up frames");
  } catch (_) {}
}

main();
