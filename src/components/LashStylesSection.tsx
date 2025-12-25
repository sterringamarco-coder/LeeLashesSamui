import classicLashes from "@/assets/lashes/classic_lashes.jpg";
import volumeLashes from "@/assets/lashes/volume_lashes.jpg";
import dollEye from "@/assets/lashes/doll_eye.jpg";
import foxyEyelashes from "@/assets/lashes/foxy_eyelashes.jpg";
import wispyLashes from "@/assets/lashes/wispy_lashes.jpg";
import hybridClassic from "@/assets/lashes/hybrid_classic.jpg";
import kKimLashes from "@/assets/lashes/k_kim_lashes.jpg";
import megaVolume from "@/assets/lashes/mega_volume.jpg";

const lashStyles = [
  {
    name: "Classic Lashes",
    description: "A natural, effortless look that's perfect for daily wear.",
    image: classicLashes,
  },
  {
    name: "Volume Lashes",
    description: "Full, soft, and beautifully layered using multi-lash fans for a bold yet refined look.",
    image: volumeLashes,
  },
  {
    name: "Doll Eyes",
    description: "Designed to open the eyes and create a naturally round, youthful appearance.",
    image: dollEye,
  },
  {
    name: "Foxy Eyelashes",
    description: "Bold and beautiful — a sultry, flared look that gives serious cat-eye energy.",
    image: foxyEyelashes,
  },
  {
    name: "Wispy",
    description: "Light, fluttery lashes with a boost of volume and dimensional texture.",
    image: wispyLashes,
  },
  {
    name: "Hybrid Classic",
    description: "A mix of natural and full — the perfect in-between for soft, noticeable lashes.",
    image: hybridClassic,
  },
  {
    name: "K Kim Lashes",
    description: "A soft and stylish lash set with that clean Korean beauty vibe.",
    image: kKimLashes,
  },
  {
    name: "Mega Volume",
    description: "Mega volume lashes for maximum impact and unforgettable eyes.",
    image: megaVolume,
  },
];

export const LashStylesSection = () => {
  return (
    <section id="styles" className="section-padding bg-cream">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Lash Gallery
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mt-2 mb-4">
            Choose Your Style
          </h2>
          <p className="text-muted-foreground text-lg">
            From natural classics to dramatic mega volume — find your perfect lash look
          </p>
        </div>

        {/* Lash Styles Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {lashStyles.map((style, index) => (
            <div
              key={index}
              className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer"
            >
              <img
                src={style.image}
                alt={style.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="font-display text-lg font-semibold text-background mb-1">
                    {style.name}
                  </h3>
                  <p className="text-sm text-background/80 line-clamp-2">
                    {style.description}
                  </p>
                </div>
              </div>
              {/* Always visible label on mobile */}
              <div className="md:hidden absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-foreground/80 to-transparent">
                <h3 className="font-display text-sm font-semibold text-background">
                  {style.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
