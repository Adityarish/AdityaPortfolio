import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Krishify",
      subtitle: "Connecting farmers and empowering agriculture",
      description: "Krishify is a modern, community-driven mobile application built with Flutter and Firebase, designed to connect farmers and agri-enthusiasts. The platform enables users to share posts, buy and sell agricultural products, and access real-time crop and weather updates. With a clean, responsive interface and secure authentication, Krishify ensures a seamless user experience across devices.",
      icon: ExternalLink,
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "n8n", "TailwindCSS", "JWT"],
      features: [
        "Community platform for farmers and agri-enthusiasts",
        "Crop advisory and weather updates in real-time",
        "Buy and sell agricultural products seamlessly",
        "User-friendly interface built with Flutter",
        "Image and post sharing",
        "Personalized user profiles and activity feed",
        "Push notifications for updates and interactions"
      ],
      liveDemo: "https://krishify-mu.vercel.app/",
      github: "https://github.com/ImAust1n/Krishify-Frontend",
      color: "text-primary"
    },
    {
      title: "Movie Recommendation Bot",
      subtitle: "AI-Powered Content Discovery",
      description: "An intelligent movie recommendation system built with Python and Scikit-learn using K-Nearest Neighbors algorithm. The bot provides personalized movie suggestions based on user preferences and viewing history through advanced content filtering.",
      icon: ExternalLink,
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "KNN Algorithm", "Content Filtering"],
      features: [
        "Personalized movie recommendations",
        "Content-based filtering algorithm",
        "User preference learning",
        "Movie similarity analysis",
        "Interactive recommendation interface"
      ],
      liveDemo: <a href="#" target="_blank" rel="noopener noreferrer">Live Demo</a>,
      github: <a href="#" target="_blank" rel="noopener noreferrer">Code</a>,
      color: "text-accent"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Projects <span className="text-primary"></span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical expertise through real-world applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-card border border-primary/20 shadow-card hover-glow transition-smooth group">
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
                  {project.liveDemo && <a href={project.liveDemo} target="_blank" rel="noopener noreferrer"><Button size="lg" className="gradient-primary hover-glow hover-scale flex-1">
                    Live Demo
                  </Button></a>}
                  {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer"><Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground hover-scale">
                    Code
                  </Button></a>}
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