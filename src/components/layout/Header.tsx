import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Search, Phone, MessageCircle } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { label: "Inicio", path: "/" },
    { label: "Nosotros", path: "/nosotros" },
    { label: "Servicios", path: "/servicios" },
    { label: "Calidad", path: "/calidad" },
    { label: "Catálogo", path: "/catalogo" },
    { label: "Contáctanos", path: "/contacto" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-12 w-12 rounded-lg bg-gradient-primary flex items-center justify-center">
              <span className="text-2xl font-bold text-primary-foreground">AG</span>
            </div>
            <div className="hidden md:block">
              <span className="text-xl font-bold text-primary">ATAO Group</span>
              <p className="text-xs text-muted-foreground">Equipos Médicos</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.path) ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <a href="tel:+51999999999">
              <Button variant="ghost" size="icon">
                <Phone className="h-5 w-5" />
              </Button>
            </a>
            <a href="https://wa.me/51999999999" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <MessageCircle className="h-5 w-5" />
              </Button>
            </a>
            <Link to="/contacto?tipo=cotizacion">
              <Button variant="b2b" size="sm">
                Solicitar Cotización
              </Button>
            </Link>
            <Link to="/catalogo">
              <Button variant="retail" size="sm">
                Comprar Ahora
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive(item.path) ? "text-primary" : "text-muted-foreground"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4">
                <Link to="/contacto?tipo=cotizacion">
                  <Button variant="b2b" size="sm" className="w-full">
                    Solicitar Cotización
                  </Button>
                </Link>
                <Link to="/catalogo">
                  <Button variant="retail" size="sm" className="w-full">
                    Comprar Ahora
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
