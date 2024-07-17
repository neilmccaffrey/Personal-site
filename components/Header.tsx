import React from "react";

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

import ThemeToggle from "./ThemeToggle";

const Header: React.FC = () => {
  return (
    <header className="light:bg-white dark:bg-gray-800 p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <ThemeToggle />
        <ul className='flex space-x-4'>
          <a
            href="https://github.com/neilmccaffrey"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="text-4xl dark:text-white"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/neil-mccaffrey-2309b116b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-4xl text-linkedIn dark:text-white"
            />
          </a>
        </ul>
        <ul className="flex space-x-4">
          <li>
            <Link
              href="/"
              className="text-black dark:text-customDarkText hover:text-gray-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-black dark:text-customDarkText hover:text-gray-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-black dark:text-customDarkText hover:text-gray-300"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
