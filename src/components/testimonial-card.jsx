import { motion } from "framer-motion"
import { Star } from "lucide-react"

export default function TestimonialCard({ name, comment, rating = 5, location, image, featured = false }) {
  if (featured) {
    return (
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="relative w-24 h-24 md:w-32 md:h-32 flex-shrink-0">
          <img
            src={image || "/placeholder.svg"}
            alt={name}
            className="w-full h-full object-cover rounded-full border-4 border-emerald-400"
          />
        </div>
        <div className="flex-1">
          <div className="flex mb-2">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <Star key={i} className={`h-5 w-5 ${i < rating ? "fill-pyellow text-pyellow" : "text-gray-300"}`} />
              ))}
          </div>
          <p className="text-gray-600 mb-4 text-lg font-poppinsmdit">"{comment}"</p>
          <div>
            <p className="font-poppinsreg text-lg">{name}</p>
            {location && <p className="text-gray-500 font-poppinslight">{location}</p>}
          </div>
        </div>
      </div>
    )
  }

  return (
    <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
      <div className="p-6 h-full bg-white rounded-lg shadow-md">
        <div className="flex mb-4">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <Star key={i} className={`h-5 w-5 ${i < rating ? "fill-green-400 text-green-400" : "text-gray-300"}`} />
            ))}
        </div>
        <p className="text-gray-700 mb-4 italic">"{comment}"</p>
        <div className="flex items-center">
          {image && (
            <div className="relative w-10 h-10 mr-3">
              <img src={image || "/placeholder.svg"} alt={name} className="w-full h-full object-cover rounded-full" />
            </div>
          )}
          <div>
            <p className="font-medium">{name}</p>
            {location && <p className="text-xs text-gray-500">{location}</p>}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

