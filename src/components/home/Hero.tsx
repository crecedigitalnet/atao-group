import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle, ShieldCheck } from "lucide-react";
import heroImage from "@/assets/hero-market-access.jpg";

const metrics = [
  { value: "6", label: "Tiendas físicas en Perú" },
  { value: "B2B · B2G · B2C", label: "Canales activables" },
  { value: "Nacional", label: "Cobertura de distribución" },
  { value: "1 socio", label: "En lugar de una operación propia" },
];

const Hero = () => (
  <section className="relative isolate overflow-hidden bg-secondary">
    <img
      src={heroImage}
      alt="Especialistas revisando equipamiento médico en un centro de operaciones de tecnología médica"
      width={1600}
      height={1104}
      className="absolute inset-0 h-full w-full object-cover"
      fetchPriority="high"
    />
    <div className="absolute inset-0 bg-gradient-hero" aria-hidden="true" />
    <div className="absolute inset-0 bg-gradient-mesh opacity-70" aria-hidden="true" />

    <div className="container relative grid items-center gap-14 py-24 md:py-32 lg:grid-cols-[1.05fr_0.95fr]">
      <div className="animate-fade-in">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur">
          Market Access as a Service · Perú
        </span>
        <h1 className="mt-7 font-display text-4xl font-semibold leading-[1.05] text-white text-balance md:text-6xl">
          El socio estratégico que acelera la entrada de fabricantes de tecnología médica al mercado peruano.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85">
          Importación, regulación, distribución, retail y canales digitales integrados en una sola plataforma
          para reducir riesgo y acelerar ventas.
        </p>
        <div className="mt-9 flex flex-col gap-4 sm:flex-row">
          <Button asChild size="lg" className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90">
            <Link to="/contacto">
              Agenda una reunión estratégica
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full border-white/40 bg-white/10 text-white backdrop-blur hover:bg-white hover:text-secondary"
          >
            <Link to="/market-access#como-funciona">
              <PlayCircle className="h-5 w-5" aria-hidden="true" />
              Descubre cómo funciona
            </Link>
          </Button>
        </div>
        <p className="mt-7 flex max-w-lg items-start gap-3 text-sm leading-relaxed text-white/70">
          <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" aria-hidden="true" />
          Hable con un equipo que entiende la complejidad regulatoria, comercial y operativa de lanzar
          tecnología médica en Perú.
        </p>
      </div>

      {/* Visual: red modular de acceso a mercado */}
      <div className="relative">
        <div className="glass-panel relative p-7 shadow-xl md:p-9">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">Ruta de acceso ATAO</p>
          <ol className="mt-6 space-y-3">
            {["Diagnóstico de entrada", "Registro sanitario", "Importación y logística", "Distribución y retail", "Canales B2B · B2G · digital"].map(
              (step, i) => (
                <li
                  key={step}
                  className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/90 backdrop-blur"
                  style={{ animation: `fade-in 0.6s cubic-bezier(0.22,1,0.36,1) ${i * 0.12}s both` }}
                >
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-accent/25 font-display text-xs font-semibold text-white">
                    0{i + 1}
                  </span>
                  {step}
                </li>
              ),
            )}
          </ol>
          <div className="mt-6 flex items-center gap-3 rounded-xl bg-accent/20 px-4 py-3 text-sm text-white">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-accent" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
            </span>
            Una sola relación estratégica, no diez proveedores.
          </div>
        </div>
      </div>
    </div>

    {/* Métricas */}
    <div className="relative border-t border-white/10 bg-secondary/40 backdrop-blur">
      <dl className="container grid grid-cols-2 gap-8 py-8 lg:grid-cols-4">
        {metrics.map((m) => (
          <div key={m.label}>
            <dt className="sr-only">{m.label}</dt>
            <dd>
              <span className="block font-display text-2xl font-semibold text-white md:text-3xl">{m.value}</span>
              <span className="mt-1 block text-sm text-white/70">{m.label}</span>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  </section>
);

export default Hero;
