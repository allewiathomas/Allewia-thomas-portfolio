import { motion } from "framer-motion";
import { BarChart3, Database, LineChart, Code } from "lucide-react";

const skills = [
  {
    icon: BarChart3,
    title: "Data Analysis",
    description: "Extracting insights from complex datasets using statistical methods.",
    bg: "bg-[hsl(12,80%,93%)] dark:bg-[hsl(12,40%,15%)]",
    barData: [40, 70, 55, 90, 65, 80, 50],
  },
  {
    icon: LineChart,
    title: "Data Visualization",
    description: "Creating compelling visual narratives with charts and dashboards.",
    bg: "bg-[hsl(210,80%,93%)] dark:bg-[hsl(210,40%,15%)]",
    barData: [30, 50, 80, 60, 90, 45, 75],
  },
  {
    icon: Database,
    title: "Database & Query",
    description: "Designing queries and managing databases efficiently.",
    bg: "bg-[hsl(160,65%,91%)] dark:bg-[hsl(160,30%,15%)]",
    barData: [60, 45, 75, 85, 50, 70, 90],
  },
  {
    icon: Code,
    title: "Python Programming",
    description: "Writing scripts for data cleaning, automation, and analysis.",
    bg: "bg-[hsl(270,65%,93%)] dark:bg-[hsl(270,30%,15%)]",
    barData: [50, 65, 40, 80, 55, 70, 60],
  },
];

const MiniChart = ({ data, delay }: { data: number[]; delay: number }) => {
  const maxH = 48;
  return (
    <div className="flex items-end gap-1.5 h-12 mt-4">
      {data.map((v, i) => (
        <motion.div
          key={i}
          initial={{ height: 0 }}
          whileInView={{ height: (v / 100) * maxH }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: delay + i * 0.08, ease: "easeOut" }}
          className="w-3 rounded-t-sm bg-accent/60"
        />
      ))}
    </div>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 md:py-32 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-body text-sm tracking-[0.2em] uppercase mb-3">Expertise</p>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground">My Skills</h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`${skill.bg} rounded-2xl p-6 md:p-8 border border-border hover:shadow-elevated transition-all duration-300 group flex flex-col`}
            >
              <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <skill.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-heading text-lg md:text-xl text-foreground mb-2">{skill.title}</h3>
              <p className="font-body text-muted-foreground text-xs leading-relaxed flex-1">
                {skill.description}
              </p>
              <MiniChart data={skill.barData} delay={0.3 + i * 0.15} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
