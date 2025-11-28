import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Send, Twitter, Github, FileText } from "lucide-react";

export const Community = () => {
  const links = [
    {
      icon: Send,
      name: "Telegram",
      description: "Join our community",
      url: "https://t.me/g4nesh",
      color: "hover:text-[#0088cc]"
    },
    {
      icon: Twitter,
      name: "X (Twitter)",
      description: "Follow for updates",
      url: "https://twitter.com/g4nesh",
      color: "hover:text-[#1DA1F2]"
    },
    {
      icon: Github,
      name: "GitHub",
      description: "View our code",
      url: "https://github.com/g4nesh",
      color: "hover:text-foreground"
    },
    {
      icon: FileText,
      name: "Whitepaper",
      description: "Read documentation",
      url: "/whitepaper",
      color: "hover:text-primary"
    }
  ];

  return (
    <section className="py-24 px-4 bg-secondary/30 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background pointer-events-none"></div>
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join Our <span className="text-gradient-gold">Community</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-muted-foreground">
            Be part of the G4nesh ecosystem and stay updated with the latest developments
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {links.map((link, index) => {
            const Icon = link.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Button
                  asChild
                  variant="outline"
                  className="w-full h-auto flex-col py-8 hover:scale-105 transition-all duration-300"
                >
                  <a
                    href={link.url}
                    target={link.url.startsWith('http') ? "_blank" : undefined}
                    rel={link.url.startsWith('http') ? "noopener noreferrer" : undefined}
                  >
                    <Icon className={`w-10 h-10 mb-3 transition-colors ${link.color}`} />
                    <span className="font-bold text-base">{link.name}</span>
                    <span className="text-xs text-muted-foreground mt-1">
                      {link.description}
                    </span>
                  </a>
                </Button>
              </motion.div>
            );
          })}
        </div>

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-card border border-primary/30 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Stay Informed</h3>
          <p className="text-muted-foreground mb-6">
            Get the latest updates on G4nesh token and DEX platform developments
          </p>
          <Button variant="hero" size="lg">
            Join Community Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
