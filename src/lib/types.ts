export type Service = {
  id: string;
  name: string;
  category: "Recovery" | "Beauty" | "Mind" | "Diagnostics";
  duration: number;
  price: number;
  status: "active" | "paused";
  specialist: string;
  description: string;
};

export type Booking = {
  id: string;
  client: string;
  serviceId: string;
  date: string;
  time: string;
  status: "confirmed" | "pending" | "done" | "cancelled";
  value: number;
};

export type Client = {
  id: string;
  name: string;
  email: string;
  segment: "new" | "loyal" | "vip";
  visits: number;
  lastVisit: string;
};

export type Toast = {
  id: string;
  tone: "success" | "info" | "warning";
  message: string;
};
