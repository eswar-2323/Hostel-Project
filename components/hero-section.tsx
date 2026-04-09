"use client";

import { Button } from "@/components/ui/button";
import { Building2, MapPin, Phone } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-primary">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-foreground/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="container relative z-10 px-4 md:px-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Building2 className="h-8 w-8 text-primary-foreground" />
          <span className="text-primary-foreground/80 text-sm font-medium tracking-wider uppercase">
            Premium Student Accommodation
          </span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 tracking-tight text-balance">
          Sai Chalapathi Hostel
        </h1>
        
        <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8 leading-relaxed text-pretty">
          Your home away from home. Experience comfortable living with modern amenities, 
          quality food, and a supportive community near KL University.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            size="lg" 
            variant="secondary"
            className="text-base px-8"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Phone className="mr-2 h-5 w-5" />
            Contact Us
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="text-base px-8 bg-transparent text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10 hover:text-primary-foreground"
            onClick={() => document.getElementById('facilities')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <MapPin className="mr-2 h-5 w-5" />
            Explore Facilities
          </Button>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 text-primary-foreground/70 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accent" />
            <span>Near KL University</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accent" />
            <span>AC Rooms Available</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accent" />
            <span>Free Bus Service</span>
          </div>
        </div>
      </div>
    </section>
  );
}
