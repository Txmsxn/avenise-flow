import { TECHNOLOGIES } from "@/lib/constants";

export function Technologies() {
  return (
    <section className="section !py-16">
      <p className="mb-8 text-center text-xs uppercase tracking-widest text-slate-500">
        Technologie, w których pracujemy na co dzień
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        {TECHNOLOGIES.map((tech) => (
          <span
            key={tech}
            className="glass rounded-full px-5 py-2 text-sm text-slate-300"
          >
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
}
