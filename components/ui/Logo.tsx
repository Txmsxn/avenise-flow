import Image from "next/image";
import { cn } from "@/lib/cn";

/** Sam znak marki (litera „A" z łukiem) — PNG z przezroczystym tłem. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <Image
      src="/logo-mark.png"
      alt="AVENISE FLOW"
      width={368}
      height={368}
      priority
      className={cn("h-8 w-auto shrink-0", className)}
    />
  );
}

/** Pełny logotyp: znak + napis „AVENISE FLOW" — PNG z przezroczystym tłem. */
export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/logo.png"
      alt="AVENISE FLOW"
      width={1384}
      height={266}
      priority
      className={cn("h-8 w-auto", className)}
    />
  );
}
