import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
} from 'react-icons/fa';
import { SiTailwindcss, SiMongodb } from 'react-icons/si';

const skills = [
  { name: 'React', icon: <FaReact />, color: '#61dafb', level: 90 },
  { name: 'JavaScript', icon: <FaJs />, color: '#f7df1e', level: 88 },
  { name: 'HTML5', icon: <FaHtml5 />, color: '#e34f26', level: 95 },
  { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572b6', level: 92 },
  { name: 'Tailwind', icon: <SiTailwindcss />, color: '#38bdf8', level: 90 },
  { name: 'Node.js', icon: <FaNodeJs />, color: '#68a063', level: 75 },
  { name: 'MongoDB', icon: <SiMongodb />, color: '#4db33d', level: 70 },
  { name: 'Git', icon: <FaGitAlt />, color: '#f14e32', level: 85 },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-24 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-4"
        >
          My <span className="text-primary">Skills</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-24 h-1 bg-primary mx-auto mb-16"
        ></motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-6 rounded-2xl text-center hover:-translate-y-2 transition-transform duration-300 border border-white/5 hover:border-primary/50"
            >
              <div
                className="text-5xl mb-4 flex justify-center"
                style={{ color: skill.color }}
              >
                {skill.icon}
              </div>
              <h3 className="font-semibold mb-3">{skill.name}</h3>
              <div className="w-full bg-dark rounded-full h-2 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                  className="h-full bg-primary rounded-full"
                ></motion.div>
              </div>
              <p className="text-xs text-gray-400 mt-2">{skill.level}%</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}