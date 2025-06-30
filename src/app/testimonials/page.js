"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "gigisbizhive",
    comment: "No one does like like famous 😍",
  },
  {
    name: "kaseh_akobe",
    comment: "only one Famous haircuts",
  },
  {
    name: "thatdanieldon",
    comment: "Number 1 barber! 🙌🔥",
  },
  {
    name: "ericzii",
    comment: "My plug, The flyest barber around 🙌",
  },
  {
    name: "kordeeishim",
    comment: "Always on point with the cuts!",
  },
  {
    name: "jessicadawn",
    comment: "The best salon experience I've ever had!",
  },
  {
    name: "mikeb123",
    comment: "Famous Haircuts never disappoints.",
  },
  {
    name: "sarah_connor",
    comment: "I feel fabulous every time I leave this place.",
  },
];

export default function TestimonialsPage() {
  return (
    <div
      className="min-h-screen py-16 px-4"
      style={{ backgroundColor: "var(--background)" }}
    >
      {/* Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1
          className="text-4xl md:text-5xl font-bold mb-4"
          style={{ color: "var(--secondary)" }}
        >
          What Our Clients Say
        </h1>
        <p
          className="text-lg max-w-xl mx-auto"
          style={{ color: "var(--primary)" }}
        >
          Real words from real people who experienced the Famous Haircuts touch.
        </p>
      </motion.div>

      {/* Testimonials */}
      <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2">
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            className="p-6 rounded-lg shadow-md border"
            style={{
              backgroundColor: "var(--accent)",
              borderColor: "var(--secondary)",
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            viewport={{ once: true }}
          >
            <p
              className="text-lg italic mb-4"
              style={{ color: "var(--primary)" }}
            >
              “{t.comment}”
            </p>
            <p
              className="font-bold text-right"
              style={{ color: "var(--secondary)" }}
            >
              – {t.name}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
