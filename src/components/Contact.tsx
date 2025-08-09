import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Send, Download } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";


const Contact = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: MapPin,
      label: "Location",
      value: <a href="https://maps.app.goo.gl/HDENthPmjSbZZksu9" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Bengaluru,  IN</a>,
      color: "text-primary"
    },
    {
      icon: Phone,
      label: "Phone",
      value: <a href="tel:+917061939341" className="text-accent hover:underline">+91 7061939341</a>,
      color: "text-accent"
    },
    {
      icon: Mail,
      label: "Email",
      value: <a href="mailto:seemeadit21824@gmail.com" className="text-primary hover:underline">seemeadit21824@gmail.com</a>,
      color: "text-primary"
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields before submitting.",
        variant: "destructive"
      });
      return;
    }
    setIsLoading(true);
    try{
      await emailjs.send(
      'service_f2qzi4f',
      'template_bo8jc71',
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      '0Lio439g4UDXHKWD0'
    );
    
    toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
    }catch(error){
      console.error("Error sending email:", error);
      toast({
        title: "Error Sending Message",
        description: "Please try again later.",
        variant: "destructive"
      });
    }finally{
      setIsLoading(false);
    }

    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Get In Touch <span className="text-primary"></span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate? Let's discuss your project and create something amazing together
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm always open to discussing new opportunities, interesting projects, or just having 
                a conversation about technology. Feel free to reach out through any of the channels below.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="bg-card border border-primary/20 shadow-card hover-glow transition-smooth group">
                  <CardContent className="py-4">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-lg bg-primary/20 group-hover:scale-110 transition-smooth">
                        <info.icon className={`h-5 w-5 ${info.color}`} />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        <p className="font-semibold text-foreground">{info.value}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Resume Download */}
            <Card className="bg-card border border-primary/20 shadow-card hover-glow transition-smooth">
              <CardContent className="py-6">
                <div className="text-center">
                  <h4 className="font-semibold text-foreground mb-2">Download My Resume</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Get a detailed overview of my experience and skills
                  </p>
                  <Button className="gradient-primary hover-glow hover-scale" onClick={() => window.open('https://drive.google.com/file/d/1JKmt-Cd3ek4Dei_1lD0z3ekcC4XfB-64/view', '_blank')}>
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-card border border-primary/20 shadow-card hover-glow transition-smooth">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-background/50 border-primary/30 focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-background/50 border-primary/30 focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="bg-background/50 border-primary/30 focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or just say hello..."
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-background/50 border-primary/30 focus:border-primary resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full gradient-primary hover-glow hover-scale font-semibold"
                  disabled={isLoading}
                >
                  <Send className="mr-2 h-4 w-4" id="send"/>
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;