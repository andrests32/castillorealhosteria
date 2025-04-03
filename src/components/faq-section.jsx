"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, ChevronDown, ChevronUp } from "lucide-react"

export default function FAQSection({ faqs = [] }) {
  const [searchTerm, setSearchTerm] = useState("")
  const [openItem, setOpenItem] = useState("")

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const toggleItem = (index) => {
    if (openItem === `item-${index}`) {
      setOpenItem("")
    } else {
      setOpenItem(`item-${index}`)
    }
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-poppinsreg text-primary mb-4">Preguntas Frecuentes</h2>
          <p className="max-w-2xl mx-auto text-gray-500 font-poppinslight mb-8">
            Encuentre respuestas a las preguntas más comunes sobre su estadía en Hosteria Castillo Real.
          </p>

          <div className="max-w-md mx-auto relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Buscar preguntas..."
              className="pl-10 font-poppinslight pr-4 py-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <AnimatePresence>
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="border-b border-gray-200 overflow-hidden text-primary"
                >
                  <div
                    className={`py-4 cursor-pointer flex justify-between items-center ${openItem === `item-${index}` ? "text-green-600" : ""}`}
                    onClick={() => toggleItem(index)}
                  >
                    <h3 className="text-left font-poppinsreg">{faq.question}</h3>
                    {openItem === `item-${index}` ? (
                      <ChevronUp className="h-5 w-5 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 flex-shrink-0" />
                    )}
                  </div>
                  <AnimatePresence>
                    {openItem === `item-${index}` && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="font-poppinslight pb-4">{faq.answer}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))
            ) : (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-8 text-gray-500 font-poppinsreg">
                No se encontraron resultados para "{searchTerm}"
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

