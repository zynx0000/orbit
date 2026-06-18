import Link from "next/link";
import { ArrowRight, BarChart3, CalendarCheck, Layers3, Radar } from "lucide-react";
import { PublicShell } from "@/components/public-shell";
import { ServiceCard } from "@/components/service-card";
import { servicesSeed } from "@/lib/mock-data";

const highlights = [
  { label: "Умное расписание", icon: CalendarCheck },
  { label: "Сервисная витрина", icon: Layers3 },
  { label: "Пульс бизнеса", icon: BarChart3 }
];

export default function Home() {
  return (
    <PublicShell>
      <main>
        <section className="orbit-grid relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.3em] text-coral">Wellness CRM + booking</p>
              <h1 className="mt-5 max-w-4xl text-5xl font-black leading-[1.02] sm:text-6xl lg:text-7xl">
                OrbitCare
              </h1>
              <p className="mt-6 max-w-2xl text-xl leading-8 text-ink/72 dark:text-mist/72">
                Цифровая орбита для wellness-студий: бронирования, услуги, клиенты и аналитика в одном цельном интерфейсе.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-4 font-black text-white transition hover:-translate-y-1 dark:bg-mist dark:text-ink" href="/admin">
                  Открыть демо <ArrowRight size={18} />
                </Link>
                <Link className="inline-flex items-center justify-center rounded-full border border-ink/15 px-6 py-4 font-black transition hover:bg-white/60 dark:border-white/15 dark:hover:bg-white/10" href="/services">
                  Смотреть услуги
                </Link>
              </div>
            </div>
            <div className="glass floaty rounded-[8px] p-5 shadow-soft">
              <div className="rounded-[8px] bg-ink p-5 text-mist dark:bg-mist dark:text-ink">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-mist/60 dark:text-ink/60">Today flow</p>
                    <h2 className="text-2xl font-black">132 sessions</h2>
                  </div>
                  <Radar className="text-coral" size={36} />
                </div>
                <div className="mt-8 grid grid-cols-3 gap-3">
                  {[72, 45, 88].map((height, index) => (
                    <div className="flex h-40 items-end rounded-[8px] bg-white/10 p-2" key={height}>
                      <div className={`w-full rounded-[6px] ${index === 1 ? "bg-aqua" : index === 2 ? "bg-sage" : "bg-coral"}`} style={{ height: `${height}%` }} />
                    </div>
                  ))}
                </div>
                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  {["Recovery", "Beauty", "Mind"].map((item) => (
                    <span className="rounded-full bg-white/10 px-3 py-2 text-center text-sm font-bold" key={item}>{item}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-4 md:grid-cols-3">
              {highlights.map(({ label, icon: Icon }) => (
                <div className="rounded-[8px] border border-ink/10 bg-white/60 p-6 dark:border-white/10 dark:bg-white/[0.08]" key={label}>
                  <Icon className="text-coral" />
                  <h2 className="mt-4 text-xl font-black">{label}</h2>
                  <p className="mt-2 text-sm leading-6 text-ink/65 dark:text-mist/65">Быстрый доступ к ежедневным решениям без перегруженного интерфейса.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 flex items-end justify-between gap-4">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.24em] text-aqua">Каталог</p>
                <h2 className="mt-2 text-3xl font-black">Популярные услуги</h2>
              </div>
              <Link className="hidden font-black text-coral sm:inline" href="/services">Все услуги</Link>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {servicesSeed.slice(0, 3).map((service) => <ServiceCard key={service.id} service={service} />)}
            </div>
          </div>
        </section>
      </main>
    </PublicShell>
  );
}
