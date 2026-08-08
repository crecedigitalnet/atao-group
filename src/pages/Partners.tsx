import PageHero from "@/components/site/PageHero";
import SectionHeading from "@/components/site/SectionHeading";
import Reveal from "@/components/site/Reveal";
import FinalCta from "@/components/home/FinalCta";
import PartnersAndClients from "@/components/home/PartnersAndClients";
import { Factory, Building2, Landmark, Store, ShoppingBag, Truck } from "lucide-react";

const ecosystem = [
  { icon: Factory, title: "Fabricantes", text: "Marcas nacionales e internacionales de dispositivos médicos y soluciones de bienestar." },
  { icon: Building2, title: "Clínicas y redes de salud", text: "Instituciones privadas que incorporan tecnología con soporte y continuidad." },
  { icon: Landmark, title: "Sector público", text: "Participación en procesos de compra estatal y contratos marco." },
  { icon: Store, title: "Retail especializado", text: "Puntos físicos propios y aliados para exposición y venta directa." },
  { icon: ShoppingBag, title: "Marketplaces", text: "Canales digitales de alto tráfico donde la categoría ya se busca." },
  { icon: Truck, title: "Operadores logísticos", text: "Red de transporte y almacenamiento con cobertura nacional." },
];

const Partners = () => (
  <>
    <PageHero
      eyebrow="Ecosistema"
      title="Una red construida para que su marca llegue al comprador correcto."
      description="Nuestro valor no está en un solo canal, sino en la combinación de fabricantes, instituciones, retail, marketplaces y operadores que ya trabajan conectados."
      cta={{ label: "Conversemos sobre una alianza", to: "/contacto" }}
    />

    <section className="section-pad bg-surface">
      <div className="container">
        <SectionHeading eyebrow="Partners" title="Con quiénes trabajamos." />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ecosystem.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 90}>
              <article className="surface-card h-full p-7">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-light text-accent">
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-6 font-display text-lg font-semibold text-secondary">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <p className="rounded-2xl border bg-card p-6 text-sm leading-relaxed text-muted-foreground">
            Los logotipos de marcas representadas se publican únicamente con autorización vigente de cada fabricante.
            Si desea evaluar una representación para Perú, agende una reunión con nuestro equipo.
          </p>
        </Reveal>
      </div>
    </section>

    <PartnersAndClients />
    <FinalCta />
  </>
);

export default Partners;
