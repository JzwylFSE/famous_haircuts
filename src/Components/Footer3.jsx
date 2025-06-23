"use client";

import { motion } from "framer-motion";
import {
  FaInstagram,
  FaWhatsapp,
  FaSnapchat,
  FaTwitter,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full py-12 px-4"
      style={{ backgroundColor: "var(--primary)", color: "var(--background)" }}
    >
      <div className="container mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-10 mb-8">
        {/* Logo and About */}
        <div className="flex flex-col gap-3">
          <motion.div
            className="flex items-center mb-2"
            whileHover={{ scale: 1.05 }}
          >
            <span
              style={{ color: "var(--secondary)" }}
              className="text-2xl mr-2"
            >
              ✂
            </span>
            <span
              className="font-bold text-xl"
              style={{ color: "var(--background)" }}
            >
              Famous Haircuts
            </span>
          </motion.div>
          <p
            className="text-sm leading-relaxed opacity-80"
            style={{ color: "var(--accent)" }}
          >
            Dedicated to clean fades, sharp lines, and fresh styles that turn
            heads. Welcome to the FHC experience.
          </p>
        </div>

        {/* Social Media */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <h3
            className="text-lg font-semibold mb-2"
            style={{ color: "var(--secondary)" }}
          >
            Connect With Us
          </h3>
          <div className="flex gap-5 text-2xl">
            <motion.a
              href="https://instagram.com/famous_haircut01"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#E1306C" }}
              whileHover={{ y: -4, scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              className="transition"
              aria-label="Instagram"
            >
              <FaInstagram />
            </motion.a>
            <motion.a
              href="https://wa.me/234XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#25D366" }}
              whileHover={{ y: -4, scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              className="transition"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </motion.a>
            <motion.a
              href="#"
              style={{ color: "#FFFC00" }}
              whileHover={{ y: -4, scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              className="transition"
              aria-label="Snapchat"
            >
              <FaSnapchat />
            </motion.a>
            <motion.a
              href="#"
              style={{ color: "var(--background)" }}
              whileHover={{ y: -4, scale: 1.15, color: "var(--secondary)" }}
              whileTap={{ scale: 0.95 }}
              className="transition"
              aria-label="Twitter"
            >
              <FaTwitter />
            </motion.a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <h3
            className="text-lg font-semibold mb-2"
            style={{ color: "var(--secondary)" }}
          >
            Visit Us
          </h3>
          <ul className="text-sm leading-7">
            <li>📍 Elekahia Housing Estate, PH</li>
            <li>📞 +234 812 345 6789</li>
            <li>🕒 Mon–Fri: 11am – 10pm</li>
            <li>🕒 Sat: 12pm – 10pm</li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div
        className="text-center text-xs mt-10 border-t pt-4 opacity-75"
        style={{ borderColor: "var(--secondary)", color: "var(--background)" }}
      >
        © 2025 by Famous Haircuts. Designed by{" "}
        <span style={{ color: "var(--secondary)" }}>iam_jzwyl</span>
      </div>
    </motion.footer>
  );
}
