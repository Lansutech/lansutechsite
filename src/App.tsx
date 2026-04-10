import { Toaster } from "@/components/ui/sonner";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import Index from "./pages/Index";
const NotFound = lazy(() => import("./pages/NotFound"));
import { initializeEmailJS } from "./lib/api";

const App = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      initializeEmailJS();
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Toaster />
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="*" element={<Suspense fallback={<div className="flex items-center justify-center h-screen">Carregando...</div>}><NotFound /></Suspense>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;