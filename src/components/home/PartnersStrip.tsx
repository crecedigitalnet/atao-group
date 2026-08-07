const partners = [
  "Fabricantes de dispositivos médicos",
  "Clínicas y redes de salud",
  "Instituciones públicas",
  "Retail especializado",
  "Marketplaces líderes",
  "Operadores logísticos",
];

const PartnersStrip = () => (
  <section className="border-y bg-background py-10" aria-label="Partners y ecosistema de ATAO Group">
    <div className="container">
      <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
        Ecosistema de partners y canales representados
      </p>
      <div className="relative mt-7 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <ul className="flex w-max animate-marquee items-center gap-4">
          {[...partners, ...partners].map((partner, i) => (
            <li
              key={`${partner}-${i}`}
              className="flex h-14 items-center whitespace-nowrap rounded-xl border bg-card px-6 text-sm font-medium text-secondary/80 shadow-sm"
            >
              {partner}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default PartnersStrip;
