import PageHero from "@/components/site/PageHero";
import SectionHeading from "@/components/site/SectionHeading";
import Reveal from "@/components/site/Reveal";
import FinalCta from "@/components/home/FinalCta";
import { Target, Compass, Users, Globe2, MapPin, Building2, Briefcase, Truck } from "lucide-react";
import warehouse from "@/assets/warehouse.jpg";

const values = [
  { icon: Target, title: "Responsabilidad sobre el resultado", text: "Nos medimos por la tracción comercial de las marcas que representamos, no por actividades aisladas." },
  { icon: Compass, title: "Criterio antes que promesa", text: "Evaluamos viabilidad regulatoria y comercial antes de comprometer plazos o inversión." },
  { icon: Users, title: "Un equipo, una relación", text: "Un solo interlocutor estratégico coordina regulación, operación y comercialización." },
  { icon: Globe2, title: "Mirada internacional, ejecución local", text: "Entendemos los estándares de un fabricante global y la realidad operativa del mercado peruano." },
];

const milestones = [
  { year: "2015", text: "Fundación de ATAO Group." },
  { year: "2017", text: "Expansión a cobertura nacional." },
  { year: "2019", text: "Certificación ISO 9001." },
  { year: "2021", text: "Más de 500 clientes atendidos." },
  { year: "2024", text: "Líderes en equipamiento médico B2B/B2G." },
];

const stores = [
  { city: "Piura", address: "Av. Bolognesi 332", region: "Piura" },
  { city: "Lima", address: "Paseo Los Eucaliptos 826, Urb. Los Cactus", region: "La Molina — Lima" },
  { city: "Andahuaylas", address: "Av. Perú 382", region: "Andahuaylas — Apurímac" },
  { city: "Andahuaylas", address: "Jirón Hugo Pesce 210", region: "Andahuaylas — Apurímac" },
  { city: "Abancay", address: "Jirón Arica 105", region: "Abancay — Apurímac" },
  { city: "Huancayo", address: "Jirón Puno 614", region: "Huancayo" },
];

const team = [
  { icon: Building2, title: "Comité Técnico", text: "Especialistas en normativas y selección de equipamiento médico." },
  { icon: Briefcase, title: "Área Comercial", text: "Asesores dedicados para empresas y gobierno." },
  { icon: Truck, title: "Operaciones y Logística", text: "Garantizamos entregas oportunas en todo el país." },
];

const infrastructure = [
  { v: "1,500 m²", l: "Almacén climatizado" },
  { v: "24-72 h", l: "Tiempo de entrega estándar" },
  { v: "98%", l: "SLA de despacho cumplido" },
];


const Nosotros = () => (
  <>
    <PageHero
      eyebrow="Nosotros"
      title="Construimos la infraestructura comercial que los fabricantes ya no necesitan levantar."
      description="ATAO Group nació en la distribución de tecnología médica y evolucionó hacia una plataforma integral de acceso al mercado peruano para fabricantes de dispositivos médicos y soluciones de bienestar."
    />

    <section className="section-pad bg-background">
      <div className="container grid items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <img
            src={warehouse}
            alt="Centro de operaciones y almacén de distribución de ATAO Group"
            loading="lazy"
            className="aspect-[4/3] w-full rounded-3xl object-cover shadow-xl"
          />
        </Reveal>
        <div>
          <SectionHeading
            eyebrow="Propósito"
            title="Que la mejor tecnología médica llegue al Perú sin fricción."
            description="Reducimos el costo, el tiempo y el riesgo de entrar a un mercado complejo, conectando fabricantes con clínicas, instituciones públicas, retail y pacientes."
          />
          <dl className="mt-10 grid grid-cols-2 gap-6">
            {[
              { v: "Nacional", l: "Cobertura de distribución" },
              { v: "6", l: "Tiendas físicas" },
              { v: "B2B · B2G · B2C", l: "Canales comerciales" },
              { v: "End-to-end", l: "Alcance de la plataforma" },
            ].map((m) => (
              <div key={m.l} className="rounded-2xl border bg-card p-5">
                <dt className="sr-only">{m.l}</dt>
                <dd>
                  <span className="block font-display text-xl font-semibold text-primary">{m.v}</span>
                  <span className="mt-1 block text-sm text-muted-foreground">{m.l}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>

    <section className="section-pad bg-surface">
      <div className="container">
        <SectionHeading eyebrow="Cómo trabajamos" title="Principios que sostienen cada decisión." />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 90}>
              <article className="surface-card h-full p-7">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-light text-accent">
                  <v.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-6 font-display text-lg font-semibold text-secondary">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <ol className="mt-16 grid gap-6 md:grid-cols-3">
          {milestones.map((m, i) => (
            <Reveal as="li" key={m.year} delay={i * 100}>
              <div className="h-full rounded-2xl border-l-4 border-accent bg-card p-7 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">{m.year}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>

    <FinalCta />
  </>
);

export default Nosotros;
