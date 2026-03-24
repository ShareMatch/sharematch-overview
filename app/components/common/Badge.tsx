interface BadgeProps {
  children: React.ReactNode;
  variant?: "gold" | "emerald" | "muted";
  className?: string;
}

export default function Badge({
  children,
  variant = "gold",
  className = "",
}: BadgeProps) {
  const variants = {
    gold: "bg-gold-500/10 text-gold-400 border-gold-500/20",
    emerald: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    muted: "bg-white/5 text-text-secondary border-white/10",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full border ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
