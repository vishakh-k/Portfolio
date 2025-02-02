import { useState } from "react";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const links = ["home", "about", "skills", "projects", "contact"];

  // Animation variants for nav items
  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
    hover: {
      scale: 1.1,
      color: "#818cf8",
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <nav className="fixed w-full z-50 bg-gradient-to-r from-gray-900 via-purple-900 to-violet-900 shadow-lg backdrop-blur-sm bg-opacity-90">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <motion.div
            initial={{ x: -500, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 100,
            }}
            className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-poppins"
          >
            Portfolio
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {links.map((link, i) => (
              <motion.div
                key={link}
                custom={i}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                variants={navItemVariants}
              >
                <Link
                  to={link}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer capitalize font-poppins tracking-wide text-gray-200 hover:text-indigo-400 transition-all duration-300 ease-in-out transform hover:scale-110"
                >
                  {link}
                </Link>
              </motion.div>
            ))}
            <motion.button
              whileHover={{ scale: 1.2, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setDarkMode(!darkMode)}
              className="focus:outline-none transition-all duration-300"
            >
              {darkMode ? (
                <FaSun className="text-yellow-400 text-xl" />
              ) : (
                <FaMoon className="text-gray-200 text-xl" />
              )}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.div
            className="md:hidden"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-200 focus:outline-none"
            >
              {isOpen ? (
                <FaTimes className="text-2xl" />
              ) : (
                <FaBars className="text-2xl" />
              )}
            </button>
          </motion.div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gradient-to-b from-gray-900 to-purple-900 rounded-b-2xl shadow-xl"
          >
            {links.map((link, i) => (
              <motion.div
                key={link}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={link}
                  smooth={true}
                  duration={500}
                  className="block py-3 px-4 text-base font-poppins capitalize text-gray-200 hover:text-indigo-400 hover:bg-gray-800/50 transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {link}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
