"use client"

import { motion } from "framer-motion"

export default function AmenityCard({ icon, title, description, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
      className="bg-gray-50 p-6 rounded-lg border border-gray-100 hover:border-green-200 transition-colors"
    >
      <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mb-4 text-green-500">
        {icon}
      </div>
      <h3 className="font-cinzelsmb text-primary mb-2">{title}</h3>
      <p className="text-sm text-gray-500 font-poppinslight">{description}</p>
    </motion.div>
  )
}

