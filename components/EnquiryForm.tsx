"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Send } from "lucide-react";

export function EnquiryForm({ context = "General", compact = false }: { context?: string; compact?: boolean }) {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-3xl bg-forest p-8 text-center text-cream"
      >
        <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-gold text-forest"><Check size={28} /></span>
        <h3 className="mt-4 font-display text-2xl">Thank you!</h3>
        <p className="mt-2 text-sm text-cream/75">
          Your enquiry has reached our team. We'll be in touch within a few hours — or reach us
          instantly on WhatsApp.
        </p>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="rounded-3xl bg-white p-6 shadow-soft ring-1 ring-forest/10 sm:p-8"
    >
      <input type="hidden" name="context" value={context} />
      <div className={`grid gap-4 ${compact ? "" : "sm:grid-cols-2"}`}>
        <Field label="Full name" name="name" placeholder="Jane Wanjiku" required />
        <Field label="Phone" name="phone" type="tel" placeholder="+254 700 000000" required />
        <Field label="Email" name="email" type="email" placeholder="you@example.com" required />
        <Field label="Preferred date" name="date" type="date" />
        {!compact && <Field label="Group size" name="guests" type="number" placeholder="e.g. 25" />}
      </div>
      <div className="mt-4">
        <label className="mb-1.5 block text-sm font-medium text-forest">Message</label>
        <textarea
          name="message"
          rows={4}
          placeholder={`Tell us about your ${context.toLowerCase()} plans…`}
          className="w-full rounded-xl border border-forest/15 bg-cream/40 px-4 py-3 text-sm text-forest placeholder:text-forest-900/40 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
        />
      </div>
      <button type="submit" className="btn-primary mt-5 w-full sm:w-auto">
        Send enquiry <Send size={16} />
      </button>
    </form>
  );
}

function Field({
  label, name, type = "text", placeholder, required,
}: {
  label: string; name: string; type?: string; placeholder?: string; required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-forest">
        {label}{required && <span className="text-gold"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-forest/15 bg-cream/40 px-4 py-3 text-sm text-forest placeholder:text-forest-900/40 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
      />
    </div>
  );
}
