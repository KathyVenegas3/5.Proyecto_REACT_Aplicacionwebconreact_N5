import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">The Walking Dead</h1>
      <button
        className="text-2xl md:hidden"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>
      <div className={`md:flex gap-4 ${open ? "block" : "hidden"} md:block`}>
        <Link to="/characters" className="hover:text-red-400">
          Personajes
        </Link>
        <Link to="/episodes" className="hover:text-red-400">
          Episodios
        </Link>
      </div>
    </nav>
  );
}