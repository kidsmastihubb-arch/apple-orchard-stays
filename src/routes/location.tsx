import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Navigation } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { HOTEL, DIRECTIONS_URL } from "@/lib/hotel";
import { valleySnow } from "@/assets/images";

const nearby = [
  { name: "Manu Temple", distance: "Less than 100 m", note: "The historic temple at the top of Old Manali, a two-minute walk away." },
  { name: "Club House Manali", distance: "Approx. 420 m", note: "Riverside activities, cafes and the walk down along the Manalsu." },
  { name: "Hadimba Devi Temple", distance: "Approx. 2.8 km", note: "The famous cedar-forest temple, a short drive or forest walk." },
  { name: "Mall Road", distance: "Approx. 3 km", note: "Manali's main market for shopping, restaurants and bus connections." },
  { name: "Tibetan Monastery", distance: "Approx. 3 km", note: "Peaceful monastery complex in the heart of Manali town." },
  { name: "Kullu-Manali Airport (Bhuntar)", distance: "Approx. 42–52 km", note: "The nearest airport; taxis can be arranged from the front desk." },
];

export const Route = createFileRoute("/location")({
  head: () => ({
    meta: [
      { title: "Location & Nearby Attractions — Apple Field House, Old Manali" },
      {
        name: "description",
        content:
          "Apple Field House is in Old Manali, Himachal Pradesh 175131 — under 100 m from Manu Temple, 2.8 km from Hadimba Temple and 3 km from Mall Road.",
      },
      { property: "og:title", content: "Location — Apple Field House, Old Manali" },
      { property: "og:description", content: "Find us in Old Manali near Manu Temple, with easy access to Hadimba Temple and Mall Road." },
      { property: "og:url", content: "/location" },
    ],
    links: [{ rel: "canonical", href: "/location" }],
  }),
  component: LocationPage,
});

function LocationPage() {
  return (
    <>
      <PageHero
        image={valleySnow}
        eyebrow="Find Us"
        title="Old Manali, moments from Manu Temple"
        subtitle={HOTEL.address}
      />

      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-border/70 shadow-sm">
              <iframe
                title="Apple Field House location on Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3374.049610045358!2d77.17397926089417!3d32.25674741028391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390487e9385c8f55%3A0x6825daa8f1b78fb7!2sApple%20Field%20House%20-%20Hotel%20in%20Old%20Manali!5e0!3m2!1sen!2sin!4v1788237511920!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                className="h-[28rem] w-full"
              />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div>
              <h2 className="font-display text-4xl">Getting here</h2>
              <p className="mt-4 flex gap-2 text-sm leading-relaxed text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {HOTEL.address}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                We're at the quiet upper end of Old Manali, just past Manu Temple. Vehicles reach the property,
                and free parking is available at the gate. Arriving late or unsure of the lane? Call us and
                we'll guide you in.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={DIRECTIONS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <Navigation className="h-4 w-4" /> Get Directions
                </a>
                <WhatsAppButton label="Ask For Directions" />
              </div>

              <div className="mt-10 space-y-3">
                {nearby.map((n) => (
                  <div
                    key={n.name}
                    className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 rounded-2xl border border-border/70 bg-card p-4"
                  >
                    <div className="min-w-0">
                      <h3 className="truncate font-display text-lg">{n.name}</h3>
                      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{n.note}</p>
                    </div>
                    <span className="shrink-0 rounded-full bg-accent px-3 py-1 text-[11px] font-medium text-accent-foreground">
                      {n.distance}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
