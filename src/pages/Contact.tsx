import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  MessageSquare, 
  Phone, 
  MapPin,
  Send,
  Clock,
  Users,
  HelpCircle,
  Lightbulb
} from "lucide-react";

const Contact = () => {
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    category: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (in real app, this would go to Firestore via Supabase)
    try {
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API call
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your feedback. We'll get back to you soon.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        category: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleAuthClick = () => {
    console.log("Auth clicked");
  };

  const handleLogout = () => {
    setUser(null);
  };

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      description: "Send us an email and we'll respond within 24 hours",
      contact: "team@interviewprep.com",
      action: "Send Email"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Join Discord",
      description: "Chat with our community and get instant help",
      contact: "discord.gg/interviewprep",
      action: "Join Chat"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "WhatsApp Group",
      description: "Connect with fellow students preparing for interviews",
      contact: "+91 98765 43210",
      action: "Join Group"
    }
  ];

  const faqItems = [
    {
      icon: <HelpCircle className="w-5 h-5 text-accent-orange" />,
      question: "How can I share my interview experience?",
      answer: "Simply create an account and use the 'Share Experience' button on any page. Our admin team will review and publish it."
    },
    {
      icon: <Users className="w-5 h-5 text-accent-green" />,
      question: "Is this platform only for CBIT students?",
      answer: "While we started at CBIT, we welcome students from all colleges and universities to share their experiences."
    },
    {
      icon: <Lightbulb className="w-5 h-5 text-accent-purple" />,
      question: "Can I suggest new features?",
      answer: "Absolutely! Use the feedback form below to suggest new features or improvements. We value community input."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar user={user} onAuthClick={handleAuthClick} onLogout={handleLogout} />
      
      <main className="pt-20">
        {/* Header Section */}
        <section className="py-16 bg-gradient-to-b from-muted/50 to-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Have questions, feedback, or want to contribute? We'd love to hear from you. 
              Your input helps us make this platform better for everyone.
            </p>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {contactMethods.map((method, index) => (
                <Card key={index} className="p-6 text-center hover-lift border-0 shadow-medium">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 text-primary">
                    {method.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{method.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {method.description}
                  </p>
                  <div className="text-sm text-primary font-medium mb-4">{method.contact}</div>
                  <Button variant="outline" size="sm" className="hover:bg-primary/5">
                    {method.action}
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-12 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Send Us a Message
              </h2>
              <p className="text-lg text-muted-foreground">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>

            <Card className="p-8 border-0 shadow-medium">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="Enter your email address"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="category">Category *</Label>
                    <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="feedback">General Feedback</SelectItem>
                        <SelectItem value="bug">Report Bug</SelectItem>
                        <SelectItem value="feature">Feature Request</SelectItem>
                        <SelectItem value="content">Content Related</SelectItem>
                        <SelectItem value="partnership">Partnership</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      placeholder="Brief subject of your message"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Tell us what's on your mind..."
                    rows={6}
                    required
                  />
                  <div className="text-sm text-muted-foreground">
                    Minimum 10 characters. Be as detailed as possible.
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>We typically respond within 24 hours</span>
                  </div>
                  
                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="lg"
                    disabled={isSubmitting}
                    className="hover-lift"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </Card>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground">
                Quick answers to common questions. Don't see yours? Feel free to ask!
              </p>
            </div>

            <div className="space-y-6">
              {faqItems.map((item, index) => (
                <Card key={index} className="p-6 border-0 shadow-medium">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {item.question}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-muted-foreground mb-4">
                Still have questions? We're here to help.
              </p>
              <Button variant="outline" size="lg" className="hover-lift">
                <Mail className="w-4 h-4 mr-2" />
                Contact Support
              </Button>
            </div>
          </div>
        </section>

        {/* Location & Office Hours */}
        <section className="py-12 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-8 border-0 shadow-medium">
                <div className="flex items-center space-x-3 mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold text-foreground">Our Location</h3>
                </div>
                <div className="text-muted-foreground leading-relaxed">
                  <p className="mb-2">CBIT Campus</p>
                  <p className="mb-2">Gandipet, Hyderabad</p>
                  <p className="mb-4">Telangana, India - 500075</p>
                  <p className="text-sm">
                    We're a student-driven initiative based at CBIT, working to help 
                    students across all colleges and universities.
                  </p>
                </div>
              </Card>

              <Card className="p-8 border-0 shadow-medium">
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold text-foreground">Response Times</h3>
                </div>
                <div className="space-y-3 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Email Support</span>
                    <span className="font-medium">Within 24 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Discord/Chat</span>
                    <span className="font-medium">Usually instant</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Feature Requests</span>
                    <span className="font-medium">1-2 weeks</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Content Review</span>
                    <span className="font-medium">2-3 days</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;