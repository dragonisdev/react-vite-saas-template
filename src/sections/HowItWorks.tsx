import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const HowItWorks = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const steps = [
    {
      number: '01',
      title: 'Connect your repository',
      description: 'Link your GitHub, GitLab, or Bitbucket repository to Deployify with just a few clicks.',
      delay: 0.1,
    },
    {
      number: '02',
      title: 'Push your code',
      description: 'Commit and push your code as you normally would. We\'ll automatically detect changes.',
      delay: 0.2,
    },
    {
      number: '03',
      title: 'Watch it deploy',
      description: 'Deployify builds, tests, and deploys your code automatically. No configuration needed.',
      delay: 0.3,
    },
    {
      number: '04',
      title: 'Share your project',
      description: 'Your project is live on a global CDN with a custom domain and SSL certificate.',
      delay: 0.4,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-muted/30">
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
            Simple deployment workflow
          </h2>
          <p className="text-white/70 text-lg">
            Our streamlined process takes you from code to production in minutes, not hours. No complex DevOps knowledge required.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const [stepRef, stepInView] = useInView({
              triggerOnce: true,
              threshold: 0.1,
            });

            return (
              <motion.div
                key={index}
                ref={stepRef}
                initial={{ opacity: 0, y: 20 }}
                animate={stepInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: step.delay }}
                className="relative"
              >
                <div className="mb-4">
                  <span className="text-5xl font-bold text-primary/30">{step.number}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-white/60">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-px bg-gradient-to-r from-primary/30 to-transparent transform -translate-x-8"></div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};