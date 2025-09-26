import { MapPin, Phone, Mail, Clock } from "lucide-react";
import logoImage from "@/assets/me-logo.jpg";

const Footer = () => {
  const services = [
    "CCTV Installation",
    "LED TV Repair", 
    "JIO Fiber Setup",
    "Home Theatre",
    "Tata Play",
    "Technical Support"
  ];

  const brands = [
    "Hikvision",
    "CP Plus", 
    "Prama",
    "Samsung",
    "LG",
    "Sony"
  ];

  return (
    <footer className="bg-gradient-to-br from-card to-muted border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src={logoImage} 
                alt="Mohan Electronics Logo" 
                className="h-12 w-12 animate-glow"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-primary">MOHAN</span>
                <span className="text-sm text-secondary font-semibold">ELECTRONICS</span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Your trusted electronics partner in Solapur. Professional CCTV installation, 
              LED TV repair, and JIO fiber services with quality guarantee.
            </p>
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4 text-primary" />
              <span className="font-semibold">9370426583</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-primary">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <a 
                    href="#services" 
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Brands */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-secondary">Authorized Brands</h3>
            <ul className="space-y-2">
              {brands.map((brand) => (
                <li key={brand}>
                  <span className="text-muted-foreground text-sm">{brand}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-accent">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <div className="text-sm text-muted-foreground">
                  New Pacha Peth, Ashok Chowk<br />
                  Solapur - 413006, Maharashtra
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground">9370426583</span>
              </div>
              
              <div className="flex items-start space-x-2">
                <Clock className="h-4 w-4 text-primary mt-1" />
                <div className="text-sm text-muted-foreground">
                  Mon-Sat: 9:00 AM - 8:00 PM<br />
                  Sunday: Emergency calls only
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2024 Mohan Electronics. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <span>Licensed & Insured</span>
              <span>•</span>
              <span>5+ Years Experience</span>
              <span>•</span>
              <span>500+ Happy Customers</span>
            </div>
          </div>
          
          <div className="text-center mt-6">
            <div className="inline-flex items-center space-x-2 bg-gradient-primary text-white rounded-full px-4 py-2 text-sm">
              <Phone className="h-4 w-4" />
              <span>Emergency Service Available 24/7 - Call 9370426583</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;