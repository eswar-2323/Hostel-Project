"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Building2, Menu, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Facilities", href: "#facilities" },
  { label: "Menu", href: "#mess" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
  { label: "Location", href: "#location" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/95 backdrop-blur border-b border-border shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2 group">
            <Building2
              className={cn(
                "h-6 w-6 transition-colors",
                scrolled ? "text-primary" : "text-primary-foreground"
              )}
            />
            <span
              className={cn(
                "font-semibold text-lg transition-colors",
                scrolled ? "text-foreground" : "text-primary-foreground"
              )}
            >
              Sai Chalapathi
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                  scrolled
                    ? "text-muted-foreground hover:text-foreground hover:bg-muted"
                    : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
                )}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Button
              size="sm"
              className={cn(
                scrolled
                  ? ""
                  : "bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              )}
              asChild
            >
              <a href="tel:+919876543210">
                <Phone className="mr-2 h-4 w-4" />
                Call Now
              </a>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  scrolled
                    ? "text-foreground"
                    : "text-primary-foreground hover:bg-primary-foreground/10"
                )}
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <div className="flex flex-col gap-4 mt-8">
                <div className="flex items-center gap-2 mb-4">
                  <Building2 className="h-6 w-6 text-primary" />
                  <span className="font-semibold text-lg text-foreground">
                    Sai Chalapathi
                  </span>
                </div>
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className="px-4 py-3 text-left text-foreground hover:bg-muted rounded-lg transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
                <Button className="mt-4" asChild>
                  <a href="tel:+919876543210">
                    <Phone className="mr-2 h-4 w-4" />
                    Call Now
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
