import { useEffect, useState } from "react";
import { findShowByName, getShowEpisodes } from "../services/tvmaze";
import { formatDateEs } from "../utils/i18n";
import { Link } from "react-router-dom";

export default function Episodes() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const show = await findShowByName("the walking dead");
        const eps = await getShowEpisodes(show.id);
        setItems(eps);
      } catch (e) { setError(e); } finally { setLoading(false); }
    })();
  }, []);

  if (loading) return <p className="p-4">Cargando…</p>;
  if (error) return <p className="p-4 text-red-700">{error.message}</p>;

  return (
    <section className="max-w-5xl mx-auto p-4 space-y-4">
      <h2 className="text-2xl font-semibold">Episodios</h2>
      <ul className="space-y-2">
        {items.map(ep => (
          <li key={ep.id} className="rounded border bg-white p-3 flex items-center justify-between">
            <div>
              <p className="font-medium">T{ep.season}·E{ep.number} — {ep.name}</p>
              <p className="text-xs text-slate-500">{formatDateEs(ep.airdate)}</p>
            </div>
            <Link to={`/episodes/${ep.id}`} className="text-blue-600 underline">Ver detalle</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}