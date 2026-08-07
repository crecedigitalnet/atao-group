import PageHero from "@/components/site/PageHero";
import SectionHeading from "@/components/site/SectionHeading";
import Reveal from "@/components/site/Reveal";
import FinalCta from "@/components/home/FinalCta";
import { FileCheck2, Ship, Truck, Store, ShoppingBag, Handshake, Megaphone, BarChart3 } from "lucide-react";

const services = [
  {
    icon: FileCheck2,
    title: "Regulación sanitaria",
    text: "Una ruta informada para gestionar el cumplimiento aplicable a su categoría, con documentación y seguimiento del expediente.",
    items: ["Evaluación de requisitos", "Registro sanitario", "Documentación técnica", "Vigilancia post-mercado"],
  },
  {
    icon: Ship,
    title: "Importación",
    text: "Operación diseñada para proteger continuidad y trazabilidad desde el origen hasta el almacén nacional.",
    items: ["Gestión aduanera", "Planificación de embarques", "Trazabilidad de lotes", "Almacenamiento conforme"],
  },
  {
    icon: Truck,
    title: "Distribución nacional",
    text: "Ejecución coordinada hacia los canales priorizados, con cobertura en Lima y provincias.",
    items: ["Cobertura nacional", "Gestión de stock", "Niveles de servicio", "Logística inversa"],
  },
  {
    icon: Store,
    title: "Retail",
    text: "Red de tiendas físicas para exposición, demostración y venta directa de su portafolio.",
    items: ["6 tiendas físicas", "Exhibición de marca", "Capacitación en punto de venta", "Rotación medida"],
  },
  {
    icon: ShoppingBag,
    title: "Marketplace y digital",
    text: "Presencia en los canales donde la categoría y el comprador ya realizan su búsqueda de compra.",
    items: ["Marketplaces líderes", "Tienda propia", "Contenido de producto", "Performance media"],
  },
  {
    icon: Handshake,
    title: "Comercialización B2B y B2G",
    text: "Gestión comercial con clínicas, corporativos e instituciones públicas, incluidos procesos de licitación.",
    items: ["Clínicas y hospitales", "Corporativos", "Licitaciones públicas", "Contratos marco"],
  },
  {
    icon: Megaphone,
    title: "Marketing y activación",
    text: "Construcción de demanda con campañas segmentadas por canal, categoría y decisor.",
    items: ["Posicionamiento local", "Campañas por canal", "Material comercial", "Eventos y congresos"],
  },
  {
    icon: BarChart3,
    title: "Analytics comercial",
    text: "Medición del desempeño por canal para priorizar inversión y decisiones de escalamiento.",
    items: ["Reportes de sell-out", "Desempeño por canal", "Forecast de demanda", "Revisión trimestral"],
  },
];

const Servicios = () => (
  <>
    <PageHero
      eyebrow="Soluciones"
      title="Capacidades que operan como un sistema, no como servicios sueltos."
      description="Cada capacidad puede activarse por separado, pero su valor real aparece cuando funcionan conectadas dentro de la plataforma de acceso al mercado."
      cta={{ label: "Solicita un diagnóstico", to: "/contacto?tipo=diagnostico" }}
    />

    <section className="section-pad bg-surface">
      <div className="container">
        <SectionHeading
          eyebrow="Portafolio de capacidades"
          title="De la regulación a la venta, con un solo responsable de la ruta."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={(i % 4) * 90}>
              <article className="surface-card h-full p-7">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light text-primary">
                  <service.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-6 font-display text-lg font-semibold text-secondary">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.text}</p>
                <ul className="mt-5 space-y-2 border-t pt-5 text-sm text-muted-foreground">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <FinalCta />
  </>
);

export default Servicios;
