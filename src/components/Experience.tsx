import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const education = [
    {
      period: "2020 - 2021",
      title: "Full Stack Development",
      institution: "Microverse",
      description: "Mastered JavaScript, React, Ruby on Rails, and collaborative development practices through intensive remote learning.",
    },
    {
      period: "2005 - 2009",
      title: "Diploma in Computer Science",
      institution: "CITMA",
      description: "Comprehensive program covering engineering, computing, and project leadership through project-driven curriculum.",
    },
    {
      period: "2002 - 2004",
      title: "HND in Information Technology",
      institution: "Macmaine School of Computers",
      description: "Completed 10 full computer science courses including core courses and specialized electives.",
    },
  ];

  const experience = [
    {
      period: "2016 - Present",
      title: "Senior Full Stack Developer",
      company: "Freelance / Various Companies",
      description: "Building dynamic web apps with React and Rails. Leading group projects showcasing frontend and backend expertise.",
    },
    {
      period: "2014 - 2016",
      title: "Hardware and Web Development Lead",
      company: "Hands-On Computers, Harare",
      description: "Created Web Development Department, developed company website, and established customer response team.",
    },
    {
      period: "2012 - 2014",
      title: "IT Specialist & Technician",
      company: "Global Computer Links, Harare",
      description: "Computer assembly and custom PC building for schools. Expert in Windows, Unix, Linux, and Mac OS.",
    },
  ];

  type TimelineItemType = {
    period: string;
    title: string;
    description: string;
    institution?: string;
    company?: string;
  };

  const TimelineCard = ({ item, index, isEducation }: { item: TimelineItemType; index: number; isEducation?: boolean }) => (
    <motion.div
      initial={{ opacity: 0, x: isEducation ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative group"
    >
      <div className="glass rounded-2xl p-6 border border-border group-hover:border-primary/30 transition-all duration-300 card-hover">
        {/* Period badge */}
        <div className="flex items-center gap-2 mb-4">
          <Calendar className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">{item.period}</span>
        </div>
        
        <h4 className="font-heading text-lg font-bold mb-1 group-hover:text-primary transition-colors">
          {item.title}
        </h4>
        <p className="text-sm text-muted-foreground mb-3 flex items-center gap-2">
          {isEducation ? <GraduationCap className="w-4 h-4" /> : <Briefcase className="w-4 h-4" />}
          {item.institution || item.company}
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
        
        {/* Decorative corner */}
        <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-2xl">
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-primary/10 to-transparent" />
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/50 via-background to-card/50" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium tracking-wider uppercase text-sm">My Journey</span>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold mt-2 mb-4">
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            My journey in technology spanning over two decades of learning and professional growth
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold">Education</h3>
                <p className="text-sm text-muted-foreground">Academic Background</p>
              </div>
            </motion.div>
            <div className="space-y-4">
              {education.map((item, index) => (
                <TimelineCard key={index} item={item} index={index} isEducation />
              ))}
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold">Work Experience</h3>
                <p className="text-sm text-muted-foreground">Professional Career</p>
              </div>
            </motion.div>
            <div className="space-y-4">
              {experience.map((item, index) => (
                <TimelineCard key={index} item={item} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;