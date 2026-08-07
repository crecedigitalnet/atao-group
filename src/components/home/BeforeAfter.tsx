import { useState } from "react";
import { ArrowDown, AlertTriangle, CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/site/SectionHeading";
import { cn } from "@/lib/utils";

const before = [
  "Fabricante extranjero",
  "Búsqueda de distribuidores",
  "Negociaciones prolongadas",
  "Inversión en infraestructura",
  "Visibilidad limitada de ventas",
  "Riesgo elevado",
];

const after = [
  "Fabricante",
  "ATAO Group",
  "Importación",
  "Registro sanitario",
  "Distribución nacional",
  "6 tiendas físicas",
  "Marketplace",
  "Clientes B2B",
  "Clientes B2G",
  "Canales digitales",
  "Activación comercial más rápida",
];

const BeforeAfter = () => {
  const [mode, setMode] = useState<"antes" | "despues">("despues");
  const steps = mode === "antes" ? before : after;

  return (
    <section className="section-pad bg-background" aria-labelledby="comparador-title">
      <div className="container">
        <SectionHeading
          eyebrow="Antes vs Después"
          title={<span id="comparador-title">De una entrada fragmentada a una plataforma de acceso al mercado.</span>}
          description="Active el comparador para ver qué cambia cuando la ruta se diseña como un sistema integrado."
        />

        <div className="mt-10 inline-flex rounded-full border bg-muted p-1" role="tablist" aria-label="Comparador antes y después">
          {(["antes", "despues"] as const).map((key) => (
            <button
              key={key}
              role="tab"
              type="button"
              aria-selected={mode === key}
              onClick={() => setMode(key)}
              className={cn(
                "min-h-11 rounded-full px-6 text-sm font-semibold transition-all duration-300",
                mode === key ? "bg-background text-primary shadow-md" : "text-muted-foreground hover:text-foreground",
              )}
            >
              {key === "antes" ? "Antes" : "Después"}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div
            className={cn(
              "rounded-3xl border p-8 transition-colors duration-500",
              mode === "antes" ? "border-destructive/25 bg-destructive/5" : "border-accent/25 bg-accent-light",
            )}
          >
            <span
              className={cn(
                "inline-flex h-12 w-12 items-center justify-center rounded-xl",
                mode === "antes" ? "bg-destructive/10 text-destructive" : "bg-accent/15 text-accent",
              )}
            >
              {mode === "antes" ? <AlertTriangle className="h-6 w-6" aria-hidden="true" /> : <CheckCircle2 className="h-6 w-6" aria-hidden="true" />}
            </span>
            <h3 className="mt-6 font-display text-2xl font-semibold text-secondary">
              {mode === "antes" ? "Coordinar no es escalar" : "Una ruta coordinada para empezar a vender"}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {mode === "antes"
                ? "Cada capacidad se contrata por separado. El tiempo se consume en coordinación y la inversión ocurre antes de tener evidencia comercial."
                : "Las capacidades operan como un sistema. La ruta avanza con hitos claros y la marca llega antes al comprador correcto."}
            </p>
            <dl className="mt-8 grid grid-cols-2 gap-4 text-sm">
              <div className="rounded-xl bg-background p-4">
                <dt className="text-muted-foreground">Interlocutores</dt>
                <dd className="mt-1 font-display text-xl font-semibold text-secondary">{mode === "antes" ? "8+" : "1"}</dd>
              </div>
              <div className="rounded-xl bg-background p-4">
                <dt className="text-muted-foreground">Exposición financiera</dt>
                <dd className="mt-1 font-display text-xl font-semibold text-secondary">{mode === "antes" ? "Alta" : "Gradual"}</dd>
              </div>
            </dl>
          </div>

          {/* Timeline animada */}
          <ol className="relative space-y-3 pl-8" aria-live="polite">
            <span
              className={cn(
                "absolute left-[13px] top-2 w-px bg-gradient-to-b",
                mode === "antes" ? "from-destructive/50 to-transparent" : "from-accent to-primary/20",
              )}
              style={{ height: "calc(100% - 1rem)" }}
              aria-hidden="true"
            />
            {steps.map((step, i) => (
              <li
                key={`${mode}-${step}`}
                className="relative flex items-center gap-4 rounded-xl border bg-card px-5 py-3.5 shadow-sm"
                style={{ animation: `fade-in 0.5s cubic-bezier(0.22,1,0.36,1) ${i * 0.07}s both` }}
              >
                <span
                  className={cn(
                    "absolute -left-8 flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold text-white",
                    mode === "antes" ? "bg-destructive/80" : "bg-accent",
                  )}
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <span className="text-sm font-medium text-secondary">{step}</span>
                {i < steps.length - 1 && (
                  <ArrowDown className="ml-auto h-4 w-4 text-muted-foreground/50" aria-hidden="true" />
                )}
              </li>
            ))}
          </ol>
        </div>
        <p className="mt-6 text-xs text-muted-foreground">
          Dato de red de tiendas sujeto a confirmación de vigencia; consulte la página de presencia nacional.
        </p>
      </div>
    </section>
  );
};

export default BeforeAfter;
