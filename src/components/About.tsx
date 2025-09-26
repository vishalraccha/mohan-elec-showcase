import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Clock, Users, Award, Target } from "lucide-react";
import visitingCardImage from "@/assets/visiting-card.png";

const About = () => {
  const stats = [
    { icon: Users, value: "500+", label: "Happy Customers" },
    { icon: Award, value: "5+", label: "Years Experience" },
    { icon: Target, value: "99%", label: "Success Rate" },
    { icon: Clock, value: "24/7", label: "Support" }
  ];

  const services = [
    "CCTV Camera Installation",
    "LED TV Repair & Sales", 
    "JIO AIR Fiber Setup",
    "Home Theatre Systems",
    "Tata Play Installation",
    "Remote Controls & Accessories"
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Mohan Electronics</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your trusted electronics partner in Solapur, delivering quality service since years
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Business Card Display */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-glow rounded-xl blur-xl opacity-30 animate-pulse-slow"></div>
            <div className="relative bg-card border border-border rounded-xl p-6 shadow-tech hover-lift">
              <img 
                src={visitingCardImage}
                alt="Mohan Electronics Business Card"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            {/* Owner Info */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary">Mohan Sindam</h3>
              <p className="text-muted-foreground leading-relaxed">
                With over 5 years of experience in the electronics industry, Mohan Electronics has become 
                a trusted name in Solapur for quality electronic solutions. We specialize in professional 
                CCTV installations, LED TV repairs, and high-speed internet connectivity services.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-primary" />
                  <span className="font-medium">9370426583</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-secondary" />
                  <span className="text-sm">Solapur - 413006</span>
                </div>
              </div>
            </div>

            {/* Services List */}
            <div>
              <h4 className="font-semibold mb-4 text-lg">Our Expertise:</h4>
              <div className="grid grid-cols-2 gap-2">
                {services.map((service, index) => (
                  <Badge 
                    key={index} 
                    variant="outline" 
                    className="justify-start p-2 hover:bg-primary/10 transition-colors"
                  >
                    {service}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Location */}
            <Card className="border-border/50 hover-lift">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Visit Our Store</h4>
                    <p className="text-muted-foreground">
                      New Pacha Peth, Ashok Chowk<br />
                      Solapur - 413006, Maharashtra
                    </p>
                    <p className="text-sm text-primary mt-2 font-medium">
                      Open: Mon-Sat 9:00 AM - 8:00 PM
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card 
                key={stat.label} 
                className="text-center border-border/50 hover-lift hover:border-primary/50 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="bg-gradient-tech p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-card to-muted/30 rounded-2xl p-8 border border-border/50">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              To provide reliable, professional electronics solutions that enhance security, entertainment, 
              and connectivity for homes and businesses across Solapur. We are committed to quality 
              products, expert installation, and exceptional customer service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;