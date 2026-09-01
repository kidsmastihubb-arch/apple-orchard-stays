import { roomWoodView, roomWoodDeluxe, roomYellow, roomPink } from "@/assets/images";

export const rooms = [
  {
    id: "valley-view-wooden-suite",
    name: "Valley View Wooden Suite",
    image: roomWoodView,
    tag: "Most Loved",
    price: "Ideal for couples & small families",
    description:
      "Our largest wood-panelled room with a pitched pine ceiling, twin beds plus a king bed and wide windows framing the deodar slopes across the valley.",
    facilities: ["King + single bed", "Private balcony access", "Hot water 24x7", "Wooden interiors", "Room service"],
    view: "Direct Himalayan valley and orchard views",
  },
  {
    id: "deluxe-pine-room",
    name: "Deluxe Pine Room",
    image: roomWoodDeluxe,
    tag: "Quiet Corner",
    price: "Ideal for couples & long stays",
    description:
      "A calm, spacious room with warm pine ceilings, hardwood floors, work-friendly seating and a large wardrobe — a favourite with digital nomads on long stays.",
    facilities: ["Double bed", "Work desk & chair", "Attached bathroom", "Wardrobe", "Daily housekeeping"],
    view: "Mountain-facing windows with morning sun",
  },
  {
    id: "balcony-family-room",
    name: "Balcony Family Room",
    image: roomYellow,
    tag: "Family Friendly",
    price: "Ideal for families & groups",
    description:
      "A bright, cheerful room opening onto a shared balcony over the orchard — plenty of space for families, with extra bedding available on request.",
    facilities: ["Double bed + extra bedding", "Balcony seating", "Wooden ceiling", "Free Wi-Fi", "Laundry on request"],
    view: "Orchard and village rooftops from the balcony"
  },
  {
    id: "cosy-budget-room",
    name: "Cosy Budget Room",
    image: roomPink,
    tag: "Backpacker Pick",
    price: "Ideal for backpackers & solo travellers",
    description:
      "Simple, spotless and easy on the wallet — a comfortable double bed, a tea table by the window and the same mountain air everyone comes to Old Manali for.",
    facilities: ["Double bed", "Tea table & chairs", "Attached bathroom", "Free parking", "Free Wi-Fi"],
    view: "Window views towards the hills and orchard",
  },
] as const;
