'use client';

import React from 'react';
import * as LucideIcons from 'lucide-react';

interface SkillItemProps {
  name: string;
  icon: string;
  category: 'backend' | 'frontend' | 'database' | 'other';
}

export function SkillItem({ name, icon, category }: SkillItemProps) {
  // Dynamically get the icon component from Lucide React
  const IconComponent = (LucideIcons as any)[icon] || LucideIcons.Code2;

  // Category color mapping
  const categoryColors = {
    backend: 'from-blue-500 to-cyan-500',
    frontend: 'from-purple-500 to-pink-500',
    database: 'from-green-500 to-emerald-500',
    other: 'from-orange-500 to-amber-500',
  };

  const gradientClass = categoryColors[category];

  return (
    <div className="group flex flex-col items-center gap-3 p-6 rounded-xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      {/* Icon with gradient background */}
      <div className={`p-4 rounded-lg bg-gradient-to-br ${gradientClass} transition-transform duration-300 group-hover:scale-110`}>
        <IconComponent className="w-8 h-8 text-white" strokeWidth={2} />
      </div>

      {/* Skill Name */}
      <span className="text-sm font-semibold text-gray-800 dark:text-gray-200 text-center">
        {name}
      </span>
    </div>
  );
}
