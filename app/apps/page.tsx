'use client'; //framer-motion only works on client side

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Apps: React.FC = () => {
  const images = {
    hidden: { opacity: 0, x: -250 }, // Start off screen
    visible: { opacity: 1, x: 0 }, // Move into view
  };

  const text = {
    hidden: { opacity: 0, x: 250 }, // Start off screen
    visible: { opacity: 1, x: 0 }, // Move into view
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 pb-16">
      {/* App 1 */}
      <div className="border-b-2 border-gray-300 p-6 md:p-10 pt-16 md:pt-0 flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-4 max-w-4xl w-full">
        <motion.div
          className="w-24 h-24 md:w-32 md:h-32 rounded-lg shadow-lg dark:border-2 dark:border-gray-300 dark:bg-white overflow-hidden flex-shrink-0 mx-auto md:mx-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={images}
          transition={{ duration: 0.8 }}
        >
          <Image
            src={'/images/run401.png'}
            alt={''}
            width={150}
            height={200}
            className="object-cover w-full h-full"
          />
        </motion.div>
        <motion.div
          className="flex flex-col text-center md:text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={text}
          transition={{ duration: 0.8 }}
        >
          <p className="dark:text-white text-xl md:text-2xl font-bold">
            Run 401 - Available for free on iOS
          </p>
          <p className="dark:text-white text-sm md:text-base mt-2">
            A social app designed for users in Rhode Island to create and join
            local events for various activities. Developed using React Native
            and Firebase technologies:
            <br />
            • Firestore Database: Stores user posts, comments, and dynamic
            content.
            <br />
            • Firebase Authentication: Manages user sessions and secures access.
            <br />
            • Firebase Storage: Handles profile photos and uploads securely.
            <br />
            • Firebase Functions & Messaging: Sends push notifications.
            <br />• Cloud Vision & Perspective APIs: Moderates images and text.
          </p>
        </motion.div>
      </div>

      {/* App 2 */}
      <div className="p-6 md:p-10 flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-4 max-w-4xl w-full">
        <motion.div
          className="w-24 h-24 md:w-32 md:h-32 rounded-lg shadow-lg dark:border-2 dark:border-gray-300 dark:bg-white overflow-hidden flex-shrink-0 mx-auto md:mx-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={images}
          transition={{ duration: 0.8 }}
        >
          <Image
            src={'/images/pokerStatistics.png'}
            alt={''}
            width={150}
            height={200}
            className="object-cover w-full h-full"
          />
        </motion.div>
        <motion.div
          className="flex flex-col text-center md:text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={text}
          transition={{ duration: 0.8 }}
        >
          <p className="dark:text-white text-xl md:text-2xl font-bold">
            PokerStatistics - Available for free on iOS and Android
          </p>
          <p className="dark:text-white text-sm md:text-base mt-2">
            A bankroll management and session statistics tracking app for poker
            players:
            <br />
            • Libraries: Redux Toolkit, Redux Persist, React Navigation, and
            more.
            <br />
            • Scales for different screen sizes using responsive design.
            <br />• Deployed on App Store and Play Store using Fastlane.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Apps;
