"use client";

import { FormEvent, useMemo, useState } from "react";
import { Grid2X2, List, Pencil, Plus, Search, Trash2 } from "lucide-react";
import { AdminShell } from "@/components/admin/admin-shell";
import { PageTitle } from "@/components/admin/page-title";
import { useOrbitStore } from "@/store/use-orbit-store";
import type { Service } from "@/lib/types";

const empty: Omit<Service, "id"> = {
  name: "",
  category: "Recovery",
  duration: 45,
  price: 49,
  status: "active",
  specialist: "",
  description: ""
};

export default function AdminServicesPage() {
  const { services, query, category, layout, setQuery, setCategory, setLayout, addService, updateService, removeService } = useOrbitStore();
  const [draft, setDraft] = useState<Omit<Service, "id">>(empty);
  const [editingId, setEditingId] = useState<string | null>(null);

  const filtered = useMemo(() => services.filter((service) => {
    const text = `${service.name} ${service.specialist} ${service.description}`.toLowerCase();
    return text.includes(query.toLowerCase()) && (category === "all" || service.category === category);
  }), [category, query, services]);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (editingId) {
      updateService(editingId, draft);
      setEditingId(null);
    } else {
      addService(draft);
    }
    setDraft(empty);
  };

  const edit = (service: Service) => {
    setEditingId(service.id);
    const { id: _id, ...rest } = service;
    setDraft(rest);
  };

  return (
    <AdminShell>
      <PageTitle eyebrow="CRUD" title="Услуги" text="Создание, просмотр, редактирование и удаление услуг через Zustand-store." />
      <section className="grid gap-5 xl:grid-cols-[380px_1fr]">
        <form className="rounded-[8px] border border-ink/10 bg-white/70 p-5 dark:border-white/10 dark:bg-white/[0.08]" onSubmit={submit}>
          <h2 className="mb-4 flex items-center gap-2 text-xl font-black"><Plus className="text-coral" /> {editingId ? "Редактировать" : "Новая услуга"}</h2>
          <div className="grid gap-3">
            <input required className="focus-ring rounded-[8px] border border-ink/10 bg-mist px-4 py-3 dark:border-white/10 dark:bg-ink" placeholder="Название" value={draft.name} onChange={(e) => setDraft({ ...draft, name: e.target.value })} />
            <select className="focus-ring rounded-[8px] border border-ink/10 bg-mist px-4 py-3 dark:border-white/10 dark:bg-ink" value={draft.category} onChange={(e) => setDraft({ ...draft, category: e.target.value as Service["category"] })}>
              <option>Recovery</option><option>Beauty</option><option>Mind</option><option>Diagnostics</option>
            </select>
            <input required className="focus-ring rounded-[8px] border border-ink/10 bg-mist px-4 py-3 dark:border-white/10 dark:bg-ink" placeholder="Специалист" value={draft.specialist} onChange={(e) => setDraft({ ...draft, specialist: e.target.value })} />
            <div className="grid grid-cols-2 gap-3">
              <input type="number" className="focus-ring rounded-[8px] border border-ink/10 bg-mist px-4 py-3 dark:border-white/10 dark:bg-ink" value={draft.duration} onChange={(e) => setDraft({ ...draft, duration: Number(e.target.value) })} />
              <input type="number" className="focus-ring rounded-[8px] border border-ink/10 bg-mist px-4 py-3 dark:border-white/10 dark:bg-ink" value={draft.price} onChange={(e) => setDraft({ ...draft, price: Number(e.target.value) })} />
            </div>
            <textarea required className="focus-ring min-h-28 rounded-[8px] border border-ink/10 bg-mist px-4 py-3 dark:border-white/10 dark:bg-ink" placeholder="Описание" value={draft.description} onChange={(e) => setDraft({ ...draft, description: e.target.value })} />
            <button className="rounded-full bg-coral px-5 py-3 font-black text-white transition hover:-translate-y-1">{editingId ? "Сохранить" : "Создать"}</button>
          </div>
        </form>
        <div>
          <div className="mb-4 grid gap-3 rounded-[8px] border border-ink/10 bg-white/70 p-3 dark:border-white/10 dark:bg-white/[0.08] md:grid-cols-[1fr_180px_auto]">
            <label className="flex items-center gap-3 rounded-[8px] bg-mist px-4 py-3 dark:bg-ink/70"><Search size={18} className="text-coral" /><input className="w-full bg-transparent outline-none" placeholder="Поиск" value={query} onChange={(e) => setQuery(e.target.value)} /></label>
            <select className="rounded-[8px] border border-ink/10 bg-mist px-4 py-3 font-bold dark:border-white/10 dark:bg-ink" value={category} onChange={(e) => setCategory(e.target.value as "all" | Service["category"])}>
              <option value="all">Все</option><option>Recovery</option><option>Beauty</option><option>Mind</option><option>Diagnostics</option>
            </select>
            <div className="flex gap-2">
              <button aria-label="Карточки" className={`rounded-[8px] p-3 ${layout === "cards" ? "bg-coral text-white" : "bg-mist dark:bg-ink"}`} onClick={() => setLayout("cards")} type="button"><Grid2X2 size={18} /></button>
              <button aria-label="Таблица" className={`rounded-[8px] p-3 ${layout === "table" ? "bg-coral text-white" : "bg-mist dark:bg-ink"}`} onClick={() => setLayout("table")} type="button"><List size={18} /></button>
            </div>
          </div>
          {layout === "cards" ? (
            <div className="grid gap-4 md:grid-cols-2">
              {filtered.map((service) => (
                <article className="rounded-[8px] border border-ink/10 bg-white/70 p-5 dark:border-white/10 dark:bg-white/[0.08]" key={service.id}>
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-aqua">{service.category}</p>
                  <h3 className="mt-2 text-xl font-black">{service.name}</h3>
                  <p className="mt-2 text-sm text-ink/65 dark:text-mist/65">{service.description}</p>
                  <div className="mt-4 flex gap-2">
                    <button className="rounded-full bg-ink p-3 text-white dark:bg-mist dark:text-ink" onClick={() => edit(service)}><Pencil size={16} /></button>
                    <button className="rounded-full bg-coral p-3 text-white" onClick={() => removeService(service.id)}><Trash2 size={16} /></button>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="overflow-x-auto rounded-[8px] border border-ink/10 bg-white/70 dark:border-white/10 dark:bg-white/[0.08]">
              <table className="w-full min-w-[720px] text-left text-sm">
                <tbody>{filtered.map((service) => <tr className="border-b border-ink/10 dark:border-white/10" key={service.id}><td className="p-4 font-black">{service.name}</td><td className="p-4">{service.category}</td><td className="p-4">${service.price}</td><td className="p-4 text-right"><button className="mr-2 rounded-full bg-ink p-3 text-white dark:bg-mist dark:text-ink" onClick={() => edit(service)}><Pencil size={16} /></button><button className="rounded-full bg-coral p-3 text-white" onClick={() => removeService(service.id)}><Trash2 size={16} /></button></td></tr>)}</tbody>
              </table>
            </div>
          )}
          {!filtered.length ? <div className="rounded-[8px] border border-dashed border-ink/20 p-10 text-center dark:border-white/20"><h2 className="text-xl font-black">Пустое состояние</h2><p className="mt-2 text-ink/60 dark:text-mist/60">Создайте услугу или измените фильтры.</p></div> : null}
        </div>
      </section>
    </AdminShell>
  );
}
