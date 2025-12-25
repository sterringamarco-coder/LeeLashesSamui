import { Eye, Sparkles, Hand } from "lucide-react";
import serviceLashes from "@/assets/service-lashes.jpg";
import serviceWaxing from "@/assets/service-waxing.jpg";
import serviceNails from "@/assets/service-nails.jpg";

const services = [
  {
    icon: Eye,
    title: "Eyelash Extensions",
    description: "From natural Classic to bold Mega Volume, I create custom lash sets that enhance your natural beauty. Premium quality materials for 2-3 weeks lasting beauty.",
    image: serviceLashes,
    features: ["Classic", "Volume", "Hybrid", "Mega Volume", "Foxy", "Wispy"],
  },
  {
    icon: Sparkles,
    title: "Beauty Waxing",
    description: "Professional waxing services for silky smooth skin. Using premium, gentle wax suitable for all skin types with minimal irritation.",
    image: serviceWaxing,
    features: ["Eyebrows", "Upper Lip", "Full Face", "Arms", "Legs", "Bikini"],
  },
  {
    icon: Hand,
    title: "Nail Services",
    description: "Beautiful manicures and pedicures with attention to detail. Gel polish, nail art, and nail care treatments available.",
    image: serviceNails,
    features: ["Manicure", "Pedicure", "Gel Polish", "Nail Art", "Extensions", "Nail Care"],
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mt-2 mb-4">
            Beauty Services
          </h2>
          <p className="text-muted-foreground text-lg">
            Three specialized beauty services to help you look and feel your absolute best
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-card transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="aspect-square overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="w-12 h-12 rounded-xl bg-rose-light flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 bg-secondary rounded-full text-secondary-foreground"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
