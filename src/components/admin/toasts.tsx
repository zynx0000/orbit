"use client";

import { X } from "lucide-react";
import { useOrbitStore } from "@/store/use-orbit-store";

export function Toasts() {
  const { toasts, dismissToast } = useOrbitStore();
  return (
    <div className="fixed bottom-4 right-4 z-50 grid w-[min(92vw,360px)] gap-2">
      {toasts.map((toast) => (
        <div className="flex items-center justify-between gap-3 rounded-[8px] border border-ink/10 bg-white p-4 text-sm font-bold shadow-soft dark:border-white/10 dark:bg-ink" key={toast.id}>
          <span className={toast.tone === "success" ? "text-sage" : toast.tone === "warning" ? "text-coral" : "text-aqua"}>{toast.message}</span>
          <button aria-label="Закрыть" onClick={() => dismissToast(toast.id)}>
            <X size={16} />
          </button>
        </div>
      ))}
    </div>
  );
}
