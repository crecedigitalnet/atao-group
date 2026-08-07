import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SectionHeading from "@/components/site/SectionHeading";

export const faqs = [
  {
    q: "¿ATAO trabaja con fabricantes internacionales?",
    a: "Sí. La conversación inicial permite evaluar la categoría, el objetivo y la forma de colaboración más adecuada.",
  },
  {
    q: "¿ATAO reemplaza a un distribuidor?",
    a: "ATAO articula capacidades de acceso a mercado; el alcance exacto se define según la categoría, la regulación y la estrategia comercial.",
  },
  {
    q: "¿Pueden gestionar requisitos regulatorios?",
    a: "ATAO evalúa y acompaña la ruta aplicable dentro del alcance acordado, sin comprometer aprobaciones ni plazos antes de una evaluación.",
  },
  {
    q: "¿Qué canales pueden activar?",
    a: "Según estrategia y categoría: B2B, B2G, retail, marketplace y canales digitales.",
  },
  {
    q: "¿Cómo comenzamos?",
    a: "Agende una reunión estratégica y comparta información básica de su portafolio.",
  },
];

const FaqSection = () => (
  <section id="faq" className="section-pad bg-background" aria-labelledby="faq-title">
    <div className="container grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
      <SectionHeading
        eyebrow="Preguntas frecuentes"
        title={<span id="faq-title">Lo que suelen preguntar los fabricantes.</span>}
        description="Si su caso requiere una respuesta específica, la reunión inicial es el camino más rápido."
      />
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, i) => (
          <AccordionItem key={faq.q} value={`item-${i}`}>
            <AccordionTrigger className="text-left font-display text-base font-semibold text-secondary">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-sm leading-relaxed text-muted-foreground">{faq.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FaqSection;
