import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getEpisode } from "../services/tvmaze";
import { formatDateEs, translateSummarySoft } from "../utils/i18n";

export default function EpisodeDetail() {
  const { id } = useParams();
  const [ep, setEp] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getEpisode(id).then(setEp).catch(setError).finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p className="p-4">Cargando…</p>;
  if (error) return <p className="p-4 text-red-700">{error.message}</p>;

  return (
    <section className="max-w-3xl mx-auto p-4 space-y-3">
      <Link to="/episodes" className="text-blue-600 underline">← Volver</Link>
      <h1 className="text-2xl font-bold">{ep.name}</h1>
      <p className="text-sm text-slate-600">
        Temporada {ep.season} · Episodio {ep.number} · {formatDateEs(ep.airdate)}
      </p>
      {ep.image?.medium && <img src={ep.image.medium} alt={ep.name} className="rounded border" />}
      <div
        className="prose prose-sm max-w-none"
        dangerouslySetInnerHTML={{ __html: translateSummarySoft(ep.summary || "") }}
      />
    </section>
  );
}