"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronRight, ChevronLeft, Smartphone, CreditCard, MessageCircle, CalendarCheck } from "lucide-react";
import { rooms, site } from "@/lib/data";

const steps = ["Room", "Dates & Guests", "Your Details", "Payment"] as const;

export function BookingWidget({ initialRoom }: { initialRoom?: string }) {
  const [step, setStep] = useState(0);
  const [roomSlug, setRoomSlug] = useState(initialRoom ?? rooms[0].slug);
  const [nights, setNights] = useState(1);
  const [pay, setPay] = useState<"mpesa" | "card" | "whatsapp">("mpesa");
  const [done, setDone] = useState(false);

  const room = rooms.find((r) => r.slug === roomSlug) ?? rooms[0];
  const total = room.price * nights;

  const canNext = true;
  const goNext = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const goBack = () => setStep((s) => Math.max(s - 1, 0));

  if (done) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-3xl bg-white p-10 text-center shadow-card ring-1 ring-forest/10"
      >
        <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-forest text-gold-light"><CalendarCheck size={32} /></span>
        <h2 className="mt-5 font-display text-3xl text-forest">Booking request received!</h2>
        <p className="mx-auto mt-3 max-w-md text-forest-900/65">
          Thank you for choosing Ankara Resort. We've recorded your request for the{" "}
          <strong className="text-forest">{room.name}</strong> ({nights} night{nights > 1 ? "s" : ""}).
          You'll receive an SMS and email confirmation shortly. Need anything sooner?
        </p>
        <a href={site.socials.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary mt-6">
          <MessageCircle size={16} /> Message us on WhatsApp
        </a>
      </motion.div>
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
      {/* Form panel */}
      <div className="rounded-3xl bg-white p-6 shadow-card ring-1 ring-forest/10 sm:p-8">
        {/* Stepper */}
        <ol className="mb-8 flex items-center gap-2">
          {steps.map((s, i) => (
            <li key={s} className="flex flex-1 items-center gap-2">
              <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full text-xs font-semibold transition-colors ${
                i < step ? "bg-forest text-cream" : i === step ? "bg-gold text-white" : "bg-forest/10 text-forest-900/50"
              }`}>
                {i < step ? <Check size={15} /> : i + 1}
              </span>
              <span className={`hidden text-xs font-medium sm:block ${i === step ? "text-forest" : "text-forest-900/45"}`}>{s}</span>
              {i < steps.length - 1 && <span className="hidden h-px flex-1 bg-forest/10 sm:block" />}
            </li>
          ))}
        </ol>

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -16 }}
            transition={{ duration: 0.25 }}
          >
            {step === 0 && (
              <div>
                <h3 className="font-display text-2xl text-forest">Choose your room</h3>
                <div className="mt-5 space-y-3">
                  {rooms.map((r) => (
                    <button
                      key={r.slug}
                      onClick={() => setRoomSlug(r.slug)}
                      className={`flex w-full items-center gap-4 rounded-2xl border p-3 text-left transition-all ${
                        roomSlug === r.slug ? "border-gold bg-gold/5 ring-1 ring-gold" : "border-forest/10 hover:border-forest/30"
                      }`}
                    >
                      <Image src={r.image} alt={r.name} width={84} height={84} className="h-20 w-20 shrink-0 rounded-xl object-cover" />
                      <div className="flex-1">
                        <p className="font-display text-lg text-forest">{r.name}</p>
                        <p className="text-xs text-forest-900/55">{r.capacity} · {r.bed}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-forest">KES {r.price.toLocaleString()}</p>
                        <p className="text-xs text-forest-900/50">/ night</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 1 && (
              <div>
                <h3 className="font-display text-2xl text-forest">When are you visiting?</h3>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <Labeled label="Check-in"><input type="date" className="field" /></Labeled>
                  <Labeled label="Check-out"><input type="date" className="field" /></Labeled>
                  <Labeled label="Nights">
                    <input type="number" min={1} value={nights} onChange={(e) => setNights(Math.max(1, Number(e.target.value)))} className="field" />
                  </Labeled>
                  <Labeled label="Guests"><input type="number" min={1} defaultValue={2} className="field" /></Labeled>
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <h3 className="font-display text-2xl text-forest">Your details</h3>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <Labeled label="Full name"><input className="field" placeholder="Jane Wanjiku" /></Labeled>
                  <Labeled label="Phone"><input type="tel" className="field" placeholder="+254 700 000000" /></Labeled>
                  <Labeled label="Email" full><input type="email" className="field" placeholder="you@example.com" /></Labeled>
                  <Labeled label="Special requests" full>
                    <textarea rows={3} className="field" placeholder="Anything we should know?" />
                  </Labeled>
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <h3 className="font-display text-2xl text-forest">How would you like to pay?</h3>
                <div className="mt-5 space-y-3">
                  <PayOption active={pay === "mpesa"} onClick={() => setPay("mpesa")} icon={<Smartphone size={20} />} title="M-Pesa" desc="Secure STK push to your phone" />
                  <PayOption active={pay === "card"} onClick={() => setPay("card")} icon={<CreditCard size={20} />} title="Card" desc="Visa / Mastercard via secure gateway" />
                  <PayOption active={pay === "whatsapp"} onClick={() => setPay("whatsapp")} icon={<MessageCircle size={20} />} title="Reserve & pay later" desc="Confirm on WhatsApp, pay at check-in" />
                </div>
                <p className="mt-4 text-xs text-forest-900/50">
                  This is a demo booking flow. Connect M-Pesa Daraja & Pesapal/Flutterwave to take live payments (PRD §6.1).
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="mt-8 flex items-center justify-between">
          <button onClick={goBack} disabled={step === 0} className="btn-ghost disabled:cursor-not-allowed disabled:opacity-40">
            <ChevronLeft size={16} /> Back
          </button>
          {step < steps.length - 1 ? (
            <button onClick={goNext} disabled={!canNext} className="btn-primary">
              Continue <ChevronRight size={16} />
            </button>
          ) : (
            <button onClick={() => setDone(true)} className="btn-primary">
              {pay === "whatsapp" ? "Reserve now" : "Confirm & pay"} <Check size={16} />
            </button>
          )}
        </div>
      </div>

      {/* Summary panel */}
      <aside className="lg:sticky lg:top-24 lg:h-fit">
        <div className="overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-forest/10">
          <div className="relative h-40">
            <Image src={room.image} alt={room.name} fill sizes="40vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-900/70 to-transparent" />
            <div className="absolute bottom-3 left-4 text-cream">
              <p className="text-xs uppercase tracking-widest text-gold-light">Your stay</p>
              <p className="font-display text-xl">{room.name}</p>
            </div>
          </div>
          <div className="space-y-3 p-6 text-sm">
            <Row label={`KES ${room.price.toLocaleString()} × ${nights} night${nights > 1 ? "s" : ""}`} value={`KES ${total.toLocaleString()}`} />
            <Row label="Taxes & service" value="Included" muted />
            <div className="my-2 h-px bg-forest/10" />
            <Row label="Total" value={`KES ${total.toLocaleString()}`} bold />
            <p className="pt-2 text-xs text-forest-900/50">≈ ${(room.priceUsd * nights).toLocaleString()} · pay in KES</p>
          </div>
        </div>
        <a href={`tel:${site.phoneRaw}`} className="mt-4 block text-center text-sm text-forest-900/60">
          Prefer to call? <span className="font-semibold text-forest">{site.phone}</span>
        </a>
      </aside>

      <style jsx global>{`
        .field {
          width: 100%;
          border-radius: 0.75rem;
          border: 1px solid rgba(27, 67, 50, 0.15);
          background: rgba(250, 250, 247, 0.5);
          padding: 0.7rem 1rem;
          font-size: 0.875rem;
          color: #1b4332;
        }
        .field:focus {
          outline: none;
          border-color: #b7791f;
          box-shadow: 0 0 0 1px #b7791f;
        }
      `}</style>
    </div>
  );
}

function Labeled({ label, children, full }: { label: string; children: React.ReactNode; full?: boolean }) {
  return (
    <label className={`block ${full ? "sm:col-span-2" : ""}`}>
      <span className="mb-1.5 block text-sm font-medium text-forest">{label}</span>
      {children}
    </label>
  );
}

function PayOption({ active, onClick, icon, title, desc }: { active: boolean; onClick: () => void; icon: React.ReactNode; title: string; desc: string }) {
  return (
    <button
      onClick={onClick}
      className={`flex w-full items-center gap-4 rounded-2xl border p-4 text-left transition-all ${
        active ? "border-gold bg-gold/5 ring-1 ring-gold" : "border-forest/10 hover:border-forest/30"
      }`}
    >
      <span className={`grid h-11 w-11 place-items-center rounded-xl ${active ? "bg-gold text-white" : "bg-forest/10 text-forest"}`}>{icon}</span>
      <span className="flex-1">
        <span className="block font-semibold text-forest">{title}</span>
        <span className="block text-xs text-forest-900/55">{desc}</span>
      </span>
      <span className={`grid h-5 w-5 place-items-center rounded-full border ${active ? "border-gold bg-gold text-white" : "border-forest/25"}`}>
        {active && <Check size={12} />}
      </span>
    </button>
  );
}

function Row({ label, value, bold, muted }: { label: string; value: string; bold?: boolean; muted?: boolean }) {
  return (
    <div className="flex items-center justify-between">
      <span className={muted ? "text-forest-900/50" : "text-forest-900/70"}>{label}</span>
      <span className={bold ? "font-display text-lg text-forest" : "font-medium text-forest"}>{value}</span>
    </div>
  );
}
