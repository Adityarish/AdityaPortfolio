import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Navbar from "@/components/navbar";
import FloatingContactButton from "@/components/floatingContact";
import Achievements from "@/components/achievements";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <FloatingContactButton />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Achievements />
      <Certifications />
      <Contact />
    </div>
  );
};

export default Index;
