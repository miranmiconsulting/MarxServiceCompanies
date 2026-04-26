import { business } from "@/lib/business";

export default function StickyCallBar() {
  return (
    <div
      aria-label="Quick contact"
      className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-neutral-100 shadow-[0_-8px_24px_rgba(0,0,0,.08)] md:hidden"
    >
      <a
        href={`tel:${business.phoneE164}`}
        className="bg-accent py-4 text-center text-base font-bold text-white hover:no-underline"
      >
        📞 Call
      </a>
      <a
        href={`sms:${business.phoneE164}`}
        className="bg-navy py-4 text-center text-base font-bold text-white hover:no-underline"
      >
        💬 Text
      </a>
    </div>
  );
}
