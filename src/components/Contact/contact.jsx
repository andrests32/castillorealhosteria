"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
    submitted: false,
    submitting: false,
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormState({ ...formState, submitting: true })

    // Simulate form submission
    setTimeout(() => {
      setFormState({
        name: "",
        email: "",
        message: "",
        submitted: true,
        submitting: false,
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormState((prev) => ({ ...prev, submitted: false }))
      }, 5000)
    }, 1000)
  }

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const contactRef = useRef(null)
  const isInView = useInView(contactRef, { once: true, amount: 0.3 })

  return (
    <section className="w-full bg-gray-50 py-20" ref={contactRef}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-sm rounded-lg overflow-hidden"
        >
          <div className="grid md:grid-cols-2">
            {/* Contact Information */}
            <div className="bg-gray-900 text-white p-10 lg:p-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-8"
              >
                <div className="space-y-6">
                  <h3 className="text-xl font-light tracking-wide">CONTACTO</h3>
                  <p className="text-gray-400 max-w-sm">
                    Estamos a su disposición para brindarle la mejor experiencia en Castillo Real Hostería.
                  </p>
                </div>

                <div className="space-y-6 pt-2">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="mt-1">
                      <Phone className="h-5 w-5 text-gray-400" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Teléfono</div>
                      <div className="text-white">+593 99 123 4567</div>
                      <div className="text-white">+593 2 123 4567</div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="mt-1">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Email</div>
                      <div className="text-white">info@castilloreal.com</div>
                      <div className="text-white">reservas@castilloreal.com</div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="mt-1">
                      <MapPin className="h-5 w-5 text-gray-400" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Dirección</div>
                      <div className="text-white">Av. de los Shyris y Naciones Unidas</div>
                      <div className="text-white">Quito, Ecuador</div>
                    </div>
                  </motion.div>
                </div>

                <div className="pt-8 border-t border-gray-800">
                  <div className="text-sm text-gray-400">Horario de atención</div>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2 pt-2">
                    <div className="text-white">Lunes - Viernes</div>
                    <div className="text-white">24 horas</div>
                    <div className="text-white">Sábado - Domingo</div>
                    <div className="text-white">24 horas</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <div className="p-10 lg:p-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-xl font-medium text-gray-900">Envíe su mensaje</h3>
                  <p className="text-gray-500 mt-2">
                    Complete el formulario y nos pondremos en contacto con usted a la brevedad.
                  </p>
                </div>

                {formState.submitted ? (
                  <motion.div
                    className="bg-green-50 border border-green-100 text-green-800 rounded-md p-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    Gracias por su mensaje. Nos pondremos en contacto con usted pronto.
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Nombre
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-gray-900 outline-none transition"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-gray-900 outline-none transition"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.6 }}
                    >
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Mensaje
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-gray-900 outline-none transition"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.7 }}
                    >
                      <button
                        type="submit"
                        disabled={formState.submitting}
                        className={`w-full bg-gray-900 text-white py-3 px-6 rounded-md font-medium flex items-center justify-center space-x-2 hover:bg-gray-800 transition-colors ${
                          formState.submitting ? "opacity-70 cursor-not-allowed" : ""
                        }`}
                      >
                        <span>Enviar mensaje</span>
                        <Send className="h-4 w-4 ml-2" />
                      </button>
                    </motion.div>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
