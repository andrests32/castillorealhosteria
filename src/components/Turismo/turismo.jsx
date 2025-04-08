"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Home, Car, Utensils, Waves, TreePine, Bed, Coffee, WifiIcon, ShowerHead, Tv, ParkingCircle, ShieldCheck, UtensilsCrossed, ChefHat, Wine, FishIcon as Swim, Umbrella, SunSnow, Flower2, Trees, ArrowUp, ChevronDown } from 'lucide-react'
import { useEffect, useState, useRef } from "react"

export default function ServicesSection() {
  const [showScrollButton, setShowScrollButton] = useState(false)
  const [showScrollIndicator, setShowScrollIndicator] = useState(true)
  const { scrollY } = useScroll()
  const containerRef = useRef(null)

  // For parallax effect on title
  const titleY = useTransform(scrollY, [0, 300], [0, -50])
  const titleOpacity = useTransform(scrollY, [0, 300], [1, 0.8])
  const imageScale = useTransform(scrollY, [0, 500], [1.1, 1.3])
  const imageOpacity = useTransform(scrollY, [0, 300], [1, 0.6])
  const overlayOpacity = useTransform(scrollY, [0, 300], [0.3, 0.6])

  // Check scroll position to show/hide back to top button and scroll indicator
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollButton(true)
        setShowScrollIndicator(false)
      } else {
        setShowScrollButton(false)
        if (window.scrollY < 100) {
          setShowScrollIndicator(true)
        } else {
          setShowScrollIndicator(false)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  // Scroll to content function
  const scrollToContent = () => {
    document.getElementById("servicios-contenido").scrollIntoView({ behavior: "smooth" })
  }

  const services = [
    {
      title: "Hospedaje",
      description:
        "Disfruta de una estancia inolvidable en nuestras cómodas y elegantes habitaciones diseñadas para brindarte el máximo confort.",
      icon: <Home className="h-8 w-8" />,
      image: "/hospedajerooms.webp",
      features: [
        { text: "Habitaciones amplias y luminosas", icon: <Bed className="h-5 w-5" /> },
        { text: "Servicio de limpieza diario", icon: <ShowerHead className="h-5 w-5" /> },
        { text: "TV con canales premium", icon: <Tv className="h-5 w-5" /> },
        { text: "WiFi de alta velocidad", icon: <WifiIcon className="h-5 w-5" /> },
        { text: "Desayuno incluido", icon: <Coffee className="h-5 w-5" /> },
      ],
      longDescription:
        "Nuestras habitaciones combinan elegancia y comodidad para ofrecerte una experiencia de hospedaje excepcional. Cada espacio ha sido cuidadosamente diseñado pensando en tu descanso y bienestar. Contamos con diferentes tipos de habitaciones para satisfacer tus necesidades, desde acogedoras habitaciones individuales hasta amplias suites familiares. Todas nuestras habitaciones están equipadas con amenidades premium y ofrecen vistas espectaculares para que tu estancia sea perfecta.",
    },
    {
      title: "Parqueadero",
      description:
        "Amplio espacio de estacionamiento seguro y vigilado las 24 horas para la tranquilidad de nuestros huéspedes.",
      icon: <Car className="h-8 w-8" />,
      image: "/prqueadero.webp",
      features: [
        { text: "Vigilancia 24/7", icon: <ShieldCheck className="h-5 w-5" /> },
        { text: "Espacios techados disponibles", icon: <Umbrella className="h-5 w-5" /> },
        { text: "Fácil acceso desde habitaciones", icon: <ParkingCircle className="h-5 w-5" /> },
        { text: "Servicio de valet", icon: <Car className="h-5 w-5" /> },
      ],
      longDescription:
        "Nuestro servicio de parqueadero está diseñado para brindarte total tranquilidad durante tu estancia. Contamos con un amplio estacionamiento vigilado las 24 horas del día por personal capacitado y sistemas de seguridad de última generación. Ofrecemos espacios techados para proteger tu vehículo de las inclemencias del clima y un conveniente servicio de valet parking para que no tengas que preocuparte por estacionar. El acceso al parqueadero es sencillo y está estratégicamente ubicado para facilitar tu llegada y salida.",
    },
    {
      title: "Restaurante",
      description:
        "Deliciosa gastronomía local e internacional preparada por chefs expertos en un ambiente acogedor y elegante.",
      icon: <Utensils className="h-8 w-8" />,
      image: "/restau.webp",
      features: [
        { text: "Cocina local e internacional", icon: <UtensilsCrossed className="h-5 w-5" /> },
        { text: "Chefs de renombre", icon: <ChefHat className="h-5 w-5" /> },
        { text: "Selección de vinos premium", icon: <Wine className="h-5 w-5" /> },
        { text: "Opciones vegetarianas y veganas", icon: <Flower2 className="h-5 w-5" /> },
        { text: "Servicio a la habitación", icon: <Utensils className="h-5 w-5" /> },
      ],
      longDescription:
        "Nuestro restaurante ofrece una experiencia gastronómica excepcional con platos que combinan sabores locales e internacionales. Nuestro equipo de chefs expertos selecciona cuidadosamente los ingredientes más frescos para crear menús estacionales que deleitan todos los paladares. El ambiente elegante pero acogedor es perfecto tanto para cenas románticas como para reuniones familiares o de negocios. Contamos con una extensa carta de vinos seleccionados para complementar perfectamente cada plato. También ofrecemos opciones para dietas especiales y un servicio de habitación disponible durante todo el día.",
    },
    {
      title: "Piscinas",
      description:
        "Refrescantes piscinas para adultos y niños donde podrás relajarte y disfrutar del sol en un entorno paradisíaco.",
      icon: <Waves className="h-8 w-8" />,
      image: "public/piscinas.webp",
      features: [
        { text: "Piscina para adultos", icon: <Swim className="h-5 w-5" /> },
        { text: "Piscina infantil", icon: <Waves className="h-5 w-5" /> },
        { text: "Servicio de toallas", icon: <ShowerHead className="h-5 w-5" /> },
        { text: "Bar junto a la piscina", icon: <Umbrella className="h-5 w-5" /> },
        { text: "Tumbonas y sombrillas", icon: <SunSnow className="h-5 w-5" /> },
      ],
      longDescription:
        "Nuestro complejo de piscinas es el lugar perfecto para refrescarte y relajarte durante tu estancia. Contamos con una amplia piscina para adultos con diferentes profundidades y una piscina separada especialmente diseñada para los más pequeños. El área de piscinas está rodeada de cómodas tumbonas y sombrillas donde podrás tomar el sol o descansar a la sombra. Nuestro bar junto a la piscina ofrece refrescantes bebidas y aperitivos que podrás disfrutar sin salir del agua. El servicio de toallas está incluido para todos nuestros huéspedes, y contamos con personal de seguridad capacitado para garantizar un ambiente seguro y agradable.",
    },
    {
      title: "Áreas Verdes",
      description:
        "Extensos jardines y espacios naturales donde podrás pasear, hacer ejercicio o simplemente conectar con la naturaleza.",
      icon: <TreePine className="h-8 w-8" />,
      image: "/areasverdes.webp",
      features: [
        { text: "Jardines paisajísticos", icon: <Flower2 className="h-5 w-5" /> },
        { text: "Senderos para caminatas", icon: <Trees className="h-5 w-5" /> },
        { text: "Áreas de picnic", icon: <Umbrella className="h-5 w-5" /> },
        { text: "Espacios de meditación", icon: <SunSnow className="h-5 w-5" /> },
        { text: "Flora local preservada", icon: <TreePine className="h-5 w-5" /> },
      ],
      longDescription:
        "Nuestras áreas verdes han sido cuidadosamente diseñadas para ofrecer un refugio natural donde podrás reconectar con la naturaleza. Los extensos jardines paisajísticos albergan especies locales y exóticas que crean un entorno de belleza y tranquilidad. Disfruta de paseos por senderos bien mantenidos que serpentean a través de la propiedad, descubriendo rincones especiales como nuestras áreas de picnic y espacios dedicados a la meditación y el yoga. Nos enorgullece nuestro compromiso con la preservación del medio ambiente, manteniendo gran parte de la flora nativa y utilizando prácticas sostenibles en el mantenimiento de nuestros espacios verdes.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="servicios" className="w-full relative overflow-x-hidden">
      {/* Hero section with wave bottom */}
      <div ref={containerRef} className="relative w-full h-screen min-h-[700px] overflow-hidden">
        {/* Background image with parallax effect */}
        <motion.div
          className="absolute inset-0 w-full h-full"
          style={{
            scale: imageScale,
            opacity: imageOpacity,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/5 to-black/5 z-10" />
          <img
            src="public/areas verdes.webp"
            alt="Luxury background"
            fill
            priority
            className="object-cover object-center w-full h-full"
          />
          <motion.div className="absolute inset-0 bg-black/70" style={{ opacity: overlayOpacity }} />
        </motion.div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 z-10">
          <motion.div className="text-center" style={{ y: titleY }}>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-4"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm tracking-[0.2em] uppercase border border-white/20 font-poppinslight"
              >
                Experiencia completa
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-7xl lg:text-8xl text-white mb-6 text-shadow-sm"
            >
              <span className="block font-poppinslight" >
                Nuestros
              </span>
              <span className="relative inline-block mt-2 font-cinzelsmb tracking-wide">
                Servicios
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.2, delay: 1.2 }}
                  className="absolute -bottom-3 left-0 h-[2px]"
                  style={{ background: `linear-gradient(to right, var(--color-pyellow), var(--color-dyellow))` }}
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="max-w-4xl mx-auto text-lg md:text-xl text-white mb-10 font-poppinslight"
            >
              Cada detalle ha sido cuidadosamente diseñado para transformar tu estancia en una experiencia inolvidable,
              donde el confort y la elegancia se encuentran.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative px-8 py-4 overflow-hidden group rounded-full bg-white/10 backdrop-blur-sm"
                onClick={scrollToContent}
              >
                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-r from-[var(--color-pyellow)] to-[var(--color-dyellow)] group-hover:opacity-100"></span>
                <span className="absolute inset-0 w-full h-full border-2 border-white/20 rounded-full"></span>
                <span
                  className="relative text-white group-hover:text-gray-800 transition duration-300 ease-out font-poppinsmd"
                >
                  Descubrir Experiencias
                </span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20"
          initial={{ opacity: 0 }}
          animate={{
            opacity: showScrollIndicator ? 1 : 0,
            y: showScrollIndicator ? [0, 10, 0] : 0,
          }}
          transition={{
            opacity: { duration: 0.3 },
            y: { repeat: Number.POSITIVE_INFINITY, duration: 1.5, ease: "easeInOut" },
          }}
        >
          <button
            onClick={scrollToContent}
            className="flex flex-col items-center text-white/80 hover:text-white transition-colors"
            aria-label="Scroll down"
          >
            <span className="text-sm mb-2 tracking-wider" style={{ fontFamily: "var(--font-poppinslight)" }}>
              Descubre más
            </span>
            <ChevronDown className="h-6 w-6 animate-bounce" />
          </button>
        </motion.div>

        {/* Wave bottom shape */}
        {/* <div className="absolute bottom-0 left-0 w-full overflow-hidden z-10">
          <div className="relative w-full h-[150px]">
            <image
              src="/placeholder.svg?height=150&width=1920"
              alt="Wave shape"
              width={1920}
              height={150}
              className="w-full h-full object-cover"
              style={{
                maskImage:
                  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'%3E%3Cpath d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z' fill='%23ffffff'%3E%3C/path%3E%3C/svg%3E\")",
                maskSize: "100% 100%",
                WebkitMaskImage:
                  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'%3E%3Cpath d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z' fill='%23ffffff'%3E%3C/path%3E%3C/svg%3E\")",
                WebkitMaskSize: "100% 100%",
              }}
            />
          </div>
        </div> */}

        {/* Decorative elements */}
        <div  className="absolute inset-0 pointer-events-none">
          {/* Top left decorative element */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.15, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="absolute top-[10%] left-[5%] w-64 h-64 rounded-full"
            style={{
              background: "radial-gradient(circle, var(--color-pyellow) 0%, transparent 70%)",
              filter: "blur(40px)",
            }}
          />

          {/* Bottom right decorative element */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.15, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.8 }}
            className="absolute bottom-[20%] right-[10%] w-80 h-80 rounded-full"
            style={{
              background: "radial-gradient(circle, var(--color-dyellow) 0%, transparent 70%)",
              filter: "blur(50px)",
            }}
          />
        </div>
      </div>

      {/* Services Content with balanced colors */}
      <div 
          id="servicios-contenido"
       className="bg-white mt-20 lg:mt-10">
        <div className="container px-4 md:px-6 mx-auto py-16 md:py-24">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-32"
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={itemVariants} className="relative">
                {/* Service number indicator with elegant design */}
                <div className="absolute -top-16 left-0 right-0 flex justify-center">
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="absolute inset-0 rounded-full"></div>
                    <div
                      className="relative flex items-center justify-center w-16 h-16 rounded-full bg-white text-gray-500 text-2xl border border-gray-50 shadow-sm font-cinzelrg"
                    >
                      {index + 1}
                    </div>
                  </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <motion.div
                    className={`relative h-[450px] rounded-2xl overflow-hidden shadow-[0_15px_30px_-15px_rgba(0,0,0,0.2)] ${index % 2 === 1 ? "lg:order-2" : ""
                      }`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover object-center w-full h-full"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(17, 24, 39, 0.6) 0%, rgba(17, 24, 39, 0) 50%, rgba(17, 24, 39, 0) 100%)",
                      }}
                    />
                    <div className="absolute bottom-0 left-0 p-6">
                      <div className="relative">
                        <div className="absolute -inset-1 rounded-full"></div>
                        <div className="relative inline-flex items-center justify-center rounded-full bg-gray-50 p-4 shadow-sm">
                          <span className="text-emerald-500">{service.icon}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  <div className="space-y-8">
                    <motion.div
                      initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <h3 className="text-3xl mb-4 text-primary font-cinzelrg">
                        <span className="font-cinzelbold">{service.title}</span>
                      </h3>
                      <div
                        className="w-24 h-[2px] mb-6 bg-gradient-to-r from-emerald-500 to-pyellow"
                        
                      />
                      <p className="text-lg text-gray-600 mb-6 font-poppinsreg"
                      >
                        {service.description}
                      </p>
                      <p className="text-gray-500 leading-relaxed font-poppinslight text-justify"
                      >
                        {service.longDescription}
                      </p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 bg-green-50/60 p-6 rounded-xl">
                      {service.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          className="flex items-center gap-3"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                        >
                          <div className="flex-shrink-0 rounded-full bg-white p-2 text-emerald-500 shadow-sm">
                            {feature.icon}
                          </div>
                          <span className="font-poppinsreg text-sm text-gray-700">
                            {feature.text}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Elegant separator */}
                {index < services.length - 1 && (
                  <div className="w-full flex justify-center mt-20">
                    <div
                      className="w-64 h-[1px]"
                      style={{
                        background: "linear-gradient(to right, transparent, var(--color-dyellow), transparent)",
                      }}
                    ></div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-32 text-center p-16 rounded-2xl relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, #f9fafb 0%, #ffffff 100%)" }}
          >
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
              <div
                className="absolute top-[10%] left-[5%] w-64 h-64 rounded-full"
                style={{ backgroundColor: "var(--color-dyellow)" }}
              ></div>
              <div className="absolute bottom-[15%] right-[10%] w-80 h-80 rounded-full bg-emerald-300/30"></div>
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl mb-4 text-primary" style={{ fontFamily: "var(--font-cinzelrg)" }}>
                <span style={{ fontFamily: "var(--font-cinzelrg)" }}>Vive la</span>{" "}
                <span style={{ fontFamily: "var(--font-cinzelbold)" }}>Experiencia Completa</span>
              </h3>
              <div
                className="w-24 h-[2px] mx-auto mb-6"
                style={{ background: `linear-gradient(to right, var(--color-pyellow), var(--color-dyellow))` }}
              />
              <p className="text-gray-600 max-w-2xl mx-auto mb-10" style={{ fontFamily: "var(--font-poppinslight)" }}>
                Nuestros servicios están diseñados para ofrecerte una experiencia integral donde cada detalle ha sido
                cuidadosamente pensado para tu máximo confort y disfrute.
              </p>
              <motion.div className="relative inline-block">
                <div className="absolute -inset-0.5 rounded-full"></div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative px-8 py-4 bg-white text-primary rounded-full shadow-sm font-poppinsmd cursor-pointer hover:bg-pyellow transition duration-300"
                >
                  Reservar ahora
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Elegant back to top button */}
      <motion.button
        className="fixed bottom-8 right-8 z-50 p-4 rounded-full shadow-sm bg-pyellow"
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: showScrollButton ? 1 : 0,
          scale: showScrollButton ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowUp className="h-6 w-6 text-white" />
        <span className="sr-only">Volver arriba</span>
      </motion.button>
    </section>
  )
}

