import PageHero from "@/components/site/PageHero";
import CaseStudies from "@/components/home/CaseStudies";
import FinalCta from "@/components/home/FinalCta";
import SectionHeading from "@/components/site/SectionHeading";
import Reveal from "@/components/site/Reveal";

const indicators = [
  { v: "End-to-end", l: "Alcance de la ruta de entrada" },
  { v: "4 canales", l: "B2B, B2G, retail y digital" },
  { v: "Nacional", l: "Cobertura de distribución" },
  { v: "1 interlocutor", l: "Coordinación estratégica" },
];

const CasosDeExito = () => (
  <>
    <PageHero
      eyebrow="Casos de éxito"
      title="Resultados que se explican por la ejecución, no por la promesa."
      description="Compartimos casos y métricas cuando cuentan con la aprobación del fabricante involucrado. El detalle completo se revisa en la reunión inicial."
      cta={{ label: "Solicita casos de tu categoría", to: "/contacto" }}
    />

    <section className="section-pad bg-background">
      <div className="container">
        <SectionHeading eyebrow="Indicadores" title="Cómo medimos una entrada exitosa." />
        <dl className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {indicators.map((m, i) => (
            <Reveal key={m.l} delay={i * 80}>
              <div className="h-full rounded-2xl border bg-card p-7 shadow-sm">
                <dt className="sr-only">{m.l}</dt>
                <dd>
                  <span className="block font-display text-2xl font-semibold text-primary">{m.v}</span>
                  <span className="mt-2 block text-sm text-muted-foreground">{m.l}</span>
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>

    <CaseStudies />
    <FinalCta />
  </>
);

export default CasosDeExito;
