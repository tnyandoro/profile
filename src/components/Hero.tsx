import { motion } from "framer-motion";
import { ChevronDown, Download, Github, Linkedin, Mail, Code, Database, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const floatingIcons = [
    { icon: Code, delay: 0, x: "10%", y: "20%" },
    { icon: Database, delay: 0.5, x: "85%", y: "30%" },
    { icon: Sparkles, delay: 1, x: "15%", y: "70%" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />

      {/* Floating tech icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.3, scale: 1, y: [0, -20, 0] }}
          transition={{ 
            delay: item.delay + 1, 
            duration: 0.5,
            y: { repeat: Infinity, duration: 4, ease: "easeInOut" }
          }}
          className="absolute hidden lg:block"
          style={{ left: item.x, top: item.y }}
        >
          <div className="p-4 glass rounded-2xl">
            <item.icon className="w-8 h-8 text-primary" />
          </div>
        </motion.div>
      ))}

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          {/* Hello badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass mb-8 border border-primary/20"
          >
            <span className="text-2xl animate-bounce">👋</span>
            <span className="text-sm font-medium text-primary">Hello, I'm</span>
          </motion.div>

          {/* Name with animated gradient */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="font-heading text-5xl sm:text-6xl md:text-8xl font-bold mb-4 tracking-tight"
          >
            <span className="gradient-text drop-shadow-2xl">TENDAI</span>
            <br />
            <span className="text-foreground">NYANDORO</span>
          </motion.h1>

          {/* Animated typing effect title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mb-10"
          >
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground tracking-[0.15em] uppercase">
              <span className="text-primary">&lt;</span>
              FullStack Software Developer
              <span className="text-primary">/&gt;</span>
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Button size="lg" className="glow group px-8 py-6 text-base">
              <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Download CV
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-6 text-base border-primary/50 hover:bg-primary/10" asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex items-center justify-center gap-4"
          >
            {[
              { icon: Github, href: "https://github.com/tnyandoro", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/tendai-nyandoro/", label: "LinkedIn" },
              { icon: Mail, href: "mailto:tnyandoro@gmail.com", label: "Email" },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
                className="p-4 rounded-2xl glass hover:bg-primary/20 transition-all duration-300 group border border-transparent hover:border-primary/30"
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6 group-hover:text-primary group-hover:scale-110 transition-all" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group">
            <span className="text-xs tracking-[0.3em] uppercase">Scroll Down</span>
            <div className="w-6 h-10 rounded-full border-2 border-current flex items-start justify-center p-1">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                className="w-1.5 h-1.5 rounded-full bg-primary"
              />
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;