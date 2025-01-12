'use client'; //framer-motion on works on client side

import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const cardsTop = {
    hidden: { opacity: 0, y: -150 }, // Start off screen at the top
    visible: { opacity: 1, y: 0 }, // Move into view
  };

  const cardsBottom = {
    hidden: { opacity: 0, y: 150 }, // Start off screen at the bottom
    visible: { opacity: 1, y: 0 }, // Move into view
  };
  return (
    <section className="flex flex-col justify-center items-center min-h-screen p-4">
      <h1 className="text-3xl md:text-6xl dark:text-white text-center mb-4 mt-16 md:mt-0">
        Skills
      </h1>
      {/* grid for uniformity */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
        {/* Top 3 Cards */}
        <motion.div
          className="w-full max-w-md p-2 border border-gray-300 rounded-lg shadow-md"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardsTop}
          transition={{ duration: 0.8 }}
        >
          <p className="dark:text-white text-2xl md:text-4xl">Languages</p>
          <p className="dark:text-white mt-4 text-xl md:text-2xl">
            • JavaScript
            <br />• HTML/CSS
            <br />• TypeScript
            <br />• Java
            <br />• C++
            <br />• Python
          </p>
        </motion.div>
        <motion.div
          className="w-full max-w-md p-2 border border-gray-300 rounded-lg shadow-md"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardsTop}
          transition={{ duration: 0.8 }}
        >
          <p className="dark:text-white text-2xl md:text-4xl">Front-End</p>
          <p className="dark:text-white mt-4 text-xl md:text-2xl">
            • React.js
            <br />• React Native
            <br />• Next.js
            <br />• Bootstrap
            <br />• Tailwind CSS
          </p>
        </motion.div>
        <motion.div
          className="w-full max-w-md p-2 border border-gray-300 rounded-lg shadow-md"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardsTop}
          transition={{ duration: 0.8 }}
        >
          <p className="dark:text-white text-2xl md:text-4xl">Back-End</p>
          <p className="dark:text-white mt-4 text-xl md:text-2xl">
            • Firebase
            <br />• AWS
            <br />• REST
            <br />• Node/Express.js
          </p>
        </motion.div>

        {/* Bottom 3 Cards */}
        <motion.div
          className="w-full max-w-md p-2 border border-gray-300 rounded-lg shadow-md"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardsBottom}
          transition={{ duration: 0.8 }}
        >
          <p className="dark:text-white text-2xl md:text-4xl">
            Database Technologies
          </p>
          <p className="dark:text-white mt-4 text-xl md:text-2xl">
            • Firebase Firestore
            <br />• SQL
            <br />• NoSQL
          </p>
        </motion.div>
        <motion.div
          className="w-full max-w-md p-2 border border-gray-300 rounded-lg shadow-md"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardsBottom}
          transition={{ duration: 0.8 }}
        >
          <p className="dark:text-white text-2xl md:text-4xl">
            DevOps and Tools
          </p>
          <p className="dark:text-white mt-4 text-xl md:text-2xl">
            • Git
            <br />• GitHub Actions
            <br />• Fastlane
            <br />• CI/CD
          </p>
        </motion.div>
        <motion.div
          className="w-full max-w-md p-2 border border-gray-300 rounded-lg shadow-md"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardsBottom}
          transition={{ duration: 0.8 }}
        >
          <p className="dark:text-white text-2xl md:text-4xl">Cloud Services</p>
          <p className="dark:text-white mt-4 text-xl md:text-2xl">
            • Firebase
            <br />• AWS
            <br />• Google Cloud
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
