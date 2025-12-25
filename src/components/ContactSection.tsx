import { MapPin, Clock, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-foreground text-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <div>
            <span className="text-sm font-medium text-rose-light uppercase tracking-wider">
              Visit Us
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold mt-2 mb-6">
              Book Your Appointment
            </h2>
            <p className="text-background/80 text-lg leading-relaxed mb-8">
              Ready to enhance your natural beauty? Book via WhatsApp for the fastest response. 
              I'd love to help you find your perfect look!
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-background/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-rose-light" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Location</h3>
                  <p className="text-background/80">
                    Bophut, Koh Samui, Thailand
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-background/10 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-rose-light" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Opening Hours</h3>
                  <p className="text-background/80">
                    Monday - Saturday<br />
                    10:00 AM - 8:00 PM
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-background/10 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-rose-light" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Phone / WhatsApp</h3>
                  <p className="text-background/80">
                    +66 89 799 2274
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="whatsapp" size="xl" asChild>
                <a 
                  href="https://wa.me/66897992274" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Book via WhatsApp
                </a>
              </Button>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-card h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3934.9461!2d99.9678!3d9.5288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc244eaa3418c3e2f!2sLeeLashes!5e0!3m2!1sen!2sth!4v1600000000000!5m2!1sen!2sth"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="LeeLashes Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
