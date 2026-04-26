const reasons = [
  {
    title: "Established 2011",
    body: "Over a decade serving San Antonio homeowners. Referrals are most of our work.",
  },
  {
    title: "Owner On Every Job",
    body: "Marcos Munoz is on site, not just on the truck wrap. You talk to the owner.",
  },
  {
    title: "Free, No-Pressure Estimates",
    body: "We measure, recommend, and quote. No hard sell. No surprise extras.",
  },
  {
    title: "Authorized Gutter Helmet® Installer",
    body: "Backed by the original gutter protection system with a transferable performance warranty.",
  },
  {
    title: "Clean Work Sites",
    body: "We protect your landscaping and clean up every nail, screw, and scrap before we leave.",
  },
  {
    title: "Local & Responsive",
    body: "Calls and texts answered the same day. We live here too.",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-neutral-50 py-14">
      <div className="container-page">
        <div className="mx-auto mb-9 max-w-2xl text-center">
          <h2>Why San Antonio Homeowners Choose Marx</h2>
          <p className="mt-2 text-neutral-700">
            We show up, do the work right, and stand behind it. That&apos;s it.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="flex gap-3 rounded-card border border-neutral-100 bg-white p-4"
            >
              <span className="grid h-7 w-7 flex-none place-items-center rounded-full bg-accent font-extrabold text-white">
                ✓
              </span>
              <div>
                <h3 className="text-base">{r.title}</h3>
                <p className="text-sm text-neutral-700">{r.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
