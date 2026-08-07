import { ScrollText, Network, Store, TrendingDown } from "lucide-react";
import SectionHeading from "@/components/site/SectionHeading";
import Reveal from "@/components/site/Reveal";

const pains = [
  {
    icon: ScrollText,
    title: "Regulación sin visibilidad",
    text: "Conozca los requisitos y defina una ruta antes de comprometer recursos.",
    stat: "Ruta regulatoria",
  },
  {
    icon: Network,
    title: "Demasiados interlocutores",
    text: "Centralice importación, distribución y activación en una relación estratégica.",
    stat: "1 solo socio",
  },
  {
    icon: Store,
    title: "Canal sin tracción",
    text: "Conecte la operación con rutas B2B, B2G, retail y digital.",
    stat: "4 canales",
  },
  {
    icon: TrendingDown,
    title: "Inversión con incertidumbre",
    text: "Priorice decisiones por viabilidad, riesgo y potencial comercial.",
    stat: "Menor exposición",
  },
];

const ProblemSection = () => (
  <section className="section-pad bg-surface" aria-labelledby="problema-title">
    <div className="container">
      <SectionHeading
        eyebrow="El problema"
        title={<span id="problema-title">Entrar a Perú no debería exigir construir toda una operación desde cero.</span>}
        description="Buscar distribuidores, coordinar proveedores, navegar requisitos y crear canales puede retrasar el lanzamiento y elevar la exposición financiera. ATAO reúne las capacidades críticas en una ruta de entrada coordinada."
      />

      <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {pains.map((pain, i) => (
          <Reveal as="li" key={pain.title} delay={i * 90}>
            <article className="surface-card group h-full p-7">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <pain.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-6 font-display text-lg font-semibold text-secondary">{pain.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{pain.text}</p>
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-accent">{pain.stat}</p>
            </article>
          </Reveal>
        ))}
      </ul>
    </div>
  </section>
);

export default ProblemSection;
