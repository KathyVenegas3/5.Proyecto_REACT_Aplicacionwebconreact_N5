import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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

  if (loading) return <p className="pt-24 p-6 text-center">Cargando…</p>;
  if (error) return <p className="pt-24 p-6 text-center text-red-400">{error.message}</p>;

  return (
    <section className="max-w-4xl mx-auto px-4 pt-24 pb-12 space-y-6 text-center">
      <h1 className="text-4xl font-bold tracking-tight">The Walking Dead</h1>

      {show?.image?.medium && (
        <img
          src={show.image.medium}
          alt="Poster The Walking Dead"
          className="mx-auto rounded border border-white/10 shadow"
        />
      )}

      <p className="prose max-w-none mx-auto text-lg">
        {translateSummarySoft(show?.summary || "")}
      </p>

      {/* Botones opcionales además del menú */}
      <div className="flex items-center justify-center gap-3">
        <Link to="/characters" className="px-4 py-2 rounded bg-white/10 hover:bg-white/20">
          Ver personajes
        </Link>
        <Link to="/episodes" className="px-4 py-2 rounded border border-white/20 hover:bg-white/10">
          Ver episodios
        </Link>
      </div>
    </section>
  );
}