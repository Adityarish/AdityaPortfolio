import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      title: "2nd Position in 'Code Battle - 2k25' Hackathon",
      description: "Secured 2nd position in the 24-Hour National Level Hackathon - 'Code Battle - 2k25', organized by VDIT IEEE Student Branch in collaboration with IEEE Mangalore Subsection. The competition recognized technical expertise, innovation, and problem-solving in the theme of Disaster Response & Management.",
      link: "https://drive.google.com/file/d/1aFeawCwMu0MhiFO25CFmqxAMxrjsllaL/view?usp=sharing",
      date: "March 2025",
      color: "text-primary",
    },
    {
      title: "3rd Place in Code Breaker Challenge 1.0",
      description: "Secured 3rd place in Code Breaker Challenge 1.0, a 24-hour national-level hackathon organized by the Department of AI & ML, Global Academy of Technology. The award recognizes outstanding creativity, technical expertise, and impactful contributions.",
      link: "https://drive.google.com/file/d/1qBhFolQYDGaKOULN02jH10jo9yNReih6/view?usp=sharing",
      date: "May 2025",
      color: "text-primary",
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
                <div className="flex flex-row items-center gap-2">
                  <ExternalLink className="h-6 w-6" />
                  <a href={achievement.link} target="_blank" rel="noopener noreferrer">View Certificate</a>
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