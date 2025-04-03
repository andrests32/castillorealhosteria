import { motion } from 'framer-motion';
import { ArrowLeft, ZoomIn, Heart, Share2 } from 'lucide-react';
import { useState } from 'react';

const images = [
  {
    url: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80",
    title: "Castillo Real Hostería",
    category: "Hospedaje",
    likes: 234
  },
  {
    url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80",
    title: "Bosque Protector",
    category: "Naturaleza",
    likes: 186
  },
  {
    url: "https://images.unsplash.com/photo-1498429152472-9a433d9ddf3b?auto=format&fit=crop&q=80",
    title: "Cascadas Naturales",
    category: "Aventura",
    likes: 312
  },
  {
    url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&q=80",
    title: "Mirador Turístico",
    category: "Paisajes",
    likes: 275
  },
  {
    url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80",
    title: "Valle de Cumbaratza",
    category: "Paisajes",
    likes: 198
  },
  {
    url: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80",
    title: "Atardecer en la Amazonía",
    category: "Naturaleza",
    likes: 423
  }
];

const categories = ["Todos", "Hospedaje", "Naturaleza", "Aventura", "Paisajes"];

export default function PhotoGallery() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [hoveredImage, setHoveredImage] = useState(null);

  const filteredImages = selectedCategory === "Todos" 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <div className="bg-gradient-to-b from-gray-900 to-black py-8">
        <div className="container mx-auto px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h1 className="text-4xl font-bold text-white mb-4">
                Galería Fotográfica
              </h1>
              <p className="text-gray-400">
                Explora la belleza de Cumbaratza a través de nuestras imágenes
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full backdrop-blur-sm transition-colors"
            >
              <Share2 className="w-5 h-5" />
            </motion.button>
          </div>

          {/* Categories */}
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  selectedCategory === category
                    ? "bg-white text-black"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="container mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative aspect-square group"
              onHoverStart={() => setHoveredImage(index)}
              onHoverEnd={() => setHoveredImage(null)}
            >
              <motion.img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover rounded-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredImage === index ? 1 : 0 }}
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent rounded-2xl"
              >
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl font-semibold mb-2">
                    {image.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300 text-sm">
                      {image.category}
                    </span>
                    <div className="flex items-center gap-4">
                      <button className="text-white hover:text-red-500 transition-colors">
                        <Heart className="w-5 h-5" />
                      </button>
                      <button className="text-white hover:text-blue-400 transition-colors">
                        <ZoomIn className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}