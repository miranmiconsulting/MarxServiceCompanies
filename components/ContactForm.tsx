"use client";

import { useActionState } from "react";
import { submitEstimate, type EstimateState } from "@/app/actions/submit-estimate";

const initial: EstimateState = { ok: false, message: "" };

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitEstimate, initial);

  return (
    <form action={formAction} noValidate className="space-y-3">
      {/* Honeypot */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-semibold">
          Your Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="w-full rounded-lg border border-neutral-300 px-3 py-3 focus:border-navy focus:outline-none focus:ring-4 focus:ring-navy/15"
        />
      </div>

      <div>
        <label htmlFor="phone" className="mb-1 block text-sm font-semibold">
          Phone Number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          placeholder="(210) 555-1234"
          className="w-full rounded-lg border border-neutral-300 px-3 py-3 focus:border-navy focus:outline-none focus:ring-4 focus:ring-navy/15"
        />
      </div>

      <div>
        <label htmlFor="service" className="mb-1 block text-sm font-semibold">
          What do you need?
        </label>
        <select
          id="service"
          name="service"
          required
          defaultValue=""
          className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-3 focus:border-navy focus:outline-none focus:ring-4 focus:ring-navy/15"
        >
          <option value="" disabled>— Select a service —</option>
          <option>Gutter Installation (5&quot; or 6&quot;)</option>
          <option>Gutter Helmet® / Gutter Guards</option>
          <option>Gutter Repair</option>
          <option>Gutter Cleaning</option>
          <option>Window Cleaning</option>
          <option>Solar Panel Cleaning</option>
          <option>Multiple / Not sure</option>
        </select>
      </div>

      <div>
        <label htmlFor="address" className="mb-1 block text-sm font-semibold">
          Property Address or Neighborhood
        </label>
        <input
          id="address"
          name="address"
          type="text"
          autoComplete="street-address"
          placeholder="e.g., Stone Oak, 78258"
          className="w-full rounded-lg border border-neutral-300 px-3 py-3 focus:border-navy focus:outline-none focus:ring-4 focus:ring-navy/15"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-semibold">
          Project Details
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Single story or two story? Trees overhead? Any leaks or sagging?"
          className="w-full rounded-lg border border-neutral-300 px-3 py-3 focus:border-navy focus:outline-none focus:ring-4 focus:ring-navy/15"
        />
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="btn btn-primary w-full disabled:opacity-60"
      >
        {isPending ? "Sending…" : "Send My Estimate Request"}
      </button>

      <p className="text-xs text-neutral-500">
        By submitting you agree to be contacted by phone, text, or email about
        your estimate. We do not share your info.
      </p>

      {state.message && (
        <p
          role="status"
          className={
            state.ok
              ? "rounded-md bg-accent/10 px-3 py-2 text-sm font-semibold text-accent-dark"
              : "rounded-md bg-red-50 px-3 py-2 text-sm font-semibold text-red-700"
          }
        >
          {state.ok ? "✓ " : "⚠ "}{state.message}
        </p>
      )}
    </form>
  );
}
