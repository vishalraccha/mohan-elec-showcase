import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, MessageSquare, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import BuyForm from "./BuyForm";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [buyFormOpen, setBuyFormOpen] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const validateContactForm = () => {
    if (!formData.name.trim()) {
      toast({
        title: "Error",
        description: "Please enter your name",
        variant: "destructive",
      });
      return false;
    }
    if (!formData.phone.trim()) {
      toast({
        title: "Error",
        description: "Please enter your phone number",
        variant: "destructive",
      });
      return false;
    }
    if (!formData.service) {
      toast({
        title: "Error",
        description: "Please select a service",
        variant: "destructive",
      });
      return false;
    }
    return true;
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateContactForm()) return;

    setIsSubmitting(true);

    try {
      // WhatsApp message
      const whatsappMessage = `*Contact Form - Mohan Electronics*

*Customer Details:*
Name: ${formData.name}
Phone: ${formData.phone}

*Service Required:* ${formData.service}
*Message:* ${formData.message || 'No additional message'}

*Time:* ${new Date().toLocaleString()}`;

      const whatsappUrl = `https://wa.me/919370426583?text=${encodeURIComponent(whatsappMessage)}`;
      
      // Email via mailto
      const emailSubject = `Contact Form - ${formData.service} - ${formData.name}`;
      const emailBody = `Dear Mohan Electronics,

Contact Form Submission:

Customer Details:
- Name: ${formData.name}
- Phone: ${formData.phone}

Service Required: ${formData.service}
Message: ${formData.message || 'No additional message'}

Please contact me regarding this inquiry.

Best regards,
${formData.name}`;

      const emailUrl = `mailto:maheshsindam24@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

      // Open both WhatsApp and email
      window.open(whatsappUrl, '_blank');
      setTimeout(() => {
        window.open(emailUrl, '_blank');
      }, 1000);

      toast({
        title: "Message Sent!",
        description: "Your message has been sent via WhatsApp and email. We'll respond within 2 hours!",
      });

      // Reset form
      setFormData({
        name: "",
        phone: "",
        service: "",
        message: ""
      });
      
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: "9370426583",
      subtitle: "Available 24/7 for emergencies",
      action: "tel:9370426583"
    },
    {
      icon: MapPin,
      title: "Visit Store",
      details: "New Pacha Peth, Ashok Chowk",
      subtitle: "Solapur - 413006, Maharashtra",
      action: "https://maps.google.com/maps?q=New+Pacha+Peth,+Ashok+Chowk,+Solapur,+Maharashtra+413006"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon - Sat: 9:00 AM - 8:00 PM",
      subtitle: "Sunday: Emergency calls only",
      action: null
    },
    {
      icon: MessageSquare,
      title: "Quick Response",
      details: "Same day service available",
      subtitle: "Free consultation & quotes",
      action: null
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Get In <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to upgrade your electronics? Contact us for expert consultation and professional service
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card 
                  key={info.title}
                  className="group border-border/50 hover:border-primary/50 hover-lift transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <div className="bg-gradient-tech p-3 rounded-lg flex-shrink-0">
                        <info.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                          {info.title}
                        </h3>
                        <p className="text-sm font-medium mb-1">{info.details}</p>
                        <p className="text-xs text-muted-foreground">{info.subtitle}</p>
                        {info.action && (
                  <a 
                    href={info.action}
                    className="inline-block mt-2 text-xs text-primary hover:underline"
                    target={info.action.startsWith('tel:') ? '_self' : '_blank'}
                    rel={info.action.startsWith('tel:') ? '' : 'noopener noreferrer'}
                  >
                    {info.action.startsWith('tel:') ? 'Call Now' : 'Get Directions'}
                  </a>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Quick Actions</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Button 
                  className="w-full hover-lift glow-effect" 
                  size="lg"
                  onClick={() => window.open('tel:9370426583', '_self')}
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now
                </Button>
                <Button variant="secondary" className="w-full hover-lift" size="lg" onClick={() => setBuyFormOpen(true)}>
                  Get Quote
                </Button>
                <Button variant="outline" className="w-full hover-lift" size="lg" onClick={() => setBuyFormOpen(true)}>
                  Schedule Visit
                </Button>
              </div>
            </div>

            {/* Service Areas */}
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Service Areas</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <span>• Solapur City</span>
                  <span>• Ashok Chowk</span>
                  <span>• New Pacha Peth</span>
                  <span>• Surrounding Areas</span>
                </div>
                <p className="text-xs text-muted-foreground mt-3">
                  Emergency services available across Solapur district
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="border-border/50 hover:border-primary/50 transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Send className="h-5 w-5 text-primary" />
                <span>Send Message</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
            <form onSubmit={handleContactSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Name *</label>
                  <Input 
                    placeholder="Your full name" 
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="hover:border-primary/50 transition-colors" 
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Phone *</label>
                  <Input 
                    placeholder="Your phone number" 
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="hover:border-primary/50 transition-colors" 
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Service Required *</label>
                <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                  <SelectTrigger className="hover:border-primary/50 transition-colors">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="CCTV Installation">CCTV Installation</SelectItem>
                    <SelectItem value="LED TV Repair">LED TV Repair</SelectItem>
                    <SelectItem value="JIO Fiber Setup">JIO Fiber Setup</SelectItem>
                    <SelectItem value="Home Theatre">Home Theatre</SelectItem>
                    <SelectItem value="General Inquiry">General Inquiry</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Message</label>
                <Textarea 
                  placeholder="Describe your requirements..."
                  rows={4}
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  className="hover:border-primary/50 transition-colors"
                />
              </div>

              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full hover-lift glow-effect" 
                size="lg"
              >
                <Send className="mr-2 h-4 w-4" />
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
              
              <div className="text-center text-xs text-muted-foreground mt-4">
                We'll respond within 2 hours during business hours
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Emergency Contact */}
        <div className="mt-16 text-center">
          <div 
            className="inline-flex items-center space-x-4 bg-gradient-primary text-white rounded-full px-8 py-4 shadow-glow animate-glow cursor-pointer hover-lift"
            onClick={() => window.open('tel:9370426583', '_self')}
          >
            <Phone className="h-6 w-6" />
            <div>
              <div className="font-bold">24/7 Emergency Service</div>
              <div className="text-sm opacity-90">Call 9370426583 for urgent repairs</div>
            </div>
          </div>
        </div>

        <BuyForm 
          isOpen={buyFormOpen}
          onClose={() => setBuyFormOpen(false)}
          selectedService=""
        />
      </div>
    </section>
  );
};

export default Contact;