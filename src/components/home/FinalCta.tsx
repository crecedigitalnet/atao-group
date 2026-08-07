import { Link } from "react-router-dom";
import { ArrowRight, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const FinalCta = () => (
  <section className="section-pad bg-background" aria-labelledby="cta-final-title">
    <div className="container">
      <div className="relative overflow-hidden rounded-[2rem] bg-gradient-primary px-8 py-16 text-primary-foreground shadow-xl md:px-16 md:py-20">
        <div className="pointer-events-none absolute inset-0 bg-gradient-mesh opacity-80" aria-hidden="true" />
        <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 animate-float rounded-full bg-accent/25 blur-3xl" aria-hidden="true" />
        <div className="relative max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] backdrop-blur">
            <CalendarCheck className="h-3.5 w-3.5" aria-hidden="true" />
            Siguiente paso
          </span>
          <h2 id="cta-final-title" className="mt-6 font-display text-3xl font-semibold leading-[1.1] text-balance md:text-5xl">
            Evalúe una ruta de entrada para su portafolio.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/85">
            En una primera conversación revisaremos su categoría, objetivo de entrada y los próximos pasos más
            relevantes para Perú.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg" className="rounded-full bg-white text-primary hover:bg-white/90">
              <Link to="/contacto">
                Agenda una reunión estratégica
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-white/50 bg-transparent text-white hover:bg-white hover:text-primary"
            >
              <Link to="/contacto?tipo=diagnostico">Solicita un diagnóstico de acceso al mercado</Link>
            </Button>
          </div>
          <p className="mt-6 text-sm text-white/70">
            Sin compromiso comercial. Respuesta de un especialista de ATAO.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default FinalCta;
