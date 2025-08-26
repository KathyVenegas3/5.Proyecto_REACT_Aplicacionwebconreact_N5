import { useEffect, useState } from "react";
import { findShowByName } from "../services/tvmaze";
import { translateSummarySoft } from "../utils/i18n";

export default function TWDHome() {
  const [show, setShow] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    findShowByName("the walking dead")
      .then(setShow)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="p-4">Cargando…</p>;
  if (error) return <p className="p-4 text-red-700">{error.message}</p>;

  return (
    <section className="max-w-4xl mx-auto p-4 space-y-4">
      <h1 className="text-3xl font-bold">{show?.name}</h1>
      {show?.image?.medium && (
        <img src={show.image.medium} alt={show.name} className="rounded border" />
      )}
      <div
        className="prose prose-sm max-w-none"
        dangerouslySetInnerHTML={{ __html: translateSummarySoft(show?.summary || "") }}
      />
      <p className="text-sm text-slate-600">Usa el menú para ver Personajes y Episodios.</p>
    </section>
  );
}