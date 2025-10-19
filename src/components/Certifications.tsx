import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Code, BookOpen } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Python Pro Bootcamp",
      provider: "Udemy",
      description: "Comprehensive Python programming course covering advanced concepts, object-oriented programming, web development with Flask, and data manipulation with pandas.",
      icon: Code,
      skills: ["Python Programming", "Flask Web Development", "Data Structures", "OOP Concepts", "API Development"],
      color: "text-accent",
      status: <a href="https://www.udemy.com/certificate/UC-df2635d0-d64b-4b34-b25e-9b796abb8ba7/" target="_blank" rel="noopener noreferrer">Link</a>
    },
    {
      title: "Full-Stack Web Dev Bootcamp",
      provider: "Udemy", 
      description: "Hands-on MERN stack bootcamp: develop and launch real-world web applications. Master React, Node.js, Express.js, and MongoDB.",
      icon: BookOpen,
      skills: ["MERN Stack","JavaScript", "Git & GitHub", "Version Control", "API Development", "Postman"],
      color: "text-accent",
      status: <a href="https://www.udemy.com/certificate/UC-e399b4aa-15e3-4b97-a0c7-0b7b406d9734/" target="_blank" rel="noopener noreferrer">Link</a>
    },
    {
      title: "Mastering DSA in C/C++",
      provider: "Udemy", 
      description: "In-depth data structures and algorithms course focusing on C/C++ implementations, problem-solving techniques, and optimization strategies for competitive programming.",
      icon: BookOpen,
      skills: ["Data Structures Algorithms", "C++ Programming", "Problem Solving", "Optimization"],
      color: "text-accent",
      status: <a href="https://www.udemy.com/certificate/UC-220433e3-088c-4b21-b112-ff668e38cf8d/" target="_blank" rel="noopener noreferrer">Link</a>
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Course Certifications <span className="text-accent">🏆</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and skill development through industry-recognized courses
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-8xl mx-auto">
          {certifications.map((cert, index) => (
            <Card key={index} className="bg-card border border-primary/20 shadow-card hover-glow transition-smooth group">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className={`flex items-center gap-3 ${cert.color} group-hover:scale-105 transition-smooth`}>
                    <div className="p-3 rounded-lg bg-primary/20">
                      <cert.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{cert.title}</h3>
                      <p className="text-sm text-muted-foreground font-normal">{cert.provider}</p>
                    </div>
                  </CardTitle>
                  <Badge 
                    variant="secondary" 
                    className="bg-green-500/20 text-green-400 border-green-500/30"
                  >
                    {cert.status}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {cert.description}
                </p>

                <div>
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Award className="h-4 w-4 text-primary" />
                    Skills Acquired:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary" 
                        className="bg-primary/20 text-primary border-primary/30 hover-scale"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Learning Philosophy */}
        <div className="mt-16">
          <Card className="bg-card border border-primary/20 shadow-card hover-glow transition-smooth max-w-3xl mx-auto">
            <CardContent className="py-8 text-center">
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Commitment to Learning
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I believe in continuous growth and staying updated with the latest industry trends. 
                These certifications represent my dedication to mastering both fundamental concepts 
                and cutting-edge technologies in software development.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Certifications;