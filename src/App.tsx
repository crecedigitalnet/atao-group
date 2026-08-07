import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import ScrollToTop from "./components/layout/ScrollToTop";
import Inicio from "./pages/Inicio";
import MarketAccess from "./pages/MarketAccess";
import Nosotros from "./pages/Nosotros";
import Servicios from "./pages/Servicios";
import Calidad from "./pages/Calidad";
import Partners from "./pages/Partners";
import CasosDeExito from "./pages/CasosDeExito";
import Catalogo from "./pages/Catalogo";
import Contacto from "./pages/Contacto";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const routes = [
  { path: "/", element: <Inicio /> },
  { path: "/market-access", element: <MarketAccess /> },
  { path: "/nosotros", element: <Nosotros /> },
  { path: "/servicios", element: <Servicios /> },
  { path: "/calidad", element: <Calidad /> },
  { path: "/partners", element: <Partners /> },
  { path: "/casos-de-exito", element: <CasosDeExito /> },
  { path: "/catalogo", element: <Catalogo /> },
  { path: "/contacto", element: <Contacto /> },
];

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={<Layout>{route.element}</Layout>} />
          ))}
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
