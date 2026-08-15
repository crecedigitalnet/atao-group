import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Linkedin, CalendarCheck, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type MenuItem = { label: string; path: string; description: string };

const megaMenus: { label: string; items: MenuItem[] }[] = [
  {
    label: "Soluciones",
    items: [
      { label: "Servicios", path: "/servicios", description: "Regulación, importación, distribución y activación comercial." },
      { label: "Calidad y cumplimiento", path: "/calidad", description: "Trazabilidad, registros y estándares de operación." },
      { label: "Catálogo", path: "/catalogo", description: "Categorías y portafolio disponible en Perú." },
    ],
  },
  {
    label: "Ecosistema",
    items: [
      { label: "Partners", path: "/partners", description: "Fabricantes, alianzas y red de canales." },
      { label: "Casos de éxito", path: "/casos-de-exito", description: "Resultados verificables de entrada al mercado." },
      { label: "Nosotros", path: "/nosotros", description: "Equipo, propósito y cobertura nacional." },
    ],
  },
];

const directLinks = [
  { label: "Market Access", path: "/market-access" },
  { label: "Catálogo", path: "/catalogo" },
  { label: "Nosotros", path: "/nosotros" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => setMobileOpen(false), [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full">
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Saltar al contenido
      </a>

      {/* Utility bar */}
      <div className="hidden bg-secondary text-secondary-foreground lg:block">
        <div className="container flex h-9 items-center justify-end gap-5 text-xs">
          <div className="flex items-center gap-2" aria-label="Selector de idioma">
            <button className="font-semibold underline-offset-4 hover:underline" aria-current="true">ES</button>
            <span aria-hidden="true" className="opacity-40">|</span>
            <button className="opacity-70 underline-offset-4 hover:underline hover:opacity-100">EN</button>
          </div>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 opacity-80 transition-opacity hover:opacity-100"
          >
            <Linkedin className="h-3.5 w-3.5" aria-hidden="true" />
            LinkedIn
          </a>
          <Link to="/contacto" className="inline-flex items-center gap-1.5 font-medium text-accent-foreground/90 hover:text-accent-foreground">
            <CalendarCheck className="h-3.5 w-3.5" aria-hidden="true" />
            Agenda reunión
          </Link>
        </div>
      </div>

      <div
        className={cn(
          "border-b border-border/60 transition-[background-color,box-shadow,backdrop-filter] duration-300",
          scrolled ? "bg-background/85 shadow-md backdrop-blur-xl" : "bg-background/70 backdrop-blur-md",
        )}
      >
        <div className="container flex h-[72px] items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-3" aria-label="ATAO Group, inicio">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-primary text-sm font-bold text-primary-foreground shadow-md">
              AG
            </span>
            <span className="leading-tight">
              <span className="block font-display text-lg font-semibold tracking-tight text-secondary">ATAO Group</span>
              <span className="block text-[11px] font-medium uppercase tracking-[0.16em] text-accent">Market Access</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegación principal">
            <NavLink
              to="/market-access"
              className={({ isActive }) =>
                cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-primary",
                  isActive ? "text-primary" : "text-foreground/75",
                )
              }
            >
              Market Access
            </NavLink>

            {megaMenus.map((menu) => (
              <div key={menu.label} className="group relative">
                <button
                  className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-foreground/75 transition-colors hover:text-primary"
                  aria-haspopup="true"
                >
                  {menu.label}
                  <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" aria-hidden="true" />
                </button>
                <div className="invisible absolute left-1/2 top-full z-50 w-[420px] -translate-x-1/2 translate-y-2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  <div className="rounded-2xl border bg-popover p-2 shadow-xl">
                    {menu.items.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-muted"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" aria-hidden="true" />
                        <span>
                          <span className="block text-sm font-semibold text-secondary">{item.label}</span>
                          <span className="block text-xs leading-relaxed text-muted-foreground">{item.description}</span>
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {directLinks.slice(1).map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-primary",
                    isActive ? "text-primary" : "text-foreground/75",
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <a
                href="https://qurago.odoo.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ir a Tienda
              </a>
            </Button>
            <Button asChild variant="hero" size="lg" className="rounded-full">
              <Link to="/contacto">
                Agenda una reunión
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md text-secondary lg:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-controls="menu-movil"
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {mobileOpen ? <Menu className="h-6 w-6 rotate-90" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileOpen && (
          <div id="menu-movil" className="border-t bg-background lg:hidden">
            <nav className="container flex flex-col gap-1 py-4" aria-label="Navegación móvil">
              <Link to="/market-access" className="rounded-lg px-2 py-3 text-base font-medium">Market Access</Link>
              {megaMenus.flatMap((m) => m.items).map((item) => (
                <Link key={item.path} to={item.path} className="rounded-lg px-2 py-3 text-base font-medium">
                  {item.label}
                </Link>
              ))}
              <Button asChild variant="hero" size="lg" className="mt-3 w-full rounded-full">
                <Link to="/contacto">Agenda una reunión</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
