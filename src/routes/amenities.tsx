import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { amenities } from "@/data/amenities";
import { gardenNight, cafePlate } from "@/assets/images";

export const Route = createFileRoute("/amenities")({
  head: () => ({
    meta: [
      { title: "Amenities & Facilities — Apple Field House, Old Manali" },
      {
        name: "description",
        content:
          "Free Wi-Fi, free parking, garden, laundry, 24-hour front desk, room service, on-site cafe, breakfast, mountain views and daily housekeeping in Old Manali.",
      },
      { property: "og:title", content: "Amenities — Apple Field House, Old Manali" },
      {
        property: "og:description",
        content: "Everything included at our mountain-view hotel in Old Manali near Manu Temple.",
      },
      { property: "og:url", content: "/amenities" },
    ],
    links: [{ rel: "canonical", href: "/amenities" }],
  }),
  component: AmenitiesPage,
});

function AmenitiesPage() {
  return (
    <>
      <PageHero
        image={gardenNight}
        eyebrow="Facilities"
        title="Everything you need for an easy mountain stay"
        subtitle="Small comforts, thoughtfully handled — so your days in Old Manali are spent outdoors, not sorting out logistics."
      />

      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {amenities.map((a, i) => (
              <Reveal key={a.name} delay={i * 40}>
                <div className="group h-full rounded-2xl border border-border/70 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <a.icon className="h-5 w-5" />
                  </span>
                  <h2 className="mt-4 font-display text-xl">{a.name}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/50 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <div className="overflow-hidden rounded-3xl">
              <img src={cafePlate} alt="Freshly prepared siddu served at the Apple Field House cafe" className="img-zoom h-[26rem] w-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div>
              <p className="text-[11px] tracking-[0.3em] uppercase text-primary">Dining</p>
              <h2 className="mt-3 font-display text-4xl">The cafe downstairs</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Our on-site cafe serves homely, freshly cooked meals through the day — Himachali plates like
                siddu, everyday Indian comfort food, and endless cups of chai and coffee. Breakfast is available
                depending on your booking plan, and room service brings it all upstairs when the morning is
                too cold to move.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-foreground/80">
                <li>· Home-style vegetarian and Indian meals</li>
                <li>· Breakfast as per your selected plan</li>
                <li>· Chai, coffee and evening snacks in the garden</li>
                <li>· Room service available</li>
              </ul>
              <WhatsAppButton label="Ask About Meal Plans" className="mt-7" />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
