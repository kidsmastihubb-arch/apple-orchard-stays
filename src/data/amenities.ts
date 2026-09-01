import {
  Wifi,
  CircleParking,
  Trees,
  WashingMachine,
  Shirt,
  Clock,
  ConciergeBell,
  Coffee,
  Croissant,
  Mountain,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

export const amenities: { icon: LucideIcon; name: string; detail: string }[] = [
  { icon: Wifi, name: "Free Wi-Fi", detail: "Connectivity across rooms and the cafe for work and video calls." },
  { icon: CircleParking, name: "Free Parking", detail: "On-site parking right at the property, even in peak season." },
  { icon: Trees, name: "Common Garden", detail: "Open lawn seating among the apple trees for evenings and bonfire chats." },
  { icon: WashingMachine, name: "Laundry", detail: "Laundry service on request — handy for longer Manali stays." },
  { icon: Shirt, name: "Dry Cleaning", detail: "Dry cleaning arranged through the front desk." },
  { icon: Clock, name: "24-Hour Front Desk", detail: "Late check-ins, early treks and taxi help at any hour." },
  { icon: ConciergeBell, name: "Room Service", detail: "Hot meals, chai and coffee delivered to your room." },
  { icon: Coffee, name: "On-site Cafe", detail: "Homely Himachali and Indian food served through the day." },
  { icon: Croissant, name: "Breakfast", detail: "Fresh breakfast available depending on your booking plan." },
  { icon: Mountain, name: "Mountain Views", detail: "Snow peaks, deodar forests and orchard views from the property." },
  { icon: Sparkles, name: "Daily Housekeeping", detail: "Clean, fresh rooms serviced every single day." },
];
