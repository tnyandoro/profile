import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Shapa Soweto",
      description: "A Nike community platform for athletes in Soweto. Built to help transform belief into reality through sports and community engagement.",
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop",
      tags: ["React", "Node.js", "Community"],
      liveUrl: "https://shapasoweto.co.za/home",
      color: "from-orange-500/20 to-red-500/20",
    },
    {
      title: "Rejoice Academy",
      description: "Educational platform for Rejoice Academy Zimbabwe, providing quality education from ECD to Grade 7 with modern e-learning facilities.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop",
      tags: ["React", "Education", "Full Stack"],
      liveUrl: "https://www.rejoiceacademy.co.zw/",
      color: "from-yellow-500/20 to-amber-500/20",
    },
    {
      title: "Arte Gelato",
      description: "Authentic Italian gelato company website featuring beautiful design, product showcases, and event booking functionality.",
      image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=600&h=400&fit=crop",
      tags: ["React", "Netlify", "Business"],
      liveUrl: "https://arte-galerto.netlify.app/",
      color: "from-pink-500/20 to-rose-500/20",
    },
    {
      title: "AfriAgriLink",
      description: "Agricultural technology platform connecting farmers, buyers, and service providers for a smarter, sustainable future in Africa.",
      image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&h=400&fit=crop",
      tags: ["React", "AgriTech", "Marketplace"],
      liveUrl: "https://afriagrilink.netlify.app/",
      color: "from-green-500/20 to-emerald-500/20",
    },
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium tracking-wider uppercase text-sm">My Work</span>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold mt-2 mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A selection of projects showcasing my expertise in building modern, scalable web applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-3xl overflow-hidden"
            >
              {/* Card background with gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Glass card */}
              <div className="relative glass rounded-3xl overflow-hidden border border-border group-hover:border-primary/30 transition-colors duration-300">
                {/* Image */}
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                  
                  {/* Hover overlay with link */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-16 h-16 rounded-full bg-primary flex items-center justify-center glow"
                    >
                      <ArrowUpRight className="w-7 h-7 text-primary-foreground" />
                    </motion.a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 pt-0 relative -mt-8">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1.5 bg-primary/10 text-primary rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="font-heading text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <Button size="sm" className="flex-1" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Live
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <a href="https://github.com/tnyandoro" target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View more */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" asChild className="group">
            <a href="https://github.com/tnyandoro" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
              <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;