"use client";

import { Bar, BarChart, CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { AdminShell } from "@/components/admin/admin-shell";
import { PageTitle } from "@/components/admin/page-title";
import { revenueSeries } from "@/lib/mock-data";

export default function AnalyticsPage() {
  return (
    <AdminShell>
      <PageTitle eyebrow="Insights" title="Аналитика" text="Интерактивные графики по выручке и бронированиям на mock-данных." />
      <section className="grid gap-5 xl:grid-cols-2">
        <article className="rounded-[8px] border border-ink/10 bg-white/70 p-5 dark:border-white/10 dark:bg-white/[0.08]">
          <h2 className="mb-4 text-xl font-black">Выручка</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={revenueSeries}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(120,120,120,.2)" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="revenue" stroke="#ff6b57" strokeWidth={4} dot={{ r: 5 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </article>
        <article className="rounded-[8px] border border-ink/10 bg-white/70 p-5 dark:border-white/10 dark:bg-white/[0.08]">
          <h2 className="mb-4 text-xl font-black">Бронирования</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={revenueSeries}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(120,120,120,.2)" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="bookings" fill="#3caea3" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </article>
      </section>
    </AdminShell>
  );
}
