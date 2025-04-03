"use client"

import { motion } from "framer-motion"

export default function CTASection({
  title,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
}) {
  return (
    <section className="py-16 bg-emerald-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-poppinsreg text-white mb-4"
        >
          {title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-8 font-poppinslight"
        >
          {description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a
              href={primaryButtonLink}
              className="px-6 py-3 bg-white text-emerald-500 font-poppinsreg hover:bg-gray-100 rounded-md inline-block font-medium"
            >
              {primaryButtonText}
            </a>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a
              href={secondaryButtonLink}
              className="px-6 py-3 border border-white text-white hover:bg-white/10 rounded-md inline-block font-poppinsreg"
            >
              {secondaryButtonText}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

