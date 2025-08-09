import { Button } from "@/components/ui/button";
import { Download, ExternalLink, Mail, ArrowDown, Linkedin, CodeXml, FileUser, Instagram } from "lucide-react"; // Added Instagram import
import profilePlaceholder from "@/assets/adityaofficial.png";
import profileAnimated from "@/assets/adityaAnimated.webp";
import { useRef, useState, useEffect } from "react";

// Component to animate a single number
const AnimatedNumber = ({ targetValue, duration = 1000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let startTimestamp = null;
          const animate = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = timestamp - startTimestamp;
            const currentCount = Math.min(Math.floor((progress / duration) * targetValue), targetValue);
            setCount(currentCount);

            if (progress < duration) {
              requestAnimationFrame(animate);
            }
          };
          requestAnimationFrame(animate);
          observer.disconnect(); // Stop observing once animation starts
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [targetValue, duration]);

  return <span ref={ref}>{count}</span>;
};


const Hero = () => {
  // Use state to manage which avatar is visible
  const [isAnimatedAvatarVisible, setIsAnimatedAvatarVisible] = useState(false);

  // Function to swap avatars
  const handleAvatarHover = () => {
    setIsAnimatedAvatarVisible(true);
  };

  const handleAvatarLeave = () => {
    setIsAnimatedAvatarVisible(false);
  };

  // Ensure initial display state is correct when component mounts
  useEffect(() => {
    const staticImg = document.getElementById('avatar-static');
    const animatedImg = document.getElementById('avatar-animated');
    if (staticImg && animatedImg) {
      staticImg.style.display = isAnimatedAvatarVisible ? 'none' : 'block';
      animatedImg.style.display = isAnimatedAvatarVisible ? 'block' : 'none';
    }
  }, [isAnimatedAvatarVisible]);


  return (
    <section className="hero min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden bg-background">
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

          {/* CTA Buttons - Updated for Download CV */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://drive.google.com/file/d/1JKmt-Cd3ek4Dei_1lD0z3ekcC4XfB-64/view" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="gradient-primary hover-glow hover-scale font-semibold text-primary-foreground shadow-lg">
                Download CV
              </Button>
            </a>
        
            <Button variant="ghost" size="lg" className="hover-scale text-primary border-2 border-transparent hover:border-primary" onClick={() => {
                  const aboutsection = document.getElementById('about');
                  if (aboutsection) {
                    aboutsection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}>
              <ArrowDown className="mr-2 h-5 w-5" />
              Scroll Down 
            </Button>
          </div>

          {/* Social Links - Added Instagram */}
          <div className="flex gap-4 pt-4">
            <Button variant="outline" size="sm" className="border-primary/30 hover:bg-primary hover:text-primary-foreground">
            <a href="https://www.linkedin.com/in/aditya-kumar-6a436535b/" target="_blank" rel="noopener noreferrer"> {/* Added rel */}
              <Linkedin className="h-4 w-4" />
            </a>
            </Button>
            <Button variant="outline" size="sm" className="border-primary/30 hover:bg-primary hover:text-primary-foreground">
            <a href="https://www.instagram.com/__adit_18_/" target="_blank" rel="noopener noreferrer"> {/* Added rel */}
              <Instagram className="h-4 w-4" />
            </a>
            </Button>
            <Button variant="outline" size="sm" className="border-primary/30 hover:bg-primary hover:text-primary-foreground" onClick={() => {
              window.location.href = "mailto:seemeadit21824@gmail.com";
            }}>
              <Mail className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm" className="border-primary/30 hover:bg-primary hover:text-primary-foreground">
            <a href="https://leetcode.com/u/seemeadit21824/" target="_blank" rel="noopener noreferrer"> {/* Added rel */}
              <CodeXml className="h-4 w-4" />
            </a>
            </Button>
          </div>
        </div>

        {/* Right Content - Profile & Stats */}
        <div className="flex flex-col items-center space-y-8">
          {/* Profile Image with decorative circle */}
          <div className="relative" onMouseEnter={handleAvatarHover} onMouseLeave={handleAvatarLeave}> {/* Changed to onMouseEnter/onMouseLeave */}
            <div className="orange-circle w-80 h-80 rounded-full overflow-hidden border-8 border-primary/20 shadow-card hover-scale">
              <img 
                id="avatar-static"
                draggable={false}
                src={profilePlaceholder} 
                alt="Aditya Kumar" 
                className="w-full h-full object-cover"
                style={{ display: isAnimatedAvatarVisible ? 'none' : 'block' }} // Controlled by state
              />

            <img 
              id="avatar-animated"
              draggable={false}
              src={profileAnimated}
              alt="Animated Aditya"
              className="w-full h-full object-cover"
              style={{ display: isAnimatedAvatarVisible ? 'block' : 'none' }} // Controlled by state
            />
            </div>
            {/* Decorative elements around the circle */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-accent/30 rounded-full"></div>
            <div className="absolute top-1/2 -left-8 w-6 h-6 bg-primary/50 rounded-full"></div>
          </div>

          {/* Stats - Now with AnimatedNumber component */}
          <div className="stats-container grid grid-cols-3 gap-8 w-full max-w-md mb-24 md:mb-32 lg:mb-40"> {/* Increased margin-bottom */}
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">
                <AnimatedNumber targetValue={2} />+ {/* Using AnimatedNumber */}
              </div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">
                <AnimatedNumber targetValue={100} />% {/* Using AnimatedNumber */}
              </div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">
                <AnimatedNumber targetValue={5} />+ {/* Using AnimatedNumber */}
              </div>
              <div className="text-sm text-muted-foreground">Projects Done</div>
            </div>
          </div>
        </div>
      </div>

      {/* Company logos section - Updated text */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-4xl px-4">
        <div className="gradient-primary h-auto py-3.5 rounded-full flex items-center justify-center shadow-glow hover-glow hover-scale transition-smooth">
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-primary-foreground font-semibold text-sm sm:text-base hover-glow hover-scale transition-smooth ">
            <span className="hidden sm:inline">•</span>
            <span>MERN Stack</span>
            <span className="hidden sm:inline">•</span>
            <span>Python</span>
            <span className="hidden sm:inline">•</span>
            <span>Flask</span>
            <span className="hidden sm:inline">•</span>
            <span>Git & GitHub</span>
            <span className="hidden sm:inline">•</span>
            <span>DSA</span>
          </div>
        </div>
      </div>
       
    </section>
  );
};

export default Hero;
