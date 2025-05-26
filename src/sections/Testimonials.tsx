import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TestimonialCard } from '../components/TestimonialCard';

export const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const testimonials = [
    {
      quote: "Deployify has completely transformed our deployment process. What used to take hours now happens automatically in minutes. It's like magic!",
      name: "Sarah Johnson",
      role: "CTO",
      company: "TechFront",
      imageUrl: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      quote: "As a solo developer, I needed something simple yet powerful. Deployify gives me enterprise-level deployment capabilities without the complexity.",
      name: "Michael Chen",
      role: "Indie Developer",
      company: "CodeCraft",
      imageUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      quote: "Our team was able to cut deployment time by 80% after switching to Deployify. The automatic preview environments have revolutionized our QA process.",
      name: "Alicia Rodriguez",
      role: "VP of Engineering",
      company: "BuildBase",
      imageUrl: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          variants={headerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Trusted by developers worldwide
          </h2>
          <p className="text-white/70 text-lg">
            Join thousands of developers and teams who are shipping better applications faster with Deployify.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              role={testimonial.role}
              company={testimonial.company}
              imageUrl={testimonial.imageUrl}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};