'use client';
import Link from 'next/link';

export default function Page() {
  const text = 'Hi, I’m Neil McCaffrey';

  return (
    <section className="container mx-auto p-4 dark:text-white min-h-screen flex flex-col justify-center pt-16">
      <h1 className="text-3xl md:text-6xl">
        {text.split('').map((char, index) => (
          <span
            key={index}
            className="inline-block animate-wave"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </h1>
      <p className="mt-4 text-2xl  dark:text-white">
        I am a software developer who enjoys creating fullstack mobile and web
        applications. I like learning new languages and tools, and I have
        experience using React Native, React.js, Java, Firebase, JavaScript, and
        more. My focus is on leveraging modern technologies to build efficient
        and user-friendly applications.
      </p>
      <section className="container mx-auto p-4 flex flex-col items-center">
        <p className="mt-8 text-xl  dark:text-white">
          I have developed two applications using React Native that are
          available for download
        </p>
        <Link href="/apps">
          <button
            className="bg-customDarkText text-white font-bold py-2 px-4 rounded shadow-lg 
          hover:bg-purple-300 focus:outline-none focus:ring-2 focus:ring-offset-2 
          focus:ring-customDarkText mt-4 transition-transform duration-200 hover:scale-110"
          >
            Learn More
          </button>
        </Link>
      </section>
    </section>
  );
}
