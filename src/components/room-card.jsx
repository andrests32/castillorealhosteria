import { useState } from "react"
import { motion } from "framer-motion"
import { Check, Star, ChevronRight } from "lucide-react"

export default function RoomCard({
  title,
  description,
  price,
  image,
  features = [],
  amenities = [],
  highlighted = false,
  wide = false,
}) {
  const [isHovered, setIsHovered] = useState(false)

  if (highlighted) {
    return (
      <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
        <div
          className="overflow-hidden rounded-lg shadow-lg h-full bg-white"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative h-96">
            <motion.div
              animate={{ scale: isHovered ? 1.05 : 1 }}
              transition={{ duration: 0.5 }}
              className="h-full w-full"
            >
              <img
                src={image || "/placeholder.svg"}
                alt={title}
                className="object-cover h-full w-full transition-all duration-500"
              />
            </motion.div>
            <div className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-poppinsmd">
              Destacada
            </div>
          </div>
          <div className="p-6">
            <div className="flex items-center mb-2">
              <h3 className="text-xl font-cinzelsmb text-primary">{title}</h3>
              <div className="ml-auto flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-4 w-4 fill-amber-500 text-amber-500" />
                ))}
              </div>
            </div>
            <p className="text-primary font-poppinslight mb-4">{description}</p>

            <div className="grid grid-cols-2 gap-3 mb-4">
              {amenities.map((amenity, index) => (
                <div key={index} className="flex items-center text-sm">
                  <div className="mr-2 text-green-600">{amenity.icon}</div>
                  <span className="font-poppinslight text-primary">{amenity.name}</span>
                </div>
              ))}
            </div>

            <ul className="mb-4 space-y-2">
              {features.map((feature) => (
                <li key={feature} className="flex items-center">
                  <Check className="h-4 w-4 text-green-600 mr-2" />
                  <span className="text-sm font-poppinsreg text-primary">{feature}</span>
                </li>
              ))}
            </ul>
            <div className="flex justify-between items-center">
              <span className="text-lg font-poppinsmd text-green-600">{price}</span>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a href="#" className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md font-poppinsmd inline-block">
                  Reservar Ahora
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    )
  }

  if (wide) {
    return (
      <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.3 }} className="md:col-span-2">
        <div
          className="overflow-hidden rounded-lg shadow-lg h-full bg-white"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative h-64 md:h-auto">
              <motion.div
                animate={{ scale: isHovered ? 1.05 : 1 }}
                transition={{ duration: 0.5 }}
                className="h-full w-full"
              >
                <img
                  src={image || "/placeholder.svg"}
                  alt={title}
                  className="object-cover h-full w-full transition-all duration-500"
                />
              </motion.div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{title}</h3>
              <p className="text-gray-600 mb-4">{description}</p>

              <div className="grid grid-cols-2 gap-2 mb-4">
                {amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center text-sm">
                    <div className="mr-2 text-green-600">{amenity.icon}</div>
                    <span>{amenity.name}</span>
                  </div>
                ))}
              </div>

              <ul className="mb-4 space-y-1">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-green-600">{price}</span>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <a
                    href="#"
                    className="px-4 py-2 border border-green-600 text-green-600 hover:bg-green-600 hover:text-white rounded-md inline-block"
                  >
                    Reservar
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
      <div
        className="overflow-hidden rounded-lg shadow-lg h-full bg-white"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative h-64">
          <motion.div
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.5 }}
            className="h-full w-full"
          >
            <img
              src={image || "/placeholder.svg"}
              alt={title}
              className="object-cover h-full w-full transition-all duration-500"
            />
          </motion.div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-cinzelsmb text-primary mb-2">{title}</h3>
          <p className="text-gray-600 font-poppinslight mb-4">{description}</p>

          <div className="grid grid-cols-2 gap-2 mb-4">
            {amenities.map((amenity, index) => (
              <div key={index} className="flex items-center text-sm">
                <div className="mr-2 text-green-600">{amenity.icon}</div>
                <span className="text-primary font-poppinslight">{amenity.name}</span>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center">
            <span className="text-lg font-poppinsmd text-green-600">{price}</span>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="#"
                className="font-poppinsreg px-4 py-2 border border-green-600 text-green-600 hover:bg-green-600 hover:text-white rounded-md inline-flex items-center group"
              >
                <span>Reservar</span>
                <ChevronRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

