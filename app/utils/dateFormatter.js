const shortDateFormatter = new Intl.DateTimeFormat("en-ZA", {
    dateStyle: "short",
    timeZone: "Africa/Johannesburg",
});
const longDateFormatter = new Intl.DateTimeFormat("en-ZA", {
    dateStyle: "long",
    timeStyle: "short",
    timeZone: "Africa/Johannesburg",
});
export function formatShortDate(date) {
    return shortDateFormatter.format(new Date(date));
}
export default function formatLongDate(date) {
    return longDateFormatter.format(new Date(date));
}
