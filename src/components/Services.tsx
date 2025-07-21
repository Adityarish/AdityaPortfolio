import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Server, Brain, Zap } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Full-stack Web Development",
      description: "End-to-end web application development using the MERN stack and Flask. From responsive frontend interfaces to robust backend APIs, I deliver complete digital solutions.",
      icon: Globe,
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Flask"],
      color: "text-primary"
    },
    {
      title: "API Development",
      description: "Design and develop RESTful APIs and microservices with proper authentication, documentation, and scalable architecture for modern applications.",
      icon: Server,
      technologies: ["REST APIs", "JWT", "Express.js", "Flask", "MongoDB"],
      color: "text-accent"
    },
    {
      title: "Basic ML Integrations",
      description: "Integrate machine learning capabilities into web applications, including recommendation systems, data analysis, and predictive features.",
      icon: Brain,
      technologies: ["Python", "Scikit-learn", "Pandas", "API Integration"],
      color: "text-primary"
    },
    {
      title: "Real-time App Development",
      description: "Build interactive real-time applications with live features like chat systems, notifications, and collaborative tools using modern technologies.",
      icon: Zap,
      technologies: ["Socket.io", "WebRTC", "React.js", "Node.js"],
      color: "text-accent"
    }
  ];

  return (
    <section id="services" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Services <span className="text-primary">💼</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive development services to bring your digital ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-card border border-primary/20 shadow-card hover-glow transition-smooth group">
              <CardHeader>
                <CardTitle className={`flex items-center gap-4 ${service.color} group-hover:scale-105 transition-smooth`}>
                  <div className="p-3 rounded-lg bg-primary/20">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">Core Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="text-xs px-3 py-1 bg-primary/20 text-primary rounded-full border border-primary/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Card className="bg-card border border-primary/20 shadow-card hover-glow transition-smooth max-w-2xl mx-auto">
            <CardContent className="py-8">
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Ready to Start Your Project?
              </h3>
              <p className="text-muted-foreground mb-6">
                Let's discuss how I can help bring your ideas to life with modern web technologies
              </p>
              <button className="gradient-primary px-8 py-3 rounded-lg font-semibold text-primary-foreground hover-glow hover-scale transition-smooth">
                Get In Touch
              </button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;