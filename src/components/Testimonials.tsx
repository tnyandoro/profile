import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Working alongside Tendai at Nissi Energy was a rewarding experience, particularly as we ventured into uncharted territory as pioneers in Zimbabwe's solar energy sector. Together, we contributed to setting the standard for solar installations in the country.",
      author: "Tichaona Dzingirai",
      role: "Colleague at Nissi Energy",
      rating: 5,
    },
    {
      quote: "I had the pleasure of working closely with Tendai during his tenure as a Business Developer. His dedication, strategic insights, and proactive approach made him an invaluable asset to our team. His contributions were instrumental in achieving our objectives.",
      author: "Sherpherd Dohwe",
      role: "Business Partner",
      rating: 5,
    },
    {
      quote: "I've had the privilege of collaborating with Tendai for over 15 years as a consultant on all IT-related matters. Tendai consistently demonstrates a meticulous approach to his work, ensuring thoroughness in every project.",
      author: "Davison Elijah",
      role: "Long-term Client",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]" />
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium tracking-wider uppercase text-sm">Testimonials</span>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold mt-2 mb-4">
            What People <span className="gradient-text">Say</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Feedback from colleagues and clients I've had the pleasure of working with
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative"
            >
              <div className="glass rounded-3xl p-8 h-full card-hover border border-border group-hover:border-primary/30 transition-all duration-300 relative overflow-hidden">
                {/* Large quote background */}
                <Quote className="absolute -top-4 -left-4 w-24 h-24 text-primary/5 rotate-180" />
                
                {/* Rating */}
                <div className="flex gap-1 mb-6 relative z-10">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                
                {/* Quote text */}
                <p className="text-muted-foreground leading-relaxed mb-8 relative z-10 italic">
                  "{testimonial.quote}"
                </p>
                
                {/* Author */}
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center shadow-lg shadow-primary/20">
                    <span className="text-lg font-bold text-primary-foreground">
                      {testimonial.author.split(" ").map(n => n[0]).join("")}
                    </span>
                  </div>
                  <div>
                    <p className="font-heading font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>

                {/* Decorative gradient corner */}
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-primary/10 to-transparent rounded-tl-[100px]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;