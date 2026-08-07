import { useMemo, useState } from "react";
import PageHero from "@/components/site/PageHero";
import SectionHeading from "@/components/site/SectionHeading";
import Reveal from "@/components/site/Reveal";
import FinalCta from "@/components/home/FinalCta";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = [
  { name: "Mobiliario médico", group: "Equipamiento", count: "50+", text: "Camillas, mesas de examen y mobiliario clínico." },
  { name: "Dispositivos de medición", group: "Equipamiento", count: "30+", text: "Monitoreo, diagnóstico y control de signos vitales." },
  { name: "Enfermería", group: "Suministros", count: "40+", text: "Insumos y material para atención y cuidado." },
  { name: "Rehabilitación", group: "Bienestar", count: "35+", text: "Terapia física, movilidad y recuperación funcional." },
  { name: "Ortesis y prótesis", group: "Bienestar", count: "45+", text: "Soluciones de soporte, corrección y movilidad." },
  { name: "Suministros desechables", group: "Suministros", count: "60+", text: "Consumibles de uso clínico y hospitalario." },
];

const groups = ["Todos", "Equipamiento", "Suministros", "Bienestar"];

const Catalogo = () => {
  const [query, setQuery] = useState("");
  const [group, setGroup] = useState("Todos");

  const filtered = useMemo(
    () =>
      categories.filter(
        (c) =>
          (group === "Todos" || c.group === group) &&
          c.name.toLowerCase().includes(query.trim().toLowerCase()),
      ),
    [query, group],
  );

  return (
    <>
      <PageHero
        eyebrow="Catálogo"
        title="El portafolio que ya opera en el mercado peruano."
        description="Categorías disponibles a través de nuestra red de distribución, retail y canales digitales. Para cotizaciones corporativas o públicas, escríbanos y le responde un especialista."
        cta={{ label: "Solicitar cotización", to: "/contacto?tipo=cotizacion" }}
      />

      <section className="section-pad bg-surface">
        <div className="container">
          <SectionHeading eyebrow="Categorías" title="Explore por línea de producto." />

          <div className="mt-10 flex flex-col gap-4 md:flex-row md:items-center">
            <div className="relative w-full md:max-w-sm">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
              <label htmlFor="buscar-categoria" className="sr-only">Buscar categoría</label>
              <Input
                id="buscar-categoria"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar categoría"
                className="h-12 rounded-full pl-9"
              />
            </div>
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar por grupo">
              {groups.map((g) => (
                <button
                  key={g}
                  type="button"
                  onClick={() => setGroup(g)}
                  aria-pressed={group === g}
                  className={cn(
                    "min-h-11 rounded-full border px-5 text-sm font-medium transition-colors",
                    group === g ? "border-primary bg-primary text-primary-foreground" : "bg-card text-muted-foreground hover:text-foreground",
                  )}
                >
                  {g}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((c, i) => (
              <Reveal key={c.name} delay={(i % 3) * 80}>
                <article className="surface-card h-full p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">{c.group}</p>
                  <h3 className="mt-3 font-display text-lg font-semibold text-secondary">{c.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
                  <div className="mt-6 flex items-center justify-between border-t pt-5">
                    <span className="text-sm text-muted-foreground">{c.count} productos</span>
                    <Button asChild variant="link" className="h-auto p-0">
                      <Link to="/contacto?tipo=cotizacion">Cotizar</Link>
                    </Button>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="mt-10 text-sm text-muted-foreground" role="status">
              No encontramos categorías con ese criterio. Escríbanos y le ayudamos a ubicar el producto.
            </p>
          )}
        </div>
      </section>

      <FinalCta />
    </>
  );
};

export default Catalogo;
