import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { PricingCard } from '../components/PricingCard';

export const Pricing = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const pricingPlans = [
    {
      name: 'Hobby',
      price: 'Free',
      description: 'Perfect for side projects and experiments',
      features: [
        'Up to 3 projects',
        '1GB bandwidth per month',
        'Automatic HTTPS',
        'Global CDN',
        'Community support',
      ],
    },
    {
      name: 'Pro',
      price: '$19',
      description: 'For professionals and growing teams',
      features: [
        'Unlimited projects',
        '100GB bandwidth per month',
        'Automatic HTTPS',
        'Global CDN',
        'Custom domains',
        'Preview deployments',
        'Team collaboration',
        'Priority support',
      ],
      isPopular: true,
    },
    {
      name: 'Business',
      price: '$49',
      description: 'For larger teams and organizations',
      features: [
        'Unlimited projects',
        '500GB bandwidth per month',
        'Advanced security',
        'Team permissions',
        'SAML SSO',
        'Audit logs',
        'Dedicated support',
        'SLA guarantees',
      ],
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For companies with specific requirements',
      features: [
        'Unlimited everything',
        'Custom contracts',
        'Enterprise SSO',
        'Custom integrations',
        'Dedicated account manager',
        'On-boarding & training',
        'Advanced analytics',
        '24/7 premium support',
      ],
    },
  ];

  return (
    <section id="pricing" className="py-20 md:py-32 relative">
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
            Simple, transparent pricing
          </h2>
          <p className="text-white/70 text-lg">
            Choose a plan that works for you. All plans include our core features, automatic scaling, and zero configuration deployment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={index}
              name={plan.name}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              isPopular={plan.isPopular}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};