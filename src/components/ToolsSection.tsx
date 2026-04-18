import { motion } from "framer-motion";
import { BarChart3, LineChart, Table, Briefcase, Code } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const tools = [
  { name: "Power BI", icon: BarChart3, angle: -90 },
  { name: "Tableau", icon: LineChart, angle: -18 },
  { name: "Excel", icon: Table, angle: 54 },
  { name: "MS Office", icon: Briefcase, angle: 126 },
  { name: "Python", icon: Code, angle: 198 },
];

const ToolsSection = () => {
  const isMobile = useIsMobile();
  const radius = isMobile ? 110 : 170;
  const containerSize = isMobile ? 300 : 440;
  const half = containerSize / 2;

  return (
    <section id="tools" className="py-20 md:py-32 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-body text-sm tracking-[0.2em] uppercase mb-3">Tools</p>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground">Tools I Work With</h2>
        </motion.div>

        <div className="flex justify-center">
          <div
            className="relative"
            style={{ width: containerSize, height: containerSize }}
          >
            {/* Orbit rings - visible in both themes */}
            <div
              className="absolute rounded-full border-2 border-dashed border-accent/30"
              style={{
                top: half - radius,
                left: half - radius,
                width: radius * 2,
                height: radius * 2,
              }}
            />
            <div
              className="absolute rounded-full border border-dashed border-accent/15"
              style={{
                top: half - radius * 0.6,
                left: half - radius * 0.6,
                width: radius * 1.2,
                height: radius * 1.2,
              }}
            />

            {/* Center */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, type: "spring" }}
              className="absolute gradient-accent flex items-center justify-center shadow-elevated z-10 rounded-full"
              style={{
                width: isMobile ? 90 : 120,
                height: isMobile ? 90 : 120,
                top: half - (isMobile ? 45 : 60),
                left: half - (isMobile ? 45 : 60),
              }}
            >
              <span className="font-heading text-xs md:text-base text-white text-center leading-tight px-2">
                Tools I<br />Use
              </span>
            </motion.div>

            {/* Orbiting tools */}
            {tools.map((tool, i) => {
              const rad = (tool.angle * Math.PI) / 180;
              const x = half + Math.cos(rad) * radius;
              const y = half + Math.sin(rad) * radius;
              const itemSize = isMobile ? 56 : 80;

              return (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.12, type: "spring" }}
                  className="absolute group cursor-pointer"
                  style={{
                    width: itemSize,
                    height: itemSize,
                    top: y - itemSize / 2,
                    left: x - itemSize / 2,
                  }}
                >
                  <div className="w-full h-full rounded-2xl bg-card border-2 border-accent/20 shadow-card flex flex-col items-center justify-center gap-1 md:gap-1.5 group-hover:shadow-elevated group-hover:scale-110 group-hover:border-accent/50 transition-all duration-300">
                    <tool.icon className="w-5 h-5 md:w-7 md:h-7 text-accent" />
                    <span className="font-body text-[8px] md:text-[10px] font-bold text-foreground">{tool.name}</span>
                  </div>
                </motion.div>
              );
            })}

            {/* Rotating ring */}
            <motion.div
              className="absolute rounded-full border border-accent/20"
              style={{
                top: -5,
                left: -5,
                width: containerSize + 10,
                height: containerSize + 10,
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
