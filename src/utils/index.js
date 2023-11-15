import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import dayjs from "dayjs";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function formatDate(date, format = "MMM D, YYYY") {
  return dayjs(date).format(format);
}
