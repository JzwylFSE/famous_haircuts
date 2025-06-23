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
      className="bg-primary text-background py-10 px-6 sm:px-12"
    >
      <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-3">
        {/* Logo and About */}
        <div>
          <h2 className="text-2xl font-bold text-secondary mb-3">
            Famous Haircuts
          </h2>
          <p className="text-sm leading-relaxed">
            Dedicated to clean fades, sharp lines, and fresh styles that turn
            heads. Welcome to the FHC experience.
          </p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-secondary mb-2">
            Connect With Us
          </h3>
          <div className="flex gap-4 text-2xl">
            <a
              href="https://instagram.com/famous_haircut01"
              target="_blank"
              className="hover:text-secondary transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/234XXXXXXXXXX"
              target="_blank"
              className="hover:text-secondary transition"
            >
              <FaWhatsapp />
            </a>
            <a href="#" className="hover:text-secondary transition">
              <FaSnapchat />
            </a>
            <a href="#" className="hover:text-secondary transition">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-secondary mb-2">
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
      <div className="text-center text-xs text-background mt-10 border-t border-secondary pt-4">
        © 2025 by Famous Haircuts. Designed by{" "}
        <span className="text-secondary">iam_jzwyl</span>
      </div>
    </motion.footer>
  );
}
