import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Code, Brain } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            About Me <span className="text-primary">✨</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Driven by curiosity and fueled by caffeine, I'm on a journey to bridge the gap between 
            innovative ideas and real-world solutions through code.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Bio Section */}
          <div className="space-y-6">
            <Card className="bg-card border border-primary/20 shadow-card hover-glow transition-smooth">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-primary">
                  <Code className="h-6 w-6" />
                  My Journey
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  As a passionate MERN Stack Developer, I thrive on transforming complex problems into 
                  elegant solutions. My journey in technology began with a fascination for how code can 
                  create meaningful impact in people's lives. I'm constantly exploring new technologies 
                  and pushing the boundaries of what's possible in web development.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border border-primary/20 shadow-card hover-glow transition-smooth">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-accent">
                  <Brain className="h-6 w-6" />
                  Future Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Beyond full-stack development, I'm venturing into the exciting world of machine learning. 
                  I believe the fusion of web technologies and AI will shape the future of digital experiences, 
                  and I'm committed to being at the forefront of this revolution.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Education Section */}
          <div>
            <Card className="bg-card border border-primary/20 shadow-card hover-glow transition-smooth">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-primary">
                  <GraduationCap className="h-6 w-6" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="text-xl font-semibold text-foreground">
                    Bachelor of Engineering
                  </h3>
                  <p className="text-primary font-medium">
                    Computer Science (Data Science)
                  </p>
                  <p className="text-muted-foreground">
                    New Horizon College of Engineering
                  </p>
                  <p className="text-sm text-accent">
                    Expected: August 2027
                  </p>
                </div>
                
                <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                  <h4 className="font-semibold text-primary mb-2">Academic Focus</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Data Structures & Algorithms</li>
                    <li>• Web Development Technologies</li>
                    <li>• Machine Learning Fundamentals</li>
                    <li>• Database Management Systems</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;