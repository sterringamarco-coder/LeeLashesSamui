import { Star, ShieldCheck, Clock, Heart } from "lucide-react";
import maliWithCustomers from "@/assets/mali-with-customers.jpg";

const highlights = [
  { icon: Star, label: "7+ Years Experience" },
  { icon: ShieldCheck, label: "Premium Products" },
  { icon: Clock, label: "2-3 Week Lasting" },
  { icon: Heart, label: "5.0 Google Rating" },
];

export const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-cream">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-card">
              <img
                src={maliWithCustomers}
                alt="Inside Leelashes beauty Salon"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-background rounded-xl p-4 shadow-card">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                  <Star className="w-6 h-6 text-gold fill-current" />
                </div>
                <div>
                  <p className="font-display text-2xl font-semibold text-foreground">5.0</p>
                  <p className="text-sm text-muted-foreground">63 Reviews</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              About Me
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mt-2 mb-6">
              Hi, I'm Mali
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              I'm the hands (and heart) behind <strong className="text-foreground">LeeLashes</strong>. 
              After years working in some of Bangkok's best lash salons and taking part in 
              international lash events, I decided to bring that same skill and care here to Samui.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              At LeeLashes, I focus on lashes that look <strong className="text-foreground">natural</strong>, 
              feel <strong className="text-foreground">comfortable</strong>, and <strong className="text-foreground">last</strong>. 
              Whether you want something soft and subtle or bold and full, every set is made just for you.
              I speak <strong className="text-foreground">English</strong> and I'm here to guide you 
              through the process.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-background rounded-xl border border-border"
                >
                  <div className="w-10 h-10 rounded-full bg-rose-light flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
