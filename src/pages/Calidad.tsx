import PageHero from "@/components/site/PageHero";
import SectionHeading from "@/components/site/SectionHeading";
import Reveal from "@/components/site/Reveal";
import FinalCta from "@/components/home/FinalCta";
import { ShieldCheck, FileSearch, Thermometer, ClipboardList, RotateCcw, Award } from "lucide-react";

const pillars = [
  { icon: FileSearch, title: "Registros y expedientes", text: "Gestión documental del registro sanitario y del expediente técnico dentro del alcance acordado." },
  { icon: Thermometer, title: "Condiciones de almacenamiento", text: "Control de condiciones y buenas prácticas aplicables al tipo de producto." },
  { icon: ClipboardList, title: "Trazabilidad por lote", text: "Seguimiento de lote y serie desde la importación hasta el punto de entrega." },
  { icon: RotateCcw, title: "Tecnovigilancia", text: "Procedimientos de reporte, retiro y logística inversa cuando corresponde." },
  { icon: ShieldCheck, title: "Proveedores verificados", text: "Evaluación de fabricantes y documentación de origen antes de representar una marca." },
  { icon: Award, title: "Estándares de gestión", text: "Procesos internos alineados a marcos de calidad reconocidos en el sector salud." },
];

const Calidad = () => (
  <>
    <PageHero
      eyebrow="Calidad y cumplimiento"
      title="El cumplimiento no es un trámite: es la base de la confianza comercial."
      description="Publicamos únicamente compromisos que podemos sostener con evidencia documental. El alcance regulatorio se define caso por caso según categoría y clasificación de riesgo."
      cta={{ label: "Consulta por tu categoría", to: "/contacto" }}
    />

    <section className="section-pad bg-background">
      <div className="container">
        <SectionHeading eyebrow="Marco de trabajo" title="Seis frentes de control sobre la operación." />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 90}>
              <article className="surface-card h-full p-7">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light text-primary">
                  <p.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-6 font-display text-lg font-semibold text-secondary">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <p className="rounded-2xl border bg-muted p-6 text-sm leading-relaxed text-muted-foreground">
            Nota de transparencia: no comprometemos aprobaciones regulatorias ni plazos sin una evaluación previa
            de la categoría. Las certificaciones vigentes y los registros aplicables se comparten durante el proceso
            de evaluación con cada fabricante.
          </p>
        </Reveal>
      </div>
    </section>

    <FinalCta />
  </>
);

export default Calidad;
