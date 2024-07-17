// components/ThemeToggle.tsx
'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      setTheme('dark');
    } else {
      document.documentElement.classList.remove('dark');
      setTheme('light');
    }
  }, []);

  const toggleTheme = () => {
    if (theme === 'light') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setTheme('light');
    }
  };

  return (
    <label className="flex items-center cursor-pointer space-x-2">
      <FontAwesomeIcon icon={faSun} className="text-gray-800 dark:text-customDarkText text-xl" />
      <div className="relative">
        <input
          type="checkbox"
          className="sr-only"
          checked={theme === 'dark'}
          onChange={toggleTheme}
        />
        <div className="block w-11 h-6 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        <div
          className={`absolute left-1 top-1 w-4 h-4 bg-white border-2 border-gray-300 rounded-full transition-transform transform ${
            theme === 'dark' ? 'translate-x-5' : ''
          }`}
        ></div>
      </div>
      <FontAwesomeIcon icon={faMoon} className="text-gray-800 dark:text-customDarkText text-xl" />
    </label>
  );
};

export default ThemeToggle;