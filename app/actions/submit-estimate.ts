"use server";

import { business } from "@/lib/business";

export type EstimateState = {
  ok: boolean;
  message: string;
};

export async function submitEstimate(
  _prev: EstimateState,
  formData: FormData
): Promise<EstimateState> {
  const name = String(formData.get("name") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const service = String(formData.get("service") ?? "").trim();
  const address = String(formData.get("address") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  // Honeypot — bots fill hidden fields, humans don't.
  const honeypot = String(formData.get("website") ?? "").trim();

  if (honeypot) return { ok: true, message: "Thanks, we'll be in touch." };

  if (!name || !phone || !service) {
    return {
      ok: false,
      message: "Please include your name, phone number, and which service you need.",
    };
  }

  const subject = `Free Estimate Request: ${service}`;
  const body = [
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Service: ${service}`,
    `Address: ${address}`,
    "",
    "Details:",
    message,
  ].join("\n");

  // If a Resend API key is configured, deliver the email server-side.
  // Otherwise log to the server console — the request is still captured in Vercel logs.
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? business.email;
  const from = process.env.CONTACT_FROM_EMAIL ?? `website@${business.email.split("@")[1]}`;

  if (apiKey) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from,
          to: [to],
          reply_to: undefined,
          subject,
          text: body,
        }),
      });
      if (!res.ok) {
        const detail = await res.text();
        console.error("[submitEstimate] Resend error:", res.status, detail);
        return {
          ok: false,
          message:
            "We couldn't send your request right now. Please call or text " +
            business.phone +
            ".",
        };
      }
    } catch (err) {
      console.error("[submitEstimate] Network error:", err);
      return {
        ok: false,
        message:
          "We couldn't send your request right now. Please call or text " +
          business.phone +
          ".",
      };
    }
  } else {
    console.log("[submitEstimate] (dev) New estimate request:\n" + body);
  }

  return {
    ok: true,
    message: `Thanks ${name.split(" ")[0]}, we got it. We'll follow up within one business day.`,
  };
}
