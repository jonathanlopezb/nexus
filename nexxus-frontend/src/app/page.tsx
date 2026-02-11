import ScarcityBanner from "@/components/home/ScarcityBanner";
import PulseFeed from "@/components/home/PulseFeed";
import Header from "@/components/layout/Header";
import Hero from "@/components/home/Hero";
import Catalog from "@/components/home/Catalog";
import BrandUniverse from "@/components/home/BrandUniverse";
import Collections from "@/components/home/Collections";
import TrustSignals from "@/components/home/TrustSignals";
import Footer from "@/components/layout/Footer";
import MobileDock from "@/components/layout/MobileDock";
import Sorenexus from "@/components/shared/Sorenexus";
import GlobalHypeIndex from "@/components/shared/GlobalHypeIndex";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent text-white selection:bg-accent selection:text-black pb-32">
      <ScarcityBanner />
      <PulseFeed />
      <Header />

      <Hero />
      <Catalog />
      <BrandUniverse />
      <Collections />
      <TrustSignals />

      <Footer />

      {/* Shared Elements */}
      <Sorenexus />
      <GlobalHypeIndex />
      <MobileDock />
    </main>
  );
}
