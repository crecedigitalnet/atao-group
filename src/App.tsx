import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Inicio from "./pages/Inicio";
import Nosotros from "./pages/Nosotros";
import Servicios from "./pages/Servicios";
import Calidad from "./pages/Calidad";
import Catalogo from "./pages/Catalogo";
import Contacto from "./pages/Contacto";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Inicio />
              </Layout>
            }
          />
          <Route
            path="/nosotros"
            element={
              <Layout>
                <Nosotros />
              </Layout>
            }
          />
          <Route
            path="/servicios"
            element={
              <Layout>
                <Servicios />
              </Layout>
            }
          />
          <Route
            path="/calidad"
            element={
              <Layout>
                <Calidad />
              </Layout>
            }
          />
          <Route
            path="/catalogo"
            element={
              <Layout>
                <Catalogo />
              </Layout>
            }
          />
          <Route
            path="/contacto"
            element={
              <Layout>
                <Contacto />
              </Layout>
            }
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
