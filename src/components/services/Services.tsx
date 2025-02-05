import { Camera, Code, Megaphone, Palette } from "lucide-react";
import Button from "../ui/Button";
const services = [
  {
    icon: Palette,
    title: "Diseño Gráfico",
    description: "Llevamos tus ideas a la realidad con diseños impactantes y únicos",
    items: ["Creación de logotipos", "Diseño publicitario", "Branding"],
  },
  {
    icon: Megaphone,
    title: "Marketing Digital",
    description: "Potenciamos tu presencia online con estrategias efectivas",
    items: ["Gestión de redes sociales", "Campañas de publicidad", "SEO"],
  },
  {
    icon: Code,
    title: "Desarrollo Web",
    description: "Creamos experiencias digitales modernas y funcionales",
    items: ["Sitios responsivos", "E-commerce", "Aplicaciones"],
  },
  {
    icon: Camera,
    title: "Fotografía y Video",
    description: "Capturamos la esencia de tu marca con contenido visual profesional",
    items: ["Producción de contenido", "Videos promocionales", "Fotografía profesional"],
  },
];
const Services = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Nuestros Servicios
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
            Ofrecemos soluciones creativas y personalizadas para impulsar tu marca en cada etapa de su crecimiento.
          </p>
        </div>
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 glass-card animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center mb-4">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 text-left w-full">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-600 mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        {/* CTA Button
        <div className="text-center animate-fade-up" style={{ animationDelay: '400ms' }}>
          <Button
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg hover:opacity-90 transition-opacity"
          >
            Contáctanos para personalizar tu solución
          </Button>
        </div> */}
      </div>
    </section>
  );
};
export default Services;