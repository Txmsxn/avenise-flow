import { cn } from "@/lib/cn";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "center" | "left";
}) {
  return (
    <div
      className={cn(
        "mb-14 flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
      )}
    >
      <span className="inline-flex items-center gap-2 rounded-full border border-glass bg-white/[0.03] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent-cyan">
        {eyebrow}
      </span>
      <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className={cn("max-w-2xl text-base font-semibold text-slate-300 md:text-lg")}>
          {description}
        </p>
      )}
    </div>
  );
}
