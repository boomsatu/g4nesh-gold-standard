import { motion } from "framer-motion";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

export const Tokenomics = () => {
  const data = [
    { name: "Liquidity Pool", value: 40, color: "hsl(43, 74%, 49%)" },
    { name: "Public Sale", value: 25, color: "hsl(43, 74%, 65%)" },
    { name: "Team & Advisors", value: 15, color: "hsl(43, 50%, 30%)" },
    { name: "Reserve Fund", value: 10, color: "hsl(0, 0%, 20%)" },
    { name: "Staking Rewards", value: 7, color: "hsl(43, 74%, 35%)" },
    { name: "Ecosystem Fund", value: 3, color: "hsl(0, 0%, 30%)" },
  ];

  const tokenInfo = [
    { label: "Total Supply", value: "1,000,000,000 G4N" },
    { label: "Token Type", value: "Utility Token" },
    { label: "Blockchain", value: "Ethereum / BSC" },
    { label: "Contract", value: "Audited & Verified" },
  ];

  return (
    <section id="tokenomics" className="py-24 px-4 bg-secondary/20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background pointer-events-none"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-gold">Tokenomics</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Strategic distribution designed for long-term sustainability and growth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-2xl p-8"
          >
            <ResponsiveContainer width="100%" height={400}>
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={120}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(0 0% 10%)', 
                    border: '1px solid hsl(43 30% 25%)',
                    borderRadius: '8px'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Token Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-card border border-border rounded-2xl p-8 space-y-6">
              <h3 className="text-2xl font-bold mb-6">Token Information</h3>
              {tokenInfo.map((info, index) => (
                <div key={index} className="flex justify-between items-center pb-4 border-b border-border last:border-0 last:pb-0">
                  <span className="text-muted-foreground">{info.label}</span>
                  <span className="text-primary font-semibold">{info.value}</span>
                </div>
              ))}
            </div>

            <div className="bg-card border border-primary/50 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4 text-primary">Distribution Highlights</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>40% allocated to liquidity ensuring stable trading</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Team tokens locked with 24-month vesting schedule</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Staking rewards distributed over 5 years</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Reserve fund for market stability and growth</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
