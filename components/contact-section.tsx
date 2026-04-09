import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9014197893",
    href: "tel:+919014197893",
    action: "Call Now",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+91 9014197893",
    href: "https://wa.me/919014197893",
    action: "Message",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@saichalapathihostel.com",
    href: "mailto:info@saichalapathihostel.com",
    action: "Send Email",
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Contact Us
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg text-pretty">
            Have questions? Reach out to us anytime. We&apos;re here to help you find your perfect stay.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="border-border/50 bg-card">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <info.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                    <p className="font-medium text-card-foreground truncate">{info.value}</p>
                  </div>
                  <Button asChild variant="outline" size="sm">
                    <a href={info.href} target={info.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                      {info.action}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-border/50 bg-card">
            <CardContent className="p-6 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Address</p>
                  <p className="font-medium text-card-foreground leading-relaxed">
                    Sai Chalapathi Hostel,<br />
                    Near KL University Main Gate,<br />
                    Vaddeswaram, Guntur District,<br />
                    Andhra Pradesh - 522502
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Office Hours</p>
                  <p className="font-medium text-card-foreground">
                    Monday - Saturday: 9:00 AM - 8:00 PM<br />
                    Sunday: 10:00 AM - 6:00 PM
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground mb-3">Quick Actions</p>
                <div className="flex flex-wrap gap-3">
                  <Button asChild>
                    <a href="tel:+919876543210">
                      <Phone className="mr-2 h-4 w-4" />
                      Call for Admission
                    </a>
                  </Button>
                  <Button asChild variant="outline">
                    <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
