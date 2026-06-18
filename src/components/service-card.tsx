import { Activity, Clock, Sparkles } from "lucide-react";
import type { Service } from "@/lib/types";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="group rounded-[8px] border border-ink/10 bg-white/70 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-soft dark:border-white/10 dark:bg-white/[0.08]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.22em] text-aqua">{service.category}</p>
          <h3 className="mt-2 text-xl font-black">{service.name}</h3>
        </div>
        <span className="rounded-full bg-coral/15 p-3 text-coral transition group-hover:rotate-12">
          <Sparkles size={20} />
        </span>
      </div>
      <p className="mt-4 min-h-20 text-sm leading-6 text-ink/68 dark:text-mist/68">{service.description}</p>
      <div className="mt-5 flex flex-wrap gap-3 text-sm font-bold text-ink/75 dark:text-mist/75">
        <span className="inline-flex items-center gap-2 rounded-full bg-mist px-3 py-2 dark:bg-white/10"><Clock size={15} />{service.duration} мин</span>
        <span className="inline-flex items-center gap-2 rounded-full bg-mist px-3 py-2 dark:bg-white/10"><Activity size={15} />${service.price}</span>
      </div>
    </article>
  );
}
