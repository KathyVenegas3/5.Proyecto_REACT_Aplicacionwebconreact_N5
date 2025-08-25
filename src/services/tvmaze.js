const BASE = "https://api.tvmaze.com";

export async function findShowByName(name = "the walking dead") {
  const res = await fetch(`${BASE}/singlesearch/shows?q=${encodeURIComponent(name)}`);
  if (!res.ok) throw new Error(`No se encontró el show (${res.status})`);
  return res.json();
}

export async function getShowCast(showId) {
  const res = await fetch(`${BASE}/shows/${showId}/cast`);
  if (!res.ok) throw new Error(`Error cargando reparto (${res.status})`);
  return res.json();
}

export async function getShowEpisodes(showId) {
  const res = await fetch(`${BASE}/shows/${showId}/episodes`);
  if (!res.ok) throw new Error(`Error cargando episodios (${res.status})`);
  return res.json();
}

export async function getEpisode(episodeId) {
  const res = await fetch(`${BASE}/episodes/${episodeId}`);
  if (!res.ok) throw new Error(`Episodio no encontrado (${res.status})`);
  return res.json();
}
