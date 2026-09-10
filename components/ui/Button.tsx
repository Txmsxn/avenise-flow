import Link from "next/link";
import { cn } from "@/lib/cn";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "gradient" | "ghost";
  className?: string;
};

export function Button({ href, children, variant = "gradient", className }: Props) {
  return (
    <Link
      href={href}
      className={cn(variant === "gradient" ? "btn-gradient" : "btn-ghost", className)}
    >
      {children}
    </Link>
  );
}
