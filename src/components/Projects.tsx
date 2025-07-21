import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, MessageCircle, Bot } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Chatify",
      subtitle: "Real-time Chat Application",
      description: "A modern, responsive chat application built with the MERN stack featuring real-time messaging, JWT-based authentication, and a mobile-first UI design. Users can create accounts, join chat rooms, and communicate seamlessly across devices.",
      icon: MessageCircle,
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Socket.io", "TailwindCSS", "JWT"],
      features: [
        "Real-time messaging with Socket.io",
        "JWT-based secure authentication", 
        "Mobile-responsive design",
        "User online/offline status",
        "Message history persistence"
      ],
      liveDemo: "#",
      github: "#",
      color: "text-primary"
    },
    {
      title: "Movie Recommendation Bot",
      subtitle: "AI-Powered Content Discovery",
      description: "An intelligent movie recommendation system built with Python and Scikit-learn using K-Nearest Neighbors algorithm. The bot provides personalized movie suggestions based on user preferences and viewing history through advanced content filtering.",
      icon: Bot,
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "KNN Algorithm", "Content Filtering"],
      features: [
        "Personalized movie recommendations",
        "Content-based filtering algorithm",
        "User preference learning",
        "Movie similarity analysis",
        "Interactive recommendation interface"
      ],
      liveDemo: "#",
      github: "#",
      color: "text-accent"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical expertise through real-world applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="gradient-card border-primary/20 shadow-card hover-glow transition-smooth group">
              <CardHeader>
                <CardTitle className={`flex items-center gap-3 ${project.color} group-hover:scale-105 transition-smooth`}>
                  <project.icon className="h-7 w-7" />
                  <div>
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p className="text-sm text-muted-foreground font-normal">{project.subtitle}</p>
                  </div>
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Key Features */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="secondary" 
                        className="bg-primary/20 text-primary border-primary/30 hover-scale"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button className="gradient-primary hover-glow hover-scale flex-1">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground hover-scale">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;