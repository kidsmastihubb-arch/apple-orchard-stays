import { createFileRoute } from "@tanstack/react-router";
import { Phone, MapPin, MessageCircle, Navigation, Star, Clock } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { HOTEL, WHATSAPP_URL, DIRECTIONS_URL } from "@/lib/hotel";
import { exteriorSnow } from "@/assets/images";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Apple Field House, Hotel in Old Manali" },
      {
        name: "description",
        content:
          "Contact Apple Field House in Old Manali. Call +91 94187 48343, message us on WhatsApp, or get directions to our hotel near Manu Temple.",
      },
      { property: "og:title", content: "Contact — Apple Field House, Old Manali" },
      {
        property: "og:description",
        content: "Call, WhatsApp or get directions to Apple Field House in Old Manali.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        image={exteriorSnow}
        eyebrow="Get in Touch"
        title="We're here to help you plan your stay"
        subtitle="Call us, message on WhatsApp, or get directions — we usually reply within minutes during the day."
      />

      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Call Now */}
            <Reveal>
              <a
                href={HOTEL.phoneHref}
                className="group flex h-full flex-col items-start rounded-2xl border border-border/70 bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Phone className="h-5 w-5" />
                </span>
                <h2 className="mt-5 font-display text-2xl">Call Now</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Speak with us directly for bookings, room availability and travel advice.
                </p>
                <p className="mt-4 text-base font-semibold text-primary">{HOTEL.phone}</p>
              </a>
            </Reveal>

            {/* WhatsApp */}
            <Reveal delay={80}>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col items-start rounded-2xl border border-border/70 bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <MessageCircle className="h-5 w-5" />
                </span>
                <h2 className="mt-5 font-display text-2xl">WhatsApp</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Message us on WhatsApp for the fastest response — we'll check availability and confirm your booking.
                </p>
                <p className="mt-4 text-base font-semibold text-primary">Chat with us</p>
              </a>
            </Reveal>

            {/* Get Directions */}
            <Reveal delay={160}>
              <a
                href={DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col items-start rounded-2xl border border-border/70 bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Navigation className="h-5 w-5" />
                </span>
                <h2 className="mt-5 font-display text-2xl">Get Directions</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Open Google Maps and navigate straight to our gate in Old Manali.
                </p>
                <p className="mt-4 text-base font-semibold text-primary">Open in Maps</p>
              </a>
            </Reveal>
          </div>

          {/* Details */}
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <Reveal>
              <div className="rounded-3xl border border-border/70 bg-secondary/50 p-8">
                <h2 className="font-display text-3xl">Hotel details</h2>
                <ul className="mt-6 space-y-5 text-sm">
                  <li className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <p className="font-semibold text-foreground">Address</p>
                      <p className="mt-1 text-muted-foreground">{HOTEL.address}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <p className="font-semibold text-foreground">Phone / WhatsApp</p>
                      <p className="mt-1 text-muted-foreground">{HOTEL.phone}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <p className="font-semibold text-foreground">Front Desk</p>
                      <p className="mt-1 text-muted-foreground">Open 24 hours · Check-in anytime</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Star className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <p className="font-semibold text-foreground">Rating</p>
                      <p className="mt-1 text-muted-foreground">
                        {HOTEL.rating}/5 on Google · {HOTEL.reviews}+ reviews · 3-Star Hotel
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={120}>
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
                  className="h-[26rem] w-full"
                />
              </div>
            </Reveal>
          </div>

          {/* CTA */}
          <Reveal>
            <div className="mt-12 flex flex-col items-center gap-4 rounded-3xl border border-border/70 bg-card p-10 text-center">
              <h2 className="font-display text-3xl">Send us a message</h2>
              <p className="max-w-xl text-sm text-muted-foreground">
                Tap below to open WhatsApp with a pre-filled message — just hit send and we'll take it from there.
              </p>
              <WhatsAppButton className="mt-2" />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
