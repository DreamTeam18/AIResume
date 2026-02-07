'use client';

import { motion } from 'framer-motion';
import { profileConfig } from '@/config/profile';

export function AboutSection() {
  return (
    <section id="me" className="py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">About Me</h2>

          <p className="text-lg md:text-xl leading-relaxed text-foreground/80">
            {profileConfig.bio}
          </p>

          <div className="mt-6 space-y-2 text-foreground/70">
            <p><strong>Location:</strong> {profileConfig.location}</p>
            <p><strong>Education:</strong> {profileConfig.education}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
