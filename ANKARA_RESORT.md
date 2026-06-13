# Ankara Resort — Website Redesign

A high-performance, mobile-first, conversion-optimised website for **Ankara Resort**, a
family-oriented nature resort on Merisho Road, Ongata Rongai, Kajiado County, Kenya.

Designed & built by **[RN Studio](https://rn-studios.vercel.app/)** (Raymond Ndungu),
based on the Ankara Resort Website Redesign PRD (v1.0).

---

## ✨ Highlights

- **Cinematic, animated UI** — Framer Motion parallax hero, scroll reveals, animated
  counters, interactive lightbox gallery and a 4-step booking flow.
- **Brand system from the PRD** — Deep Forest Green `#1B4332`, Warm Gold `#B7791F`,
  cream backgrounds, Playfair Display headings + Inter body.
- **Full site architecture** — Home, Rooms (+ detail), Activities (+ detail), Dining,
  Gallery, Reviews, About, Booking, Contact and a custom 404.
- **Conversion-first** — working booking widget (M-Pesa / card / reserve-later), sticky
  room booking cards, WhatsApp click-to-chat, enquiry forms throughout.
- **SEO-ready** — per-page metadata, Open Graph, `Resort` JSON-LD structured data,
  dynamic `sitemap.xml` and `robots.txt`.
- **Social proof** — guest reviews adapted from public Google / Facebook / TripAdvisor
  feedback (≈4.4★, 150+ reviews).

## 🛠 Tech Stack

| Layer      | Choice                               |
| ---------- | ------------------------------------ |
| Framework  | Next.js 14 (App Router) + TypeScript |
| Styling    | Tailwind CSS                         |
| Animation  | Framer Motion                        |
| Icons      | lucide-react                         |
| Hosting    | Vercel-ready                         |

## 🚀 Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## 📁 Structure

```
app/                 # routes (App Router)
  page.tsx           # homepage
  rooms/             # listing + [slug] detail
  activities/        # listing + [slug] detail
  dining/ gallery/ reviews/ about/ book/ contact/
  sitemap.ts robots.ts not-found.tsx
components/           # Navbar, Footer, Hero, cards, booking widget, UI primitives
lib/data.ts          # single source of truth: rooms, activities, dining, reviews, site config
```

## 🔌 Going live — wiring real data

The site is structured so the resort team can drop in real content quickly:

- **Photos & videos** — replace the image URLs in `lib/data.ts` and the section
  components with Ankara's own Google / Facebook / professional photography.
- **Pricing & amenities** — update the `rooms` / `activities` / `dining` data
  (current figures are placeholders pending the client content intake, PRD §8.3).
- **Bookings & payments** — connect the booking widget to M-Pesa Daraja (STK push)
  and Pesapal/Flutterwave, with Resend/SendGrid for confirmations (PRD §6.1).
- **Reviews** — swap the static reviews for a live Google Places / Reviews feed.
- **Analytics** — add GA4 + Meta Pixel.

> Imagery currently uses curated, brand-matched stock (golden-hour nature, cottages,
> dining, gardens) as a faithful visual placeholder. The live resort assets were not
> reachable from the build environment and should be swapped in before launch.

---

© Ankara Resort. Built by RN Studio · raymondndungu8@gmail.com
