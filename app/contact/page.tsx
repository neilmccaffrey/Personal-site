import React from 'react';
import ContactForm from '@/components/ContactForm';

const Contact: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <main>
        <h1 className="text-3xl font-bold mb-4 dark:text-white">Contact Me</h1>
        <p className="mb-6 text-lg dark:text-white">
          I'd love to hear from you! Whether you have a question, a project
          idea, or just want to say hi, feel free to get in touch.
        </p>
        <ContactForm />
      </main>
    </div>
  );
};

export default Contact;
