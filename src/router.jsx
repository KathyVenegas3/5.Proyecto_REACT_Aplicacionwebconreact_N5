import { createHashRouter } from "react-router-dom";
import TWDHome from "./pages/TWDHome";
import Characters from "./pages/Characters";
import Episodes from "./pages/Episodes";
import EpisodeDetail from "./pages/EpisodeDetail";

const router = createHashRouter([
  { path: "/", element: <TWDHome /> },
  { path: "/characters", element: <Characters /> },
  { path: "/episodes", element: <Episodes /> },
  { path: "/episodes/:id", element: <EpisodeDetail /> },
  { path: "*", element: <div className="p-4">Página no encontrada</div> },
]);

export default router;