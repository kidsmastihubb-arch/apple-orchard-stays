import { createFileRoute, Link } from "@tanstack/react-router";
import { Star, MapPin, Leaf, Mountain, Coffee, Heart, ArrowRight, Quote } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { rooms } from "@/data/rooms";
import { amenities } from "@/data/amenities";
import { attractions } from "@/data/attractions";
import { HOTEL } from "@/lib/hotel";
import {
  exteriorNight,
  roomWoodView,
  valleySnow,
  cafePlate,
  gardenNight,
  exteriorSnow,
  nightSnow,
  roomWoodDeluxe,
} from "@/assets/images";

export const Route = createFileRoute("/")({
  component: Index,
});

const whyChoose = [
  { icon: Leaf, title: "Inside apple orchards", text: "Wake up to birdsong and the river, not traffic — the house sits among working apple trees." },
  { icon: MapPin, title: "Steps from Manu Temple", text: "The historic Manu Temple is less than 100 metres from our gate, at the quiet upper end of Old Manali." },
  { icon: Mountain, title: "Himalayan valley views", text: "Snow peaks, deodar forests and open valley views from the balconies and garden." },
  { icon: Star, title: "4.7/5 Google rated", text: "286+ reviews from guests who came for a night and stayed for a week." },
];

const testimonials = [
  {
    quote: "The most peaceful stay in Old Manali. Woke up to apple blossoms and mountain views every morning. The staff felt like family by day two.",
    author: "Ananya R.",
    detail: "Couples stay · 3 nights",
  },
  {
    quote: "I came for a weekend and stayed two weeks. The Wi-Fi held up for work calls, the cafe food was home-cooked, and the garden evenings were unreal.",
    author: "Marcus K.",
    detail: "Digital nomad · 14 nights",
  },
  {
    quote: "Spotless rooms, hot water always, and the location couldn't be better — Manu Temple is literally next door. Best value in Old Manali.",
    author: "Priya & Dev",
    detail: "Family stay · 4 nights",
  },
];

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-screen items-center overflow-hidden">
        <img
          src={exteriorNight}
          alt="Apple Field House on a clear Old Manali evening"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/55 via-foreground/40 to-foreground/75" />
        <div className="relative mx-auto w-full max-w-7xl px-5 py-32 lg:px-8">
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-[11px] tracking-[0.32em] uppercase text-white/75">
                Apple Field House · Old Manali
              </p>
              <h1 className="mt-4 font-display text-5xl leading-[1.05] text-white sm:text-6xl lg:text-7xl">
                A Peaceful Stay in the Heart of Old Manali
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
                A cosy 3-star mountain hotel set inside apple orchards, moments from Manu Temple.
                Warm wooden rooms, Himalayan views, home-cooked food and the quiet upper end of Old Manali.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <WhatsAppButton label="Book Your Stay" variant="light" className="px-8 py-4 text-base" />
                <Link
                  to="/rooms"
                  className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-foreground"
                >
                  View Rooms <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="mt-8 flex items-center gap-4 text-sm text-white/80">
                <span className="flex items-center gap-1.5">
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  {HOTEL.rating}/5
                </span>
                <span className="text-white/40">·</span>
                <span>{HOTEL.reviews}+ reviews</span>
                <span className="text-white/40">·</span>
                <span>3-Star Hotel</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <div>
              <p className="text-[11px] tracking-[0.3em] uppercase text-primary">Welcome</p>
              <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
                Old Manali, the way people hope to find it
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Apple Field House began as a family home surrounded by apple trees, and it still feels like one.
                The property sits in the calm upper lanes of Old Manali — past the cafes and the crowd — where the
                loudest sound is the Manalsu river below and the wind through the deodars.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Our rooms are simple and warm: local pine, big windows, hot water and daily housekeeping. There's a
                garden to sit in, a cafe for homely meals, free parking at the gate and Wi-Fi that holds up for work
                calls. Everything else — treks, taxis, the best momo stall — our team is happy to sort out for you.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <WhatsAppButton />
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 rounded-full border border-primary/30 px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  Our Story <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="grid grid-cols-2 gap-4">
              <img
                src={valleySnow}
                alt="Snow-covered Himalayan valley near Apple Field House"
                className="h-56 w-full rounded-2xl object-cover sm:h-72"
              />
              <img
                src={roomWoodDeluxe}
                alt="Wood-panelled guest room at Apple Field House"
                className="mt-8 h-56 w-full rounded-2xl object-cover sm:h-72"
              />
              <img
                src={gardenNight}
                alt="Garden seating at Apple Field House in the evening"
                className="col-span-2 h-52 w-full rounded-2xl object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Rooms preview */}
      <section className="bg-secondary/50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="text-[11px] tracking-[0.3em] uppercase text-primary">Stay With Us</p>
                <h2 className="mt-3 font-display text-4xl sm:text-5xl">Rooms for every kind of traveller</h2>
              </div>
              <Link
                to="/rooms"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:gap-3"
              >
                View all rooms <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {rooms.map((room, i) => (
              <Reveal key={room.id} delay={i * 80}>
                <Link to="/rooms" className="group block h-full overflow-hidden rounded-2xl border border-border/70 bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="relative h-48 overflow-hidden">
                    <img src={room.image} alt={room.name} className="img-zoom h-full w-full object-cover" />
                    <span className="glass-dark absolute top-3 left-3 rounded-full px-3 py-1 text-[10px] tracking-[0.18em] uppercase text-white">
                      {room.tag}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-xl text-foreground">{room.name}</h3>
                    <p className="mt-1 text-xs text-primary">{room.price}</p>
                    <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                      {room.description}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Apple orchard / mountain views */}
      <section className="relative overflow-hidden py-0">
        <div className="relative h-[60vh] min-h-[28rem]">
          <img
            src={valleySnow}
            alt="Himalayan valley views from Apple Field House"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/40 to-transparent" />
          <div className="relative mx-auto flex h-full max-w-7xl items-center px-5 lg:px-8">
            <Reveal>
              <div className="max-w-lg">
                <p className="text-[11px] tracking-[0.3em] uppercase text-white/70">The Surroundings</p>
                <h2 className="mt-3 font-display text-4xl text-white sm:text-5xl">
                  Apple orchards, snow peaks and deodar forests
                </h2>
                <p className="mt-5 text-sm leading-relaxed text-white/85 sm:text-base">
                  Step outside and you're in a working apple orchard. Look up and the Dhauladhar range fills the
                  sky. Walk two minutes and you're at the 14th-century Manu Temple. This is Old Manali at its most
                  authentic — and it's all on your doorstep.
                </p>
                <Link
                  to="/gallery"
                  className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-foreground"
                >
                  See the gallery <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <h2 className="max-w-xl font-display text-4xl sm:text-5xl">Why choose Apple Field House</h2>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {whyChoose.map((item, i) => (
              <Reveal key={item.title} delay={i * 70}>
                <div className="h-full rounded-2xl border border-border/70 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent text-primary">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-xl">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities preview */}
      <section className="bg-secondary/50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="text-[11px] tracking-[0.3em] uppercase text-primary">Included</p>
                <h2 className="mt-3 font-display text-4xl sm:text-5xl">Thoughtful amenities</h2>
              </div>
              <Link
                to="/amenities"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:gap-3"
              >
                All amenities <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {amenities.slice(0, 6).map((a, i) => (
              <Reveal key={a.name} delay={i * 50}>
                <div className="flex items-start gap-4 rounded-2xl border border-border/70 bg-card p-5">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent text-primary">
                    <a.icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display text-lg">{a.name}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{a.detail}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Cafe / dining */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <div className="overflow-hidden rounded-3xl">
              <img
                src={cafePlate}
                alt="Freshly prepared siddu at the Apple Field House cafe"
                className="img-zoom h-[28rem] w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div>
              <p className="text-[11px] tracking-[0.3em] uppercase text-primary">Dining</p>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl">The cafe downstairs</h2>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Our on-site cafe serves homely, freshly cooked meals through the day — Himachali plates like siddu,
                everyday Indian comfort food, and endless cups of chai and coffee. Breakfast is available depending
                on your booking plan, and room service brings it all upstairs when the morning is too cold to move.
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

      {/* Nearby attractions */}
      <section className="bg-secondary/50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="text-[11px] tracking-[0.3em] uppercase text-primary">Around You</p>
                <h2 className="mt-3 font-display text-4xl sm:text-5xl">Nearby attractions</h2>
              </div>
              <Link
                to="/location"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:gap-3"
              >
                Full location <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {attractions.map((a, i) => (
              <Reveal key={a.name} delay={i * 50}>
                <div className="flex items-start justify-between gap-4 rounded-2xl border border-border/70 bg-card p-5">
                  <div className="min-w-0">
                    <h3 className="font-display text-lg">{a.name}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{a.note}</p>
                  </div>
                  <span className="shrink-0 rounded-full bg-accent px-3 py-1 text-[11px] font-medium text-accent-foreground">
                    {a.distance}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Guest experience */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <div className="text-center">
              <p className="text-[11px] tracking-[0.3em] uppercase text-primary">Guest Stories</p>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl">What our guests say</h2>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.author} delay={i * 80}>
                <figure className="flex h-full flex-col rounded-2xl border border-border/70 bg-card p-7">
                  <Quote className="h-7 w-7 text-primary/30" />
                  <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/85">
                    "{t.quote}"
                  </blockquote>
                  <figcaption className="mt-5 border-t border-border/60 pt-4">
                    <div className="flex items-center gap-1">
                      {[0, 1, 2, 3, 4].map((s) => (
                        <Star key={s} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="mt-2 font-display text-base text-foreground">{t.author}</p>
                    <p className="text-xs text-muted-foreground">{t.detail}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="relative overflow-hidden py-0">
        <div className="relative h-[50vh] min-h-[24rem]">
          <img
            src={nightSnow}
            alt="Snowy night at Apple Field House, Old Manali"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/60 to-foreground/70" />
          <div className="relative mx-auto flex h-full max-w-3xl flex-col items-center justify-center px-5 text-center lg:px-8">
            <Reveal>
              <div>
                <Heart className="mx-auto h-8 w-8 text-white/80" />
                <h2 className="mt-4 font-display text-4xl text-white sm:text-5xl">
                  Ready for a peaceful mountain stay?
                </h2>
                <p className="mt-4 max-w-xl text-sm text-white/80 sm:text-base">
                  Message us on WhatsApp and we'll check availability, suggest the right room and help plan your
                  trip to Old Manali — no booking fees, no middlemen.
                </p>
                <WhatsAppButton
                  label="Book Your Stay on WhatsApp"
                  variant="light"
                  className="mt-8 px-8 py-4 text-base"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
