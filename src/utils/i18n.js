export function formatDateEs(dateStr, opts = {}) {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  return new Intl.DateTimeFormat("es-CL", {
    year: "numeric", month: "long", day: "numeric", ...opts,
  }).format(d);
}

const MAP = new Map([
  ["Running", "En emisión"],
  ["Ended", "Finalizada"],
  ["Male", "Hombre"],
  ["Female", "Mujer"],
]);

export function trShort(v) { return v ? (MAP.get(String(v)) ?? String(v)) : ""; }

const REPL = [
  [/season\b/gi, "temporada"],
  [/episode\b/gi, "episodio"],
  [/zombie(s)?/gi, "zombi$1"],
  [/apocalypse\b/gi, "apocalipsis"],
  [/survivor(s)?/gi, "superviviente(s)"],
];

export function translateSummarySoft(html = "") {
  return REPL.reduce((acc, [a,b]) => acc.replace(a,b), html);
}