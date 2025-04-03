import { motion } from "framer-motion"

export default function FeatureCard({ title, icon, description }) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} className="flex items-center bg-gray-50 p-3 rounded-lg">
      <div className="mr-3 p-2 rounded-full">{icon}</div>
      <div>
        <span className="font-poppinsreg text-primary">{title}</span>
        {description && <p className="text-xs text-gray-500 font-poppinslight">{description}</p>}
      </div>
    </motion.div>
  )
}

