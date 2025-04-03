"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation, Clock, Phone } from "lucide-react";

export default function LocationSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-poppinsreg text-primary mb-4">
            Ubicación
          </h2>
          <p className="max-w-2xl mx-auto text-gray-500 font-poppinslight">
            Estratégicamente ubicado en un entorno natural privilegiado, con
            fácil acceso a las principales atracciones de la región.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Mapa de Google */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:col-span-2 bg-white rounded-xl overflow-hidden shadow-md"
          >
            <div className="h-96 bg-gray-300 relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7960.2989321071345!2d-78.86666!3d-3.989664!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91cb6d79af7ddac9%3A0x68b4f3eaa59bf51!2sHoster%C3%ADa%20Castillo%20Real%20Zamora%2C%20Hotel%2C%20Restaurante%2C%20Piscinas%2C%20Senderismo%20Zamora%2C%20Ecuador%2C%20Ancas%20de%20Rana%20y%20Tilapias.!5e0!3m2!1ses-419!2sus!4v1743696025894!5m2!1ses-419!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full rounded-xl"
              ></iframe>
            </div>
          </motion.div>

          {/* Información de contacto */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-6 shadow-md"
          >
            <h3 className="text-xl font-poppinsreg text-primary mb-4">Información de contacto</h3>

            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-emerald-600 mt-1 mr-3" />
                <div>
                  <p className="font-poppinsreg text-primary">Dirección</p>
                  <p className="text-gray-500 font-poppinslight">
                    Av. Principal 123, Zamora, Ecuador
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="h-5 w-5 text-emerald-600 mt-1 mr-3" />
                <div>
                  <p className="font-poppinsreg text-primary">Horarios</p>
                  <p className="text-gray-500 font-poppinslight">
                    Check-in: 15:00 | Check-out: 12:00
                  </p>
                  <p className="text-gray-600">Recepción: 24 horas</p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="h-5 w-5 text-emerald-600 mt-1 mr-3" />
                <div>
                  <p className="font-poppinsreg text-primary">Teléfono</p>
                  <p className="text-gray-600 font-poppinslight">+593 9875654 321</p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <a
                href="https://maps.app.goo.gl/82JjshNPN2ntkGCx6"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-4 py-2 bg-emerald-600 hover:bg-emerald-700 font-poppinsreg text-white rounded-md text-center"
              >
                Ver en Google Maps
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
