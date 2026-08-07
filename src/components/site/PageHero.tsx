import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  cta?: { label: string; to: string };
  children?: ReactNode;
}

const PageHero = ({ eyebrow, title, description, cta, children }: PageHeroProps) => (
  <section className="relative overflow-hidden bg-secondary text-secondary-foreground">
    <div className="pointer-events-none absolute inset-0 bg-gradient-mesh opacity-80" aria-hidden="true" />
    <div className="container relative py-20 md:py-28">
      <span className="inline-flex items-center rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
        {eyebrow}
      </span>
      <h1 className="mt-6 max-w-4xl font-display text-4xl font-semibold leading-[1.06] text-balance md:text-6xl">
        {title}
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-secondary-foreground/80">{description}</p>
      {cta && (
        <Button asChild size="lg" className="mt-9 rounded-full bg-accent text-accent-foreground hover:bg-accent/90">
          <Link to={cta.to}>
            {cta.label}
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </Link>
        </Button>
      )}
      {children}
    </div>
  </section>
);

export default PageHero;
