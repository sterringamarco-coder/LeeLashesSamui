import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sophie Da Silva",
    text: "I had a great experience! Very professional, kind and attentive. My lashes look amazing and I'm super happy with the result. Highly recommend to everyone 🌸✨",
    rating: 5,
  },
  {
    name: "Cindy Lam",
    text: "Love the lash look! I had just the look I want for this trip! The studio is super clean and neat. Very happy!",
    rating: 5,
  },
  {
    name: "Bryana Medlock",
    text: "Best lash artist I have ever been to! She takes so much care and really listens to what you want. She gave me the most beautiful lashes, I will definitely be returning!",
    rating: 5,
  },
  {
    name: "Lena Lundgren",
    text: "Super professional, clean and gentle! My lashes came out amazing. The best!",
    rating: 5,
  },
  {
    name: "Lil Miia",
    text: "Very kind and sweet girl, did amazing on my lashes! Super happy with the result and the place was super clean!",
    rating: 5,
  },
  {
    name: "Karin Jonsson",
    text: "Excellent service and beautiful result! Mali is very skilled and the studio is spotless. Will definitely come back!",
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  return (
    <section id="reviews" className="section-padding bg-cream">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Reviews
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mt-2 mb-4">
            What Clients Say
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-gold fill-current" />
              ))}
            </div>
            <span className="font-display text-2xl font-semibold text-foreground">5.0</span>
            <span className="text-muted-foreground">(63 reviews on Google)</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-background rounded-2xl p-6 shadow-soft border border-border hover:shadow-card transition-shadow duration-300"
            >
              <Quote className="w-8 h-8 text-rose-light mb-4" />
              <p className="text-foreground mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-rose-light flex items-center justify-center">
                  <span className="font-semibold text-primary">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-foreground">{testimonial.name}</p>
                  <div className="flex gap-0.5">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-gold fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews Link */}
        <div className="text-center mt-12">
          <a
            href="https://www.google.com/maps/place/LeeLashes"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
          >
            View all reviews on Google
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};
