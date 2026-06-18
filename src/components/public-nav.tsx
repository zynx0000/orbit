"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Moon, Orbit, Sun } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "/", label: "Главная" },
  { href: "/services", label: "Услуги" },
  { href: "/concept", label: "Концепция" },
  { href: "/contact", label: "Контакты" }
];

export function PublicNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    localStorage.setItem("orbitcare-theme", next ? "dark" : "light");
    document.documentElement.classList.toggle("dark", next);
  };

  return (
    <header className="sticky top-0 z-30 border-b border-ink/10 bg-mist/75 backdrop-blur-xl dark:border-white/10 dark:bg-ink/75">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link className="flex items-center gap-2 font-black" href="/">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-mist dark:bg-mist dark:text-ink">
            <Orbit size={21} />
          </span>
          OrbitCare
        </Link>
        <nav className="hidden items-center gap-2 md:flex">
          {links.map((link) => (
            <Link
              className={`rounded-full px-4 py-2 text-sm font-bold transition hover:bg-white/70 dark:hover:bg-white/10 ${
                pathname === link.href ? "bg-white text-coral shadow-sm dark:bg-white/10" : "text-ink/70 dark:text-mist/70"
              }`}
              href={link.href}
              key={link.href}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button aria-label="Переключить тему" className="focus-ring rounded-full border border-ink/10 p-3 transition hover:scale-105 dark:border-white/10" onClick={toggleTheme}>
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <Link className="hidden rounded-full bg-coral px-5 py-3 text-sm font-black text-white shadow-soft transition hover:-translate-y-0.5 sm:inline-flex" href="/admin">
            Админка
          </Link>
          <button aria-label="Открыть меню" className="focus-ring rounded-full border border-ink/10 p-3 md:hidden" onClick={() => setOpen((value) => !value)}>
            <Menu size={18} />
          </button>
        </div>
      </div>
      {open ? (
        <div className="mx-auto grid max-w-7xl gap-2 px-4 pb-4 md:hidden">
          {links.map((link) => (
            <Link className="rounded-2xl bg-white/60 px-4 py-3 font-bold dark:bg-white/10" href={link.href} key={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Link className="rounded-2xl bg-coral px-4 py-3 font-black text-white" href="/admin">Админка</Link>
        </div>
      ) : null}
    </header>
  );
}
