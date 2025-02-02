import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white"
        >
          About Me
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            I'm a passionate Full Stack Developer with experience in building web applications
            using modern technologies. I love creating elegant solutions to complex problems.
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            When I'm not coding, you can find me exploring new technologies, contributing to
            open-source projects, or sharing my knowledge through blog posts.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 