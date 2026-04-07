import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import Index from "./pages/Index";
const NotFound = lazy(() => import("./pages/NotFound"));
import { initializeEmailJS } from "./lib/api";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      initializeEmailJS();
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="*" element={<Suspense fallback={<div className="flex items-center justify-center h-screen">Carregando...</div>}><NotFound /></Suspense>} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;