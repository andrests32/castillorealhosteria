"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Twitter,
  MapPin,
  Mail,
  Phone,
  ArrowRight,
  Flag
} from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <footer className="bg-gradient-to-t from-emerald-500 to-emerald-600 text-white py-16">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-3 mb-6">
              {/* <Castle className="h-8 w-8 text-amber-400" strokeWidth={1.5} /> */}
              <h3 className="text-2xl font-poppinsmd text-white">
                Castillo Real Hosteria
              </h3>
            </div>
            <p className="text-gray-100 font-poppinslight leading-relaxed mb-6">
              Una experiencia única de hospedaje con el encanto y la
              majestuosidad en medio de la naturaleza.
            </p>
            <div className="flex space-x-4 mt-6">
              {[
                { icon: Facebook, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Twitter, href: "#" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="text-gray-200 hover:text-pyellow transition-colors"
                  whileHover={{ scale: 1.15, transition: { duration: 0.2 } }}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-poppinsmd mb-6 text-pyellow border-b border-gray-100 pb-2">
              Contacto
            </h4>
            <address className="not-italic font-poppinslight text-gray-100 space-y-4">
              {[
                { icon: MapPin, text: "Av. Principal 123" },
                { icon: Flag, text: "Ciudad, País" },
                { icon: Mail, text: "info@hosteriacastilloreal.com" },
                { icon: Phone, text: "+123 456 7890" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3 group"
                  whileHover={{ x: 3, transition: { duration: 0.2 } }}
                >
                  <item.icon className="h-5 w-5 text-gray-50 group-hover:text-pyellow transition-colors mt-0.5" />
                  <p>{item.text}</p>
                </motion.div>
              ))}
            </address>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-poppinsmd mb-6 text-pyellow border-b border-gray-100 pb-2">
              Enlaces
            </h4>
            <ul className="space-y-3 text-gray-100 font-poppinslight columns-2">
              {[
                { name: "Inicio", path: "/" },
                { name: "Servicios", path: "/services" },
                { name: "Galería", path: "/galeria" },
                { name: "Contacto", path: "/contact" },
                { name: "Habitaciones", path: "/habitaciones" },
              ].map((link, index) => (
                <motion.li key={index}>
                  <a
                    href={link.path}
                    className="hover:text-pyellow transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-0 h-px bg-pyellow group-hover:w-3 transition-all duration-300"></span>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-poppinsmd mb-6 text-pyellow border-b border-gray-100 pb-2">
              Suscríbete
            </h4>
            <p className="text-gray-100 font-poppinslight mb-4">
              Recibe nuestras ofertas y novedades exclusivas directamente en tu
              bandeja de entrada.
            </p>
            <motion.div
              className="mt-6 relative"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Tu email"
                className="w-full px-4 py-3 bg-gray-200 text-gray-900 rounded-md focus:outline-none focus:ring-1 focus:ring-dyellowplaceholder:text-gray-500 pr-12"
              />
              <motion.button
                className="absolute right-1 top-1 bottom-1 px-3 bg-pyellow hover:bg-dyellow text-primary rounded-md flex items-center justify-center transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowRight className="h-5 w-5" />
              </motion.button>
            </motion.div>
            <p className="text-xs text-gray-100 mt-3 font-poppinslight">
              Al suscribirte, aceptas nuestra política de privacidad.
            </p>
          </motion.div>
        </motion.div>

        <div className="mt-16 pt-8 border-t border-gray-100/70 font-poppinsreg flex flex-col md:flex-row justify-between items-center text-gray-100 text-sm">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            &copy; {new Date().getFullYear()} Hosteria Castillo Real. Todos los
            derechos reservados.
          </motion.p>

          <motion.div
            className="flex gap-6 mt-4 md:mt-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <a
              href="/privacidad"
              className="hover:text-amber-400 transition-colors"
            >
              Privacidad
            </a>
            <a
              href="/terminos"
              className="hover:text-amber-400 transition-colors"
            >
              Términos
            </a>
            <a
              href="/cookies"
              className="hover:text-amber-400 transition-colors"
            >
              Cookies
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
