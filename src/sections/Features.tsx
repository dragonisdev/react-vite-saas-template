import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Zap, Globe, Lock, ArrowUpRight, Layers, Workflow } from 'lucide-react';
import { FeatureCard } from '../components/FeatureCard';

export const Features = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="features" className="py-20 md:py-32 relative">
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
            Everything you need for modern deployments
          </h2>
          <p className="text-white/70 text-lg">
            Our platform provides all the tools you need to deploy, scale, and manage your applications with ease. No more complex configuration or server management.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={Zap}
            title="Instant Deployments"
            description="Deploy in seconds, not minutes. Our optimized build pipeline gets your changes live faster than any other platform."
            delay={0.1}
          />
          <FeatureCard
            icon={Globe}
            title="Global Edge Network"
            description="Automatically deployed to our global CDN, ensuring low latency and high availability for users anywhere in the world."
            delay={0.2}
          />
          <FeatureCard
            icon={Lock}
            title="Enterprise Security"
            description="Bank-level security with automatic SSL, advanced DDoS protection, and role-based access controls."
            delay={0.3}
          />
          <FeatureCard
            icon={ArrowUpRight}
            title="Automatic Scaling"
            description="Your applications automatically scale from zero to global, without any configuration or management required."
            delay={0.4}
          />
          <FeatureCard
            icon={Layers}
            title="Preview Environments"
            description="Every pull request gets its own preview deployment, making code reviews and testing easier than ever."
            delay={0.5}
          />
          <FeatureCard
            icon={Workflow}
            title="Integrated Workflows"
            description="Connect with your existing tools and workflows. Seamless integration with GitHub, GitLab, and Bitbucket."
            delay={0.6}
          />
        </div>
      </div>
    </section>
  );
};