"use client";

import { BarChart3, CalendarCheck, DollarSign, Sparkles } from "lucide-react";
import { AdminShell } from "@/components/admin/admin-shell";
import { PageTitle } from "@/components/admin/page-title";
import { StatCard } from "@/components/admin/stat-card";
import { useOrbitStore } from "@/store/use-orbit-store";

export default function AdminDashboard() {
  const { services, bookings, clients } = useOrbitStore();
  const revenue = bookings.reduce((sum, booking) => sum + booking.value, 0);

  return (
    <AdminShell>
      <PageTitle eyebrow="Control room" title="Панель управления" text="Ключевые показатели студии и ближайшие записи на одной рабочей поверхности." />
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Выручка" value={`$${revenue}`} icon={DollarSign} accent="bg-coral" />
        <StatCard label="Записи" value={String(bookings.length)} icon={CalendarCheck} accent="bg-aqua" />
        <StatCard label="Услуги" value={String(services.length)} icon={Sparkles} accent="bg-sage" />
        <StatCard label="Клиенты" value={String(clients.length)} icon={BarChart3} accent="bg-plum" />
      </section>
      <section className="mt-6 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[8px] border border-ink/10 bg-white/70 p-5 dark:border-white/10 dark:bg-white/[0.08]">
          <h2 className="text-xl font-black">Ближайшие записи</h2>
          <div className="mt-4 grid gap-3">
            {bookings.map((booking) => {
              const service = services.find((item) => item.id === booking.serviceId);
              return (
                <div className="grid gap-3 rounded-[8px] bg-mist p-4 dark:bg-ink/70 md:grid-cols-[1fr_auto]" key={booking.id}>
                  <div>
                    <p className="font-black">{booking.client}</p>
                    <p className="text-sm text-ink/60 dark:text-mist/60">{service?.name} · {booking.date} {booking.time}</p>
                  </div>
                  <span className="rounded-full bg-white px-3 py-2 text-center text-xs font-black uppercase text-coral dark:bg-white/10">{booking.status}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="rounded-[8px] border border-ink/10 bg-ink p-5 text-mist dark:border-white/10">
          <h2 className="text-xl font-black">Welcome screen</h2>
          <p className="mt-3 leading-7 text-mist/70">Сегодня фокус на удержании: VIP-клиенты активны, а категория Recovery даёт самый стабильный поток.</p>
          <div className="mt-6 grid gap-3">
            <div className="h-3 rounded-full bg-white/10"><div className="h-3 w-[78%] rounded-full bg-coral" /></div>
            <div className="h-3 rounded-full bg-white/10"><div className="h-3 w-[62%] rounded-full bg-aqua" /></div>
            <div className="h-3 rounded-full bg-white/10"><div className="h-3 w-[84%] rounded-full bg-sage" /></div>
          </div>
        </div>
      </section>
    </AdminShell>
  );
}
