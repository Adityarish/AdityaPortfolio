import { Button } from "@/components/ui/button";
import { Download, ExternalLink, Mail } from "lucide-react";
import profilePlaceholder from "@/assets/profile-placeholder.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 gradient-primary opacity-10"></div>
      
      <div className="container mx-auto text-center relative z-10">
        {/* Profile Image */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <img 
              src={profilePlaceholder} 
              alt="Aditya Kumar" 
              className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-primary shadow-glow hover-scale"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-accent/20"></div>
          </div>
        </div>

        {/* Name and Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Aditya Kumar
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-2">
          MERN Developer | Problem Solver | Tech Enthusiast
        </p>
        
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Passionate full-stack developer crafting seamless digital experiences and exploring the frontiers of machine learning
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="gradient-primary hover-glow hover-scale font-semibold">
            <ExternalLink className="mr-2 h-5 w-5" />
            View Projects
          </Button>
          
          <Button variant="outline" size="lg" className="hover-scale border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <Download className="mr-2 h-5 w-5" />
            Download Resume
          </Button>
          
          <Button variant="secondary" size="lg" className="hover-scale">
            <Mail className="mr-2 h-5 w-5" />
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;