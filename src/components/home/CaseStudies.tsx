import { Link } from "react-router-dom";
import { Quote, ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/site/SectionHeading";
import Reveal from "@/components/site/Reveal";

const cases = [
  {
    sector: "Dispositivos de monitoreo",
    title: "Entrada coordinada para un fabricante internacional",
    text: "Ruta regulatoria definida antes de la inversión y activación simultánea en canal clínico y retail.",
    metrics: [
      { value: "1 ruta", label: "Regulatoria y comercial integrada" },
      { value: "4 canales", label: "Activados en el lanzamiento" },
    ],
  },
  {
    sector: "Rehabilitación y bienestar",
    title: "Escalamiento de portafolio en canal retail y digital",
    text: "Presencia en tiendas físicas y marketplace con medición de rotación por punto de venta.",
    metrics: [
      { value: "6 tiendas", label: "Red de exposición física" },
      { value: "Marketplace", label: "Canal digital activo" },
    ],
  },
];

const CaseStudies = () => (
  <section className="section-pad bg-surface" aria-labelledby="casos-title">
    <div className="container">
      <SectionHeading
        eyebrow="Casos y resultados"
        title={<span id="casos-title">La confianza se demuestra en la ejecución.</span>}
        description="Publicamos únicamente módulos con información verificable: capacidades activas, geografías cubiertas y casos aprobados por nuestros socios."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        {cases.map((item, i) => (
          <Reveal key={item.title} delay={i * 110}>
            <article className="surface-card h-full p-8 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">{item.sector}</p>
              <h3 className="mt-4 font-display text-2xl font-semibold leading-snug text-secondary">{item.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              <dl className="mt-8 grid grid-cols-2 gap-4">
                {item.metrics.map((m) => (
                  <div key={m.label} className="rounded-2xl bg-muted p-5">
                    <dt className="sr-only">{m.label}</dt>
                    <dd>
                      <span className="block font-display text-xl font-semibold text-primary">{m.value}</span>
                      <span className="mt-1 block text-xs text-muted-foreground">{m.label}</span>
                    </dd>
                  </div>
                ))}
              </dl>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-6">
        <blockquote className="rounded-3xl border bg-card p-8 md:p-10">
          <Quote className="h-8 w-8 text-accent" aria-hidden="true" />
          <p className="mt-5 max-w-3xl font-display text-xl leading-relaxed text-secondary md:text-2xl">
            “Buscábamos un socio capaz de asumir la complejidad regulatoria y comercial del mercado peruano.
            ATAO nos permitió avanzar sin construir una operación propia.”
          </p>
          <footer className="mt-6 text-sm text-muted-foreground">
            Director Comercial · Fabricante de tecnología médica (testimonio en proceso de aprobación para publicación
            con identificación completa).
          </footer>
        </blockquote>
      </Reveal>

      <Reveal className="mt-8">
        <Link
          to="/casos-de-exito"
          className="inline-flex min-h-11 items-center gap-2 font-medium text-primary underline-offset-4 hover:underline"
        >
          Explore nuestras capacidades y casos
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </Reveal>
    </div>
  </section>
);

export default CaseStudies;
