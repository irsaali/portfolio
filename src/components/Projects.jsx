import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'E-Commerce Store',
    description: 'A fully responsive online store with cart, product filtering, and checkout.',
    tech: ['React', 'Tailwind', 'Context API'],
    image: '🛒',
    github: '#',
    demo: '#',
  },
  {
    title: 'Weather App',
    description: 'Real-time weather app with 7-day forecast using OpenWeather API.',
    tech: ['React', 'API', 'CSS'],
    image: '🌤️',
    github: '#',
    demo: '#',
  },
  {
    title: 'Task Manager',
    description: 'A productivity app to manage daily tasks with drag and drop feature.',
    tech: ['React', 'LocalStorage'],
    image: '✅',
    github: '#',
    demo: '#',
  },
  {
    title: 'Restaurant Landing',
    description: 'Modern landing page for a restaurant with menu and table booking.',
    tech: ['React', 'Tailwind'],
    image: '🍽️',
    github: '#',
    demo: '#',
  },
  {
    title: 'Movie Search',
    description: 'Search any movie and get details from the OMDB API in real time.',
    tech: ['React', 'API'],
    image: '🎬',
    github: '#',
    demo: '#',
  },
  {
    title: 'Chat App UI',
    description: 'A modern real-time chat interface with dark mode and emoji picker.',
    tech: ['React', 'Firebase'],
    image: '💬',
    github: '#',
    demo: '#',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-4"
        >
          My <span className="text-primary">Projects</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-24 h-1 bg-primary mx-auto mb-16"
        ></motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl overflow-hidden border border-white/5 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="h-40 bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center text-7xl group-hover:scale-110 transition-transform duration-500">
                {project.image}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 bg-primary/20 text-primary rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a href={project.github} className="flex items-center gap-2 text-sm text-gray-300 hover:text-primary transition-colors">
                    <FaGithub /> Code
                  </a>
                  <a href={project.demo} className="flex items-center gap-2 text-sm text-gray-300 hover:text-primary transition-colors">
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}