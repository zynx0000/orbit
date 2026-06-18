"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { bookingsSeed, clientsSeed, servicesSeed } from "@/lib/mock-data";
import type { Booking, Client, Service, Toast } from "@/lib/types";

type OrbitState = {
  isAuthed: boolean;
  loading: boolean;
  error: string | null;
  services: Service[];
  bookings: Booking[];
  clients: Client[];
  query: string;
  category: "all" | Service["category"];
  layout: "cards" | "table";
  toasts: Toast[];
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  loadMockData: () => Promise<void>;
  setQuery: (query: string) => void;
  setCategory: (category: OrbitState["category"]) => void;
  setLayout: (layout: OrbitState["layout"]) => void;
  addService: (service: Omit<Service, "id">) => void;
  updateService: (id: string, patch: Partial<Service>) => void;
  removeService: (id: string) => void;
  updateBooking: (id: string, patch: Partial<Booking>) => void;
  addToast: (message: string, tone?: Toast["tone"]) => void;
  dismissToast: (id: string) => void;
};

const uid = () => Math.random().toString(36).slice(2, 9);

export const useOrbitStore = create<OrbitState>()(
  persist(
    (set, get) => ({
      isAuthed: false,
      loading: false,
      error: null,
      services: servicesSeed,
      bookings: bookingsSeed,
      clients: clientsSeed,
      query: "",
      category: "all",
      layout: "cards",
      toasts: [],
      login: async (email, password) => {
        set({ loading: true, error: null });
        await new Promise((resolve) => setTimeout(resolve, 650));
        const ok = email === "admin@orbitcare.app" && password === "orbit2026";
        set({ isAuthed: ok, loading: false, error: ok ? null : "Неверный email или пароль" });
        if (ok) get().addToast("Добро пожаловать в OrbitCare", "success");
        return ok;
      },
      logout: () => set({ isAuthed: false }),
      loadMockData: async () => {
        set({ loading: true, error: null });
        await new Promise((resolve) => setTimeout(resolve, 500));
        set({ loading: false });
      },
      setQuery: (query) => set({ query }),
      setCategory: (category) => set({ category }),
      setLayout: (layout) => set({ layout }),
      addService: (service) => {
        set((state) => ({ services: [{ ...service, id: `svc-${uid()}` }, ...state.services] }));
        get().addToast("Услуга создана", "success");
      },
      updateService: (id, patch) => {
        set((state) => ({ services: state.services.map((service) => service.id === id ? { ...service, ...patch } : service) }));
        get().addToast("Услуга обновлена", "info");
      },
      removeService: (id) => {
        set((state) => ({ services: state.services.filter((service) => service.id !== id) }));
        get().addToast("Услуга удалена", "warning");
      },
      updateBooking: (id, patch) => {
        set((state) => ({ bookings: state.bookings.map((booking) => booking.id === id ? { ...booking, ...patch } : booking) }));
        get().addToast("Статус записи изменён", "info");
      },
      addToast: (message, tone = "info") => {
        const id = `toast-${uid()}`;
        set((state) => ({ toasts: [...state.toasts, { id, message, tone }] }));
        setTimeout(() => get().dismissToast(id), 3200);
      },
      dismissToast: (id) => set((state) => ({ toasts: state.toasts.filter((toast) => toast.id !== id) }))
    }),
    {
      name: "orbitcare-store",
      partialize: (state) => ({
        isAuthed: state.isAuthed,
        services: state.services,
        bookings: state.bookings,
        clients: state.clients,
        layout: state.layout
      })
    }
  )
);
