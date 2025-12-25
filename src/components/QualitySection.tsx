import { ShieldCheck, Sparkles, Droplet, Hand } from "lucide-react";

const qualityPoints = [
  {
    icon: ShieldCheck,
    title: "UV Sterilized Tools",
    description: "All tools are sterilized using UV light before every appointment",
  },
  {
    icon: Sparkles,
    title: "Premium Materials",
    description: "Only the highest-quality lash fibers and medical-grade adhesives",
  },
  {
    icon: Droplet,
    title: "Disposable Items",
    description: "Fresh disposable brushes and applicators for every client",
  },
  {
    icon: Hand,
    title: "Sanitized Workspace",
    description: "Complete workspace sanitization between each appointment",
  },
];

export const QualitySection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Quality & Hygiene
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mt-2 mb-6">
              Your Safety is My Priority
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              At LeeLashes, I use only the highest-quality materials — from luxury lash fibers 
              to safe, medical-grade adhesives — to deliver beautiful results that not only look 
              stunning, but also hold up to the tropical island lifestyle.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {qualityPoints.map((point, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-rose-light flex items-center justify-center shrink-0">
                    <point.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{point.title}</h3>
                    <p className="text-sm text-muted-foreground">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Guarantee Card */}
          <div className="bg-gradient-to-br from-blush to-rose-light rounded-2xl p-8 lg:p-12">
            <div className="w-16 h-16 rounded-full bg-background flex items-center justify-center mb-6">
              <span className="text-3xl">🛡️</span>
            </div>
            <h3 className="font-display text-3xl font-semibold text-foreground mb-4">
              3-Day Lash Guarantee
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              If you're not fully satisfied within 3 days of your appointment, 
              I'll fix it — no questions asked. Your happiness is what matters most.
            </p>
            <ul className="space-y-3 text-foreground">
              <li className="flex items-center gap-2">
                <span className="text-primary">✓</span> Free touch-ups within 3 days
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">✓</span> Aftercare guidance included
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">✓</span> Style adjustments available
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
