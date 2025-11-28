import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Download } from "lucide-react";
import { Link } from "react-router-dom";

const Whitepaper = () => {
  const sections = [
    {
      title: "1. Introduction",
      content: `The cryptocurrency and blockchain industry has evolved rapidly, introducing innovative financial instruments and decentralized platforms. However, many projects lack real utility and sustainable value propositions. G4nesh ($G4N) emerges as a solution-oriented utility token designed to power a comprehensive decentralized exchange (DEX) ecosystem.

This whitepaper outlines the vision, technical architecture, tokenomics, and roadmap for G4nesh, demonstrating our commitment to transparency, security, and long-term value creation.`
    },
    {
      title: "2. Problem & Solution",
      content: `**The Problem:**
The current DeFi landscape faces several critical challenges:
• High transaction fees limiting accessibility for retail investors
• Security vulnerabilities in smart contracts leading to exploits
• Lack of genuine utility in many token projects
• Centralization risks in supposedly decentralized platforms
• Poor user experience deterring mainstream adoption

**Our Solution:**
G4nesh addresses these challenges through:
• Optimized smart contracts for minimal gas fees
• Multiple security audits by industry-leading firms
• Real utility as the native token of a fully-functional DEX
• True decentralization with community governance
• Intuitive interface designed for both beginners and professionals`
    },
    {
      title: "3. Vision & Mission",
      content: `**Vision:**
To become the leading utility token powering next-generation decentralized financial infrastructure, enabling secure, efficient, and accessible trading for users worldwide.

**Mission:**
• Build a high-performance DEX platform with institutional-grade security
• Foster a community-driven ecosystem with transparent governance
• Provide sustainable value through real-world utility and adoption
• Bridge traditional finance and decentralized systems
• Maintain the highest standards of security and compliance`
    },
    {
      title: "4. G4nesh DEX Architecture",
      content: `**Platform Components:**

**Trading Engine:**
Our DEX features a sophisticated order matching system with:
• Sub-second transaction finality
• Advanced order types (limit, market, stop-loss)
• Slippage protection mechanisms
• MEV-resistant transaction ordering

**Liquidity Pools:**
• Automated Market Maker (AMM) protocol
• Dynamic fee structures based on volatility
• Impermanent loss mitigation strategies
• Multi-tier liquidity incentives

**Security Infrastructure:**
• Multi-signature wallet integration
• Time-locked administrative functions
• Circuit breaker mechanisms for emergency scenarios
• Real-time monitoring and anomaly detection

**Technical Stack:**
• Smart Contracts: Solidity (EVM-compatible)
• Frontend: React with Web3 integration
• Backend: Decentralized storage (IPFS)
• Oracle: Chainlink for price feeds`
    },
    {
      title: "5. Token Utility",
      content: `**Governance Rights:**
G4N holders participate in protocol decisions including:
• Fee structure modifications
• New feature implementations
• Treasury fund allocation
• Strategic partnership approvals

**Transaction Fee Discount:**
• 25% fee reduction for G4N holders
• Additional tiers based on holding amount
• Loyalty rewards for long-term holders

**Staking Rewards:**
• Annual percentage yields from platform fees
• Lock-up periods: 30, 90, or 180 days
• Compound staking options available

**Exclusive Access:**
• Early access to new trading pairs
• Premium analytics and trading tools
• Priority customer support
• Beta testing opportunities for new features`
    },
    {
      title: "6. Tokenomics",
      content: `**Total Supply:** 1,000,000,000 G4N

**Distribution:**
• Liquidity Pool: 40% (400M tokens)
  - Ensures deep liquidity for stable trading
  - Locked for 24 months minimum

• Public Sale: 25% (250M tokens)
  - Fair launch mechanism
  - Anti-whale measures implemented

• Team & Advisors: 15% (150M tokens)
  - 24-month vesting schedule
  - 6-month cliff period

• Reserve Fund: 10% (100M tokens)
  - Market stability operations
  - Emergency contingency fund

• Staking Rewards: 7% (70M tokens)
  - Distributed over 5 years
  - Algorithmic emission schedule

• Ecosystem Fund: 3% (30M tokens)
  - Partnerships and integrations
  - Community grants program

**Token Mechanics:**
• Deflationary mechanism: 0.1% burn on each DEX transaction
• Fee structure: 0.3% trading fee (0.25% to LP, 0.05% to stakers)
• Buyback program from DEX revenues`
    },
    {
      title: "7. Governance Model",
      content: `**On-Chain Governance:**

**Proposal System:**
1. Community members holding minimum 100,000 G4N can create proposals
2. Discussion period: 7 days
3. Voting period: 5 days
4. Implementation: 48-hour timelock after approval

**Voting Power:**
• 1 G4N = 1 vote
• Staked tokens receive 1.5x voting multiplier
• Quadratic voting for major protocol changes

**Governance Scope:**
• Protocol parameter adjustments
• Treasury fund management
• Upgrade implementations
• Emergency action authorizations

**Transparency:**
All governance activities recorded on-chain with full audit trail accessible to community members.`
    },
    {
      title: "8. Security",
      content: `**Smart Contract Security:**

**Audit Partners:**
• CertiK: Comprehensive security audit
• Trail of Bits: Formal verification
• OpenZeppelin: Security review and consultation

**Security Measures:**
• Multi-signature requirement for critical functions
• Time-locked upgrades (48-hour delay)
• Bug bounty program (up to $100,000 rewards)
• Continuous monitoring and automated alerts

**Insurance:**
• Partnership with leading DeFi insurance protocols
• Coverage for smart contract exploits
• User fund protection mechanisms

**Best Practices:**
• Regular code audits and updates
• Security-first development methodology
• Incident response plan
• Community security committee`
    },
    {
      title: "9. Roadmap",
      content: `**Phase 1: Foundation (Q1 2024)**
✓ Brand development and website launch
✓ Smart contract development
✓ Security audits completion
✓ Community building and social media presence

**Phase 2: DEX Launch (Q2 2024)**
• Beta platform release
• Initial liquidity pools setup
• Token generation event
• Marketing campaign launch
• Partnership announcements

**Phase 3: Staking & Governance (Q3 2024)**
• Staking protocol implementation
• Governance system activation
• Mobile application development
• Cross-chain bridge planning
• Strategic exchange listings

**Phase 4: Expansion (Q4 2024)**
• Multi-chain deployment
• Advanced trading features
• Fiat on-ramp integration
• Institutional partnerships
• Ecosystem grants program

**Future Vision (2025+)**
• Layer 2 scaling solutions
• Derivatives trading platform
• NFT marketplace integration
• DAO treasury management tools
• Global compliance framework`
    },
    {
      title: "10. Team & Advisors",
      content: `**Core Team:**
Our team comprises experienced professionals from blockchain, finance, and technology sectors with proven track records in delivering successful projects.

**Development Team:**
• Senior blockchain engineers with 10+ years combined experience
• Smart contract specialists from Ethereum Foundation
• Full-stack developers from Fortune 500 tech companies

**Advisory Board:**
• DeFi protocol architects
• Cybersecurity experts
• Financial compliance specialists
• Marketing and growth strategists

**Commitment:**
All team tokens are subject to vesting schedules, aligning team incentives with long-term project success.`
    },
    {
      title: "11. Legal & Compliance",
      content: `**Regulatory Compliance:**

**Disclaimer:**
G4N is a utility token designed for use within the G4nesh DEX ecosystem. It is not intended as:
• A security or investment instrument
• A promise of profits or returns
• Financial advice or recommendation

**Geographic Restrictions:**
Token sale participants must comply with their local regulations. G4N tokens are not available to residents of restricted jurisdictions.

**AML/KYC:**
• Know Your Customer procedures for large transactions
• Anti-Money Laundering compliance measures
• Transaction monitoring and reporting

**Tax Considerations:**
Token holders are responsible for understanding and complying with their local tax obligations.

**User Responsibility:**
Users acknowledge the risks associated with cryptocurrency trading and should only invest what they can afford to lose.`
    },
    {
      title: "12. Conclusion",
      content: `G4nesh represents a significant step forward in the evolution of decentralized finance. By combining robust technical architecture, genuine utility, transparent governance, and a commitment to security, we are building a platform that serves the needs of the entire cryptocurrency community.

Our focus on long-term value creation, sustainable tokenomics, and user-centric design positions G4nesh for success in the competitive DeFi landscape. We invite you to join us on this journey as we work together to build the future of decentralized finance.

**Key Takeaways:**
• Real utility through native DEX integration
• Security-first approach with multiple audits
• Community-driven governance model
• Sustainable tokenomics with deflationary mechanisms
• Transparent roadmap and committed team

**Join the G4nesh Community:**
• Website: www.g4nesh.io
• Telegram: t.me/g4nesh
• Twitter: @g4nesh
• GitHub: github.com/g4nesh

*This whitepaper is subject to updates as the project evolves. Please check our website for the latest version.*

**Version 1.0 | Published: ${new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}**`
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Button asChild variant="ghost">
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary via-accent to-primary rounded-full flex items-center justify-center">
              <span className="text-sm font-bold text-primary-foreground">G4N</span>
            </div>
            <span className="font-bold">G4nesh</span>
          </div>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </Button>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="py-16 px-4 border-b border-border">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              G4nesh <span className="text-gradient-gold">Whitepaper</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-gold mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground mb-4">
              Technical Documentation & Project Overview
            </p>
            <p className="text-sm text-muted-foreground">
              Version 1.0 | Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-12 px-4 bg-secondary/20">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-6">Table of Contents</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {sections.map((section, index) => (
                <a
                  key={index}
                  href={`#section-${index}`}
                  className="text-muted-foreground hover:text-primary transition-colors flex items-start gap-2"
                >
                  <span className="text-primary">•</span>
                  <span>{section.title}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <main className="py-16 px-4">
        <div className="container mx-auto max-w-4xl space-y-16">
          {sections.map((section, index) => (
            <motion.section
              key={index}
              id={`section-${index}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="scroll-mt-24"
            >
              <h2 className="text-3xl font-bold mb-6 text-primary">
                {section.title}
              </h2>
              <div className="prose prose-invert max-w-none">
                {section.content.split('\n\n').map((paragraph, pIndex) => (
                  <p key={pIndex} className="text-muted-foreground leading-relaxed mb-4 whitespace-pre-line">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.section>
          ))}
        </div>
      </main>

      {/* Footer CTA */}
      <section className="py-16 px-4 border-t border-border bg-secondary/20">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">
              Join the <span className="text-gradient-gold">G4nesh</span> Revolution
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Be part of the future of decentralized finance. Connect with our community and stay updated with the latest developments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="hero" size="lg">
                <Link to="/">
                  Back to Home
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="https://t.me/g4nesh" target="_blank" rel="noopener noreferrer">
                  Join Community
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Whitepaper;
