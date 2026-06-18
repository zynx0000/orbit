export function PageTitle({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="mb-6">
      <p className="text-xs font-black uppercase tracking-[0.24em] text-coral">{eyebrow}</p>
      <h1 className="mt-2 text-3xl font-black sm:text-4xl">{title}</h1>
      {text ? <p className="mt-2 max-w-3xl text-ink/65 dark:text-mist/65">{text}</p> : null}
    </div>
  );
}
