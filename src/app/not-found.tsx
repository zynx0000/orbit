import Link from "next/link";
import { Compass } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="max-w-lg text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-coral text-white">
          <Compass size={30} />
        </div>
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-aqua">404</p>
        <h1 className="mt-3 text-4xl font-black">Маршрут вышел из орбиты</h1>
        <p className="mt-4 text-ink/70 dark:text-mist/70">
          Страница не найдена, но платформа на месте. Вернитесь к сервису или в панель управления.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Link className="rounded-full bg-ink px-5 py-3 text-sm font-bold text-white dark:bg-mist dark:text-ink" href="/">
            На сайт
          </Link>
          <Link className="rounded-full border border-ink/15 px-5 py-3 text-sm font-bold" href="/admin">
            В админку
          </Link>
        </div>
      </div>
    </main>
  );
}
