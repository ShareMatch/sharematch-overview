import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ShareMatch, The World\u2019s First Shariah-Compliant Tokenised Asset Marketplace",
  description:
    "Performance-based digital assets across sport, culture, and global events. Built on Solana. Backed by a formal Fatwa.",
  openGraph: {
    title: "ShareMatch, The Future of Halal Finance",
    description:
      "Performance-based digital assets across sport, culture, and global events. Built on Solana. Backed by a formal Fatwa.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
