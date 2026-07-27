export const formatDate = (date) => {
  const now = new Date();
  const created = new Date(date);

  const seconds = Math.floor((now - created) / 1000);

  const rtf = new Intl.RelativeTimeFormat("en", {
    numeric: "auto",
  });

  if (seconds < 60) return rtf.format(-seconds, "second");

  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return rtf.format(-minutes, "minute");

  const hours = Math.floor(minutes / 60);
  if (hours < 24) return rtf.format(-hours, "hour");

  const days = Math.floor(hours / 24);
  if (days < 30) return rtf.format(-days, "day");

  return created.toLocaleDateString();
};