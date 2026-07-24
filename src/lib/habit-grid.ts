import { toDateInputValue } from "./date";

export function getMonthDates(refDate: Date): Date[] {
  const year = refDate.getUTCFullYear();
  const month = refDate.getUTCMonth();
  const daysInMonth = new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
  return Array.from({ length: daysInMonth }, (_, i) => new Date(Date.UTC(year, month, i + 1)));
}

/** Pazartesi başlangıçlı hafta (Pzt..Paz) */
export function getWeekDates(refDate: Date): Date[] {
  const day = refDate.getUTCDay(); // 0=Paz, 1=Pzt, ...
  const mondayOffset = day === 0 ? -6 : 1 - day;
  const monday = new Date(refDate);
  monday.setUTCDate(monday.getUTCDate() + mondayOffset);
  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date(monday);
    d.setUTCDate(monday.getUTCDate() + i);
    return d;
  });
}

export function dayLabel(d: Date): string {
  return String(d.getUTCDate());
}

export function dateKey(d: Date): string {
  return toDateInputValue(d);
}
