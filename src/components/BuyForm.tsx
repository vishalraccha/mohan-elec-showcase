import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { X, ShoppingCart, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface BuyFormProps {
  isOpen: boolean;
  onClose: () => void;
  selectedService?: string;
}

const BuyForm = ({ isOpen, onClose, selectedService }: BuyFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: selectedService || "",
    address: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      toast({
        title: "Error",
        description: "Please enter your name",
        variant: "destructive",
      });
      return false;
    }
    if (!formData.phone.trim() || !/^\d{10}$/.test(formData.phone.replace(/\s/g, ""))) {
      toast({
        title: "Error", 
        description: "Please enter a valid 10-digit phone number",
        variant: "destructive",
      });
      return false;
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address", 
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
    if (!formData.address.trim()) {
      toast({
        title: "Error",
        description: "Please enter your address",
        variant: "destructive",
      });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // WhatsApp message
      const whatsappMessage = `*New Purchase Request - Mohan Electronics*

*Customer Details:*
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}

*Service Required:* ${formData.service}
*Address:* ${formData.address}

*Message:* ${formData.message || 'No additional message'}

*Time:* ${new Date().toLocaleString()}`;

      const whatsappUrl = `https://wa.me/919370426583?text=${encodeURIComponent(whatsappMessage)}`;
      
      // Email via mailto
      const emailSubject = `Purchase Request - ${formData.service} - ${formData.name}`;
      const emailBody = `Dear Mohan Electronics,

I would like to purchase/book the following service:

Customer Details:
- Name: ${formData.name}
- Phone: ${formData.phone}  
- Email: ${formData.email}
- Address: ${formData.address}

Service Required: ${formData.service}

Additional Message: ${formData.message || 'No additional message'}

Please contact me to proceed with this request.

Best regards,
${formData.name}`;

      const emailUrl = `mailto:maheshsindam24@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

      // Open both WhatsApp and email
      window.open(whatsappUrl, '_blank');
      setTimeout(() => {
        window.open(emailUrl, '_blank');
      }, 1000);

      toast({
        title: "Request Sent!",
        description: "Your purchase request has been sent via WhatsApp and email. We'll contact you soon!",
      });

      // Reset form
      setFormData({
        name: "",
        phone: "",
        email: "",
        service: selectedService || "",
        address: "",
        message: ""
      });
      
      onClose();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <ShoppingCart className="h-5 w-5 text-primary" />
            <span>Purchase Request Form</span>
          </DialogTitle>
        </DialogHeader>

        <Card className="border-0 shadow-none">
          <CardContent className="p-0">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Full Name *</label>
                  <Input
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="hover:border-primary/50 transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Phone Number *</label>
                  <Input
                    placeholder="Enter 10-digit phone number"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="hover:border-primary/50 transition-colors"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Email Address *</label>
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="hover:border-primary/50 transition-colors"
                  required
                />
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
                    <SelectItem value="LED TV Purchase">LED TV Purchase</SelectItem>
                    <SelectItem value="JIO AIR Fiber Installation">JIO AIR Fiber Installation</SelectItem>
                    <SelectItem value="Home Theatre Setup">Home Theatre Setup</SelectItem>
                    <SelectItem value="Other Electronics">Other Electronics</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Complete Address *</label>
                <Textarea
                  placeholder="Enter your complete address for service/delivery"
                  value={formData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  rows={3}
                  className="hover:border-primary/50 transition-colors"
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Additional Message</label>
                <Textarea
                  placeholder="Any specific requirements or questions..."
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  rows={3}
                  className="hover:border-primary/50 transition-colors"
                />
              </div>

              <div className="flex gap-4 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={onClose}
                  className="flex-1"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 hover-lift glow-effect"
                >
                  <Send className="mr-2 h-4 w-4" />
                  {isSubmitting ? "Sending..." : "Send Request"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
};

export default BuyForm;