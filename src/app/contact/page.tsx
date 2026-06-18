"use client";

import { Mail, MapPin, Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { PublicShell } from "@/components/public-shell";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <PublicShell>
      <main className="px-4 py-14 sm:px-6 lg:px-8">
        <section className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-coral">Contact</p>
            <h1 className="mt-3 text-4xl font-black sm:text-6xl">Запустите wellness-пространство в новой орбите</h1>
            <div className="mt-8 grid gap-3 text-sm font-bold">
              <p className="inline-flex items-center gap-3"><Mail className="text-aqua" /> hello@orbitcare.app</p>
              <p className="inline-flex items-center gap-3"><MapPin className="text-aqua" /> Almaty / Remote-first</p>
            </div>
          </div>
          <form className="rounded-[8px] border border-ink/10 bg-white/70 p-5 shadow-soft dark:border-white/10 dark:bg-white/[0.08]" onSubmit={submit}>
            <div className="grid gap-4">
              <label className="grid gap-2 font-bold">
                Имя
                <input required className="focus-ring rounded-[8px] border border-ink/10 bg-mist px-4 py-3 dark:border-white/10 dark:bg-ink" placeholder="Ваше имя" />
              </label>
              <label className="grid gap-2 font-bold">
                Email
                <input required type="email" className="focus-ring rounded-[8px] border border-ink/10 bg-mist px-4 py-3 dark:border-white/10 dark:bg-ink" placeholder="name@example.com" />
              </label>
              <label className="grid gap-2 font-bold">
                Сообщение
                <textarea required className="focus-ring min-h-36 rounded-[8px] border border-ink/10 bg-mist px-4 py-3 dark:border-white/10 dark:bg-ink" placeholder="Расскажите о студии" />
              </label>
              <button className="inline-flex items-center justify-center gap-2 rounded-full bg-coral px-6 py-4 font-black text-white transition hover:-translate-y-1">
                Отправить <Send size={18} />
              </button>
              {sent ? <p className="rounded-[8px] bg-sage/15 p-4 font-bold text-sage">Заявка сохранена локально. В реальном проекте здесь подключается API.</p> : null}
            </div>
          </form>
        </section>
      </main>
    </PublicShell>
  );
}
