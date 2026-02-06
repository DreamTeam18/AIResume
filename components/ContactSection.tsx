'use client';

import React from 'react';
import { contactConfig } from '@/config/contact';
import { Github, Linkedin, Mail } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          Contact
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          Get in touch - I&apos;d love to hear from you!
        </p>

        {/* Contact Links */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          {/* Email */}
          <a
            href={`mailto:${contactConfig.email}`}
            className="flex items-center gap-3 px-6 py-3 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 text-gray-900 dark:text-white hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Mail className="w-5 h-5" />
            <span className="font-medium">Email</span>
          </a>

          {/* GitHub */}
          <a
            href={contactConfig.github}
            className="flex items-center gap-3 px-6 py-3 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 text-gray-900 dark:text-white hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-5 h-5" />
            <span className="font-medium">GitHub</span>
          </a>

          {/* LinkedIn */}
          <a
            href={contactConfig.linkedin}
            className="flex items-center gap-3 px-6 py-3 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 text-gray-900 dark:text-white hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="w-5 h-5" />
            <span className="font-medium">LinkedIn</span>
          </a>
        </div>

        {/* Footer Text */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-500">
            © {new Date().getFullYear()} {contactConfig.email.split('@')[0]}. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
