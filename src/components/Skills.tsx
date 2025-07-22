import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Globe, Database, Wrench, Brain, Monitor } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["JavaScript", "Python", "C++", "C", "TypeScript", "Java"],
      color: "text-primary"
    },
    {
      title: "Frontend Technologies",
      icon: Globe,
      skills: ["React.js", "HTML5", "CSS3", "TailwindCSS", "Bootstrap", "Responsive Design"],
      color: "text-accent"
    },
    {
      title: "Backend Technologies",
      icon: Database,
      skills: ["Node.js", "Express.js", "Flask", "RESTful APIs", "Socket.io", "JWT"],
      color: "text-primary"
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["MongoDB", "MySQL", "PostgreSQL", "Redis"],
      color: "text-accent"
    },
    {
      title: "Developer Tools",
      icon: Wrench,
      skills: ["Git", "GitHub", "VS Code", "Postman", "npm", "Vite"],
      color: "text-primary"
    },
    {
      title: "Operating Systems",
      icon: Monitor,
      skills: ["Windows", "Linux", "macOS"],
      color: "text-accent"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Technical Skills <span className="text-primary">⚡</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications from frontend to backend
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-card border border-primary/20 shadow-card hover-glow transition-smooth group">
              <CardHeader>
                <CardTitle className={`flex items-center gap-3 ${category.color} group-hover:scale-105 transition-smooth`}>
                  <category.icon className="h-6 w-6" />
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="bg-primary/20 text-primary border-primary/30 hover:bg-primary hover:text-primary-foreground transition-smooth hover-scale"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Operating Systems */}
        <div className="mt-8">
          <Card className="bg-card border border-primary/20 shadow-card hover-glow transition-smooth">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-primary justify-center">
                <Brain className="h-6 w-6" />
                ML & Data Tools
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 justify-center">
                {["Scikit-learn", "Pandas", "NumPy", "Jupyter", "Matplotlib"].map((os, index) => (
                  <Badge 
                    key={index} 
                    variant="outline" 
                    className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-smooth hover-scale"
                  >
                    {os}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
