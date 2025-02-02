import { useState } from 'react';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const links = ['home', 'about', 'skills', 'projects', 'contact'];

  return (
    <nav className="fixed w-full z-50 bg-white dark:bg-gray-900 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <motion.div
            initial={{ x: -500 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-indigo-600 dark:text-indigo-400"
          >
            Portfolio
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {links.map((link) => (
              <Link
                key={link}
                to={link}
                smooth={true}
                duration={500}
                className="cursor-pointer capitalize hover:text-indigo-600 dark:hover:text-indigo-400"
              >
                {link}
              </Link>
            ))}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="focus:outline-none"
            >
              {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden"
          >
            {links.map((link) => (
              <Link
                key={link}
                to={link}
                smooth={true}
                duration={500}
                className="block py-2 px-4 text-sm capitalize hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={() => setIsOpen(false)}
              >
                {link}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 