import Link from "next/link";

export function PublicFooter() {
  return (
    <footer className="border-t border-ink/10 px-4 py-10 dark:border-white/10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm text-ink/65 dark:text-mist/65 md:flex-row md:items-center md:justify-between">
        <p className="font-semibold">OrbitCare © 2026. Wellness operations, reimagined.</p>
        <div className="flex gap-4">
          <Link className="hover:text-coral" href="/services">Услуги</Link>
          <Link className="hover:text-coral" href="/concept">Концепция</Link>
          <Link className="hover:text-coral" href="/contact">Контакты</Link>
        </div>
      </div>
    </footer>
  );
}
