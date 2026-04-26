import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCallBar from "@/components/StickyCallBar";

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar lang="en" />
      <main id="main">{children}</main>
      <Footer lang="en" />
      <StickyCallBar lang="en" />
    </>
  );
}
