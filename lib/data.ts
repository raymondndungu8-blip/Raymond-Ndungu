/**
 * Central content model for Ankara Resort.
 * Pricing and amenities are placeholders pending the client's content intake
 * (see PRD §8.3) — structured so the resort team can drop in real figures.
 *
 * Imagery currently uses curated stock that matches the brand direction
 * (golden-hour nature, cottages, dining, gardens). Swap `image`/`gallery`
 * URLs for the resort's own Google / Facebook photography when supplied.
 */

export const site = {
  name: "Ankara Resort",
  tagline: "Your Nature Escape, Just Outside Nairobi",
  domain: "ankararesort.co.ke",
  phone: "+254 796 016128",
  phoneRaw: "254796016128",
  email: "info@ankararesort.co.ke",
  address: "Merisho Road, Ongata Rongai, Kajiado County, Kenya",
  mapsQuery: "Ankara+Resort+Merisho+Road+Ongata+Rongai",
  hours: "Open Daily · Monday to Sunday",
  rating: 4.4,
  reviewCount: 157,
  socials: {
    facebook: "https://www.facebook.com/ankararesort",
    instagram: "https://www.instagram.com/ankaragardenresortke/",
    whatsapp: "https://wa.me/254796016128",
  },
} as const;

export const stats = [
  { value: 12, suffix: "+", label: "Acres of green gardens" },
  { value: 4.4, suffix: "/5", label: "Guest rating", decimals: 1 },
  { value: 15000, suffix: "+", label: "Happy guests hosted" },
  { value: 7, suffix: "", label: "Years of hospitality" },
] as const;

export type Room = {
  slug: string;
  name: string;
  tagline: string;
  price: number; // KES per night — placeholder pending client confirmation
  priceUsd: number;
  capacity: string;
  size: string;
  bed: string;
  image: string;
  gallery: string[];
  description: string;
  amenities: string[];
  featured?: boolean;
};

const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const rooms: Room[] = [
  {
    slug: "standard-cottage",
    name: "Standard Cottage",
    tagline: "Cosy garden-view comfort",
    price: 7500,
    priceUsd: 58,
    capacity: "2 Guests",
    size: "28 m²",
    bed: "1 Queen Bed",
    image: u("photo-1611892440504-42a792e24d32"),
    gallery: [
      u("photo-1611892440504-42a792e24d32"),
      u("photo-1582719478250-c89cae4dc85b"),
      u("photo-1631049307264-da0ec9d70304"),
      u("photo-1560448204-e02f11c3d0e2"),
    ],
    description:
      "A warm, light-filled cottage opening onto the gardens — the perfect base for a restful weekend in nature. Wake to birdsong, step straight onto the lawns, and unwind far from the city's noise.",
    amenities: ["Free WiFi", "En-suite bathroom", "Garden view", "Free parking", "Daily housekeeping", "Hot shower"],
  },
  {
    slug: "deluxe-room",
    name: "Deluxe Room",
    tagline: "Elevated calm with a private balcony",
    price: 11500,
    priceUsd: 88,
    capacity: "2–3 Guests",
    size: "36 m²",
    bed: "1 King Bed",
    image: u("photo-1618773928121-c32242e63f39"),
    gallery: [
      u("photo-1618773928121-c32242e63f39"),
      u("photo-1566665797739-1674de7a421a"),
      u("photo-1590490360182-c33d57733427"),
      u("photo-1551776235-dde6d482a094"),
    ],
    description:
      "Refined and spacious, the Deluxe Room pairs a plush king bed with a private balcony framing the resort's greenery. Thoughtful touches and golden-hour light make it a favourite for couples.",
    amenities: ["Free WiFi", "Air conditioning", "Private balcony", "En-suite bathroom", "Smart TV", "Work desk", "Free parking"],
    featured: true,
  },
  {
    slug: "executive-cottage",
    name: "Executive Cottage",
    tagline: "Our signature suite for special stays",
    price: 16500,
    priceUsd: 126,
    capacity: "2–4 Guests",
    size: "52 m²",
    bed: "1 King + Lounge",
    image: u("photo-1582719508461-905c673771fd"),
    gallery: [
      u("photo-1582719508461-905c673771fd"),
      u("photo-1591088398332-8a7791972843"),
      u("photo-1596394516093-501ba68a0ba6"),
      u("photo-1578683010236-d716f9a3f461"),
    ],
    description:
      "The Executive Cottage is the resort at its most generous — a separate lounge, a king bedroom, and wide views of the grounds. Made for anniversaries, milestones, and those who simply want the very best.",
    amenities: ["Free WiFi", "Air conditioning", "Separate lounge", "Premium en-suite", "Private terrace", "Smart TV", "Mini bar", "Free parking"],
  },
];

export type Activity = {
  slug: string;
  name: string;
  short: string;
  price: string;
  image: string;
  description: string;
  highlights: string[];
};

export const activities: Activity[] = [
  {
    slug: "picnic",
    name: "Garden Picnics",
    short: "Lazy afternoons on the lawns",
    price: "From KES 1,500 / person",
    image: u("photo-1526401485004-46910ecc8e51"),
    description:
      "Spread out on twelve acres of manicured green with a curated picnic setup — blankets, baskets, and shade beneath the trees. Ideal for families, dates, and lazy Sunday catch-ups.",
    highlights: ["Curated picnic baskets", "Shaded lawn spots", "Kids play area", "Bring-your-own or order in"],
  },
  {
    slug: "photoshoot",
    name: "Photoshoots",
    short: "Backdrops that do the work for you",
    price: "From KES 5,000 / session",
    image: u("photo-1519741497674-611481863552"),
    description:
      "From pre-wedding to graduation and brand shoots, Ankara's gardens, water features, and golden-hour light give photographers endless backdrops in one location.",
    highlights: ["Multiple garden sets", "Golden-hour light", "Changing facilities", "Drone-friendly grounds"],
  },
  {
    slug: "team-building",
    name: "Team Building",
    short: "Bring the whole office out",
    price: "Custom group packages",
    image: u("photo-1517457373958-b7bdd4587205"),
    description:
      "Get the team out of the boardroom and into the open. Open lawns, breakout spaces, and full catering make Ankara a natural fit for corporate retreats, seminars, and team days.",
    highlights: ["Open-air activity grounds", "Breakout & seminar spaces", "Group catering", "Tailored programmes"],
  },
  {
    slug: "garden-events",
    name: "Garden Events",
    short: "Weddings, birthdays & celebrations",
    price: "Custom event packages",
    image: u("photo-1519225421980-715cb0215aed"),
    description:
      "Say 'I do' or mark a milestone surrounded by greenery. Our event lawns host weddings, baby showers, birthdays, and cocktail receptions with full planning support.",
    highlights: ["Weddings & receptions", "Banquet & cocktail setups", "On-site planning", "Ample guest parking"],
  },
];

export const dining = {
  intro:
    "From slow weekend breakfasts to sundowners at the bar, our kitchen leans on fresh, local produce and unhurried hospitality.",
  hours: "Open Daily · Monday to Sunday · 7:00am – 10:00pm",
  menu: [
    { name: "Nyama Choma Platter", desc: "Slow-grilled meats, kachumbari & ugali", price: "KES 1,800", image: u("photo-1544025162-d76694265947", 800) },
    { name: "Garden Breakfast", desc: "Eggs, seasonal fruit, fresh juice & coffee", price: "KES 950", image: u("photo-1525351484163-7529414344d8", 800) },
    { name: "Wood-fired Pizza", desc: "Hand-stretched, fresh toppings", price: "KES 1,200", image: u("photo-1513104890138-7c749659a591", 800) },
    { name: "Tilapia & Chips", desc: "Whole fish, crisp fries, tangy salsa", price: "KES 1,500", image: u("photo-1580476262798-bddd9f4b7369", 800) },
    { name: "Signature Cocktails", desc: "Sundowners crafted at the club bar", price: "From KES 600", image: u("photo-1551024709-8f23befc6f87", 800) },
    { name: "Sunday Roast", desc: "A hearty plate for lazy afternoons", price: "KES 1,650", image: u("photo-1432139555190-58524dae6a55", 800) },
  ],
} as const;

export type GalleryItem = { src: string; category: string; alt: string };

export const galleryCategories = ["All", "Rooms", "Dining", "Activities", "Events", "Nature"] as const;

export const gallery: GalleryItem[] = [
  { src: u("photo-1582719508461-905c673771fd"), category: "Rooms", alt: "Executive cottage interior" },
  { src: u("photo-1564501049412-61c2a3083791"), category: "Nature", alt: "Resort gardens at golden hour" },
  { src: u("photo-1519225421980-715cb0215aed"), category: "Events", alt: "Garden wedding setup" },
  { src: u("photo-1544025162-d76694265947"), category: "Dining", alt: "Grilled platter" },
  { src: u("photo-1526401485004-46910ecc8e51"), category: "Activities", alt: "Picnic on the lawns" },
  { src: u("photo-1618773928121-c32242e63f39"), category: "Rooms", alt: "Deluxe room" },
  { src: u("photo-1505761671935-60b3a7427bad"), category: "Nature", alt: "Pathway through trees" },
  { src: u("photo-1530103862676-de8c9debad1d"), category: "Events", alt: "Celebration table setting" },
  { src: u("photo-1517457373958-b7bdd4587205"), category: "Activities", alt: "Team building outdoors" },
  { src: u("photo-1551024709-8f23befc6f87"), category: "Dining", alt: "Cocktails at the bar" },
  { src: u("photo-1571896349842-33c89424de2d"), category: "Rooms", alt: "Made-up bed with linens" },
  { src: u("photo-1441974231531-c6227db76b6e"), category: "Nature", alt: "Forest canopy" },
];

export type Review = {
  name: string;
  location: string;
  rating: number;
  text: string;
  source: "Google" | "Facebook" | "TripAdvisor";
  avatar: string;
};

/**
 * Reviews adapted from publicly available guest feedback across Google,
 * TripAdvisor and social media (≈4.4★ across 150+ reviews). Replace with a
 * live Google Reviews / Places API feed before launch (PRD §6.6).
 */
export const reviews: Review[] = [
  {
    name: "Wanjiru K.",
    location: "Nairobi",
    rating: 5,
    text: "The most beautiful resort in Kajiado County. I loved the calm, serene atmosphere and the green vegetation everywhere. A proper escape from the city.",
    source: "Google",
    avatar: "https://i.pravatar.cc/120?img=45",
  },
  {
    name: "Brian O.",
    location: "Ongata Rongai",
    rating: 5,
    text: "Everyone was so welcoming and answered all of our questions. Very organised and well run — we felt looked after the whole stay.",
    source: "Google",
    avatar: "https://i.pravatar.cc/120?img=12",
  },
  {
    name: "Achieng' M.",
    location: "Kisumu",
    rating: 4,
    text: "A great place to relax after a busy week. The gardens are gorgeous for photos and the team building grounds were perfect for our office day.",
    source: "Facebook",
    avatar: "https://i.pravatar.cc/120?img=32",
  },
  {
    name: "David & Faith",
    location: "Karen",
    rating: 5,
    text: "We held our garden event here and it was magical. Clean, spacious and beautiful greenery. Our guests are still talking about it.",
    source: "Google",
    avatar: "https://i.pravatar.cc/120?img=15",
  },
  {
    name: "Susan N.",
    location: "Nairobi",
    rating: 4,
    text: "Lovely budget-friendly getaway hidden in Rongai. The space is clean and beautiful — a real gem so close to town.",
    source: "TripAdvisor",
    avatar: "https://i.pravatar.cc/120?img=20",
  },
  {
    name: "Kevin M.",
    location: "Langata",
    rating: 5,
    text: "Brought the family for a Sunday picnic and the kids never wanted to leave. Great food, friendly staff and so much green space.",
    source: "Facebook",
    avatar: "https://i.pravatar.cc/120?img=53",
  },
];

export const faqs = [
  {
    q: "How do I make a booking?",
    a: "Use the Book Now page to pick your dates and room, or chat with us instantly on WhatsApp at +254 796 016128. We confirm every booking by SMS and email.",
  },
  {
    q: "Where exactly is Ankara Resort?",
    a: "We're on Merisho Road, Ongata Rongai, Kajiado County — about 30–40 minutes from Nairobi CBD, with ample free parking on-site.",
  },
  {
    q: "Do you host events and team building?",
    a: "Yes. Our gardens host weddings, birthdays, corporate retreats, team building and photoshoots. Send an enquiry and we'll tailor a package for your group.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept M-Pesa and card payments. For online bookings you can pay securely via M-Pesa STK push, with card as a fallback.",
  },
  {
    q: "Is the restaurant open to day visitors?",
    a: "Absolutely. The restaurant and bar are open daily, Monday to Sunday, for both resident guests and day visitors.",
  },
];

export const navLinks = [
  { label: "Rooms", href: "/rooms" },
  { label: "Activities", href: "/activities" },
  { label: "Dining", href: "/dining" },
  { label: "Gallery", href: "/gallery" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
];
