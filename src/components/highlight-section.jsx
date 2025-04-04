"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

export default function HighlightSection({
  title,
  description,
  image,
  buttonText,
  buttonLink,
  icon,
  features = [],
  reverse = false,
}) {
  return (
    <section className="py-16 bg-teal-50 overflow-x-hidden">
      <div className="container mx-auto px-4">
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center`}>
          {/* Texto + contenido */}
          <motion.div
            initial={{ opacity: 0, x: reverse ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={`${reverse ? "md:order-2" : "md:order-1"}`}
          >
            <div className="flex items-center mb-4">
              {icon}
              <h2 className="text-3xl font-cinzelsmb text-primary ml-3">{title}</h2>
            </div>
            <p className="text-gray-500 font-poppinslight mb-6">{description}</p>

            {features.length > 0 && (
              <ul className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-2">
                {features.map((feature, index) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-primary font-poppinsreg">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            )}

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href={buttonLink}
                className="px-6 py-2 font-poppinsreg bg-green-600 hover:bg-green-700 text-white rounded-md inline-block"
              >
                {buttonText}
              </a>
            </motion.div>
          </motion.div>

          {/* Imagen */}
          <motion.div
            initial={{ opacity: 0, x: reverse ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={`${reverse ? "md:order-1" : "md:order-2"}`}
          >
            <div className="relative h-80 md:h-96 overflow-hidden rounded-xl">
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }}>
                <img
                  src={image || "/placeholder.svg"}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
