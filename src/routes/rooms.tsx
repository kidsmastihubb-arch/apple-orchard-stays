import { createFileRoute } from "@tanstack/react-router";
import { BedDouble, Check, Mountain } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { rooms } from "@/data/rooms";
import { roomWoodView } from "@/assets/images";

export const Route = createFileRoute("/rooms")({
  head: () => ({
    meta: [
      { title: "Rooms & Rates — Apple Field House, Old Manali" },
      {
        name: "description",
        content:
          "Cosy wooden mountain-view rooms in Old Manali for couples, families, backpackers and digital nomads. Book directly on WhatsApp with Apple Field House.",
      },
      { property: "og:title", content: "Rooms & Rates — Apple Field House, Old Manali" },
      {
        property: "og:description",
        content: "Mountain-view rooms near Manu Temple in Old Manali. Direct WhatsApp booking.",
      },
      { property: "og:url", content: "/rooms" },
    ],
    links: [{ rel: "canonical", href: "/rooms" }],
  }),
  component: RoomsPage,
});

function RoomsPage() {
  return (
    <>
      <PageHero
        image={roomWoodView}
        eyebrow="Stay With Us"
        title="Warm wooden rooms with the mountains at your window"
        subtitle="Every room at Apple Field House is clean, quiet and built from local pine — chosen by couples, families, backpackers and long-stay travellers alike."
      />

      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl space-y-16 px-5 lg:px-8">
          {rooms.map((room, i) => (
            <Reveal key={room.id}>
              <article
                className={`grid gap-8 overflow-hidden rounded-3xl border border-border/70 bg-card shadow-sm lg:grid-cols-2 ${
                  i % 2 === 1 ? "lg:[&>figure]:order-2" : ""
                }`}
              >
                <figure className="relative m-0 h-72 overflow-hidden lg:h-full lg:min-h-[26rem]">
                  <img src={room.image} alt={room.name} className="img-zoom h-full w-full object-cover" />
                  <figcaption className="glass-dark absolute top-4 left-4 rounded-full px-3 py-1 text-[11px] tracking-[0.18em] uppercase text-white">
                    {room.tag}
                  </figcaption>
                </figure>
                <div className="flex flex-col justify-center gap-5 p-7 lg:p-10">
                  <div>
                    <h2 className="font-display text-3xl text-foreground">{room.name}</h2>
                    <p className="mt-1 text-sm text-primary">{room.price}</p>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">{room.description}</p>
                  <div className="flex items-center gap-2 rounded-xl bg-accent/60 px-4 py-3 text-sm text-accent-foreground">
                    <Mountain className="h-4 w-4 shrink-0" />
                    {room.view}
                  </div>
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {room.facilities.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-foreground/80">
                        <Check className="h-4 w-4 shrink-0 text-primary" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <WhatsAppButton label="Book This Room" className="self-start" />
                </div>
              </article>
            </Reveal>
          ))}

          <Reveal>
            <div className="flex flex-col items-center gap-4 rounded-3xl border border-border/70 bg-secondary/60 p-10 text-center">
              <BedDouble className="h-6 w-6 text-primary" />
              <h2 className="font-display text-3xl">Long stay or a group booking?</h2>
              <p className="max-w-xl text-sm text-muted-foreground">
                We offer friendly rates for weekly and monthly stays, and can combine rooms for families and
                groups. Message us and we'll work out the best plan for you.
              </p>
              <WhatsAppButton label="Ask About Availability" />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
