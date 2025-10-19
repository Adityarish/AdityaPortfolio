import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      title: "Top 10 in Google Cloud Challenge",
      description: "Awarded for achieving the top 10 in the Google Cloud Challenge, a coding competition that tests problem-solving skills and knowledge of cloud computing concepts.",
      technologies: ["Google Cloud Platform", "Cloud Computing"],
      date: "June 2023",
      color: "text-primary"
    },
    {
      title: "Certified AWS Developer Associate",
      description: "Certified in AWS Developer Associate, a recognized credential that demonstrates proficiency in building and deploying scalable and secure applications on Amazon Web Services.",
      technologies: ["AWS", "Cloud Computing"],
      date: "April 2023",
      color: "text-accent"
    }
  ];

  return (
    <section id="achievements" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Achievements <span className="text-primary">🥇</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of notable achievements and certifications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <Card key={index} className="bg-card border border-primary/20 shadow-card hover-glow transition-smooth group">
              <CardHeader>
                <CardTitle className={`flex items-center gap-3 ${achievement.color} group-hover:scale-105 transition-smooth`}>
                  <h3 className="text-xl font-bold">{achievement.title}</h3>
                  <p className="text-sm text-muted-foreground font-normal">{achievement.date}</p>
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {achievement.description}
                </p>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {achievement.technologies.map((tech, techIndex) => (
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

              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;