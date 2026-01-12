export function getTodayWorkTime(workDays) {
  // Если null, undefined или не массив
  if (!Array.isArray(workDays) || workDays.length !== 7) {
    return "Day and night";
  }

  const todayIndex = new Date().getDay();
  const today = workDays[todayIndex];

  // Если день не найден или закрыто
  if (!today || !today.isOpen) {
    return "Closed today";
  }

  // Иногда API отдаёт пустые from/to
  if (!today.from || !today.to) {
    return "Closed today";
  }

  return `${today.from} - ${today.to}`;
}
