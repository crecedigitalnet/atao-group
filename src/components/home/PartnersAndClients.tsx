import SectionHeading from "@/components/site/SectionHeading";
import Reveal from "@/components/site/Reveal";
import { Store, Users, Award } from "lucide-react";

const allies = [
  {
    name: "Saga Falabella",
    category: "Retail multicanal",
    description:
      "Alianza que amplía la exposición de productos de salud y bienestar en uno de los retailers más reconocidos del Perú.",
  },
  {
    name: "Sodimac",
    category: "Mejora del hogar",
    description:
      "Canal especializado para soluciones de accesibilidad, bienestar y equipamiento orientado al hogar y cuidado personal.",
  },
  {
    name: "Plaza Vea",
    category: "Supermercados",
    description:
      "Presencia en puntos de venta de alta frecuencia que acercan los productos de salud al público final de forma conveniente.",
  },
];

const clients = [
  "Clínicas y redes de salud privadas",
  "Instituciones públicas y gobierno",
  "Marketplaces y canales digitales",
  "Fabricantes de dispositivos médicos",
  "Pacientes y cuidadores en retail",
];

const PartnersAndClients = () => (
  <section className="section-pad bg-surface" aria-label="Partners y clientes de ATAO Group">
    <div className="container">
      <SectionHeading
        eyebrow="Partners y aliados"
        title="Canales que amplifican el alcance de su marca."
        description="Trabajamos con los principales retailers del Perú para que los productos de salud y bienestar lleguen a más profesionales y pacientes."
        align="center"
      />

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {allies.map((ally, i) => (
          <Reveal key={ally.name} delay={i * 100}>
            <article className="surface-card h-full p-8">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-light text-primary">
                <Store className="h-7 w-7" aria-hidden="true" />
              </span>
              <h3 className="mt-6 font-display text-xl font-semibold text-secondary">{ally.name}</h3>
              <p className="mt-1 text-sm font-medium text-primary">{ally.category}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{ally.description}</p>
            </article>
          </Reveal>
        ))}
      </div>

      <div className="mt-20">
        <SectionHeading
          eyebrow="Clientes"
          title="Más de 10 años de presencia en el mercado peruano."
          description="Durante una década hemos conectado fabricantes, instituciones de salud y pacientes con soluciones médicas confiables y oportunas."
          align="center"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {clients.map((client, i) => (
            <Reveal key={client} delay={i * 80}>
              <div className="flex h-full items-center gap-4 rounded-2xl border bg-card p-5 shadow-sm">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-light text-accent">
                  <Users className="h-5 w-5" aria-hidden="true" />
                </span>
                <p className="text-sm font-medium text-secondary">{client}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <div className="flex flex-col items-center gap-6 rounded-3xl bg-primary p-8 text-center text-white md:flex-row md:justify-between md:p-10 md:text-left">
            <div>
              <span className="eyebrow mb-3 inline-block text-white/80">Trayectoria</span>
              <h3 className="font-display text-2xl font-semibold">10 años de mercado respaldan nuestra operación</h3>
              <p className="mt-2 max-w-xl text-sm text-white/80">
                Desde 2015, ATAO Group ha sido el puente entre la innovación médica global y las necesidades locales
                del Perú.
              </p>
            </div>
            <span className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-white/10">
              <Award className="h-10 w-10 text-white" aria-hidden="true" />
            </span>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

export default PartnersAndClients;
