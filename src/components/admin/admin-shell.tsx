"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { BarChart3, CalendarDays, LayoutDashboard, LogOut, Moon, Orbit, Settings, Sparkles, Sun, Users } from "lucide-react";
import { useEffect, useState } from "react";
import { Toasts } from "@/components/admin/toasts";
import { useOrbitStore } from "@/store/use-orbit-store";

const nav = [
  { href: "/admin", label: "Дашборд", icon: LayoutDashboard },
  { href: "/admin/bookings", label: "Записи", icon: CalendarDays },
  { href: "/admin/services", label: "Услуги", icon: Sparkles },
  { href: "/admin/clients", label: "Клиенты", icon: Users },
  { href: "/admin/analytics", label: "Аналитика", icon: BarChart3 },
  { href: "/admin/settings", label: "Настройки", icon: Settings }
];

export function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const { isAuthed, logout } = useOrbitStore();
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (!isAuthed) router.replace("/admin/login");
  }, [isAuthed, router]);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    localStorage.setItem("orbitcare-theme", next ? "dark" : "light");
    document.documentElement.classList.toggle("dark", next);
  };

  if (!isAuthed) return null;

  return (
    <div className="min-h-screen lg:grid lg:grid-cols-[280px_1fr]">
      <aside className="border-b border-ink/10 bg-white/70 p-4 backdrop-blur-xl dark:border-white/10 dark:bg-ink/80 lg:sticky lg:top-0 lg:h-screen lg:border-b-0 lg:border-r">
        <div className="flex items-center justify-between lg:block">
          <Link className="flex items-center gap-2 font-black" href="/">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-mist dark:bg-mist dark:text-ink"><Orbit size={21} /></span>
            OrbitCare Admin
          </Link>
          <button className="rounded-full border border-ink/10 p-3 dark:border-white/10 lg:hidden" onClick={toggleTheme} aria-label="Тема">
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
        <nav className="mt-5 flex gap-2 overflow-x-auto lg:grid">
          {nav.map(({ href, label, icon: Icon }) => {
            const active = pathname === href;
            return (
              <Link className={`flex min-w-max items-center gap-3 rounded-[8px] px-4 py-3 text-sm font-black transition ${active ? "bg-coral text-white shadow-soft" : "hover:bg-mist dark:hover:bg-white/10"}`} href={href} key={href}>
                <Icon size={18} /> {label}
              </Link>
            );
          })}
        </nav>
        <div className="mt-6 hidden gap-2 lg:grid">
          <button className="flex items-center gap-3 rounded-[8px] px-4 py-3 text-sm font-black hover:bg-mist dark:hover:bg-white/10" onClick={toggleTheme}>
            {dark ? <Sun size={18} /> : <Moon size={18} />} Тема
          </button>
          <button className="flex items-center gap-3 rounded-[8px] px-4 py-3 text-sm font-black text-coral hover:bg-coral/10" onClick={logout}>
            <LogOut size={18} /> Выйти
          </button>
        </div>
      </aside>
      <main className="px-4 py-6 sm:px-6 lg:px-8">
        {children}
      </main>
      <Toasts />
    </div>
  );
}
