import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden"
    >
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-4xl text-center relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-primary text-lg font-medium mb-4"
        >
          👋 Hello, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          Maria Ali
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-2xl md:text-3xl text-gray-400 mb-8"
        >
          React Developer & Web Designer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          I build modern, responsive, and high-performance websites using
          React, Tailwind CSS, and modern JavaScript. Let's turn your idea
          into a stunning web experience.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-primary rounded-full font-medium hover:bg-primary/80 transition-all hover:scale-105"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-primary text-primary rounded-full font-medium hover:bg-primary hover:text-white transition-all"
          >
            Hire Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex gap-6 justify-center mt-12 text-2xl"
        >
          <a href="#" className="text-gray-400 hover:text-primary transition-colors">
            <FaGithub />
          </a>
          <a href="#" className="text-gray-400 hover:text-primary transition-colors">
            <FaLinkedin />
          </a>
          <a href="#" className="text-gray-400 hover:text-primary transition-colors">
            <FaTwitter />
          </a>
        </motion.div>
      </div>
    </section>
  );
}