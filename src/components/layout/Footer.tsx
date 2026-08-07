import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Linkedin, ArrowUpRight } from "lucide-react";

const columns = [
  {
    title: "Plataforma",
    links: [
      { label: "Market Access as a Service", to: "/market-access" },
      { label: "Servicios", to: "/servicios" },
      { label: "Calidad y cumplimiento", to: "/calidad" },
      { label: "Catálogo", to: "/catalogo" },
    ],
  },
  {
    title: "Compañía",
    links: [
      { label: "Nosotros", to: "/nosotros" },
      { label: "Partners", to: "/partners" },
      { label: "Casos de éxito", to: "/casos-de-exito" },
      { label: "Contacto", to: "/contacto" },
    ],
  },
  {
    title: "Para fabricantes",
    links: [
      { label: "Agenda una reunión estratégica", to: "/contacto" },
      { label: "Diagnóstico de acceso al mercado", to: "/contacto?tipo=diagnostico" },
      { label: "Cómo funciona", to: "/market-access#como-funciona" },
      { label: "Preguntas frecuentes", to: "/market-access#faq" },
    ],
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-secondary text-secondary-foreground">
      <div className="pointer-events-none absolute inset-0 bg-gradient-mesh opacity-60" aria-hidden="true" />
      <div className="container relative py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_repeat(3,1fr)]">
          <div>
            <Link to="/" className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-sm font-bold backdrop-blur">
                AG
              </span>
              <span className="font-display text-xl font-semibold">ATAO Group</span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-secondary-foreground/75">
              Market Access as a Service: importación, regulación, distribución, retail y canales digitales
              integrados en una sola plataforma para fabricantes de tecnología médica que crecen en Perú.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-secondary-foreground/80">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" aria-hidden="true" />
                Lima, Perú · Cobertura nacional
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 flex-shrink-0 text-accent" aria-hidden="true" />
                <a href="tel:+51986722623" className="hover:text-accent">+51 986 722 623</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 flex-shrink-0 text-accent" aria-hidden="true" />
                <a href="mailto:contacto@ataogroup.pe" className="hover:text-accent">contacto@ataogroup.pe</a>
              </li>
            </ul>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-full border border-white/20 px-4 text-sm transition-colors hover:bg-white/10"
            >
              <Linkedin className="h-4 w-4" aria-hidden="true" />
              LinkedIn
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          {columns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">{column.title}</h2>
              <ul className="mt-5 space-y-3 text-sm">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="text-secondary-foreground/80 transition-colors hover:text-accent">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-secondary-foreground/70 md:flex-row md:items-center md:justify-between">
          <p>© {year} ATAO Group SAC. Todos los derechos reservados.</p>
          <div className="flex flex-wrap gap-6">
            <Link to="/calidad" className="hover:text-accent">Calidad</Link>
            <Link to="/contacto" className="hover:text-accent">Contacto</Link>
            <Link to="/terminos" className="hover:text-accent">Términos</Link>
            <Link to="/privacidad" className="hover:text-accent">Privacidad</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
