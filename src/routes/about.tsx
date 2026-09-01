import { createFileRoute } from "@tanstack/react-router";
import { Landmark, Leaf, Mountain, Sparkles, HeartHandshake, CalendarDays } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { exteriorSnow, valleySnow, roomWoodDeluxe, nightSnow } from "@/assets/images";

const pillars = [
  { icon: Leaf, title: "Inside the apple orchards", text: "The house sits among working apple trees — mornings here are birdsong and the river, not traffic." },
  { icon: Landmark, title: "Beside historic Manu Temple", text: "The ancient Manu Temple is less than 100 metres away, at the quiet upper end of Old Manali." },
  { icon: Mountain, title: "Himalayan surroundings", text: "Deodar forests, snow-dusted ridges and open valley views from the balconies and garden." },
  { icon: Sparkles, title: "Clean, comfortable rooms", text: "Wood-lined rooms serviced daily, with hot water, fresh linen and plenty of natural light." },
  { icon: HeartHandshake, title: "Friendly, cooperative staff", text: "A small family-run team that helps with taxis, treks, late check-ins and local advice." },
  { icon: CalendarDays, title: "Made for longer stays", text: "Couples, backpackers and remote workers settle in for weeks — and many keep coming back." },
];

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Apple Field House, Hotel in Old Manali" },
      {
        name: "description",
        content:
          "Apple Field House is a peaceful hotel in Old Manali set inside apple orchards next to Manu Temple, with clean mountain-view rooms and warm, helpful staff.",
      },
      { property: "og:title", content: "About Apple Field House — Old Manali" },
      {
        property: "og:description",
        content: "A quiet orchard stay near Manu Temple with Himalayan views and friendly hosts.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        image={exteriorSnow}
        eyebrow="Our Story"
        title="A quiet orchard house at the top of Old Manali"
        subtitle="Built for travellers who want the mountains close, the village walkable and the evenings genuinely still."
      />

      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <div>
              <p className="text-[11px] tracking-[0.3em] uppercase text-primary">Apple Field House</p>
              <h2 className="mt-3 font-display text-4xl leading-tight">
                Old Manali, the way people hope to find it
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                Apple Field House began as a family home surrounded by apple trees, and it still feels like one.
                The property sits in the calm upper lanes of Old Manali — past the cafes and the crowd — where
                the loudest sound is the Manalsu river below and the wind moving through the deodars.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Our rooms are simple and warm: local pine, big windows, hot water and daily housekeeping. There's
                a garden to sit in, a cafe for homely meals, free parking at the gate and Wi-Fi that holds up for
                work calls. Everything else — treks, taxis, the best momo stall — our team is happy to sort out
                for you.
              </p>
              <WhatsAppButton className="mt-8" />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="grid grid-cols-2 gap-4">
              <img src={valleySnow} alt="Snow-covered Himalayan valley near Apple Field House" className="h-56 w-full rounded-2xl object-cover sm:h-72" />
              <img src={roomWoodDeluxe} alt="Wood-panelled guest room at Apple Field House" className="mt-8 h-56 w-full rounded-2xl object-cover sm:h-72" />
              <img src={nightSnow} alt="Apple Field House on a snowy Old Manali night" className="col-span-2 h-52 w-full rounded-2xl object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary/50 py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <h2 className="max-w-xl font-display text-4xl">What guests notice first</h2>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 60}>
                <div className="h-full rounded-2xl border border-border/70 bg-card p-6">
                  <p.icon className="h-6 w-6 text-primary" />
                  <h3 className="mt-4 font-display text-xl">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
