import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Navigation, Car, Train } from "lucide-react";

const directions = [
  {
    icon: Car,
    title: "By Road",
    description: "Located near KL University gate. Easily accessible by auto or cab.",
  },
  {
    icon: Train,
    title: "By Train",
    description: "Nearest station: Vijayawada Junction (12 km). Auto/Cab available to hostel.",
  },
  {
    icon: Navigation,
    title: "From Airport",
    description: "Vijayawada Airport is 25 km away. Pre-book a cab for comfortable travel.",
  },
];

export function LocationSection() {
  return (
    <section id="location" className="py-20 md:py-28 bg-background">
      <div className="container px-4 md:px-6">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            Find Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Location
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Sai Chalapathi Hostel, near KL University.
          </p>
        </div>

        {/* Directions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {directions.map((item, index) => (
            <Card key={index} className="border-border/50 bg-card">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Map Section */}
        <Card className="overflow-hidden border-border/50">
          <CardContent className="p-0">
            <div className="relative">
              
              <div className="aspect-[21/9] w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.486358116976!2d80.61859979207529!3d16.450892820967276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35f088342cebd7%3A0xa4a662ad51cbed5f!2sSAI%20CHALAPATHI%20HOSTEL!5e0!3m2!1sen!2sin!4v1775667106139!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, position: "absolute", top: 0, left: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sai Chalapathi Hostel Location"
                />
              </div>

              {/* Floating Card */}
              <div className="absolute bottom-4 left-4">
                <Card className="bg-card/95 backdrop-blur border-border/50 shadow-lg">
                  <CardContent className="p-4 flex items-center gap-3">
                    
                    <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>

                    <div>
                      <p className="font-medium text-sm">Sai Chalapathi Hostel</p>
                      <p className="text-xs text-muted-foreground">
                        Near KL University, Vaddeswaram, AP
                      </p>
                    </div>

                  </CardContent>
                </Card>
              </div>

            </div>
          </CardContent>
        </Card>

      </div>
    </section>
  );
}