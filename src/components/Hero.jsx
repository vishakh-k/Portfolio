import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Hero = () => {
  return (
    <div id="home" className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-800 dark:text-white">
            Hi, I'm{' '}
            <span className="text-indigo-600 dark:text-indigo-400">Vishakh K T</span>
          </h1>
          <h2 className="text-xl md:text-2xl mb-6 text-gray-600 dark:text-gray-300">
            Full Stack Developer
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center space-x-4 mb-8"
        >
          <a href="#" className="text-2xl hover:text-indigo-600 dark:hover:text-indigo-400">
            <FaGithub />
          </a>
          <a href="#" className="text-2xl hover:text-indigo-600 dark:hover:text-indigo-400">
            <FaLinkedin />
          </a>
          <a href="#" className="text-2xl hover:text-indigo-600 dark:hover:text-indigo-400">
            <FaTwitter />
          </a>
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700"
        >
          Download Resume
        </motion.button>
      </div>
    </div>
  );
};

export default Hero; 