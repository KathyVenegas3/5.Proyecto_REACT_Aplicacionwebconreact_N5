import { createBrowserRouter, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import TWDHome from "./pages/TWDHome";
import Characters from "./pages/Characters";
import Episodes from "./pages/Episodes";
import EpisodeDetail from "./pages/EpisodeDetail";

function RootLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <TWDHome /> },
      { path: "/characters", element: <Characters /> },
      { path: "/episodes", element: <Episodes /> },
      { path: "/episodes/:id", element: <EpisodeDetail /> },
      { path: "*", element: <div className="p-4">Página no encontrada</div> },
    ],
  },
]);