import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCallBar from "@/components/StickyCallBar";

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar lang="en" />
      {/* pb-20 reserves space under the sticky bottom CTA on mobile so the
          last footer line isn't hidden behind it. md+ no sticky bar. */}
      <main id="main" className="pb-20 md:pb-0">{children}</main>
      <Footer lang="en" />
      <StickyCallBar lang="en" />
    </>
  );
}
