import { FormEvent, useState } from "react";
import { useSearchParams } from "react-router-dom";
import PageHero from "@/components/site/PageHero";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock, ArrowRight, CheckCircle2 } from "lucide-react";

const objectives = [
  { value: "reunion", label: "Agenda una reunión estratégica" },
  { value: "diagnostico", label: "Diagnóstico de acceso al mercado" },
  { value: "cotizacion", label: "Cotización de productos" },
];

const Contacto = () => {
  const [params] = useSearchParams();
  const initial = params.get("tipo") === "diagnostico" ? "diagnostico" : params.get("tipo") === "cotizacion" ? "cotizacion" : "reunion";
  const [objetivo, setObjetivo] = useState(initial);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    toast({
      title: "Solicitud enviada",
      description: "Un especialista de ATAO Group se pondrá en contacto con usted.",
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title="Evalúe una ruta de entrada para su portafolio."
        description="Cuéntenos su categoría y su objetivo comercial en Perú. Respondemos con una primera lectura de viabilidad y próximos pasos."
      />

      <section className="section-pad bg-surface">
        <div className="container grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border bg-card p-8 shadow-lg md:p-10">
            <h2 className="font-display text-2xl font-semibold text-secondary">Solicite una conversación</h2>
            <p className="mt-2 text-sm text-muted-foreground">Sin compromiso comercial. Respuesta de un especialista de ATAO.</p>

            <fieldset className="mt-8">
              <legend className="text-sm font-medium text-secondary">Objetivo de contacto</legend>
              <div className="mt-3 grid gap-3 sm:grid-cols-3">
                {objectives.map((o) => (
                  <label
                    key={o.value}
                    className={`cursor-pointer rounded-xl border p-4 text-sm transition-colors ${
                      objetivo === o.value ? "border-primary bg-primary-light text-primary" : "hover:border-primary/40"
                    }`}
                  >
                    <input
                      type="radio"
                      name="objetivo"
                      value={o.value}
                      checked={objetivo === o.value}
                      onChange={() => setObjetivo(o.value)}
                      className="sr-only"
                    />
                    {o.label}
                  </label>
                ))}
              </div>
            </fieldset>

            <form onSubmit={handleSubmit} className="mt-8 grid gap-5 sm:grid-cols-2">
              <div>
                <Label htmlFor="nombre">Nombre y apellido</Label>
                <Input id="nombre" name="nombre" required autoComplete="name" className="mt-2 h-12" />
              </div>
              <div>
                <Label htmlFor="empresa">Empresa</Label>
                <Input id="empresa" name="empresa" required autoComplete="organization" className="mt-2 h-12" />
              </div>
              <div>
                <Label htmlFor="email">Correo corporativo</Label>
                <Input id="email" name="email" type="email" required autoComplete="email" className="mt-2 h-12" />
              </div>
              <div>
                <Label htmlFor="telefono">Teléfono</Label>
                <Input id="telefono" name="telefono" type="tel" autoComplete="tel" className="mt-2 h-12" />
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="mensaje">Categoría de producto y objetivo en Perú</Label>
                <Textarea id="mensaje" name="mensaje" required rows={5} className="mt-2" />
              </div>
              <div className="sm:col-span-2">
                <Button type="submit" size="lg" className="w-full rounded-full sm:w-auto">
                  Enviar solicitud
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </Button>
              </div>
            </form>

            {sent && (
              <p className="mt-6 flex items-center gap-2 text-sm text-accent" role="status">
                <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                Recibimos su solicitud. Le contactaremos en breve.
              </p>
            )}
          </div>

          <aside className="space-y-4">
            {[
              { icon: Mail, label: "Correo", value: "contacto@ataogroup.pe", href: "mailto:contacto@ataogroup.pe" },
              { icon: Phone, label: "Teléfono / WhatsApp", value: "+51 986 722 623", href: "tel:+51986722623" },
              { icon: MapPin, label: "Ubicación", value: "Lima, Perú · Cobertura nacional" },
              { icon: Clock, label: "Horario", value: "Lun a Vie: 8:00 – 18:00 · Sáb: 9:00 – 13:00" },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4 rounded-2xl border bg-card p-6 shadow-sm">
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-primary-light text-primary">
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="mt-1 block font-medium text-secondary hover:text-primary">
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-1 font-medium text-secondary">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </aside>
        </div>
      </section>
    </>
  );
};

export default Contacto;
