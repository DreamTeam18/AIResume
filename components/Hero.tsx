'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { profileConfig } from '@/config/profile';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  // Create scroll-based parallax effect
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  // Transform scroll progress to parallax values
  // Memoji moves up slower than scroll (parallax effect)
  const memojiY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  // Subtle rotation based on scroll
  const memojiRotate = useTransform(scrollYProgress, [0, 1], [0, 5]);
  // Slight scale change on scroll
  const memojiScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-4 py-20"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex-1 text-center md:text-left"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Hey, I&apos;m {profileConfig.name} 👋
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400">
              {profileConfig.tagline}
            </p>
          </motion.div>

          {/* Memoji Image with Parallax Effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="flex-1 flex justify-center"
          >
            <motion.div
              style={{
                y: memojiY,
                rotate: memojiRotate,
                scale: memojiScale,
              }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <Image
                src={profileConfig.memojiImage}
                alt="Animated memoji"
                width={384}
                height={384}
                priority
                className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain"
                sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
