"use client";

import { useActionState } from "react";
import { submitEstimate, type EstimateState } from "@/app/actions/submit-estimate";
import { getDict, type Lang } from "@/lib/i18n";

type Props = { lang?: Lang };

const initial: EstimateState = { ok: false, message: "" };

export default function ContactForm({ lang = "en" }: Props) {
  const t = getDict(lang).contact.form;
  const [state, formAction, isPending] = useActionState(submitEstimate, initial);

  return (
    <form action={formAction} noValidate className="space-y-3">
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
          {t.nameLabel}
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
          {t.phoneLabel}
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          placeholder={t.phonePlaceholder}
          className="w-full rounded-lg border border-neutral-300 px-3 py-3 focus:border-navy focus:outline-none focus:ring-4 focus:ring-navy/15"
        />
      </div>

      <div>
        <label htmlFor="service" className="mb-1 block text-sm font-semibold">
          {t.serviceLabel}
        </label>
        <select
          id="service"
          name="service"
          required
          defaultValue=""
          className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-3 focus:border-navy focus:outline-none focus:ring-4 focus:ring-navy/15"
        >
          <option value="" disabled>{t.servicePlaceholder}</option>
          {t.services.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="address" className="mb-1 block text-sm font-semibold">
          {t.addressLabel}
        </label>
        <input
          id="address"
          name="address"
          type="text"
          autoComplete="street-address"
          placeholder={t.addressPlaceholder}
          className="w-full rounded-lg border border-neutral-300 px-3 py-3 focus:border-navy focus:outline-none focus:ring-4 focus:ring-navy/15"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-semibold">
          {t.messageLabel}
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder={t.messagePlaceholder}
          className="w-full rounded-lg border border-neutral-300 px-3 py-3 focus:border-navy focus:outline-none focus:ring-4 focus:ring-navy/15"
        />
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="btn btn-primary w-full disabled:opacity-60"
      >
        {isPending ? t.submitting : t.submit}
      </button>

      <p className="text-xs text-neutral-500">{t.consent}</p>

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
