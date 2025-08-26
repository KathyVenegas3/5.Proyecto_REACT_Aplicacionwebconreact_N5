export function formatDateEs(dateStr, opts = {}) {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  return new Intl.DateTimeFormat("es-CL", {
    year: "numeric",
    month: "long",
    day: "numeric",
    ...opts,
  }).format(d);
}

const MAP = new Map([
  ["Running", "En emisión"],
  ["Ended", "Finalizada"],
  ["Male", "Hombre"],
  ["Female", "Mujer"],
]);

export function trShort(v) {
  return v ? (MAP.get(String(v)) ?? String(v)) : "";
}

// Traducción "suave" más amplia para des-Inglés-ar el resumen de TVMaze.
// No es un traductor perfecto, pero deja el texto entendible en español.
const REPLACEMENTS = [
  // Frases
  [/tells the story of/gi, "narra la historia de"],
  [/the months?\s+and\s+years?\s+that follow/gi, "los meses y años posteriores"],
  [/after a zombie apocalypse/gi, "tras un apocalipsis Zombi"],

  [/it follows a group of/gi, "Sigue a un grupo de sobrevivientes"],
  [/led by former police officer/gi, "liderado por un exoficial de policía"],
  [/who travel in search of/gi, "que viajan en búsqueda de"],
  [/a safe and secure home/gi, "un hogar seguro"],
  [/as the world overrun by the dead takes its toll on the survivor(s)?/gi, "Mientras el mundo, invadido por los muertos, pasa factura a los supervivientes"],
  [/their interpersonal conflicts present a greater danger/gi, "sus conflictos interpersonales representan un peligro mayor"],
  [/to their continuing survival than the walkers that roam the country/gi, "para su supervivencia que los caminantes que deambulan por el país"],
  [/over time/gi, "Con el tiempo"],
  [/the characters are changed by the constant exposure to death/gi, "los personajes cambian por la constante exposición a la muerte"],
  [/and some grow willing to do anything to survive/gi, "y algunos llegan a estar dispuestos a hacer lo que sea para sobrevivir"],
  
  [/based on the comic book series of the same name/gi, "Basada en la serie de cómics del mismo nombre"],
  [/use the menu to see/gi, "Usa el menú para ver"],

  // Palabras sueltas
  [/zombie(s)?/gi, "zombi$1"],
  [/apocalypse/gi, "apocalipsis"],
  [/survivor(s)?/gi, "superviviente$1"],
  [/survivors/gi, "supervivientes"],
  [/walkers/gi, "caminantes"],
  [/group/gi, "grupo"],
  [/country/gi, "país"],
];

export function translateSummarySoft(html = "") {
  let text = html.replace(/<[^>]*>/g, " "); // quita etiquetas
  for (const [from, to] of REPLACEMENTS) {
    text = text.replace(from, to);
  }
  // Arregla espacios dobles
  return text.replace(/\s{2,}/g, " ").trim();
}