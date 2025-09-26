import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Shield, Award, TrendingUp } from "lucide-react";

const Products = () => {
  const categories = [
    {
      title: "CCTV Security Systems",
      description: "Premium security solutions from trusted brands",
      icon: Shield,
      brands: ["Hikvision", "CP Plus", "Prama"],
      products: [
        "4MP IP Cameras",
        "8 Channel DVR Systems", 
        "Night Vision Cameras",
        "Wireless Security Kits",
        "Motion Detection Systems"
      ],
      featured: true
    },
    {
      title: "LED TV & Entertainment",
      description: "Latest television technology and home theater systems",
      icon: TrendingUp,
      brands: ["Samsung", "LG", "Sony", "Mi"],
      products: [
        "55\" 4K Smart TVs",
        "Sound Bars & Speakers",
        "Streaming Devices",
        "Home Theater Systems",
        "Gaming Accessories"
      ],
      featured: false
    },
    {
      title: "Tata Play & Set-Top Boxes",
      description: "Digital entertainment and satellite TV solutions",
      icon: Award,
      brands: ["Tata Play", "Airtel", "Dish TV"],
      products: [
        "HD Set-Top Boxes",
        "4K Satellite Receivers",
        "Multi-Room Solutions",
        "Remote Controls",
        "Installation Kits"
      ],
      featured: false
    }
  ];

  return (
    <section id="products" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Quality <span className="bg-gradient-tech bg-clip-text text-transparent">Products</span> We Offer
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Genuine products from authorized dealers with full warranty support
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card 
              key={category.title}
              className={`group relative overflow-hidden hover-lift transition-all duration-500 ${
                category.featured ? 'border-primary shadow-glow' : 'border-border/50'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {category.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <Badge variant="default" className="bg-gradient-primary">
                    <Star className="h-3 w-3 mr-1" />
                    Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="relative">
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-electric opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                
                <div className="relative z-10 flex items-center space-x-3 mb-4">
                  <div className="p-3 rounded-lg bg-gradient-tech shadow-lg">
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {category.title}
                  </CardTitle>
                </div>
                
                <CardDescription className="relative z-10">
                  {category.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="relative z-10 space-y-6">
                {/* Brands */}
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Authorized Brands:</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.brands.map((brand) => (
                      <Badge key={brand} variant="outline" className="hover:bg-primary/10">
                        {brand}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Products */}
                <div>
                  <h4 className="font-semibold mb-3 text-secondary">Available Products:</h4>
                  <ul className="space-y-2">
                    {category.products.map((product, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{product}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Features */}
                <div className="pt-4 border-t border-border">
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center space-x-1">
                      <Shield className="h-4 w-4 text-accent" />
                      <span>Warranty Included</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Award className="h-4 w-4 text-secondary" />
                      <span>Genuine Products</span>
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quality Assurance */}
        <div className="mt-16 bg-gradient-to-r from-card to-muted/30 rounded-2xl p-8 border border-border/50">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Why Choose Our Products?</h3>
            <p className="text-muted-foreground">Quality assurance and customer satisfaction guaranteed</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-gradient-primary p-4 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-semibold mb-1">Genuine Products</h4>
              <p className="text-sm text-muted-foreground">100% authentic from authorized dealers</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-tech p-4 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-semibold mb-1">Full Warranty</h4>
              <p className="text-sm text-muted-foreground">Complete manufacturer warranty support</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-electric p-4 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-semibold mb-1">Expert Installation</h4>
              <p className="text-sm text-muted-foreground">Professional setup and configuration</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-glow p-4 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-semibold mb-1">After-Sales Support</h4>
              <p className="text-sm text-muted-foreground">Ongoing technical assistance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;