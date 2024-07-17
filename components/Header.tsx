import React from 'react';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
  return (
    <header className="light:bg-white dark:bg-gray-800 p-4">
    <nav className="container mx-auto flex justify-between items-center">
      <ThemeToggle />
      <ul className="flex space-x-4">
        <li>
          <Link href="/" className="text-black dark:text-customDarkText hover:text-gray-300">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="text-black dark:text-customDarkText hover:text-gray-300">
            About
          </Link>
        </li>
        <li>
          <Link href="/contact" className="text-black dark:text-customDarkText hover:text-gray-300">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  </header>
  );
};

export default Header;