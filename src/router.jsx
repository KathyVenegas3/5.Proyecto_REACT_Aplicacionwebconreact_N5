import React from "react";
import { createHashRouter, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

import TWDHome from "./pages/TWDHome";
import Characters from "./pages/Characters";
import Episodes from "./pages/Episodes";
import EpisodeDetail from "./pages/EpisodeDetail";


function AppLayout() {
  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto p-4">
        <Outlet />
      </main>
    </>
  );
}

const router = createHashRouter([
  {
    element: <AppLayout />, // 
    children: [
      { path: "/", element: <TWDHome /> },
      { path: "/characters", element: <Characters /> },
      { path: "/episodes", element: <Episodes /> },
      { path: "/episodes/:id", element: <EpisodeDetail /> },
      { path: "*", element: <div className="p-4">Página no encontrada</div> }
    ],
  },
]);

export default router;