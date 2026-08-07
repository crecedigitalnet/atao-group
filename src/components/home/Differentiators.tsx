import { Sparkles, Zap, Lock } from "lucide-react";
import SectionHeading from "@/components/site/SectionHeading";
import Reveal from "@/components/site/Reveal";

const pillars = [
  {
    icon: Sparkles,
    tag: "Discontinuous",
    title: "Un modelo que rompe la lógica del distribuidor tradicional",
    text: "No vendemos logística ni representación aislada: entregamos una ruta de acceso completa, con responsabilidad end-to-end sobre el resultado comercial.",
  },
  {
    icon: Zap,
    tag: "Disruptive",
    title: "Velocidad de entrada sin construir infraestructura propia",
    text: "El fabricante activa regulación, importación, distribución, retail y canales digitales sin abrir filial, contratar equipo ni levantar operación local.",
  },
  {
    icon: Lock,
    tag: "Defensible",
    title: "Una posición difícil de replicar en el mercado peruano",
    text: "Red física, canales digitales, relaciones B2B/B2G y conocimiento regulatorio combinados generan una ventaja de entrada que se sostiene en el tiempo.",
  },
];

const Differentiators = () => (
  <section className="section-pad bg-background" aria-labelledby="diferencia-title">
    <div className="container">
      <SectionHeading
        eyebrow="Qué nos hace diferentes"
        title={<span id="diferencia-title">Diseñada para crear una ventaja de entrada sostenible.</span>}
        description="Tres principios rigen cada decisión de la plataforma ATAO."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {pillars.map((pillar, i) => (
          <Reveal key={pillar.tag} delay={i * 110}>
            <article className="group relative h-full overflow-hidden rounded-3xl border bg-card p-8 shadow-md transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl">
              <div className="pointer-events-none absolute inset-x-0 -top-24 h-40 bg-gradient-mesh opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true" />
              <div className="relative">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-accent text-accent-foreground shadow-md">
                  <pillar.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-accent">{pillar.tag}</p>
                <h3 className="mt-3 font-display text-xl font-semibold leading-snug text-secondary">{pillar.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{pillar.text}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Differentiators;
