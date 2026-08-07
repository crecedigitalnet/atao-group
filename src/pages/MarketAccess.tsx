import PageHero from "@/components/site/PageHero";
import HowItWorks from "@/components/home/HowItWorks";
import BeforeAfter from "@/components/home/BeforeAfter";
import PlatformEcosystem from "@/components/home/PlatformEcosystem";
import FaqSection from "@/components/home/FaqSection";
import FinalCta from "@/components/home/FinalCta";
import SectionHeading from "@/components/site/SectionHeading";
import Reveal from "@/components/site/Reveal";
import { Gauge, ShieldCheck, Layers } from "lucide-react";

const value = [
  {
    icon: Gauge,
    title: "Menor tiempo de entrada",
    text: "La ruta se diseña una sola vez y se ejecuta con hitos definidos, sin recomenzar cada negociación.",
  },
  {
    icon: ShieldCheck,
    title: "Menor riesgo operativo",
    text: "Cumplimiento, trazabilidad y continuidad de abastecimiento gestionados dentro del mismo sistema.",
  },
  {
    icon: Layers,
    title: "Menor inversión inicial",
    text: "Acceso a infraestructura comercial existente en lugar de construir filial, equipo y red propia.",
  },
];

const MarketAccess = () => (
  <>
    <PageHero
      eyebrow="Market Access as a Service"
      title="Una plataforma de acceso al mercado peruano, no una cadena de proveedores."
      description="Integramos importación, registro sanitario, regulación, distribución nacional, retail, marketplace y comercialización B2B, B2G y B2C bajo una sola relación estratégica."
      cta={{ label: "Agenda una reunión estratégica", to: "/contacto" }}
    />

    <section className="section-pad bg-background">
      <div className="container">
        <SectionHeading
          eyebrow="La propuesta"
          title="Fabricantes que quieren vender en Perú sin construir toda su infraestructura comercial."
          description="ATAO Group asume la complejidad de entrada para que su equipo se concentre en producto, portafolio y crecimiento."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {value.map((item, i) => (
            <Reveal key={item.title} delay={i * 100}>
              <article className="surface-card h-full p-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light text-primary">
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-6 font-display text-lg font-semibold text-secondary">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <BeforeAfter />
    <HowItWorks />
    <PlatformEcosystem />
    <FaqSection />
    <FinalCta />
  </>
);

export default MarketAccess;
