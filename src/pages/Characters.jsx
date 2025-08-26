import { useEffect, useState } from "react";
import { findShowByName, getShowCast } from "../services/tvmaze";
import { trShort } from "../utils/i18n";

export default function Characters() {
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const show = await findShowByName("the walking dead");
        const data = await getShowCast(show.id);
        setCast(data);
      } catch (e) { setError(e); } finally { setLoading(false); }
    })();
  }, []);

  if (loading) return <p className="p-4">Cargando…</p>;
  if (error) return <p className="p-4 text-red-700">{error.message}</p>;

  return (
    <section className="max-w-5xl mx-auto p-4 space-y-4">
      <h2 className="text-2xl font-semibold">Personajes (reparto)</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cast.map(({ person, character }) => (
          <article key={`${person.id}-${character.id}`} className="rounded border bg-white p-3 flex gap-3">
            {character?.image?.medium && (
              <img src={character.image.medium} alt={character.name} className="w-24 h-24 object-cover rounded" />
            )}
            <div>
              <h3 className="font-semibold">{character.name}</h3>
              <p className="text-sm text-slate-600">
                Intérprete: {person.name} {person.gender ? `· ${trShort(person.gender)}` : ""}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}