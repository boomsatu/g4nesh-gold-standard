import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { DexFeatures } from "@/components/DexFeatures";
import { TokenUtility } from "@/components/TokenUtility";
import { Tokenomics } from "@/components/Tokenomics";
import { Roadmap } from "@/components/Roadmap";
import { Community } from "@/components/Community";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <DexFeatures />
      <TokenUtility />
      <Tokenomics />
      <Roadmap />
      <Community />
      <Footer />
    </div>
  );
};

export default Index;
