'use client';

import { motion } from 'framer-motion';
import { useRef, FormEvent } from 'react';

export default function Home() {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData(formRef.current!);
    const data = Object.fromEntries(formData.entries());
    alert("Thank you for contacting us, " + data.name + "!");
    formRef.current!.reset();
  };

  const scrollVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <main className="bg-gradient-to-br from-gray-900 to-gray-800 text-white scroll-smooth font-sans">
      <motion.div initial="hidden" animate="visible" transition={{ staggerChildren: 0.2 }} variants={{ visible: {}, hidden: {} }}>
        {/* Hero Section */}
        <motion.section variants={scrollVariants} className="min-h-screen flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-500">
            ADmyBRAND AI Suite
          </h1>
          <p className="mt-4 text-xl text-gray-300 max-w-xl">
            Supercharge your marketing with the power of AI. Automate campaigns, analyze performance, and grow smarter.
          </p>
          <button className="mt-6 px-6 py-3 bg-white text-black rounded-xl font-bold hover:bg-gray-200 transition">Get Started</button>
        </motion.section>

        {/* Features Section */}
        <motion.section variants={scrollVariants} className="py-20 px-4 text-center bg-black/30 backdrop-blur-xl">
          <h2 className="text-4xl font-bold mb-8">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {["AI Campaign Builder", "Smart Analytics", "Content Generator", "Ad Optimizer", "Audience Targeting", "Real-time Insights"].map((feature, i) => (
              <div key={i} className="p-6 bg-white/10 rounded-2xl shadow-md hover:scale-105 transition">
                <img src="https://cdn-icons-png.flaticon.com/128/10347/10347604.png" className="w-10 h-10 mx-auto mb-2" alt="icon" />
                <h3 className="text-xl font-semibold mb-2">{feature}</h3>
                <p className="text-sm text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Pricing Section */}
        <motion.section variants={scrollVariants} className="py-20 px-4 bg-gradient-to-r from-gray-800 to-gray-900 text-center">
          <h2 className="text-4xl font-bold mb-8">Pricing Plans</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {["Starter", "Pro", "Enterprise"].map((tier, i) => (
              <div key={i} className="p-6 bg-white/10 rounded-xl">
                <h3 className="text-2xl font-semibold mb-2">{tier}</h3>
                <p className="text-3xl font-bold">${(i + 1) * 29}/mo</p>
                <ul className="mt-4 text-sm text-gray-300 space-y-2">
                  <li>✔ Feature A</li>
                  <li>✔ Feature B</li>
                  <li>✔ Feature C</li>
                </ul>
                <button className="mt-4 px-4 py-2 bg-white text-black rounded-md hover:bg-gray-200">Choose Plan</button>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Testimonials Section */}
        <motion.section variants={scrollVariants} className="py-20 px-4 text-center bg-black/20 backdrop-blur-xl">
          <h2 className="text-4xl font-bold mb-8">What Users Say</h2>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            {["John Doe", "Jane Smith", "Alex Johnson"].map((name, i) => (
              <div key={i} className="p-6 bg-white/10 rounded-xl max-w-sm">
                <img src={`https://i.pravatar.cc/150?img=${i + 5}`} className="w-16 h-16 rounded-full mx-auto mb-4" />
                <p className="italic text-gray-300">“This tool changed how we market entirely!”</p>
                <p className="mt-2 font-bold">{name}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* FAQ Section */}
        <motion.section variants={scrollVariants} className="py-20 px-4 bg-gray-800">
          <h2 className="text-4xl font-bold mb-8 text-center">FAQs</h2>
          <div className="max-w-2xl mx-auto space-y-4">
            {["What is ADmyBRAND?", "How does pricing work?", "Can I cancel anytime?"].map((q, i) => (
              <details key={i} className="bg-white/10 p-4 rounded-xl cursor-pointer">
                <summary className="font-semibold text-lg">{q}</summary>
                <p className="mt-2 text-sm text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </details>
            ))}
          </div>
        </motion.section>

        {/* Blog Section */}
        <motion.section variants={scrollVariants} className="py-20 px-4 text-center bg-black/10">
          <h2 className="text-4xl font-bold mb-8">Latest Resources</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {["How AI is Changing Marketing", "Top 10 Tips for Ad Success", "The Future of Personalization"].map((title, i) => (
              <div key={i} className="p-6 bg-white/10 rounded-xl">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-sm text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section variants={scrollVariants} className="py-20 px-4 text-center bg-gray-900">
          <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
          <form ref={formRef} onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
            <input type="text" name="name" placeholder="Name" className="w-full p-3 rounded bg-gray-700 text-white" required />
            <input type="email" name="email" placeholder="Email" className="w-full p-3 rounded bg-gray-700 text-white" required />
            <textarea name="message" placeholder="Your Message" className="w-full p-3 rounded bg-gray-700 text-white" rows={5} required />
            <button type="submit" className="px-6 py-3 bg-white text-black font-semibold rounded-xl hover:bg-gray-200">Send</button>
          </form>
        </motion.section>

        {/* Footer */}
        <footer className="py-8 px-4 bg-black text-center text-sm text-gray-400">
          <p>© 2025 ADmyBRAND. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
            <a href="#">Privacy</a>
          </div>
        </footer>
      </motion.div>
    </main>
  );
}
