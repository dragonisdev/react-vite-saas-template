import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  company: string;
  imageUrl: string;
  delay?: number;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  name,
  role,
  company,
  imageUrl,
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
      className="card card-hover"
    >
      <p className="text-white/80 mb-6 italic">"{quote}"</p>
      <div className="flex items-center">
        <img
          src={imageUrl}
          alt={name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-white/60 text-sm">
            {role}, {company}
          </p>
        </div>
      </div>
    </motion.div>
  );
};