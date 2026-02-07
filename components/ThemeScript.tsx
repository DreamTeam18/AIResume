'use client';

import { useEffect } from 'react';

export function ThemeScript() {
  useEffect(() => {
    // This runs on client mount, but we need it before render
  }, []);

  return null;
}

// Export the script content to be injected
export const themeScriptContent = `
  (function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else if (savedTheme === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      if (systemTheme === 'dark') {
        document.documentElement.classList.add('dark');
      }
    }
  })();
`;
