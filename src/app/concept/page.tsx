import { CheckCircle2, Eye, Fingerprint, Workflow } from "lucide-react";
import { PublicShell } from "@/components/public-shell";

const principles = [
  { title: "Спокойная плотность", text: "Интерфейс показывает много данных, но держит визуальный ритм и не давит на оператора.", icon: Eye },
  { title: "Живая витрина", text: "Публичная часть и админка говорят одним языком: услуги, расписание и бренд связаны.", icon: Fingerprint },
  { title: "Операции без шума", text: "CRUD, фильтры, статусы и аналитика доступны в один-два клика.", icon: Workflow }
];

export default function ConceptPage() {
  return (
    <PublicShell>
      <main className="px-4 py-14 sm:px-6 lg:px-8">
        <section className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-aqua">Brand system</p>
            <h1 className="mt-3 text-4xl font-black sm:text-6xl">Операционная система для заботы</h1>
            <p className="mt-5 text-lg leading-8 text-ink/68 dark:text-mist/68">
              OrbitCare соединяет мягкую эстетику wellness-индустрии с точностью CRM: тёплая палитра, glassmorphism, микроанимации и ясная сетка.
            </p>
          </div>
          <div className="glass rounded-[8px] p-4 shadow-soft">
            <div className="grid gap-3 rounded-[8px] bg-white/55 p-4 dark:bg-white/[0.08]">
              {["Awareness", "Booking", "Session", "Retention"].map((step, index) => (
                <div className="flex items-center gap-4 rounded-[8px] bg-mist p-4 dark:bg-ink/70" key={step}>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-coral font-black text-white">{index + 1}</span>
                  <div className="flex-1">
                    <p className="font-black">{step}</p>
                    <div className="mt-2 h-2 rounded-full bg-ink/10 dark:bg-white/10">
                      <div className="h-2 rounded-full bg-aqua" style={{ width: `${42 + index * 16}%` }} />
                    </div>
                  </div>
                  <CheckCircle2 className="text-sage" />
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="mx-auto mt-14 grid max-w-7xl gap-4 md:grid-cols-3">
          {principles.map(({ title, text, icon: Icon }) => (
            <article className="rounded-[8px] border border-ink/10 bg-white/65 p-6 dark:border-white/10 dark:bg-white/[0.08]" key={title}>
              <Icon className="text-coral" />
              <h2 className="mt-4 text-xl font-black">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-ink/65 dark:text-mist/65">{text}</p>
            </article>
          ))}
        </section>
      </main>
    </PublicShell>
  );
}
