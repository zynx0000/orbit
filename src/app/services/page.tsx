"use client";

import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { PublicShell } from "@/components/public-shell";
import { ServiceCard } from "@/components/service-card";
import { servicesSeed } from "@/lib/mock-data";

export default function ServicesPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const filtered = useMemo(() => {
    return servicesSeed.filter((service) => {
      const byQuery = service.name.toLowerCase().includes(query.toLowerCase()) || service.description.toLowerCase().includes(query.toLowerCase());
      const byCategory = category === "all" || service.category === category;
      return byQuery && byCategory;
    });
  }, [category, query]);

  return (
    <PublicShell>
      <main className="px-4 py-14 sm:px-6 lg:px-8">
        <section className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.28em] text-coral">Service atlas</p>
          <h1 className="mt-3 text-4xl font-black sm:text-6xl">Каталог wellness-маршрутов</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-ink/68 dark:text-mist/68">
            Каждая услуга описана как понятный маршрут: длительность, специалист, стоимость и состояние в расписании.
          </p>
          <div className="mt-8 grid gap-3 rounded-[8px] border border-ink/10 bg-white/65 p-3 dark:border-white/10 dark:bg-white/[0.08] md:grid-cols-[1fr_220px]">
            <label className="flex items-center gap-3 rounded-[8px] bg-mist px-4 py-3 dark:bg-ink/70">
              <Search size={18} className="text-coral" />
              <input className="w-full bg-transparent outline-none" placeholder="Realtime-поиск услуг" value={query} onChange={(event) => setQuery(event.target.value)} />
            </label>
            <select className="focus-ring rounded-[8px] border border-ink/10 bg-mist px-4 py-3 font-bold dark:border-white/10 dark:bg-ink" value={category} onChange={(event) => setCategory(event.target.value)}>
              <option value="all">Все категории</option>
              <option value="Recovery">Recovery</option>
              <option value="Beauty">Beauty</option>
              <option value="Mind">Mind</option>
              <option value="Diagnostics">Diagnostics</option>
            </select>
          </div>
        </section>
        <section className="mx-auto mt-8 grid max-w-7xl gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((service) => <ServiceCard key={service.id} service={service} />)}
          {!filtered.length ? (
            <div className="col-span-full rounded-[8px] border border-dashed border-ink/20 p-10 text-center dark:border-white/20">
              <h2 className="text-2xl font-black">Ничего не найдено</h2>
              <p className="mt-2 text-ink/65 dark:text-mist/65">Попробуйте изменить запрос или категорию.</p>
            </div>
          ) : null}
        </section>
      </main>
    </PublicShell>
  );
}
