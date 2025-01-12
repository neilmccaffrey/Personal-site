import React from 'react';
import ContactForm from '@/components/ContactForm';

const Contact: React.FC = () => {
  const text = 'Contact Me';

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <main>
        <h1 className="text-xl md:text-3xl font-bold mb-2 md:mb-4 dark:text-white pt-16 md:pt-0">
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
        <p className="mb-2 md:mb-6 text-base md:text-lg dark:text-white">
          I'd love to hear from you! Whether you have a question, a project
          idea, or just want to say hi, feel free to get in touch.
        </p>
        <ContactForm />
      </main>
    </div>
  );
};

export default Contact;
