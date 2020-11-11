const shortDateFormatter = Intl.DateTimeFormat('en-ZA', {
  dateStyle: 'short',
  timeZone: 'Africa/Johannesburg',
});

const dateFormatter = Intl.DateTimeFormat('en-ZA', {
  dateStyle: 'long',
  timeStyle: 'short',
  timeZone: 'Africa/Johannesburg',
});

export function formatShortDate(date) {
  return shortDateFormatter.format(new Date(date));
}

export default function formatPostDate(date) {
  return dateFormatter.format(new Date(date));
}
