import React from 'react';

const About: React.FC = () => {
  return (
    <>
      <h1 className="text-6xl dark:text-white text-center">Skills</h1>
      <div className="flex flex-wrap justify-center space-x-2">
        <div className="flex-grow w-80 p-4 border border-gray-300 rounded-lg shadow-md mt-8">
          <p className="dark:text-white text-4xl">Languages</p>
          <p className="dark:text-white mt-4 text-2xl">
            • JavaScript
            <br />• HTML/CSS
            <br />• TypeScript
            <br />• Java
            <br />• C++
            <br />• Python
          </p>
        </div>
        <div className="flex-grow w-80 p-4 border border-gray-300 rounded-lg shadow-md mt-8">
          <p className="dark:text-white text-4xl">Front-End</p>
          <p className="dark:text-white mt-4 text-2xl">
            • React.js
            <br />• React Native
            <br />• Next.js
            <br />• Bootstrap
            <br />• Tailwind CSS
          </p>
        </div>
        <div className="flex-grow w-80 p-4 border border-gray-300 rounded-lg shadow-md mt-8">
          <p className="dark:text-white text-4xl">Back-End</p>
          <p className="dark:text-white mt-4 text-2xl">
            • Firebase
            <br />• AWS
            <br />• REST
            <br />• Node/Express.js
          </p>
        </div>
        <div className="flex-grow w-80 p-4 border border-gray-300 rounded-lg shadow-md mt-8">
          <p className="dark:text-white text-4xl">Database Technologies</p>
          <p className="dark:text-white mt-4 text-2xl">
            • Firebase Firestore
            <br />• SQL
            <br />• NoSQL
          </p>
        </div>
        <div className="flex-grow w-80 p-4 border border-gray-300 rounded-lg shadow-md mt-8">
          <p className="dark:text-white text-4xl">DevOps and Tools</p>
          <p className="dark:text-white mt-4 text-2xl">
            • Git
            <br />• Fastlane
            <br />• CI/CD
          </p>
        </div>
        <div className="flex-grow w-80 p-4 border border-gray-300 rounded-lg shadow-md mt-8">
          <p className="dark:text-white text-4xl">Cloud Services</p>
          <p className="dark:text-white mt-4 text-2xl">
            • Firebase
            <br />• AWS
            <br />• Google Cloud
          </p>
        </div>
        {/* <div className="flex-grow max-w-lg mx-auto p-4 border border-gray-300 rounded-lg shadow-md mt-8">
          <p className="dark:text-white text-4xl">Languages</p>
          <p className="dark:text-white mt-4 text-2xl">
            • JavaScript
            <br />• HTML/CSS
            <br />• TypeScript
            <br />• Java
            <br />• C++
            <br />• Python
          </p>
        </div>
        <div className="flex-grow max-w-lg mx-auto p-4 border border-gray-300 rounded-lg shadow-md mt-8">
          <p className="dark:text-white text-4xl">Front-End</p>
          <p className="dark:text-white mt-4 text-2xl">
            • React.js
            <br />• React Native
            <br />• Next.js
            <br />• Bootstrap
            <br />• Tailwind
          </p>
        </div>
        <div className="flex-grow max-w-lg mx-auto p-4 border border-gray-300 rounded-lg shadow-md mt-8">
          <p className="dark:text-white text-4xl">Back-End</p>
          <p className="dark:text-white mt-4 text-2xl">
            • Firebase
            <br />• AWS
            <br />• REST
            <br />• Node/Express.js
          </p>
        </div> */}
      </div>
    </>
  );
};

export default About;
