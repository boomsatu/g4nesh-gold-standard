import { motion } from "framer-motion";
import { Shield, Zap, TrendingUp } from "lucide-react";

export const About = () => {
  const features = [
    {
      icon: Shield,
      title: "Security First",
      description: "Built with audited smart contracts and industry-leading security practices."
    },
    {
      icon: Zap,
      title: "High Performance",
      description: "Lightning-fast transactions with minimal fees on our optimized network."
    },
    {
      icon: TrendingUp,
      title: "Long-term Value",
      description: "Designed for sustainable growth and real-world blockchain adoption."
    }
  ];

  return (
    <section className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient-gold">G4nesh</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            G4nesh ($G4N) is a next-generation utility token built to support a
            high-performance decentralized exchange platform. Developed with the
            principles of security, transparency, and long-term value, G4nesh is
            engineered for real-world blockchain use cases.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.2)]"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 mx-auto">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">{feature.title}</h3>
                <p className="text-muted-foreground text-center leading-relaxed">
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
