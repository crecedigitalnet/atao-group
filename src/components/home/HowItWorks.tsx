import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Route, FileCheck2, Rocket, LineChart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/site/SectionHeading";
import { cn } from "@/lib/utils";

const steps = [
  {
    icon: Search,
    title: "Diagnóstico de entrada",
    text: "Analizamos categoría, requisitos, oportunidad y prioridades de canal para su portafolio.",
  },
  {
    icon: Route,
    title: "Diseño de la ruta",
    text: "Alineamos el plan regulatorio, operativo y comercial con hitos claros y responsables definidos.",
  },
  {
    icon: FileCheck2,
    title: "Preparación regulatoria",
    text: "Acompañamos la ruta de cumplimiento aplicable y la documentación necesaria para operar.",
  },
  {
    icon: Rocket,
    title: "Implementación y lanzamiento",
    text: "Coordinamos importación, distribución y activación para llevar su oferta al mercado.",
  },
  {
    icon: LineChart,
    title: "Optimización y escalamiento",
    text: "Medimos el desempeño de canales y priorizamos las siguientes oportunidades de crecimiento.",
  },
];

const HowItWorks = () => {
  const [active, setActive] = useState(0);

  return (
    <section id="como-funciona" className="section-pad bg-surface" aria-labelledby="proceso-title">
      <div className="container">
        <SectionHeading
          eyebrow="Cómo funciona"
          title={<span id="proceso-title">Una sola plataforma. Una ruta de crecimiento diseñada para su marca.</span>}
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <ol className="space-y-3">
            {steps.map((step, i) => (
              <li key={step.title}>
                <button
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  aria-current={active === i}
                  className={cn(
                    "flex w-full items-center gap-4 rounded-2xl border p-5 text-left transition-all duration-300",
                    active === i
                      ? "border-primary/30 bg-card shadow-lg"
                      : "border-transparent bg-card/60 hover:bg-card",
                  )}
                >
                  <span
                    className={cn(
                      "flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl font-display text-sm font-semibold transition-colors",
                      active === i ? "bg-gradient-primary text-primary-foreground" : "bg-primary-light text-primary",
                    )}
                  >
                    0{i + 1}
                  </span>
                  <span>
                    <span className="block font-display text-base font-semibold text-secondary">{step.title}</span>
                    <span className="mt-1 block text-sm text-muted-foreground lg:hidden">{step.text}</span>
                  </span>
                  <ArrowRight
                    className={cn(
                      "ml-auto hidden h-5 w-5 transition-transform lg:block",
                      active === i ? "translate-x-0 text-accent" : "-translate-x-2 text-transparent",
                    )}
                    aria-hidden="true"
                  />
                </button>
              </li>
            ))}
          </ol>

          <div className="hidden lg:block">
            <div className="sticky top-32 overflow-hidden rounded-3xl border bg-gradient-primary p-10 text-primary-foreground shadow-xl">
              <div className="pointer-events-none absolute inset-0 bg-gradient-mesh opacity-70" aria-hidden="true" />
              <div key={active} className="relative animate-fade-in">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur">
                  {(() => {
                    const Icon = steps[active].icon;
                    return <Icon className="h-7 w-7" aria-hidden="true" />;
                  })()}
                </span>
                <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                  Paso 0{active + 1} de 05
                </p>
                <h3 className="mt-3 font-display text-3xl font-semibold">{steps[active].title}</h3>
                <p className="mt-4 max-w-md text-base leading-relaxed text-white/85">{steps[active].text}</p>
              </div>
              <div className="relative mt-10 h-1 w-full rounded-full bg-white/20">
                <div
                  className="h-1 rounded-full bg-accent transition-all duration-500"
                  style={{ width: `${((active + 1) / steps.length) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <Button asChild size="lg" className="rounded-full">
            <Link to="/contacto?tipo=diagnostico">
              Solicite una evaluación de entrada
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
