
export function formatDateTime(dateString) {
  if (!dateString) return "";

  const date = new Date(dateString);

  const formatted = date.toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  // Convert 10/02/2026, 07:30 pm → 07:30 PM 10-02-2026
  const [datePart, timePart] = formatted.split(", ");

  return `${timePart} ${datePart.replace(/\//g, "-")}`;
}