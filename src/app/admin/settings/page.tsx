"use client";

import { Bell, ShieldCheck, Smartphone } from "lucide-react";
import { AdminShell } from "@/components/admin/admin-shell";
import { PageTitle } from "@/components/admin/page-title";
import { useOrbitStore } from "@/store/use-orbit-store";

const settings = [
  { title: "Push-уведомления", text: "Получать сигналы о новых заявках", icon: Bell },
  { title: "Защита смен", text: "Подтверждать отмены записей", icon: ShieldCheck },
  { title: "Mobile-first", text: "Компактный режим для планшетов", icon: Smartphone }
];

export default function SettingsPage() {
  const { addToast, logout } = useOrbitStore();

  return (
    <AdminShell>
      <PageTitle eyebrow="Preferences" title="Настройки" text="Демо-настройки продукта с micro-interactions и notifications." />
      <section className="grid gap-4 lg:grid-cols-3">
        {settings.map(({ title, text, icon: Icon }) => (
          <article className="rounded-[8px] border border-ink/10 bg-white/70 p-5 dark:border-white/10 dark:bg-white/[0.08]" key={title}>
            <Icon className="text-coral" />
            <h2 className="mt-4 text-xl font-black">{title}</h2>
            <p className="mt-2 text-sm text-ink/65 dark:text-mist/65">{text}</p>
            <label className="mt-5 flex cursor-pointer items-center justify-between rounded-[8px] bg-mist p-3 font-bold dark:bg-ink">
              Активно
              <input type="checkbox" defaultChecked className="h-5 w-5 accent-coral" onChange={() => addToast("Настройка обновлена", "success")} />
            </label>
          </article>
        ))}
      </section>
      <button className="mt-6 rounded-full bg-ink px-5 py-3 font-black text-white dark:bg-mist dark:text-ink" onClick={logout}>Выйти из панели</button>
    </AdminShell>
  );
}
