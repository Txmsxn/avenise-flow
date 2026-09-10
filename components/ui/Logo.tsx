import { cn } from "@/lib/cn";

/**
 * Znak marki AVENISE FLOW — stylizowane „A" z łukiem/falą,
 * gradient #00D2FF → #7B2CBF. Odwzorowanie wektorowe logo z materiałów marki.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 240"
      className={cn("h-full w-full", className)}
      role="img"
      aria-label="AVENISE FLOW"
    >
      <defs>
        <linearGradient
          id="af-mark"
          x1="40"
          y1="210"
          x2="205"
          y2="70"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#00D2FF" />
          <stop offset="0.55" stopColor="#3E8BE6" />
          <stop offset="1" stopColor="#7B2CBF" />
        </linearGradient>
      </defs>
      <g
        fill="none"
        stroke="url(#af-mark)"
        strokeWidth="23"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Litera A */}
        <path d="M46 206 L120 40 L194 206" />
        {/* Łuk / fala */}
        <path d="M78 156 q 12 -24 26 -11 q 13 13 26 1 q 15 -13 30 7" />
      </g>
    </svg>
  );
}

/**
 * Pełny logotyp: znak + napis „AVENISE" (biały) „FLOW" (błękit #00D2FF).
 */
export function Logo({
  className,
  withText = true,
}: {
  className?: string;
  withText?: boolean;
}) {
  return (
    <span className={cn("flex items-center gap-3 text-white", className)}>
      <LogoMark className="h-8 w-8" />
      {withText && (
        <span className="text-base font-bold uppercase tracking-[0.18em] leading-none">
          Avenise <span className="text-[#00D2FF]">Flow</span>
        </span>
      )}
    </span>
  );
}
