import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const pricingData = [
  {
    title: "Classic Lashes",
    price: "฿990",
    description: "Natural, effortless look",
    features: ["1:1 lash application", "Natural enhancement", "Lightweight feel", "Perfect for everyday"],
  },
  {
    title: "Volume Lashes",
    price: "฿1,290 - ฿1,490",
    description: "Full, layered beauty",
    features: ["Multi-lash fans", "Bold yet refined", "Customizable fullness", "2-3 weeks lasting"],
    popular: true,
  },
  {
    title: "Premium Styles",
    price: "From ฿1,280",
    description: "Foxy, Wispy, K Kim & more",
    features: ["Specialized techniques", "Trending styles", "Custom consultation", "Premium quality"],
  },
];

export const PricingSection = () => {
  return (
    <section id="pricing" className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Pricing
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mt-2 mb-4">
            Transparent Pricing
          </h2>
          <p className="text-muted-foreground text-lg">
            Quality that lasts. Final pricing may vary depending on time and lash amount — 
            I'll always discuss this with you before we begin.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {pricingData.map((item, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-6 ${
                item.popular
                  ? "bg-primary text-primary-foreground shadow-glow"
                  : "bg-card border border-border"
              }`}
            >
              {item.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gold text-foreground text-xs font-semibold rounded-full">
                  Most Popular
                </span>
              )}
              <h3 className="font-display text-2xl font-semibold mb-2">{item.title}</h3>
              <p className={`text-sm mb-4 ${item.popular ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                {item.description}
              </p>
              <p className="font-display text-3xl font-bold mb-6">{item.price}</p>
              <ul className="space-y-3">
                {item.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm">
                    <Check className={`w-4 h-4 shrink-0 ${item.popular ? "text-gold" : "text-primary"}`} />
                    <span className={item.popular ? "text-primary-foreground/90" : "text-foreground"}>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Refill Info */}
        <div className="bg-blush rounded-2xl p-8 max-w-3xl mx-auto text-center">
          <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
            Refills Available
          </h3>
          <p className="text-muted-foreground mb-6">
            Book your refill appointment within 2-3 weeks to maintain your beautiful lashes. 
            Refill pricing depends on the remaining lash amount and style.
          </p>
          <Button variant="whatsapp" size="lg" asChild>
            <a 
              href="https://wa.me/66897992274" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Ask About Pricing
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
