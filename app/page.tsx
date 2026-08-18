import About from "@/components/About";
import ClaimSpot from "@/components/ClaimSpot";
import CreatorWorld from "@/components/CreatorWorld";
import DiscoveryProgress from "@/components/DiscoveryProgress";
import FAQ from "@/components/FAQ";
import FeaturedNFTs from "@/components/FeaturedNFTs";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Roadmap from "@/components/Roadmap";
import Stats from "@/components/Stats";
import Worlds from "@/components/Worlds";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Worlds />
        <FeaturedNFTs />
        <Stats />
        <About />
        <DiscoveryProgress />
        <CreatorWorld />
        <Roadmap />
        <ClaimSpot />
        <FAQ />
      </main>

      <Footer />
    </>
  );
}