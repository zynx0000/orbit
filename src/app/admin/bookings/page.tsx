"use client";

import { AdminShell } from "@/components/admin/admin-shell";
import { PageTitle } from "@/components/admin/page-title";
import { useOrbitStore } from "@/store/use-orbit-store";
import type { Booking } from "@/lib/types";

const statuses: Booking["status"][] = ["confirmed", "pending", "done", "cancelled"];

export default function BookingsPage() {
  const { bookings, services, updateBooking } = useOrbitStore();

  return (
    <AdminShell>
      <PageTitle eyebrow="Schedule" title="Записи" text="Таблица бронирований с изменением статуса и связью с каталогом услуг." />
      <div className="overflow-hidden rounded-[8px] border border-ink/10 bg-white/70 dark:border-white/10 dark:bg-white/[0.08]">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] text-left text-sm">
            <thead className="bg-mist text-xs uppercase tracking-[0.18em] text-ink/55 dark:bg-ink/70 dark:text-mist/55">
              <tr>
                <th className="p-4">Клиент</th>
                <th className="p-4">Услуга</th>
                <th className="p-4">Дата</th>
                <th className="p-4">Сумма</th>
                <th className="p-4">Статус</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr className="border-t border-ink/10 dark:border-white/10" key={booking.id}>
                  <td className="p-4 font-black">{booking.client}</td>
                  <td className="p-4">{services.find((service) => service.id === booking.serviceId)?.name}</td>
                  <td className="p-4">{booking.date} · {booking.time}</td>
                  <td className="p-4 font-bold">${booking.value}</td>
                  <td className="p-4">
                    <select className="rounded-full border border-ink/10 bg-mist px-3 py-2 font-bold dark:border-white/10 dark:bg-ink" value={booking.status} onChange={(event) => updateBooking(booking.id, { status: event.target.value as Booking["status"] })}>
                      {statuses.map((status) => <option key={status}>{status}</option>)}
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminShell>
  );
}
