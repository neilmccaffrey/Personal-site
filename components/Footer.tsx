import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="light:bg-white dark:bg-gray-800 p-2 mt-auto flex justify-center items-center">
      <span className="dark:text-customDarkText">
        Site written using Next.js and TypeScript |{' '}
      </span>
      <a
        href="https://github.com/neilmccaffrey/Personal-site"
        target="_blank"
        rel="noopener noreferrer"
        className="dark:text-blue-400 text-blue-400 transition-transform duration-200 hover:scale-110"
      >
        &nbsp;View code
      </a>
    </footer>
  );
};

export default Footer;
