import { cn } from "@/lib/cn";

/**
 * Znak marki AveniseFlow — stylizowane „A" z falą (tylda),
 * gradient #00D2FF → #7B2CBF. Odwzorowanie wektorowe dostarczonego logo.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 240"
      className={cn("h-full w-full", className)}
      role="img"
      aria-label="AveniseFlow"
    >
      <defs>
        <linearGradient id="af-mark" x1="20" y1="220" x2="220" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#00D2FF" />
          <stop offset="1" stopColor="#7B2CBF" />
        </linearGradient>
      </defs>
      <g
        fill="none"
        stroke="url(#af-mark)"
        strokeWidth="26"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M42 206 L120 42 L198 206" />
        <path d="M74 150 q 16 -30 31 -15 q 15 15 31 0 q 16 -15 31 6" />
      </g>
    </svg>
  );
}

export function Logo({
  className,
  withText = true,
}: {
  className?: string;
  withText?: boolean;
}) {
  return (
    <span className={cn("flex items-center gap-2.5 text-white", className)}>
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/[0.04] ring-1 ring-white/[0.08]">
        <LogoMark className="h-6 w-6" />
      </span>
      {withText && (
        <span className="font-display text-base font-bold tracking-[0.14em]">
          AVENISE <span className="text-gradient">FLOW</span>
        </span>
      )}
    </span>
  );
}
