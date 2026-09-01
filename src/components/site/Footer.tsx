import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Star } from "lucide-react";
import { HOTEL, DIRECTIONS_URL } from "@/lib/hotel";
import { WhatsAppButton } from "./WhatsAppButton";

export function Footer() {
  return (
    <footer className="bg-foreground text-background/85">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <h3 className="font-display text-2xl text-background">Apple Field House</h3>
          <p className="mt-1 text-[11px] tracking-[0.24em] uppercase text-background/50">
            Hotel in Old Manali
          </p>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-background/70">
            A peaceful 3-star mountain stay set inside apple orchards, moments from Manu Temple, with
            Himalayan views, warm wooden rooms and an on-site cafe.
          </p>
          <div className="mt-5 flex items-center gap-2 text-sm text-background/70">
            <Star className="h-4 w-4 fill-current text-amber-400" />
            {HOTEL.rating}/5 Google Rating · {HOTEL.reviews}+ reviews
          </div>
          <WhatsAppButton className="mt-6" />
        </div>

        <div>
          <h4 className="text-xs tracking-[0.2em] uppercase text-background/50">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              ["/rooms", "Rooms"],
              ["/about", "About"],
              ["/amenities", "Amenities"],
              ["/gallery", "Gallery"],
              ["/location", "Location"],
              ["/contact", "Contact"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="text-background/70 transition-colors hover:text-background">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs tracking-[0.2em] uppercase text-background/50">Reach Us</h4>
          <ul className="mt-4 space-y-3 text-sm text-background/70">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              {HOTEL.address}
            </li>
            <li className="flex gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0" />
              <a href={HOTEL.phoneHref} className="hover:text-background">
                {HOTEL.phone}
              </a>
            </li>
            <li>
              <a
                href={DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-background"
              >
                Get Directions
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-background/10 py-6 text-center text-xs text-background/50">
        © {new Date().getFullYear()} Apple Field House, Old Manali. All rights reserved.
      </div>
    </footer>
  );
}
