import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Monitor, Wifi, ArrowRight, CheckCircle } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: "CCTV Installation",
      description: "Professional security camera installation with top brands",
      features: [
        "Hikvision Systems",
        "CP Plus Solutions", 
        "Prama Technology",
        "24/7 Monitoring Setup",
        "Remote Access Configuration"
      ],
      buttonText: "Get Quotation",
      buttonVariant: "default" as const,
      gradient: "bg-gradient-primary"
    },
    {
      icon: Monitor,
      title: "LED TV Repair & Sale",
      description: "Expert LED TV repair services and brand new TV sales",
      features: [
        "All Brand Repairs",
        "Screen Replacement",
        "Software Updates",
        "Home Theatre Setup",
        "Warranty Service"
      ],
      buttonText: "Buy Now",
      buttonVariant: "secondary" as const,
      gradient: "bg-gradient-tech"
    },
    {
      icon: Wifi,
      title: "JIO AIR Fiber Installation", 
      description: "High-speed internet connectivity for homes and offices",
      features: [
        "Ultra-Fast Internet",
        "Professional Installation",
        "Router Configuration",
        "Signal Optimization",
        "Technical Support"
      ],
      buttonText: "Book Now",
      buttonVariant: "outline" as const,
      gradient: "bg-gradient-electric"
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Professional</span> Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive electronics solutions with expert installation and reliable support
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="group relative overflow-hidden hover-lift border-border/50 hover:border-primary/50 transition-all duration-500"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <CardHeader className="relative z-10">
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`p-3 rounded-lg ${service.gradient} shadow-lg`}>
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                  </div>
                </div>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="relative z-10 space-y-6">
                {/* Features List */}
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Action Button */}
                <Button 
                  variant={service.buttonVariant}
                  className="w-full group/btn hover-lift glow-effect"
                  size="lg"
                >
                  {service.buttonText}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 bg-card border border-border rounded-full px-6 py-3 shadow-lg">
            <CheckCircle className="h-5 w-5 text-accent" />
            <span className="font-medium">Licensed & Insured • Same Day Service Available</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;