import React from 'react';

import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
  return (
    <header className="w-full fixed top-0 bg-gray-200 dark:bg-gray-800 p-2 md:p-4">
      <nav className="container mx-auto flex flex-col items-center md:flex-row md:justify-between">
        <div className="flex justify-between items-center w-full sm:w-auto md:space-x-96">
          <ThemeToggle />
          <ul className="flex space-x-4">
            <li>
              <a
                href="https://github.com/neilmccaffrey"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-4xl dark:text-white transition-transform duration-200 hover:scale-125"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/neil-mccaffrey-2309b116b/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-4xl text-linkedIn dark:text-white transition-transform duration-200 hover:scale-125"
                />
              </a>
            </li>
          </ul>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link
              href="/"
              className="inline-block text-black dark:text-customDarkText transition-transform duration-200 dark:hover:text-gray-300 hover:text-gray-900 hover:scale-125"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="inline-block text-black dark:text-customDarkText transition-transform duration-200 dark:hover:text-gray-300 hover:text-gray-900 hover:scale-125"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/apps"
              className="inline-block text-black dark:text-customDarkText transition-transform duration-200 dark:hover:text-gray-300 hover:text-gray-900 hover:scale-125"
            >
              Apps
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="inline-block text-black dark:text-customDarkText transition-transform duration-200 dark:hover:text-gray-300 hover:text-gray-900 hover:scale-125"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              href="/Neil-McCaffrey-Resume.pdf"
              target="_blank"
              className="inline-block text-black dark:text-customDarkText transition-transform duration-200 dark:hover:text-gray-300 hover:text-gray-900 hover:scale-125"
            >
              Resume
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
