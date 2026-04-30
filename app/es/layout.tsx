import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCallBar from "@/components/StickyCallBar";
import HtmlLangSetter from "@/components/HtmlLangSetter";

export default function EsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HtmlLangSetter lang="es" />
      <Navbar lang="es" />
      <main id="main" className="pb-20 md:pb-0">{children}</main>
      <Footer lang="es" />
      <StickyCallBar lang="es" />
    </>
  );
}
