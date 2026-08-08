import PageHero from "@/components/site/PageHero";
import SectionHeading from "@/components/site/SectionHeading";
import Reveal from "@/components/site/Reveal";
import FinalCta from "@/components/home/FinalCta";
import { Target, Compass, Users, Globe2, MapPin, Building2, Briefcase, Truck, ExternalLink } from "lucide-react";
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
  { city: "Piura", address: "Av. Bolognesi 332", region: "Piura", mapUrl: "https://www.google.com/maps/place/Av.+Bolognesi+332,+Piura+20001/@-5.1998809,-80.6306277,17z/data=!3m1!4b1!4m6!3m5!1s0x904a1080c71bbf87:0x9f7de3b7215ec4af!8m2!3d-5.1998862!4d-80.6280528!16s%2Fg%2F11hzb2sfsx?entry=ttu&g_ep=EgoyMDI1MTAyOC4wIKXMDSoASAFQAw%3D%3D" },
  { city: "Lima", address: "Paseo Los Eucaliptos 826, Urb. Los Cactus", region: "La Molina — Lima", mapUrl: "https://www.google.com/maps/place/Jr.+P.%C2%BA+de+los+Eucaliptos+826,+Lima+15023/@-12.0674039,-76.9668125,17z/data=!3m1!4b1!4m6!3m5!1s0x9105c658e6b2782f:0x5e853a09846f8c50!8m2!3d-12.0674039!4d-76.9668125!16s%2Fg%2F11rp3b7rtg?entry=ttu&g_ep=EgoyMDI2MDgwNS4xIKXMDSoASAFQAw%3D%3D" },
  { city: "Andahuaylas", address: "Av. Perú 382", region: "Andahuaylas — Apurímac", mapUrl: "https://www.google.com/maps/place/Av.+Peru+382,+Andahuaylas+03701/@-13.6562966,-73.385974,17z/data=!3m1!4b1!4m6!3m5!1s0x916d2bc559d63173:0xceae4b08ef17d057!8m2!3d-13.6563018!4d-73.3833991!16s%2Fg%2F11jymw8ylh?entry=ttu&g_ep=EgoyMDI1MTAyOC4wIKXMDSoASAFQAw%3D%3D" },
  { city: "Andahuaylas", address: "Jirón Hugo Pesce 210", region: "Andahuaylas — Apurímac", mapUrl: "https://www.google.com/maps/place/Jir%C3%B3n+Hugo+Pesce+210,+Andahuaylas+03701/@-13.6569189,-73.3845568,17z/data=!3m1!4b1!4m5!3m4!1s0x916d2bd005cbf8a1:0x3224906c1dee804f!8m2!3d-13.6569241!4d-73.3819819?entry=ttu&g_ep=EgoyMDI1MTAyOC4wIKXMDSoASAFQAw%3D%3D" },
  { city: "Abancay", address: "Jirón Arica 105", region: "Abancay — Apurímac", mapUrl: "https://www.google.com/maps/place/Jr.+Arica+105,+Abancay+03001/@-13.6359943,-72.8855645,17z/data=!3m1!4b1!4m6!3m5!1s0x916d02ded1640b97:0x6bba14c12274c5d4!8m2!3d-13.6359996!4d-72.8806936!16s%2Fg%2F11jb6xr39h?entry=ttu&g_ep=EgoyMDI1MTAyOC4wIKXMDSoASAFQAw%3D%3D" },
  { city: "Huancayo", address: "Jirón Puno 614", region: "Huancayo", mapUrl: "https://www.google.com/maps/place/Jir%C3%B3n+Puno+614,+Huancayo+12001/@-12.0682499,-75.2166977,17z/data=!3m1!4b1!4m9!1m2!2m1!1sJir%C3%B3n+Puno+614+,+Huancayo!3m5!1s0x910e964f773d3469:0x8a52a8036968f80!8m2!3d-12.0682552!4d-75.2118268!15sChpKaXLDs24gUHVubyA2MTQgLCBIdWFuY2F5b5IBEGdlb2NvZGVkX2FkZHJlc3PgAQA?entry=ttu&g_ep=EgoyMDI1MTAyOC4wIKXMDSoASAFQAw%3D%3D" },
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

        <div className="mt-16">
          <SectionHeading
            eyebrow="Nuestra trayectoria"
            title="Una década de crecimiento y compromiso con la salud en el Perú."
          />
          <ol className="mt-10 grid gap-6 md:grid-cols-3 lg:grid-cols-5">
            {milestones.map((m, i) => (
              <Reveal as="li" key={m.year} delay={i * 100}>
                <div className="h-full rounded-2xl border-l-4 border-accent bg-card p-7 shadow-sm">
                  <p className="font-display text-xl font-semibold text-primary">{m.year}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>

    <section className="section-pad bg-background">
      <div className="container">
        <SectionHeading
          eyebrow="Cobertura nacional"
          title="Presencia en las principales ciudades del Perú."
          description="Visítanos en cualquiera de nuestras 6 ubicaciones para recibir asesoramiento personalizado."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {stores.map((s, i) => (
            <Reveal key={`${s.city}-${s.address}`} delay={i * 80}>
              <article className="surface-card h-full p-7">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-light text-primary">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-base font-semibold uppercase tracking-[0.12em] text-secondary">
                  {s.city}
                </h3>
                <address className="mt-2 not-italic text-sm leading-relaxed text-muted-foreground">
                  {s.address}
                  <span className="mt-1 block">{s.region}</span>
                </address>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <section className="section-pad bg-surface">
      <div className="container">
        <SectionHeading
          eyebrow="Nuestro equipo"
          title="Profesionales comprometidos con la excelencia en el servicio."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {team.map((t, i) => (
            <Reveal key={t.title} delay={i * 90}>
              <article className="surface-card h-full p-7">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-light text-accent">
                  <t.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-6 font-display text-lg font-semibold text-secondary">{t.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.text}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-16">
          <SectionHeading
            eyebrow="Infraestructura y logística"
            title="Instalaciones modernas y procesos optimizados."
          />
          <dl className="mt-10 grid gap-6 md:grid-cols-3">
            {infrastructure.map((m, i) => (
              <Reveal key={m.l} delay={i * 90}>
                <div className="rounded-2xl border bg-card p-7 text-center shadow-sm">
                  <dt className="sr-only">{m.l}</dt>
                  <dd>
                    <span className="block font-display text-3xl font-semibold text-primary">{m.v}</span>
                    <span className="mt-2 block text-sm text-muted-foreground">{m.l}</span>
                  </dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>

    <FinalCta />

  </>
);

export default Nosotros;
