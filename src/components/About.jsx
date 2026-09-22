import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-4"
        >
          About <span className="text-primary">Me</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-24 h-1 bg-primary mx-auto mb-16"
        ></motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary rounded-2xl rotate-3"></div>
              <div className="relative bg-card p-8 rounded-2xl">
                <div className="text-6xl mb-4">👩‍💻</div>
                <h3 className="text-2xl font-bold mb-2">Hi, I'm Maria</h3>
                <p className="text-gray-400">
                  A passionate React developer who loves building things for
                  the web.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-gray-300 leading-relaxed">
              I'm a self-taught React developer with a strong passion for
              creating modern, user-friendly websites. I specialize in
              building responsive web apps that not only look great but
              also perform fast.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Over the past few years, I've worked on various projects
              ranging from personal portfolios to full-stack web
              applications. I love turning complex problems into simple,
              beautiful designs.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-card p-4 rounded-xl">
                <div className="text-3xl font-bold text-primary">20+</div>
                <div className="text-gray-400 text-sm">Projects Done</div>
              </div>
              <div className="bg-card p-4 rounded-xl">
                <div className="text-3xl font-bold text-primary">15+</div>
                <div className="text-gray-400 text-sm">Happy Clients</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}