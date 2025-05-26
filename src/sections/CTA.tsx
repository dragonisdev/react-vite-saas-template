import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';

export const CTA = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-50"></div>
      <div className="glow"></div>
      <div className="container mx-auto relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-primary/20 to-secondary/20 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to deploy faster?
              </h2>
              <p className="text-white/70 text-lg max-w-2xl">
                Join thousands of developers and teams who are shipping better applications with Deployify. Start for free, no credit card required.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#" className="btn-primary flex items-center justify-center">
                Get Started for Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a href="#" className="btn-secondary">
                Request Demo
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};