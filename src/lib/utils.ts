import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const base = import.meta.env.BASE_URL.replace(/\/$/, '');
export function asset(path: string) {
  return `${base}${path}`;
}
