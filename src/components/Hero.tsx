import { Button } from "@/components/ui/button";
import { ArrowDown, Linkedin, Mail, Github } from "lucide-react";
const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
        backgroundSize: '50px 50px'
      }} />
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-6xl mb-4 bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent hero-glow font-medium md:text-4xl"></h1>
          <h2 className="text-7xl md:text-9xl font-bold mb-12 bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 hero-glow"></h2>
          
          <p className="text-xl text-text-secondary mb-8 max-w-3xl mx-auto leading-relaxed">
            Passionate <span className="text-primary font-semibold">Full-Stack Developer</span> creating innovative web solutions with React, Node.js, and modern technologies
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button onClick={() => scrollToSection("experience")} size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-medium shadow-glow hover:shadow-2xl hover:scale-105 transition-all duration-300">
              Discover My Work
            </Button>
            <Button onClick={() => window.open("/ADITYA_VARMA_RESUME.pdf", "_blank")} variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg font-medium hover:scale-105 transition-all duration-300">
              Download Resume
            </Button>
          </div>
          
          <div className="flex justify-center gap-6 mb-12">
            <a href="https://github.com/Adityavarma-del" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-primary transition-all duration-300 hover:scale-125 transform">
              <Github size={32} />
            </a>
            <a href="http://linkedin.com/in/aditya-varma-729843319" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-primary transition-all duration-300 hover:scale-125 transform">
              <Linkedin size={32} />
            </a>
            <a href="mailto:adityavarma1498@gmail.com" className="text-text-muted hover:text-primary transition-all duration-300 hover:scale-125 transform">
              <Mail size={32} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 floating">
        <button onClick={() => scrollToSection("about")} className="text-text-muted hover:text-primary transition-colors duration-300 pulse-glow rounded-full p-2">
          <ArrowDown size={32} />
        </button>
      </div>
    </section>;
};
export default Hero;