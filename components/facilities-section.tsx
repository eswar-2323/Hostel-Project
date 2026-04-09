import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AirVent, Bus, UtensilsCrossed, IndianRupee, MapPin, Wifi, ShieldCheck, Clock } from "lucide-react";

const facilities = [
  {
    icon: AirVent,
    title: "AC Rooms",
    description: "Fully air-conditioned rooms for your comfort throughout the year with modern furnishing.",
  },
  {
    icon: Bus,
    title: "Bus Service",
    description: "Free daily bus service to and from KL University campus for all students.",
  },
  {
    icon: UtensilsCrossed,
    title: "Quality Mess",
    description: "Hygienic and nutritious meals prepared fresh daily with varied menu options.",
  },
  {
    icon: IndianRupee,
    title: "Affordable Fees",
    description: "Competitive pricing with flexible payment options to suit your budget.",
  },
  {
    icon: MapPin,
    title: "Prime Location",
    description: "Strategically located near KL University for easy access to campus.",
  },
  {
    icon: Wifi,
    title: "High-Speed WiFi",
    description: "Uninterrupted internet connectivity throughout the hostel premises.",
  },
  {
    icon: ShieldCheck,
    title: "24/7 Security",
    description: "Round-the-clock security with CCTV surveillance for your safety.",
  },
  {
    icon: Clock,
    title: "Flexible Timings",
    description: "Student-friendly entry timings with proper check-in/check-out procedures.",
  },
];

export function FacilitiesSection() {
  return (
    <section id="facilities" className="py-20 md:py-28 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Our Facilities
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg text-pretty">
            We provide everything you need for a comfortable and productive stay during your academic journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((facility, index) => (
            <Card 
              key={index} 
              className="group border-border/50 bg-card hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <facility.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg font-semibold text-card-foreground">{facility.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {facility.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
