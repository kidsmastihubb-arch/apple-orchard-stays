import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { HOTEL } from "@/lib/hotel";
import { WhatsAppButton } from "./WhatsAppButton";

const links = [
  { to: "/", label: "Home" },
  { to: "/rooms", label: "Rooms" },
  { to: "/about", label: "About" },
  { to: "/amenities", label: "Amenities" },
  { to: "/gallery", label: "Gallery" },
  { to: "/location", label: "Location" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-panel shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3 lg:px-8">
        <Link to="/" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <span
            className={`grid h-10 w-10 shrink-0 place-items-center rounded-full border text-sm font-semibold ${
              scrolled ? "border-primary/30 text-primary" : "border-white/50 text-white"
            }`}
          >
            AF
          </span>
          <span className="min-w-0">
            <span
              className={`block truncate font-display text-lg leading-tight font-semibold ${
                scrolled ? "text-foreground" : "text-white"
              }`}
            >
              Apple Field House
            </span>
            <span
              className={`block truncate text-[10px] tracking-[0.22em] uppercase ${
                scrolled ? "text-muted-foreground" : "text-white/70"
              }`}
            >
              Old Manali
            </span>
          </span>
        </Link>

        <div className="flex items-center gap-2">
          <nav className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeProps={{ className: "text-primary" }}
                className={`rounded-full px-3 py-2 text-sm transition-colors ${
                  scrolled ? "text-foreground/80 hover:text-primary" : "text-white/85 hover:text-white"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <a
            href={HOTEL.phoneHref}
            aria-label="Call the hotel"
            className={`hidden h-10 w-10 place-items-center rounded-full border transition-colors sm:grid ${
              scrolled ? "border-border text-foreground hover:bg-secondary" : "border-white/40 text-white hover:bg-white/15"
            }`}
          >
            <Phone className="h-4 w-4" />
          </a>
          <WhatsAppButton label="Book Now" className="hidden px-5 py-2.5 md:inline-flex" />
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className={`grid h-10 w-10 place-items-center rounded-full border lg:hidden ${
              scrolled ? "border-border text-foreground" : "border-white/40 text-white"
            }`}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="glass-panel border-t border-border/60 lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-5 py-3">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                activeProps={{ className: "text-primary" }}
                className="border-b border-border/50 py-3 text-sm text-foreground/85 last:border-0"
              >
                {l.label}
              </Link>
            ))}
            <WhatsAppButton className="mt-4 mb-2" />
          </nav>
        </div>
      )}
    </header>
  );
}
