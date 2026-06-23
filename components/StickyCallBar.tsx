import { Phone, MessageSquare } from "lucide-react";
import { business } from "@/lib/business";
import type { Lang } from "@/lib/i18n";

type Props = { lang?: Lang };

export default function StickyCallBar({ lang = "en" }: Props) {
  const isEs = lang === "es";
  // Sticky bar shows the actual phone NUMBER (audit C2) so it's tappable
  // digits, not a generic "Call" label.
  const callLabel = isEs ? "Llamar" : "Call";
  const textLabel = isEs ? "Mensaje" : "Text";
  const ariaCall = isEs ? `Llamar al ${business.phone}` : `Call ${business.phone}`;
  const ariaText = isEs ? `Mensaje al ${business.phone}` : `Text ${business.phone}`;
  const ariaGroup = isEs ? "Contacto rápido" : "Quick contact";
  return (
    <div
      aria-label={ariaGroup}
      role="navigation"
      className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-neutral-100 bg-white shadow-[0_-12px_32px_rgba(0,0,0,.12)] pb-[env(safe-area-inset-bottom)] md:hidden animate-[sticky-bar-slide-up_0.6s_cubic-bezier(0.25,0.46,0.45,0.94)_0.3s_both]"
    >
      <a
        href={`tel:${business.phoneE164}`}
        aria-label={ariaCall}
        className="flex items-center justify-center gap-2 bg-accent py-4 text-center text-base font-bold text-white hover:no-underline"
      >
        <Phone size={18} strokeWidth={2.5} aria-hidden="true" />
        <span className="leading-none">{callLabel}</span>
        <span aria-hidden="true" className="hidden xs:inline text-sm font-semibold opacity-90">
          {business.phone}
        </span>
      </a>
      <a
        href={`sms:${business.phoneE164}`}
        aria-label={ariaText}
        className="flex items-center justify-center gap-2 bg-navy py-4 text-center text-base font-bold text-white hover:no-underline"
      >
        <MessageSquare size={18} strokeWidth={2.5} aria-hidden="true" />
        <span className="leading-none">{textLabel}</span>
      </a>
    </div>
  );
}
