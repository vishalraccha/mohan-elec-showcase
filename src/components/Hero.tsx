import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, Wifi } from "lucide-react";
import brandImage from "@/assets/me-brand.png";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-muted">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-accent/10 rounded-full blur-2xl animate-glow"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Professional
                </span>
                <br />
                <span className="text-foreground">Electronics</span>
                <br />
                <span className="bg-gradient-tech bg-clip-text text-transparent">
                  Solutions
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Expert CCTV installation, LED TV repair & sales, and JIO AIR fiber services in Solapur. 
                Your trusted electronics partner since years.
              </p>
            </div>

            {/* Key Services */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2 p-3 rounded-lg bg-card border border-border hover-lift">
                <Shield className="h-6 w-6 text-primary" />
                <span className="font-medium">CCTV Security</span>
              </div>
              <div className="flex items-center space-x-2 p-3 rounded-lg bg-card border border-border hover-lift">
                <Zap className="h-6 w-6 text-secondary" />
                <span className="font-medium">LED TV Repair</span>
              </div>
              <div className="flex items-center space-x-2 p-3 rounded-lg bg-card border border-border hover-lift">
                <Wifi className="h-6 w-6 text-accent" />
                <span className="font-medium">JIO Fiber</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group hover-lift glow-effect">
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="hover-lift">
                Call Now: 9370426583
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>

          {/* Brand Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-glow rounded-full blur-xl opacity-30 animate-pulse-slow"></div>
              <img 
                src={brandImage}
                alt="Mohan Electronics - Sales & Service"
                className="relative z-10 max-w-md w-full h-auto animate-float hover-lift"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;