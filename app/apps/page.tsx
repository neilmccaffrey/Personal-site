import React from 'react';
import Image from 'next/image';

const Apps: React.FC = () => {
  return (
    <>
      <div className="border-b-2 border-gray-300 p-10 flex space-x-4">
        <div className="w-24 h-24 rounded-lg shadow-lg dark:border-2 dark:border-gray-300 dark:bg-white overflow-hidden flex-shrink-0">
          <Image
            src={'/images/run401.png'}
            alt={''}
            width={150}
            height={200}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex-col">
          <p className="dark:text-white text-2xl">
            Run 401 - Available for free on iOS
          </p>
          <p className="dark:text-white">
            A social app designed for users in Rhode Island to create and join
            local events for various activities. Developed using React Native
            and Firebase technologies:
            <br />
            • Firestore Database: Used to store user posts, comments, and other
            dynamic content. Ensures that any changes made to the data are
            instantly reflected across all devices. <br />
            • Firebase Authentication: Manages user sessions and secures access
            to app features. Allows users to sign up and log in using their
            email, ensuring secure and personalized access to the app. <br />
            • Firebase Storage: Handles profile photos and other uploads,
            integrating with Firebase Authentication to secure file access and
            management. <br />
            • Firebase Functions & Messaging: Used to send users a push
            notification 24 hours before an event they signed up for is
            scheduled to start.
            <br />• Cloud Vision & Perspective APIs: Used to moderate images and
            text.
          </p>
        </div>
      </div>
      <div className=" p-10 flex space-x-4">
        <div className="w-24 h-24 rounded-lg shadow-lg dark:border-2 dark:border-gray-300 dark:bg-white overflow-hidden flex-shrink-0">
          <Image
            src={'/images/pokerStatistics.png'}
            alt={''}
            width={150}
            height={200}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex-col">
          <p className="dark:text-white text-2xl">
            PokerStatistics - Available for free on iOS and Android
          </p>
          <p className="dark:text-white">
            A bankroll management and session statistics tracking app for poker
            players. Developed using React Native:
            <br />• Utilized various libraries including redux toolkit, redux
            persist, react navigation/stack, gesture handler, uuid, swipe list
            view, chart kit, and device info
            <br />• Ensured app responsiveness by implementing scaling for
            padding, margins, and text size to accommodate devices of different
            sizes
            <br />• Successfully deployed the app to the App Store and Play
            Store using Fastlane
          </p>
        </div>
      </div>
    </>
  );
};

export default Apps;
