import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FAQItem } from '../components/FAQItem';

export const FAQ = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const faqItems = [
    {
      question: "How does Deployify work?",
      answer: "Deployify connects to your Git repository and automatically builds and deploys your application every time you push changes. We detect your project type and apply the appropriate build settings automatically, so you don't need to worry about configuration.",
    },
    {
      question: "What types of projects can I deploy?",
      answer: "Deployify supports a wide range of project types, including static sites, single-page applications (React, Vue, Angular), Node.js applications, and more. If your project can be built and served on the web, we can deploy it.",
    },
    {
      question: "Can I use a custom domain?",
      answer: "Yes! You can connect any domain you own to your Deployify projects. We automatically provision and renew SSL certificates for all custom domains, ensuring your site is always secure.",
    },
    {
      question: "How do preview deployments work?",
      answer: "When you create a pull request in your Git repository, Deployify automatically creates a unique preview environment with its own URL. This allows you to see and share exactly how your changes will look before merging to production.",
    },
    {
      question: "Can I deploy from private repositories?",
      answer: "Absolutely. Deployify securely integrates with your Git provider and can deploy from both public and private repositories with the same ease and speed.",
    },
    {
      question: "What about environment variables and secrets?",
      answer: "Deployify provides a secure way to manage environment variables and secrets through our dashboard. These are encrypted at rest and only decrypted during the build process, ensuring your sensitive information stays secure.",
    },
  ];

  return (
    <section id="faq" className="py-20 md:py-32">
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
            Frequently asked questions
          </h2>
          <p className="text-white/70 text-lg">
            Everything you need to know about Deployify. Can't find the answer you're looking for? Contact our support team.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
};