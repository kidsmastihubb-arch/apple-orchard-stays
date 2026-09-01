import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/hotel";

export function WhatsAppButton({
  label = "Book Your Stay on WhatsApp",
  variant = "solid",
  className = "",
}: {
  label?: string;
  variant?: "solid" | "outline" | "light";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 hover:-translate-y-0.5";
  const styles = {
    solid:
      "bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:bg-primary/90",
    outline:
      "border border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground",
    light: "glass-dark text-white hover:bg-white hover:text-foreground",
  }[variant];

  return (
    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={`${base} ${styles} ${className}`}>
      <MessageCircle className="h-4 w-4 shrink-0" />
      {label}
    </a>
  );
}
