"use client";

import { Search, Star } from "lucide-react";
import { useMemo, useState } from "react";
import { AdminShell } from "@/components/admin/admin-shell";
import { PageTitle } from "@/components/admin/page-title";
import { useOrbitStore } from "@/store/use-orbit-store";

export default function ClientsPage() {
  const { clients } = useOrbitStore();
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => clients.filter((client) => `${client.name} ${client.email} ${client.segment}`.toLowerCase().includes(query.toLowerCase())), [clients, query]);

  return (
    <AdminShell>
      <PageTitle eyebrow="CRM" title="Клиенты" text="Сегменты, история посещений и быстрый поиск по клиентской базе." />
      <label className="mb-4 flex max-w-xl items-center gap-3 rounded-[8px] border border-ink/10 bg-white/70 px-4 py-3 dark:border-white/10 dark:bg-white/[0.08]">
        <Search className="text-coral" size={18} />
        <input className="w-full bg-transparent outline-none" placeholder="Поиск клиента" value={query} onChange={(event) => setQuery(event.target.value)} />
      </label>
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((client) => (
          <article className="rounded-[8px] border border-ink/10 bg-white/70 p-5 dark:border-white/10 dark:bg-white/[0.08]" key={client.id}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-xl font-black">{client.name}</h2>
                <p className="text-sm text-ink/60 dark:text-mist/60">{client.email}</p>
              </div>
              <span className="rounded-full bg-aqua/15 p-3 text-aqua"><Star size={18} /></span>
            </div>
            <div className="mt-5 flex flex-wrap gap-2 text-sm font-bold">
              <span className="rounded-full bg-mist px-3 py-2 dark:bg-ink">{client.segment}</span>
              <span className="rounded-full bg-mist px-3 py-2 dark:bg-ink">{client.visits} visits</span>
              <span className="rounded-full bg-mist px-3 py-2 dark:bg-ink">{client.lastVisit}</span>
            </div>
          </article>
        ))}
      </section>
    </AdminShell>
  );
}
