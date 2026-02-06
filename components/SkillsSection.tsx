'use client';

import React from 'react';
import { SkillItem } from './SkillItem';
import { skillsConfig } from '@/config/skills';

export function SkillsSection() {
  // Group skills by category for organized display
  const skillsByCategory = {
    backend: skillsConfig.filter(skill => skill.category === 'backend'),
    frontend: skillsConfig.filter(skill => skill.category === 'frontend'),
    database: skillsConfig.filter(skill => skill.category === 'database'),
    other: skillsConfig.filter(skill => skill.category === 'other'),
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          Skills
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          Technologies and tools I work with
        </p>

        {/* Skills Grid - 4 columns on desktop, 2 columns on mobile */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {skillsConfig.map((skill) => (
            <SkillItem
              key={skill.id}
              name={skill.name}
              icon={skill.icon}
              category={skill.category}
            />
          ))}
        </div>

        {/* Category Labels (Optional) */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-4">
            <h3 className="text-sm font-semibold text-blue-600 dark:text-blue-400">Backend</h3>
            <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">{skillsByCategory.backend.length} skills</p>
          </div>
          <div className="p-4">
            <h3 className="text-sm font-semibold text-purple-600 dark:text-purple-400">Frontend</h3>
            <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">{skillsByCategory.frontend.length} skills</p>
          </div>
          <div className="p-4">
            <h3 className="text-sm font-semibold text-green-600 dark:text-green-400">Database</h3>
            <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">{skillsByCategory.database.length} skills</p>
          </div>
          <div className="p-4">
            <h3 className="text-sm font-semibold text-orange-600 dark:text-orange-400">Other</h3>
            <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">{skillsByCategory.other.length} skills</p>
          </div>
        </div>
      </div>
    </section>
  );
}
