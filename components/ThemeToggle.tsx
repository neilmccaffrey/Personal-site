'use client';
import React, { useEffect, useState } from 'react';

import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState('dark');

  //set dark/light mode remember user preference
  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
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
    //theme toggle
    <div className="flex items-center space-x-2">
      <FontAwesomeIcon
        icon={faSun}
        className="text-gray-800 dark:text-customDarkText text-xl"
      />
      <label htmlFor="theme-toggle" className="relative">
        <input
          id="theme-toggle"
          type="checkbox"
          className="sr-only"
          checked={theme === 'dark'}
          onChange={toggleTheme}
        />
        <div className="block w-11 h-6 bg-gray-500 rounded-full dark:bg-gray-700"></div>
        <div
          className={`absolute left-1 top-1 w-4 h-4 bg-white border-2 border-gray-300 rounded-full transition-transform transform ${
            theme === 'dark' ? 'translate-x-5' : ''
          }`}
        ></div>
        {/* accessibility */}
        <span className="sr-only">Toggle theme</span>
      </label>
      <FontAwesomeIcon
        icon={faMoon}
        className="text-gray-800 dark:text-customDarkText text-xl"
      />
    </div>
  );
};

export default ThemeToggle;
