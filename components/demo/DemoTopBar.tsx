import Link from "next/link";
import { ArrowLeft } from "lucide-react";

/**
 * Jedyne nawiązanie do agencji na autonomicznej podstronie demo.
 * Neutralny wizualnie, przyklejony pasek nad własnym headerem firmy.
 */
export function DemoTopBar({ industry }: { industry: string }) {
  return (
    <div className="sticky top-0 z-[60] w-full border-b border-white/10 bg-[#07090E] text-white">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-3 gap-y-1 px-4 py-2 text-center text-[13px]">
        <span className="text-slate-300">
          To jest wersja demonstracyjna <strong className="text-white">{industry}</strong>{" "}
          stworzona przez{" "}
          <span className="bg-gradient-to-r from-[#00E5FF] to-[#8B5CF6] bg-clip-text font-bold text-transparent">
            AveniseFlow
          </span>
        </span>
        <span className="hidden text-white/20 sm:inline">|</span>
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 font-bold text-white underline-offset-4 hover:underline"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Powrót do agencji
        </Link>
      </div>
    </div>
  );
}
