"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaImages,
  FaStar,
  FaPhone,
} from "react-icons/fa";
import { GiScissors } from "react-icons/gi";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", icon: <FaHome />, href: "#" },
    { name: "Services", icon: <GiScissors />, href: "#" },
    { name: "Gallery", icon: <FaImages />, href: "#" },
    { name: "Testimonials", icon: <FaStar />, href: "#" },
    { name: "Contact", icon: <FaPhone />, href: "#" },
  ];

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const mobileLinkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.header
      className={`sticky top-0 z-50 shadow-md transition-all duration-300 ${
        isScrolled ? "bg-opacity-95 shadow-lg" : "bg-opacity-100"
      }`}
      style={{ backgroundColor: "var(--primary)" }}
      initial={{ y: -20 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            <span
              style={{ color: "var(--secondary)" }}
              className="text-2xl mr-2"
            >
              ✂
            </span>
            <span
              style={{ color: "var(--background)" }}
              className="font-bold text-xl"
            >
              LOGO
            </span>
          </motion.div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative flex space-x-8">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  style={{ color: "var(--background)" }}
                  className="hover:underline transition-colors relative group"
                  whileHover={{ scale: 1.05 }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--secondary)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--background)")
                  }
                >
                  {link.name}
                  {/* Underline animation */}
                  <motion.span
                    className="absolute bottom-0 left-0 w-full h-0.5"
                    style={{ backgroundColor: "var(--secondary)" }}
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </div>
            <motion.button
              style={{
                backgroundColor: "var(--secondary)",
                color: "var(--background)",
              }}
              className="ml-4 px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Now
            </motion.button>
          </nav>

          {/* Mobile Toggle */}
          <motion.button
            id="mobile-menu-button"
            style={{ color: "var(--background)" }}
            className="md:hidden focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            className="md:hidden w-full left-0 right-0 shadow-lg"
            style={{ backgroundColor: "var(--primary)" }}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: "spring", damping: 25 }}
          >
            <motion.div
              className="container mx-auto px-4 py-3"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
            >
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  style={{
                    color: "var(--accent)",
                    borderBottom: "1px solid var(--secondary)",
                  }}
                  className="block py-3 flex items-center transition-colors"
                  variants={mobileLinkVariants}
                  onClick={() => setIsMobileMenuOpen(false)}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--secondary)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--accent)")
                  }
                >
                  <span className="mr-3">{link.icon}</span>
                  {link.name}
                </motion.a>
              ))}
              <motion.button
                style={{
                  backgroundColor: "var(--secondary)",
                  color: "var(--background)",
                }}
                className="w-full mt-4 px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Book Now
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
