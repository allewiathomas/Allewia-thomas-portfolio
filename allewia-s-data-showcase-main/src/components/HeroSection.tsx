import { motion } from "framer-motion";
import { ChevronDown, Download } from "lucide-react";
import SocialLinks from "./SocialLinks";

const MetricCard = ({
  label,
  delay,
}: {
  label: string;
  delay: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20, scale: 0.9 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.6, delay }}
    className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-5 py-4 shadow-card flex items-center gap-3"
  >
    <div className="w-8 h-8 rounded-full gradient-accent flex items-center justify-center flex-shrink-0">
      <span className="text-white text-sm font-bold">✓</span>
    </div>
    <span className="font-body text-sm font-semibold text-white">{label}</span>
  </motion.div>
);

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero pt-20">
      {/* Subtle grid dots */}
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20" />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-accent font-body text-sm md:text-base tracking-[0.3em] uppercase mb-4 drop-shadow-sm"
        >
          Data Analyst Portfolio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-heading text-4xl sm:text-5xl md:text-7xl text-white leading-tight mb-4"
        >
          Allewia Elizabeth
          <br />
          <span className="text-gradient">Thomas</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="font-body text-white/70 text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          Transforming raw data into meaningful insights through analysis, visualization, and storytelling.
        </motion.p>

        {/* Live metric cards */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10">
          <MetricCard label="Excel Wizardry" delay={0.5} />
          <MetricCard label="SQL Queries Solved" delay={0.65} />
          <MetricCard label="Visual Storytelling" delay={0.8} />
        </div>

        {/* CTA floating card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="inline-block bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-elevated mb-8"
        >
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="#about"
              className="inline-flex items-center gap-2 gradient-accent text-white font-body font-semibold px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
            >
              Explore My Work
              <ChevronDown className="w-4 h-4 animate-bounce" />
            </a>
            <a
              href="/resume/ALLEWIA_ELIZABETH_THOMAS_RESUME.pdf"
              download
              className="inline-flex items-center gap-2 border-2 border-white/30 text-white font-body font-semibold px-8 py-3 rounded-full hover:bg-white/10 transition-colors"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </div>
          <div className="flex justify-center mt-4">
            <SocialLinks iconClassName="border-white/30 text-white/70 hover:border-accent hover:bg-accent hover:text-white" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
