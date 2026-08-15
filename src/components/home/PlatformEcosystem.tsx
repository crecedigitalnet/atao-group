import { useState } from "react";
import {
  FileCheck2,
  Ship,
  Truck,
  ShoppingBag,
  Store,
  Megaphone,
  Handshake,
  BarChart3,
} from "lucide-react";
import { cn } from "@/lib/utils";

const nodes = [
  { icon: FileCheck2, label: "Regulación", text: "Ruta informada para gestionar el cumplimiento sanitario aplicable." },
  { icon: Ship, label: "Importación", text: "Operación diseñada para proteger continuidad y trazabilidad." },
  { icon: Truck, label: "Distribución", text: "Ejecución nacional coordinada hacia los canales priorizados." },
  { icon: ShoppingBag, label: "Marketplace", text: "Presencia en los canales digitales donde compra la categoría." },
  { icon: Store, label: "Retail", text: "Red de tiendas físicas para exposición y venta directa." },
  { icon: Megaphone, label: "Marketing", text: "Activación de demanda con contenidos y campañas segmentadas." },
  { icon: Handshake, label: "Ventas B2B · B2C · B2G", text: "Gestión comercial con clínicas, corporativos, consumidores y sector público." },
  { icon: BarChart3, label: "Analytics", text: "Medición de desempeño por canal para priorizar el escalamiento." },
];

const PlatformEcosystem = () => {
  const [active, setActive] = useState(0);
  const ActiveIcon = nodes[active].icon;

  return (
    <section className="section-pad relative overflow-hidden bg-secondary text-secondary-foreground" aria-labelledby="plataforma-title">
      <div className="pointer-events-none absolute inset-0 bg-gradient-mesh opacity-70" aria-hidden="true" />
      <div className="container relative">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
            Nuestra plataforma
          </span>
          <h2 id="plataforma-title" className="mt-5 font-display text-3xl font-semibold leading-[1.1] text-balance md:text-[2.75rem]">
            Las capacidades que convierten una intención de expansión en presencia de mercado.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-secondary-foreground/75">
            Un ecosistema conectado, no una lista de servicios. Cada nodo alimenta al siguiente y comparte
            información comercial en tiempo real.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {nodes.map((node, i) => (
              <li key={node.label}>
                <button
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  aria-pressed={active === i}
                  className={cn(
                    "group flex h-full w-full flex-col items-start gap-3 rounded-2xl border p-5 text-left transition-all duration-300",
                    active === i
                      ? "border-accent/60 bg-white/15 shadow-glow"
                      : "border-white/10 bg-white/5 hover:border-white/25 hover:bg-white/10",
                  )}
                >
                  <span
                    className={cn(
                      "flex h-10 w-10 items-center justify-center rounded-xl transition-colors",
                      active === i ? "bg-accent text-accent-foreground" : "bg-white/10 text-accent",
                    )}
                  >
                    <node.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="font-display text-sm font-semibold">{node.label}</span>
                </button>
              </li>
            ))}
          </ul>

          <div className="glass-panel flex flex-col justify-center p-8">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/20 text-accent">
              <ActiveIcon className="h-6 w-6" aria-hidden="true" />
            </span>
            <h3 className="mt-6 font-display text-2xl font-semibold">{nodes[active].label}</h3>
            <p className="mt-3 text-sm leading-relaxed text-secondary-foreground/80" aria-live="polite">
              {nodes[active].text}
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {nodes.map((n, i) => (
                <span
                  key={n.label}
                  className={cn("h-1.5 rounded-full transition-all", active === i ? "w-8 bg-accent" : "w-3 bg-white/25")}
                  aria-hidden="true"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformEcosystem;
