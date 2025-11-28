import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary via-accent to-primary rounded-full flex items-center justify-center">
                <span className="text-lg font-bold text-primary-foreground">G4N</span>
              </div>
              <span className="text-xl font-bold">G4nesh</span>
            </div>
            <p className="text-muted-foreground max-w-md leading-relaxed">
              A next-generation blockchain token powering a secure and efficient
              decentralized exchange ecosystem.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#tokenomics" className="text-muted-foreground hover:text-primary transition-colors">
                  Tokenomics
                </a>
              </li>
              <li>
                <Link to="/whitepaper" className="text-muted-foreground hover:text-primary transition-colors">
                  Whitepaper
                </Link>
              </li>
              <li>
                <a href="https://github.com/g4nesh" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="font-bold mb-4 text-primary">Community</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://t.me/g4nesh" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  Telegram
                </a>
              </li>
              <li>
                <a href="https://twitter.com/g4nesh" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} G4nesh Token. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
