import { motion } from "framer-motion";
import { CheckCircle2, Circle } from "lucide-react";

export const Roadmap = () => {
  const phases = [
    {
      phase: "Phase 1",
      title: "Foundation",
      status: "completed",
      items: [
        "Brand identity and website launch",
        "Smart contract development",
        "Security audit completion",
        "Community building initiation"
      ]
    },
    {
      phase: "Phase 2",
      title: "DEX Launch",
      status: "in-progress",
      items: [
        "DEX platform beta release",
        "Token liquidity pools setup",
        "Trading pairs integration",
        "Marketing campaign activation"
      ]
    },
    {
      phase: "Phase 3",
      title: "Staking & Governance",
      status: "upcoming",
      items: [
        "Staking protocol implementation",
        "Governance system launch",
        "Fee-sharing mechanism",
        "Mobile app development"
      ]
    },
    {
      phase: "Phase 4",
      title: "Cross-Chain & Integration",
      status: "upcoming",
      items: [
        "Multi-chain bridge deployment",
        "Additional blockchain support",
        "Strategic partnerships",
        "Advanced trading features"
      ]
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
            <span className="text-gradient-gold">Roadmap</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Our journey to revolutionize decentralized finance
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent"></div>

          <div className="space-y-16">
            {phases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1">
                  {phase.status === "completed" ? (
                    <CheckCircle2 className="w-8 h-8 text-primary bg-background" />
                  ) : (
                    <Circle className={`w-8 h-8 ${phase.status === "in-progress" ? "text-primary animate-gold-pulse" : "text-muted"} bg-background`} />
                  )}
                </div>

                {/* Content Card */}
                <div className={`ml-20 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-16' : 'md:ml-auto md:pl-16'}`}>
                  <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_25px_rgba(212,175,55,0.2)]">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                        {phase.phase}
                      </span>
                      <span className={`text-xs px-3 py-1 rounded-full ${
                        phase.status === "completed" 
                          ? "bg-primary/20 text-primary" 
                          : phase.status === "in-progress"
                          ? "bg-accent/20 text-accent animate-gold-pulse"
                          : "bg-muted/20 text-muted-foreground"
                      }`}>
                        {phase.status === "completed" ? "Completed" : phase.status === "in-progress" ? "In Progress" : "Upcoming"}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4">{phase.title}</h3>
                    
                    <ul className="space-y-2">
                      {phase.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start text-muted-foreground">
                          <span className="text-primary mr-2 mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
