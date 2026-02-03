import { motion } from "framer-motion";
import { Code, Server, Palette, Cloud, GitBranch, Users } from "lucide-react";

const Skills = () => {
  const technicalSkills = [
    { name: "JavaScript / TypeScript", level: 95, icon: Code },
    { name: "React & Redux", level: 85, icon: Code },
    { name: "Ruby on Rails", level: 85, icon: Server },
    { name: "HTML & CSS / Tailwind", level: 90, icon: Palette },
    { name: "Git & GitHub", level: 90, icon: GitBranch },
    { name: "UI/UX Design", level: 70, icon: Palette },
  ];

  const professionalSkills = [
    { name: "Remote Collaboration", level: 95, icon: Users },
    { name: "Team Leadership", level: 90, icon: Users },
    { name: "Pair Programming", level: 85, icon: Code },
    { name: "TDD / RSpec", level: 85, icon: Server },
    { name: "Responsive Design", level: 90, icon: Palette },
    { name: "Cloud Deployment", level: 95, icon: Cloud },
  ];

  const techStack = [
    "React", "Redux", "TypeScript", "JavaScript", "Ruby on Rails", "PostgreSQL",
    "Node.js", "HTML5", "CSS3", "Tailwind", "Git", "GitHub", "Heroku", "Netlify",
    "RSpec", "Jest", "REST APIs", "GraphQL"
  ];

  const SkillCard = ({ skill, index }: { skill: typeof technicalSkills[0]; index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="glass rounded-2xl p-5 card-hover group"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
            <skill.icon className="w-5 h-5 text-primary" />
          </div>
          <span className="font-medium text-sm">{skill.name}</span>
        </div>
        <span className="text-2xl font-bold gradient-text">{skill.level}%</span>
      </div>
      
      {/* Progress bar */}
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.1 + 0.3, ease: "easeOut" }}
          className="h-full rounded-full relative overflow-hidden"
          style={{
            background: `linear-gradient(90deg, hsl(var(--primary)) 0%, hsl(var(--primary) / 0.6) 100%)`
          }}
        >
          {/* Animated shine effect */}
          <div className="absolute inset-0 w-full h-full animate-pulse opacity-50 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </motion.div>
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/50 via-background to-card/50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]" />
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium tracking-wider uppercase text-sm">What I do</span>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold mt-2 mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A comprehensive toolkit built over years of hands-on experience in full-stack development
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Technical Skills */}
          <div>
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-heading text-xl font-semibold mb-6 flex items-center gap-3"
            >
              <div className="w-10 h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full" />
              Technical Skills
            </motion.h3>
            <div className="space-y-4">
              {technicalSkills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>

          {/* Professional Skills */}
          <div>
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-heading text-xl font-semibold mb-6 flex items-center gap-3"
            >
              <div className="w-10 h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full" />
              Professional Skills
            </motion.h3>
            <div className="space-y-4">
              {professionalSkills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>
        </div>

        {/* Tech Stack Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="font-heading text-xl font-semibold mb-6">Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-4 py-2 glass rounded-full text-sm font-medium border border-border hover:border-primary/50 hover:text-primary transition-all cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;