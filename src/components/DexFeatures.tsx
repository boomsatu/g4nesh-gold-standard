import { motion } from "framer-motion";
import { Layers, Lock, Users, Coins, Vote, Globe } from "lucide-react";

export const DexFeatures = () => {
  const features = [
    {
      icon: Layers,
      title: "Fast Low-Fee Swapping",
      description: "Execute trades instantly with minimal transaction costs and maximum efficiency."
    },
    {
      icon: Lock,
      title: "Secure Audited Contracts",
      description: "Industry-leading security with fully audited and verified smart contracts."
    },
    {
      icon: Coins,
      title: "Liquidity Pools",
      description: "Earn rewards by providing liquidity to our decentralized exchange pools."
    },
    {
      icon: Vote,
      title: "Governance",
      description: "Community-driven decisions with on-chain voting for protocol upgrades."
    },
    {
      icon: Users,
      title: "Staking Rewards",
      description: "Stake your G4N tokens to earn passive income and support network security."
    },
    {
      icon: Globe,
      title: "Cross-Chain Expansion",
      description: "Future integration with multiple blockchain networks for maximum reach."
    }
  ];

  return (
    <section className="py-24 px-4 bg-secondary/30 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background pointer-events-none"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-gold">G4nesh DEX</span> Platform
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive decentralized exchange built for the future of finance
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_25px_rgba(212,175,55,0.2)] group"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
