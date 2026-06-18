import type { LucideIcon } from "lucide-react";

export function StatCard({ label, value, icon: Icon, accent }: { label: string; value: string; icon: LucideIcon; accent: string }) {
  return (
    <article className="rounded-[8px] border border-ink/10 bg-white/70 p-5 shadow-sm dark:border-white/10 dark:bg-white/[0.08]">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-bold text-ink/55 dark:text-mist/55">{label}</p>
          <p className="mt-2 text-3xl font-black">{value}</p>
        </div>
        <span className={`rounded-full p-3 text-white ${accent}`}><Icon size={22} /></span>
      </div>
    </article>
  );
}
