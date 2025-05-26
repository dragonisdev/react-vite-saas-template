import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check } from 'lucide-react';

interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  delay?: number;
}

export const PricingCard: React.FC<PricingCardProps> = ({
  name,
  price,
  description,
  features,
  isPopular = false,
  delay = 0,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 0.5, delay: delay }}
      className={`card ${isPopular ? 'border-primary/30 relative overflow-hidden' : 'card-hover'}`}
    >
      {isPopular && (
        <>
          <div className="absolute top-0 right-0 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-bl-lg">
            Popular
          </div>
          <div className="glow"></div>
        </>
      )}
      <div className="flex flex-col h-full">
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <p className="text-white/60 mb-6">{description}</p>
        <div className="mb-6">
          <span className="text-3xl font-bold">{price}</span>
          {price !== 'Custom' && <span className="text-white/60">/month</span>}
        </div>
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="w-5 h-5 text-success mr-2 shrink-0 mt-0.5" />
              <span className="text-white/80">{feature}</span>
            </li>
          ))}
        </ul>
        <div className="mt-auto">
          <a
            href="#"
            className={`w-full text-center py-2.5 px-4 rounded-md font-medium transition-all ${
              isPopular
                ? 'bg-primary hover:bg-primary/90 text-white'
                : 'bg-white/10 hover:bg-white/20 text-white'
            }`}
          >
            Get Started
          </a>
        </div>
      </div>
    </motion.div>
  );
};