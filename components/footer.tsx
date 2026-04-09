import { Building2, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="h-6 w-6 text-accent" />
              <span className="font-semibold text-lg">Sai Chalapathi Hostel</span>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Your home away from home. Providing comfortable and affordable accommodation for students near KL University.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#facilities" className="text-background/70 hover:text-accent transition-colors">
                  Facilities
                </a>
              </li>
              <li>
                <a href="#mess" className="text-background/70 hover:text-accent transition-colors">
                  Mess Menu
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-background/70 hover:text-accent transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="text-background/70 hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-background/70">
                <Phone className="h-4 w-4 text-accent" />
                <a href="tel:+919876543210" className="hover:text-accent transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-2 text-background/70">
                <Mail className="h-4 w-4 text-accent" />
                <a href="mailto:info@saichalapathihostel.com" className="hover:text-accent transition-colors">
                  info@saichalapathihostel.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-background/70">
                <MapPin className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                <span>Near KL University, Vaddeswaram, AP</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/60 text-sm">
            © {currentYear} Sai Chalapathi Hostel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
