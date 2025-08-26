import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import router from "./router";
import Navbar from "./components/Navbar";
import "./index.css";

function Fallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert" className="p-4 border border-red-300 bg-red-50 rounded">
      <h2 className="font-bold text-red-700">Ocurrió un error</h2>
      <pre className="text-sm text-red-800 whitespace-pre-wrap">{error.message}</pre>
      <button
        onClick={resetErrorBoundary}
        className="mt-2 px-3 py-2 bg-red-700 text-white rounded"
      >
        Reintentar
      </button>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={Fallback}>
      <Navbar />
      <RouterProvider router={router} />
    </ErrorBoundary>
  </React.StrictMode>
);