import type { Booking, Client, Service } from "./types";

export const servicesSeed: Service[] = [
  {
    id: "svc-1",
    name: "Float Recovery",
    category: "Recovery",
    duration: 60,
    price: 54,
    status: "active",
    specialist: "Mira Sol",
    description: "Sensory reset session with salt water floating and soft light choreography."
  },
  {
    id: "svc-2",
    name: "Pulse Facial Lab",
    category: "Beauty",
    duration: 75,
    price: 86,
    status: "active",
    specialist: "Nika Vale",
    description: "Skin diagnostics, microcurrent care, and a personalized post-session plan."
  },
  {
    id: "svc-3",
    name: "Breathwork Orbit",
    category: "Mind",
    duration: 45,
    price: 38,
    status: "active",
    specialist: "Leo Arden",
    description: "Guided breathing practice for focus, nervous system balance, and sleep quality."
  },
  {
    id: "svc-4",
    name: "BioScan Check-in",
    category: "Diagnostics",
    duration: 30,
    price: 29,
    status: "paused",
    specialist: "Raya Kim",
    description: "Quick body metrics and recovery score before building a wellness route."
  }
];

export const bookingsSeed: Booking[] = [
  { id: "bk-1", client: "Amina Stone", serviceId: "svc-1", date: "2026-06-20", time: "10:00", status: "confirmed", value: 54 },
  { id: "bk-2", client: "Denis Park", serviceId: "svc-2", date: "2026-06-20", time: "12:30", status: "pending", value: 86 },
  { id: "bk-3", client: "Lina Ross", serviceId: "svc-3", date: "2026-06-21", time: "09:15", status: "done", value: 38 },
  { id: "bk-4", client: "Tim Black", serviceId: "svc-1", date: "2026-06-22", time: "16:45", status: "confirmed", value: 54 }
];

export const clientsSeed: Client[] = [
  { id: "cl-1", name: "Amina Stone", email: "amina@example.com", segment: "vip", visits: 18, lastVisit: "2026-06-14" },
  { id: "cl-2", name: "Denis Park", email: "denis@example.com", segment: "new", visits: 2, lastVisit: "2026-06-11" },
  { id: "cl-3", name: "Lina Ross", email: "lina@example.com", segment: "loyal", visits: 9, lastVisit: "2026-06-16" },
  { id: "cl-4", name: "Tim Black", email: "tim@example.com", segment: "loyal", visits: 6, lastVisit: "2026-06-10" }
];

export const revenueSeries = [
  { month: "Jan", revenue: 4200, bookings: 72 },
  { month: "Feb", revenue: 5100, bookings: 88 },
  { month: "Mar", revenue: 5900, bookings: 103 },
  { month: "Apr", revenue: 5600, bookings: 97 },
  { month: "May", revenue: 6800, bookings: 121 },
  { month: "Jun", revenue: 7400, bookings: 132 }
];
