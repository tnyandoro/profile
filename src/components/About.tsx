import { motion } from "framer-motion";
import { MapPin, Briefcase, Globe, Mail, Code2, Coffee, Gamepad2, Dumbbell } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const About = () => {
  const details = [
    { icon: MapPin, label: "Location", value: "Gauteng, South Africa" },
    { icon: Briefcase, label: "Profession", value: "FullStack Engineer" },
    { icon: Globe, label: "Website", value: "tendainyandoro.live" },
    { icon: Mail, label: "Email", value: "tnyandoro@gmail.com" },
  ];

  const interests = [
    { icon: Code2, label: "Coding" },
    { icon: Gamepad2, label: "Chess" },
    { icon: Dumbbell, label: "Gym" },
    { icon: Coffee, label: "Coffee" },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[80px]" />
      </div>
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-primary font-medium tracking-wider uppercase text-sm">Get to know me</span>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold mt-2">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative max-w-md mx-auto">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-l-4 border-t-4 border-primary rounded-tl-3xl" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-4 border-b-4 border-primary rounded-br-3xl" />
              
              {/* Main image */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden glass p-2">
                <img
                  src={profilePhoto}
                  alt="Tendai Nyandoro"
                  className="w-full h-full object-cover rounded-xl"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent rounded-xl" />
              </div>

              {/* Experience badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="absolute -right-6 top-1/4 glass rounded-2xl p-4 border border-primary/20"
              >
                <p className="text-3xl font-bold gradient-text">15+</p>
                <p className="text-xs text-muted-foreground">Years Experience</p>
              </motion.div>

              {/* Projects badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="absolute -left-6 bottom-1/4 glass rounded-2xl p-4 border border-primary/20"
              >
                <p className="text-3xl font-bold gradient-text">50+</p>
                <p className="text-xs text-muted-foreground">Projects Done</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-heading text-2xl sm:text-3xl font-semibold mb-2">
              Hi, I'm <span className="text-primary">Tendai Nyandoro</span>
            </h3>
            <p className="text-lg text-muted-foreground mb-6">Professional FullStack Developer</p>

            {/* Details grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {details.map((detail, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="flex items-center gap-3 p-3 rounded-xl glass"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <detail.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wide">{detail.label}</p>
                    <p className="text-sm font-medium">{detail.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bio */}
            <div className="space-y-4 mb-8">
              <p className="text-muted-foreground leading-relaxed">
                I solve social and business problems through software. Having worked in and with 
                multinational companies in multiple roles, I have acquired great technical and 
                professional skills over <span className="text-primary font-medium">15+ years</span> in the industry.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I attended <span className="text-primary font-medium">Microverse</span>, an online coding school, 
                to master Full Stack Development—from technical skills (Ruby on Rails, React, JavaScript) 
                to soft skills (Pair Programming, Team Collaboration).
              </p>
            </div>

            {/* Interests */}
            <div>
              <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-3">Interests</h4>
              <div className="flex flex-wrap gap-3">
                {interests.map((interest, index) => (
                  <motion.div
                    key={interest.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    className="flex items-center gap-2 px-4 py-2 rounded-full glass border border-border hover:border-primary/50 transition-colors"
                  >
                    <interest.icon className="w-4 h-4 text-primary" />
                    <span className="text-sm">{interest.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;