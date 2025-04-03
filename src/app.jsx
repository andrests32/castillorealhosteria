"use client";

import { useState, useRef } from "react";
import {
  ChevronRight,
  MapPin,
  Utensils,
  Wifi,
  Coffee,
  Wine,
  Tv,
  Bath,
  Clock,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter,
  Sparkles,
  Leaf,
  Music,
  Users,
  Plane,
  ShieldCheck,
  Smile,
  Zap
} from "lucide-react";

// Importación de componentes
import FeatureCard from "./components/feature-card";
import RoomCard from "./components/room-card";
import TestimonialCard from "./components/testimonial-card";
import HighlightSection from "./components/highlight-section";
import CTASection from "./components/cta-section";
// import GallerySection from "./components/gallery-section";
import FAQSection from "./components/faq-section";
import LocationSection from "./components/location-section";
import AmenityCard from "./components/amenity-card";
import HeroSection from "./components/hero-section";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const heroRef = useRef(null);

  // Datos para los componentes
  const features = [
    {
      title: "WiFi Gratis",
      icon: <Wifi className="h-5 w-5 text-emerald-500" />,
      description: "Conexión de alta velocidad en todas las áreas"
    },
    {
      title: "Restaurante Orgánico",
      icon: <Utensils className="h-5 w-5 text-emerald-500" />,
      description: "Ingredientes frescos de nuestra huerta"
    },
    {
      title: "Ubicación Privilegiada",
      icon: <MapPin className="h-5 w-5 text-emerald-500" />,
      description: "Entorno natural con vistas espectaculares"
    },
    {
      title: "Servicio 24/7",
      icon: <Clock className="h-5 w-5 text-emerald-500" />,
      description: "Atención personalizada a cualquier hora"
    }
  ];

  const rooms = [
    {
      title: "Habitación Estándar",
      description:
        "Espaciosa habitación con todas las comodidades para una estadía placentera en medio de la naturaleza.",
      price: "$120 / noche",
      image: "/public/habitstandar.webp",
      features: [
        "TV Smart 4K",
        "Minibar",
        "Baño privado",
        "Wifi de alta velocidad"
      ],
      amenities: [
        { icon: <Tv />, name: "TV Smart 4K" },
        { icon: <Wifi />, name: "WiFi" },
        { icon: <Coffee />, name: "Cafetera" },
        { icon: <Bath />, name: "Baño privado" }
      ]
    },
    {
      title: "Suite Real",
      description:
        "Nuestra suite más exclusiva, con amplios espacios, jacuzzi privado y vistas panorámicas al bosque.",
      price: "$280 / noche",
      image: "/public/habitsuite.webp",
      features: [
        "Cama king size",
        "Jacuzzi privado",
        "Sala de estar",
        "Terraza privada",
        "Servicio de mayordomo"
      ],
      amenities: [
        { icon: <Bath />, name: "Jacuzzi" },
        { icon: <Wine />, name: "Bar premium" },
        { icon: <Tv />, name: "Home Theater" },
        { icon: <Coffee />, name: "Desayuno incluido" }
      ],
      highlighted: true
    },
    {
      title: "Habitación Deluxe",
      description:
        "Mayor espacio y comodidades adicionales para una experiencia superior en contacto con la naturaleza.",
      price: "$160 / noche",
      image: "/public/habitdelux.webp",
      features: [
        "Cama queen size",
        "Área de trabajo",
        "Vista al jardín",
        "Amenidades premium"
      ],
      amenities: [
        { icon: <Tv />, name: "TV Smart 4K" },
        { icon: <Wifi />, name: "WiFi" },
        { icon: <Coffee />, name: "Cafetera" },
        { icon: <Bath />, name: "Baño de lujo" }
      ]
    },
    {
      title: "Suite Familiar",
      description:
        "Perfecta para familias, con amplios espacios y comodidades para todos los miembros.",
      price: "$220 / noche",
      image: "/placeholder.svg?height=400&width=600",
      features: [
        "Dos habitaciones",
        "Sala común",
        "Minicocina",
        "Baño completo",
        "Juegos para niños"
      ],
      amenities: [
        { icon: <Users />, name: "Hasta 5 personas" },
        { icon: <Tv />, name: "2 TVs" },
        { icon: <Coffee />, name: "Cocina equipada" },
        { icon: <Wifi />, name: "WiFi" }
      ],
      wide: true
    }
  ];

  const testimonials = [
    {
      name: "María González",
      location: "Madrid, España",
      comment:
        "Una experiencia inolvidable. Las instalaciones son hermosas y el servicio es excepcional. La gastronomía es de primer nivel y el spa es un verdadero oasis. Definitivamente volveremos.",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100"
    },
    {
      name: "Carlos Rodríguez",
      location: "Buenos Aires, Argentina",
      comment:
        "El ambiente del castillo es mágico. Las habitaciones son muy cómodas y el restaurante ofrece platos deliciosos. El chef nos preparó un menú degustación que fue una verdadera experiencia sensorial. Totalmente recomendado.",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100"
    },
    {
      name: "Laura Martínez",
      location: "Ciudad de México, México",
      comment:
        "Nos hospedamos en la Suite Real y superó todas nuestras expectativas. El jacuzzi privado y las vistas son espectaculares. El servicio de mayordomo hizo que nuestra estadía fuera perfecta, atendiendo cada detalle.",
      rating: 4,
      image: "/placeholder.svg?height=100&width=100"
    }
  ];

  const highlights = [
    {
      title: "Gastronomía",
      description:
        "Nuestro chef ejecutivo crea experiencias gastronómicas únicas utilizando ingredientes orgánicos de nuestra huerta y productores locales. Cada plato es una obra de arte que combina sabores tradicionales con técnicas modernas.",
      image: "/public/gastronomia.jpeg",
      buttonText: "Ver Menú",
      buttonLink: "/restaurante",
      icon: <Leaf className="h-10 w-10 text-teal-700" />,
      features: [
        "Ingredientes orgánicos de nuestra huerta",
        "Menú degustación de 7 tiempos",
        "Carta de vinos ecológicos",
        "Cenas temáticas semanales"
      ]
    },
    {
      title: "Relax & Bienestar Natural",
      description:
        "Relájese y rejuvenezca en nuestro spa con tratamientos que utilizan productos naturales, piscina climatizada, sauna y gimnasio completamente equipado. Nuestros terapeutas certificados le brindarán una experiencia de bienestar inolvidable.",
      image: "/public/bienestar.jpeg",
      buttonText: "Reservar",
      buttonLink: "/spa",
      icon: <Sparkles className="h-10 w-10 text-teal-700" />,
      features: [
        "Masajes con aceites esenciales",
        "Tratamientos faciales naturales",
        "Circuito de aguas",
        "Yoga y meditación en el bosque"
      ]
    }
  ];

  const galleryImages = [
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Fachada de la hostería"
    },
    { src: "/placeholder.svg?height=400&width=600", alt: "Habitación de lujo" },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Restaurante orgánico"
    },
    { src: "/placeholder.svg?height=400&width=600", alt: "Piscina natural" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Jardines" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Spa natural" },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Senderos ecológicos"
    },
    { src: "/placeholder.svg?height=400&width=600", alt: "Vista panorámica" }
  ];

  const faqs = [
    {
      question: "¿Cuáles son los horarios de check-in y check-out?",
      answer:
        "El check-in es a partir de las 15:00 horas y el check-out hasta las 12:00 horas. Si necesita horarios especiales, contáctenos con anticipación y haremos lo posible por acomodar sus necesidades."
    },
    {
      question: "¿Ofrecen servicio de transporte desde el aeropuerto?",
      answer:
        "Sí, ofrecemos servicio de transporte privado desde y hacia el aeropuerto con costo adicional. Por favor, solicítelo al momento de su reserva para garantizar disponibilidad."
    },
    {
      question: "¿Las mascotas son bienvenidas?",
      answer:
        "Sí, somos un hotel pet-friendly. Aceptamos mascotas pequeñas y medianas con un cargo adicional. Contamos con amenidades especiales para su compañero peludo."
    },
    {
      question: "¿Tienen opciones para dietas especiales en el restaurante?",
      answer:
        "Absolutamente. Nuestro chef puede preparar menús vegetarianos, veganos, sin gluten y adaptados a cualquier alergia o restricción alimentaria. Le recomendamos informarnos con anticipación."
    },
    {
      question: "¿Qué actividades se pueden realizar en los alrededores?",
      answer:
        "La zona ofrece senderismo, paseos a caballo, visitas a viñedos, tours culturales y mucho más. Nuestro concierge estará encantado de organizar cualquier actividad que desee."
    }
  ];

  const amenities = [
    {
      icon: <Wifi />,
      title: "WiFi Gratuito",
      description: "Conexión de alta velocidad en todas las áreas"
    },
    {
      icon: <Utensils />,
      title: "Restaurante Orgánico",
      description: "Cocina de autor con ingredientes locales"
    },
    {
      icon: <Wine />,
      title: "Cava de Vinos",
      description: "Selección premium de vinos ecológicos"
    },
    {
      icon: <Coffee />,
      title: "Desayuno Buffet",
      description: "Incluido en todas las reservas"
    },
    {
      icon: <Bath />,
      title: "Spa Natural",
      description: "Tratamientos exclusivos con productos naturales"
    },
    {
      icon: <Leaf />,
      title: "Jardines",
      description: "Amplios espacios verdes para disfrutar"
    },
    {
      icon: <Music />,
      title: "Entretenimiento",
      description: "Música en vivo y eventos culturales"
    },
    {
      icon: <ShieldCheck />,
      title: "Seguridad 24/7",
      description: "Personal de seguridad y cámaras"
    },
    {
      icon: <Plane />,
      title: "Servicio de Traslados",
      description: "Transporte privado bajo solicitud"
    },
    {
      icon: <Smile />,
      title: "Actividades",
      description: "Programas recreativos para todas las edades"
    },
    {
      icon: <Users />,
      title: "Salones de Eventos",
      description: "Espacios versátiles para cualquier ocasión"
    },
    {
      icon: <Zap />,
      title: "Gimnasio",
      description: "Equipamiento de última generación"
    }
  ];

  const activities = [
    {
      title: " Salón de Eventos",
      description:
        "Explore los senderos naturales que rodean nuestra hostería con guías expertos que le mostrarán la flora y fauna local.",
      image: "/restaurante.webp",
      icon: <Leaf className="h-6 w-6 text-teal-700" />
    },
    {
      title: "Restaurante",
      description:
        "Disfrute de un recorrido a caballo por los alrededores, ideal para todas las edades y niveles de experiencia.",
      image: "/restau.webp",
      icon: <Users className="h-6 w-6 text-teal-700" />
    },
    {
      title: "Áreas Verdes",
      description:
        "Participe en una exclusiva cata de vinos locales dirigida por nuestro sommelier en nuestra cava privada.",
      image: "/areas verdes.webp",
      icon: <Wine className="h-6 w-6 text-teal-700" />
    },
    {
      title: "Piscina",
      description:
        "Aprenda a preparar platos tradicionales con ingredientes orgánicos de nuestra huerta junto a nuestro chef.",
      image: "/pscinas.webp",
      icon: <Utensils className="h-6 w-6 text-teal-700" />
    }
  ];

  // Renderizado de componentes
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen overflow-hidden">
        <HeroSection
          title="Castillo Real Hosteria"
          subtitle="Una experiencia única de hospedaje con el encanto y la majestuosidad de la naturaleza"
          buttonText="Reserva Ahora"
          buttonLink="www.google.com"
        />
      </section>

      {/* Featured Rooms Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-poppinsreg text-primary mb-4">
              Nuestras Habitaciones Destacadas
            </h2>
            <p className="max-w-4xl mx-auto text-gray-500 font-poppinslight">
              Descubra nuestras elegantes habitaciones y suites, diseñadas para
              brindarle el máximo confort durante su estadía, con vistas
              espectaculares al entorno natural.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rooms.slice(0, 3).map((room, index) => (
              <RoomCard
                key={index}
                title={room.title}
                description={room.description}
                price={room.price}
                image={room.image}
                features={room.features}
                amenities={room.amenities}
                highlighted={room.highlighted}
              />
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="/habitaciones"
              className="inline-flex items-center text-primary hover:text-teal-800 font-poppinsreg"
            >
              Ver todas las habitaciones
              <ChevronRight className="h-4 w-4 ml-1" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl text-primary font-poppinsreg mb-4">
            Bienvenidos a Hosteria Castillo Real
          </h2>
          <p className="max-w-4xl mx-auto text-gray-500 font-poppinslight">
            Ubicado en un entorno natural privilegiado, nuestro hotel combina la
            elegancia de un castillo con todas las comodidades modernas para
            hacer de su estadía una experiencia inolvidable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="max-w-2xl">
            <p className="mb-4 text-primary font-poppinsreg text-lg text-justify tracking-wide">
              Hosteria Castillo Real le ofrece una experiencia única de
              hospedaje, donde cada detalle ha sido cuidadosamente diseñado para
              transportarlo a una época de elegancia y majestuosidad, todo en
              armonía con la naturaleza que nos rodea.
            </p>
            <p className="mb-4 text-primary font-poppinsreg text-lg text-justify tracking-wide">
              Nuestras instalaciones cuentan con amplios jardines, restaurante
              con productos orgánicos, spa natural y habitaciones decoradas con
              un estilo que combina elementos clásicos y contemporáneos para
              brindarle el máximo confort.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  title={feature.title}
                  icon={feature.icon}
                  description={feature.description}
                />
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/public/instalaciones.webp"
              alt="Instalaciones"
              className="rounded-lg object-cover h-80 w-full"
            />
            <img
              src="/public/jardines.webp"
              alt="Jardines"
              className="rounded-lg object-cover h-80 w-full mt-8"
            />
            <img
              src="/restaurante.webp"
              alt="Restaurante"
              className="rounded-lg object-cover h-80 w-full"
            />
            <img
              src="/public/habitaciones.webp"
              alt="Habitación"
              className="rounded-lg object-cover h-80 w-full mt-8"
            />
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-poppinsreg text-primary mb-4">
              Experiencias en castillo real
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 font-poppinslight">
              Disfrute de actividades exclusivas diseñadas para conectar con la
              naturaleza y crear recuerdos inolvidables durante su estadía.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md"
              >
                <div className="relative h-48">
                  <img
                    src={activity.image || "/placeholder.svg"}
                    alt={activity.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-white p-2 rounded-full">
                    {activity.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-cinzelsmb text-primary mb-2">{activity.title}</h3>
                  <p className="text-gray-500 font-poppinslight text-sm text-justify tracking-wide mb-4">{activity.description}</p>
                  <a
                    href="#"
                    className="text-teal-700 font-poppinsreg hover:text-teal-800 inline-flex items-center"
                  >
                    Más información
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl text-primary font-poppinsreg mb-4">Servicios & Comodidades</h2>
            <p className="max-w-4xl mx-auto text-gray-500 font-poppinslight">
              Disfrute de nuestra amplia gama de servicios diseñados para hacer
              de su estadía una experiencia inolvidable en plena naturaleza.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {amenities.map((amenity, index) => (
              <AmenityCard
                key={index}
                icon={amenity.icon}
                title={amenity.title}
                description={amenity.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Sections */}
      {highlights.map((highlight, index) => (
        <HighlightSection
          key={index}
          title={highlight.title}
          description={highlight.description}
          image={highlight.image}
          buttonText={highlight.buttonText}
          buttonLink={highlight.buttonLink}
          icon={highlight.icon}
          features={highlight.features}
          reverse={index % 2 !== 0}
        />
      ))}

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl text-primary font-poppinsreg mb-4">
              Lo que dicen nuestros huéspedes
            </h2>
            <p className="max-w-2xl mx-auto text-gray-500 font-poppinslight">
              Experiencias reales de quienes han disfrutado de su estadía en
              Hosteria Castillo Real.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <TestimonialCard
                name={testimonials[activeIndex].name}
                location={testimonials[activeIndex].location}
                comment={testimonials[activeIndex].comment}
                rating={testimonials[activeIndex].rating}
                image={testimonials[activeIndex].image}
                featured={true}
              />
            </div>

            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === activeIndex ? "bg-emerald-700" : "bg-emerald-100"
                  }`}
                  aria-label={`Ver testimonio ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={faqs} />

      {/* Location Section */}
      <LocationSection />

      {/* CTA Section */}
      <CTASection
        title="Reserve su experiencia única"
        description="No espere más para disfrutar de una estadía inolvidable en Hosteria Castillo Real. Contáctenos hoy mismo y permítanos ayudarle a planificar su visita en plena naturaleza."
        primaryButtonText="Reservar Ahora"
        primaryButtonLink="/reservar"
        secondaryButtonText="Contactar"
        secondaryButtonLink="/contacto"
      />
   
    </div>
  );
}
