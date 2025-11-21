import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight" style={{ textWrap: 'balance' }}>
          Let's Connect
        </h1>
        <p className="mt-6 text-neutral-600 dark:text-neutral-400 text-lg max-w-2xl mx-auto">
          Have a project in mind or just want to say hello? I'd love to hear from you. Fill out the form below or send me an email.
        </p>
      </div>

      <div className="max-w-xl mx-auto mt-12">
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="sr-only">Name</label>
            <input 
              type="text" 
              name="name" 
              id="name" 
              placeholder="Your Name"
              className="w-full bg-white dark:bg-[#1c1c1c] border border-neutral-300 dark:border-neutral-700/80 rounded-lg py-3 px-4 text-neutral-900 dark:text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-brand-green transition-shadow"
            />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">Email</label>
            <input 
              type="email" 
              name="email" 
              id="email" 
              placeholder="Your Email"
              className="w-full bg-white dark:bg-[#1c1c1c] border border-neutral-300 dark:border-neutral-700/80 rounded-lg py-3 px-4 text-neutral-900 dark:text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-brand-green transition-shadow"
            />
          </div>
          <div>
            <label htmlFor="message" className="sr-only">Message</label>
            <textarea 
              name="message" 
              id="message" 
              rows={5}
              placeholder="Your Message"
              className="w-full bg-white dark:bg-[#1c1c1c] border border-neutral-300 dark:border-neutral-700/80 rounded-lg py-3 px-4 text-neutral-900 dark:text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-brand-green transition-shadow"
            ></textarea>
          </div>
          <div>
            <button 
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-brand-green hover:brightness-90 transition-all text-black font-semibold py-3 px-6 rounded-full"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;