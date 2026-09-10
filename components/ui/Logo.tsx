import Image from "next/image";
import { cn } from "@/lib/cn";

/**
 * Sam znak marki (litera „A" z łukiem). Plik ma czarne tło (JPG źródłowy),
 * dlatego `mix-blend-screen` usuwa czerń na ciemnym tle strony.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <Image
      src="/logo-mark.png"
      alt="AVENISE FLOW"
      width={368}
      height={368}
      priority
      className={cn("h-8 w-auto shrink-0 mix-blend-screen", className)}
    />
  );
}

/**
 * Pełny logotyp: znak + napis „AVENISE FLOW".
 */
export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/logo.png"
      alt="AVENISE FLOW"
      width={1384}
      height={266}
      priority
      className={cn("h-8 w-auto mix-blend-screen", className)}
    />
  );
}
