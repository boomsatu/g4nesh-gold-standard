import { motion } from "framer-motion";
import { Landmark, Fuel, Gift, Key } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const TokenUtility = () => {
  const utilities = [
    {
      icon: Landmark,
      title: "Governance",
      description: "Hold G4N tokens to participate in protocol decisions and vote on proposals that shape the future of the ecosystem."
    },
    {
      icon: Fuel,
      title: "Gas Token for DEX",
      description: "Use G4N to pay for transaction fees on the decentralized exchange with discounted rates for holders."
    },
    {
      icon: Gift,
      title: "Rewards & Staking",
      description: "Earn passive income by staking your tokens and receive a share of platform fees and trading rewards."
    },
    {
      icon: Key,
      title: "Exclusive Features",
      description: "Unlock premium features, advanced trading tools, and early access to new products and integrations."
    }
  ];

  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Token <span className="text-gradient-gold">Utility</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            G4N powers the entire ecosystem with real utility and value
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {utilities.map((utility, index) => {
            const Icon = utility.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_25px_rgba(212,175,55,0.2)] bg-card/50 backdrop-blur">
                  <CardHeader>
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">{utility.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {utility.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
