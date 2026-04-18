import { motion } from "framer-motion";
import profileImg from "@/assets/profile-illustration.png";
import { Lightbulb, Brain, Cpu } from "lucide-react";

const infoBlocks = [
  {
    icon: Lightbulb,
    title: "Strengths",
    points: ["Attention to detail", "Pattern recognition", "Clear communication", "Problem solving"],
    shape: "rounded-2xl",
    bg: "bg-[hsl(25,85%,92%)] dark:bg-[hsl(25,40%,16%)]",
    iconBg: "gradient-accent",
  },
  {
    icon: Brain,
    title: "Mindset",
    points: ["Curiosity-driven", "Growth-oriented", "Data-first thinking", "Continuous learner"],
    shape: "rounded-2xl",
    bg: "bg-[hsl(210,80%,92%)] dark:bg-[hsl(210,40%,16%)]",
    iconBg: "bg-[hsl(210,60%,55%)]",
  },
  {
    icon: Cpu,
    title: "Technical Abilities",
    points: ["Data wrangling & cleaning", "Statistical analysis", "Dashboard development", "Database querying"],
    shape: "rounded-2xl",
    bg: "bg-[hsl(160,60%,90%)] dark:bg-[hsl(160,30%,16%)]",
    iconBg: "gradient-accent",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-body text-sm tracking-[0.2em] uppercase mb-3">About Me</p>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground">Who Am I as a Data Analyst?</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-72 md:h-72 rounded-full gradient-accent p-1.5">
                <div className="w-full h-full rounded-full bg-card overflow-hidden">
                  <img
                    src={profileImg}
                    alt="Allewia Elizabeth Thomas"
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                    width={800}
                    height={800}
                  />
                </div>
              </div>
              <div className="absolute inset-0 -m-4 rounded-full border-2 border-dashed border-accent/20 animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-0 -m-8 rounded-full border border-dashed border-muted-foreground/10 animate-[spin_30s_linear_infinite_reverse]" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-body text-muted-foreground leading-relaxed mb-4">
              Hi, I'm <span className="text-foreground font-semibold">Allewia Elizabeth Thomas</span> — a passionate Data Analyst with a keen eye for patterns hidden in numbers. I specialize in transforming complex datasets into clear, actionable insights.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              With expertise in data visualization, database querying, and analytical storytelling, I help organizations understand their data better. Whether it's building interactive dashboards in Power BI or uncovering trends with Python, I bring curiosity and precision to every project.
            </p>
          </motion.div>
        </div>

        {/* Infographic blocks */}
        <div className="grid sm:grid-cols-3 gap-6">
          {infoBlocks.map((block, i) => (
            <motion.div
              key={block.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`${block.bg} ${block.shape} p-6 md:p-8 border border-border hover:shadow-elevated transition-all duration-300 group`}
            >
              <div className={`w-12 h-12 ${block.iconBg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <block.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-heading text-xl text-foreground mb-3">{block.title}</h3>
              <ul className="space-y-2">
                {block.points.map((point) => (
                  <li key={point} className="font-body text-sm text-muted-foreground flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
