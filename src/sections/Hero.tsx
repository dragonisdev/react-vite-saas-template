import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { AnimatedTerminal } from '../components/AnimatedTerminal';

export const Hero = () => {
  const terminalCommands = [
    'npx create-deployify-app my-awesome-project',
    'cd my-awesome-project',
    'git push deployify main',
    '✓ Deployment complete! Site is live at https://my-awesome-project.deployify.app'
  ];

  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-32 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern"></div>
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Deploy your code with 
                <span className="gradient-text"> zero</span> configuration
              </h1>
              <p className="text-xl text-white/70 mb-8 max-w-lg">
                The fastest way to get your projects online. Push your code and watch it deploy automatically. No complex setup required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#" className="btn-primary flex items-center justify-center">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <a href="#" className="btn-secondary">
                  View Documentation
                </a>
              </div>
            </motion.div>
          </div>
          <div className="w-full lg:w-1/2 lg:pl-12">
            <AnimatedTerminal commands={terminalCommands} className="shadow-xl" />
          </div>

        </div>

      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none"></div>
    </div>
  );
};
};
};