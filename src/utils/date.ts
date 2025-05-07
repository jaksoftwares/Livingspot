// Date utilities
export function formatDate(date: string) {
  const d = new Date(date);
  return d.toLocaleDateString('en-US');
}

export function getTimeAgo(date: string) {
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - new Date(date).getTime()) / 1000);
  if (diffInSeconds < 60) return `${diffInSeconds} seconds ago`;
  // Add more logic for minutes, hours, days, etc.
}
