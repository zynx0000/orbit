"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, Orbit } from "lucide-react";
import { useOrbitStore } from "@/store/use-orbit-store";

export default function LoginPage() {
  const router = useRouter();
  const { login, loading, error } = useOrbitStore();
  const [email, setEmail] = useState("admin@orbitcare.app");
  const [password, setPassword] = useState("orbit2026");

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const ok = await login(email, password);
    if (ok) router.replace("/admin");
  };

  return (
    <main className="grid min-h-screen place-items-center px-4">
      <form className="w-full max-w-md rounded-[8px] border border-ink/10 bg-white/75 p-6 shadow-soft dark:border-white/10 dark:bg-white/[0.08]" onSubmit={submit}>
        <div className="mb-6 flex items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ink text-mist dark:bg-mist dark:text-ink"><Orbit /></span>
          <div>
            <h1 className="text-2xl font-black">Вход в OrbitCare</h1>
            <p className="text-sm text-ink/60 dark:text-mist/60">Имитация авторизации для демо</p>
          </div>
        </div>
        <div className="grid gap-4">
          <label className="grid gap-2 font-bold">Email<input className="focus-ring rounded-[8px] border border-ink/10 bg-mist px-4 py-3 dark:border-white/10 dark:bg-ink" value={email} onChange={(event) => setEmail(event.target.value)} /></label>
          <label className="grid gap-2 font-bold">Пароль<input type="password" className="focus-ring rounded-[8px] border border-ink/10 bg-mist px-4 py-3 dark:border-white/10 dark:bg-ink" value={password} onChange={(event) => setPassword(event.target.value)} /></label>
          {error ? <p className="rounded-[8px] bg-coral/10 p-3 text-sm font-bold text-coral">{error}</p> : null}
          <button className="inline-flex items-center justify-center gap-2 rounded-full bg-coral px-6 py-4 font-black text-white transition hover:-translate-y-1 disabled:opacity-60" disabled={loading}>
            <Lock size={18} /> {loading ? "Проверка..." : "Войти"}
          </button>
        </div>
      </form>
    </main>
  );
}
