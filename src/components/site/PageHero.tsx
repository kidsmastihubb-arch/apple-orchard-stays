export function PageHero({
  image,
  eyebrow,
  title,
  subtitle,
}: {
  image: string;
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <section className="relative flex min-h-[62vh] items-end overflow-hidden">
      <img src={image} alt={title} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/45 to-foreground/60" />
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-14 lg:px-8">
        <p className="text-[11px] tracking-[0.3em] uppercase text-white/70">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base">{subtitle}</p>
      </div>
    </section>
  );
}
