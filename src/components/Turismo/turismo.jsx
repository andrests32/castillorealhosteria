import { motion } from 'framer-motion';
import { MapPin, Star, Camera, Trees as Tree, Coffee, Calendar, Users, Utensils, Wifi, Phone, ChevronRight, Clock, Sun, Cloud, Leaf, Heart, Award, Map, Mountain } from 'lucide-react';

export default function CumbaratzaTourism() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[90vh] overflow-hidden"
      >
        <img 
          src="https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80"
          alt="Cumbaratza Landscape" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-7xl font-bold mb-6"
            >
              Cumbaratza
            </motion.h1>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-3xl mb-8 font-light"
            >
              El paraíso escondido de Zamora Chinchipe
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex gap-4 justify-center"
            >
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                <Sun className="w-5 h-5 mr-2" />
                <span>22°C</span>
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                <Cloud className="w-5 h-5 mr-2" />
                <span>Clima Tropical</span>
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                <MapPin className="w-5 h-5 mr-2" />
                <span>1100 msnm</span>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Quick Facts Section */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Users, title: "Población", value: "5,000+ habitantes" },
              { icon: Map, title: "Extensión", value: "142.6 km²" },
              { icon: Mountain, title: "Altitud", value: "1100 msnm" },
              { icon: Clock, title: "Zona Horaria", value: "ECT (UTC-5)" }
            ].map((fact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-xl bg-gray-50"
              >
                <fact.icon className="w-8 h-8 mx-auto mb-4 text-blue-600" />
                <h3 className="text-lg font-semibold mb-2">{fact.title}</h3>
                <p className="text-gray-600">{fact.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* About Section */}
        <motion.section 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-4xl font-bold mb-6 text-gray-800">Descubre Cumbaratza</h2>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Cumbaratza, un tesoro escondido en el corazón de la Amazonía ecuatoriana, te invita a explorar sus maravillas naturales y culturales. Con su clima privilegiado y paisajes impresionantes, este destino te cautivará desde el primer momento.
              </p>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Ubicado estratégicamente en la provincia de Zamora Chinchipe, Cumbaratza es conocido por su rica biodiversidad, cascadas cristalinas y la calidez de su gente. Un destino donde la aventura y el confort se encuentran en perfecta armonía.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center">
                  <Tree className="w-6 h-6 text-green-600 mr-3" />
                  <span className="text-lg">Naturaleza Virgen</span>
                </div>
                <div className="flex items-center">
                  <Camera className="w-6 h-6 text-blue-600 mr-3" />
                  <span className="text-lg">Vistas Únicas</span>
                </div>
                <div className="flex items-center">
                  <Coffee className="w-6 h-6 text-amber-700 mr-3" />
                  <span className="text-lg">Café de Altura</span>
                </div>
                <div className="flex items-center">
                  <Leaf className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-lg">Aire Puro</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80"
                alt="Paisaje de Cumbaratza"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </motion.section>

        {/* Castillo Real Hosteria Section */}
        <motion.section 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl shadow-xl p-12 mb-20"
        >
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Star className="w-8 h-8 text-yellow-500" />
              <h2 className="text-4xl font-bold ml-3">Castillo Real Hosteria</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Lujo y confort en medio del paraíso amazónico
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80"
                alt="Castillo Real Hosteria" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <div className="flex items-center text-white">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>Abierto todo el año</span>
                </div>
              </div>
            </motion.div>

            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold mb-4">Una Experiencia Única</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Castillo Real Hosteria es más que un lugar para hospedarse; es un santuario de lujo donde cada detalle está pensado para brindarte una experiencia inolvidable. Nuestras instalaciones de primera clase, gastronomía excepcional y vistas panorámicas crearán recuerdos que perdurarán toda la vida.
                </p>
                <div className="flex gap-4 mt-6">
                  <span className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800">
                    <Award className="w-4 h-4 mr-2" />
                    Premio Excelencia 2023
                  </span>
                  <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800">
                    <Heart className="w-4 h-4 mr-2" />
                    9.8/10 Calificación
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-50 p-6 rounded-xl"
                >
                  <h4 className="font-bold text-xl mb-4">Servicios Premium</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-700">
                      <Wifi className="w-5 h-5 mr-3 text-blue-600" />
                      WiFi de alta velocidad
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Utensils className="w-5 h-5 mr-3 text-green-600" />
                      Restaurante gourmet
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Star className="w-5 h-5 mr-3 text-yellow-500" />
                      Spa y masajes
                    </li>
                  </ul>
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-50 p-6 rounded-xl"
                >
                  <h4 className="font-bold text-xl mb-4">Reservaciones</h4>
                  <p className="text-gray-700 mb-4">¡Asegura tu estadía ahora!</p>
                  <div className="flex items-center text-blue-600">
                    <Phone className="w-5 h-5 mr-2" />
                    <span>+593 99 999 9999</span>
                  </div>
                </motion.div>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl">
                <h4 className="font-bold text-xl mb-4">Horarios de Atención</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold mb-2">Check-in</h5>
                    <p className="text-gray-600">14:00 - 22:00</p>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2">Check-out</h5>
                    <p className="text-gray-600">Hasta las 12:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Attractions Grid */}
        <motion.section 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold mb-12 text-center">Lugares Destacados</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80",
                title: "Bosque Protector",
                description: "Explora la rica biodiversidad y disfruta de la tranquilidad de la naturaleza virgen. Senderos ecológicos y avistamiento de aves."
              },
              {
                image: "https://images.unsplash.com/photo-1498429152472-9a433d9ddf3b?auto=format&fit=crop&q=80",
                title: "Cascadas Naturales",
                description: "Descubre las impresionantes caídas de agua y sus refrescantes piscinas naturales. Un espectáculo natural único."
              },
              {
                image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&q=80",
                title: "Mirador Turístico",
                description: "Contempla las mejores vistas panorámicas de la región desde nuestro mirador. Perfecto para fotografía y meditación."
              }
            ].map((attraction, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="relative h-64">
                  <img 
                    src={attraction.image}
                    alt={attraction.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3">{attraction.title}</h3>
                  <p className="text-gray-600">{attraction.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Activities Section */}
        <motion.section
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold mb-12 text-center">Actividades y Experiencias</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Senderismo",
                description: "Rutas guiadas por expertos locales",
                icon: Mountain
              },
              {
                title: "Observación de Aves",
                description: "Más de 50 especies diferentes",
                icon: Camera
              },
              {
                title: "Tour del Café",
                description: "Conoce el proceso del café de altura",
                icon: Coffee
              },
              {
                title: "Cultura Local",
                description: "Interactúa con la comunidad",
                icon: Heart
              }
            ].map((activity, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <activity.icon className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{activity.title}</h3>
                <p className="text-gray-600">{activity.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center space-y-6">
            <div className="flex items-center text-2xl font-semibold">
              <MapPin className="w-8 h-8 mr-3" />
              <p>Cumbaratza, Zamora Chinchipe, Ecuador</p>
            </div>
            <p className="text-gray-400 text-lg max-w-2xl text-center">
              Ven y descubre la magia de Cumbaratza, donde cada rincón cuenta una historia y cada amanecer trae una nueva aventura.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}