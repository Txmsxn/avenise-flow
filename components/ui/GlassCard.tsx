import { cn } from "@/lib/cn";

export function GlassCard({
  className,
  children,
  hover = true,
}: {
  className?: string;
  children: React.ReactNode;
  hover?: boolean;
}) {
  return (
    <div
      className={cn(
        "glass rounded-2xl p-6 transition-all duration-300",
        hover && "hover:-translate-y-1 hover:border-white/[0.16] hover:shadow-glow",
        className,
      )}
    >
      {children}
    </div>
  );
}
