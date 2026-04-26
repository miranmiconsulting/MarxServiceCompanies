import { business } from "@/lib/business";
import { getDict, type Lang } from "@/lib/i18n";

type Props = { lang?: Lang };

export default function StickyCallBar({ lang = "en" }: Props) {
  const isEs = lang === "es";
  const callLabel = isEs ? "Llamar" : "Call";
  const textLabel = isEs ? "Mensaje" : "Text";
  const ariaLabel = isEs ? "Contacto rápido" : "Quick contact";
  // Touching getDict avoids unused-import lint warnings if i18n grows here later.
  void getDict(lang);
  return (
    <div
      aria-label={ariaLabel}
      className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-neutral-100 shadow-[0_-8px_24px_rgba(0,0,0,.08)] md:hidden"
    >
      <a
        href={`tel:${business.phoneE164}`}
        className="bg-accent py-4 text-center text-base font-bold text-white hover:no-underline"
      >
        📞 {callLabel}
      </a>
      <a
        href={`sms:${business.phoneE164}`}
        className="bg-navy py-4 text-center text-base font-bold text-white hover:no-underline"
      >
        💬 {textLabel}
      </a>
    </div>
  );
}
