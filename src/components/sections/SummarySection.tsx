// src/components/sections/SummarySection.tsx

'use client';

import { useLanguage } from '@/hooks/useLanguage';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { CheckCircle2, Rocket, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

export function SummarySection() {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <Section id="project" background="gray">
      <div className="section-header">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          {t.summary.title}
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-subtitle"
        >
          {t.summary.subtitle}
        </motion.p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-8"
      >
        {/* Stage 1 */}
        <motion.div variants={itemVariants}>
          <Card hover className="h-full">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Rocket className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {t.summary.stage1.title}
                </h3>
                <p className="text-primary font-medium">
                  {t.summary.stage1.time}
                </p>
              </div>
            </div>

            <ul className="space-y-3">
              {t.summary.stage1.features.map((feature, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </Card>
        </motion.div>

        {/* Stage 2 */}
        <motion.div variants={itemVariants}>
          <Card hover className="h-full">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {t.summary.stage2.title}
                </h3>
                <p className="text-primary font-medium">
                  {t.summary.stage2.time}
                </p>
              </div>
            </div>

            <ul className="space-y-3">
              {t.summary.stage2.features.map((feature, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </Card>
        </motion.div>
      </motion.div>

      {/* Visual separator */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="mt-16 flex items-center justify-center"
      >
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
            <span className="text-2xl font-bold text-primary">1</span>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-primary/50 to-primary" />
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
            <span className="text-2xl font-bold text-white">2</span>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}