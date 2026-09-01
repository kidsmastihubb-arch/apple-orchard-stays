import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import {
  exteriorNight,
  roomYellow,
  exteriorSnow,
  roomPink,
  cafePlate,
  valleySnow,
  roomWoodView,
  gardenNight,
  roomWoodDeluxe,
  nightSnow,
} from "@/assets/images";

const photos = [
  { src: exteriorNight, alt: "Apple Field House lit up on a clear Old Manali evening", span: "lg:row-span-2" },
  { src: roomWoodView, alt: "Wooden suite with valley-facing windows", span: "" },
  { src: valleySnow, alt: "Snow-covered Himalayan valley seen from the property", span: "" },
  { src: roomYellow, alt: "Bright balcony family room", span: "" },
  { src: exteriorSnow, alt: "Apple Field House under fresh snowfall", span: "lg:row-span-2" },
  { src: cafePlate, alt: "Homely Himachali siddu served at the on-site cafe", span: "" },
  { src: roomWoodDeluxe, alt: "Deluxe pine room with work desk", span: "" },
  { src: gardenNight, alt: "Garden seating outside the house in the evening", span: "" },
  { src: roomPink, alt: "Cosy budget room with tea table by the window", span: "" },
  { src: nightSnow, alt: "Snowy night at Apple Field House, Old Manali", span: "lg:col-span-2" },
];

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Photo Gallery — Apple Field House, Old Manali" },
      {
        name: "description",
        content:
          "Photos of Apple Field House in Old Manali: mountain-view rooms, apple orchard garden, snowfall, Himalayan valley views and our on-site cafe.",
      },
      { property: "og:title", content: "Gallery — Apple Field House, Old Manali" },
      { property: "og:description", content: "See our rooms, garden, cafe and Himalayan views in Old Manali." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const [index, setIndex] = useState<number | null>(null);

  const close = useCallback(() => setIndex(null), []);
  const step = useCallback(
    (d: number) => setIndex((i) => (i === null ? i : (i + d + photos.length) % photos.length)),
    [],
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, close, step]);

  return (
    <>
      <section className="bg-foreground pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="text-[11px] tracking-[0.3em] uppercase text-background/60">Gallery</p>
          <h1 className="mt-3 max-w-2xl font-display text-4xl text-background sm:text-5xl">
            Apple Field House, through the seasons
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-background/70">
            Snowfall, orchard mornings, warm wooden rooms and long evenings in the garden — a look at the stay
            before you arrive.
          </p>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid auto-rows-[14rem] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {photos.map((p, i) => (
              <Reveal key={p.alt} delay={(i % 3) * 60} className={`${p.span} h-full`}>
                <button
                  type="button"
                  onClick={() => setIndex(i)}
                  className="group h-full w-full overflow-hidden rounded-2xl border border-border/60"
                >
                  <img src={p.src} alt={p.alt} loading="lazy" className="img-zoom h-full w-full object-cover" />
                </button>
              </Reveal>
            ))}
          </div>
          <div className="mt-14 text-center">
            <WhatsAppButton />
          </div>
        </div>
      </section>

      {index !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-foreground/95 p-4 animate-fade-in"
          onClick={close}
        >
          <button onClick={close} aria-label="Close" className="absolute top-5 right-5 grid h-11 w-11 place-items-center rounded-full glass-dark text-white">
            <X className="h-5 w-5" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); step(-1); }}
            aria-label="Previous photo"
            className="absolute left-3 grid h-11 w-11 place-items-center rounded-full glass-dark text-white sm:left-8"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <figure className="m-0 max-h-[85vh] w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <img src={photos[index].src} alt={photos[index].alt} className="max-h-[78vh] w-full rounded-2xl object-contain" />
            <figcaption className="mt-3 text-center text-xs text-background/70">{photos[index].alt}</figcaption>
          </figure>
          <button
            onClick={(e) => { e.stopPropagation(); step(1); }}
            aria-label="Next photo"
            className="absolute right-3 grid h-11 w-11 place-items-center rounded-full glass-dark text-white sm:right-8"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      )}
    </>
  );
}
