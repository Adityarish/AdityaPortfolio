import { Button } from "@/components/ui/button";
import { Download, ExternalLink, Mail, ArrowDown } from "lucide-react";
import profilePlaceholder from "@/assets/profile-placeholder.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden bg-background">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-10 w-32 h-32 decorative-lines rounded-full"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-primary/10 rounded-full"></div>
      
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="text-left space-y-6">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              Hello, I'm{" "}
              <span className="text-primary">Aditya</span> a{" "}
              <span className="text-primary">MERN Developer</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              A dedicated full-stack developer with a passion for creating 
              digital experiences that not only look beautiful but also 
              function seamlessly.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="gradient-primary hover-glow hover-scale font-semibold text-primary-foreground shadow-lg">
              Get Started
            </Button>
            
            <Button variant="ghost" size="lg" className="hover-scale text-primary border-2 border-transparent hover:border-primary">
              <ArrowDown className="mr-2 h-5 w-5" />
              Scroll Down
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 pt-4">
            <Button variant="outline" size="sm" className="border-primary/30 hover:bg-primary hover:text-primary-foreground">
              <ExternalLink className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm" className="border-primary/30 hover:bg-primary hover:text-primary-foreground">
              <Download className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm" className="border-primary/30 hover:bg-primary hover:text-primary-foreground">
              <Mail className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Right Content - Profile & Stats */}
        <div className="flex flex-col items-center space-y-8">
          {/* Profile Image with decorative circle */}
          <div className="relative">
            <div className="orange-circle w-80 h-80 rounded-full overflow-hidden border-8 border-primary/20 shadow-card hover-scale">
              <img 
                src={profilePlaceholder} 
                alt="Aditya Kumar" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Decorative elements around the circle */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-accent/30 rounded-full"></div>
            <div className="absolute top-1/2 -left-8 w-6 h-6 bg-primary/50 rounded-full"></div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 w-full max-w-md">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">2+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">10+</div>
              <div className="text-sm text-muted-foreground">Projects Done</div>
            </div>
          </div>
        </div>
      </div>

      {/* Company logos section */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
        <div className="gradient-primary h-20 rounded-full flex items-center justify-center shadow-glow">
          <div className="flex items-center justify-center gap-8 text-primary-foreground font-semibold">
            <span>MongoDB</span>
            <span>•</span>
            <span>Express</span>
            <span>•</span>
            <span>React</span>
            <span>•</span>
            <span>Node.js</span>
            <span>•</span>
            <span>Python</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;