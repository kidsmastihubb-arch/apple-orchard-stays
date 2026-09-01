export const HOTEL = {
  name: "Apple Field House",
  fullName: "Apple Field House – Hotel in Old Manali",
  address: "Old Manali, Manali, Himachal Pradesh 175131",
  phone: "+91 94187 48343",
  phoneHref: "tel:+919418748343",
  rating: "4.7",
  reviews: "286",
} as const;

export const WHATSAPP_MESSAGE =
  "Hello Apple Field House, I would like to enquire about room availability and booking.";

export const WHATSAPP_URL = `https://wa.me/919418748343?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;

export const DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=Apple+Field+House+-+Hotel+in+Old+Manali";
