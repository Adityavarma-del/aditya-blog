import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    try {
      // Send email using mailto with formatted content
      const subject = formData.subject || "Portfolio Contact Form";
      const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
      const mailtoUrl = `mailto:adityavarma1498@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      window.location.href = mailtoUrl;
      
      toast({
        title: "Message Sent!",
        description: "Your email client will open to send the message.",
      });

      // Reset form
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading">LET'S CONNECT</h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto text-center">
            Say hello at <a href="mailto:adityavarma1498@gmail.com" className="text-primary hover:underline">adityavarma1498@gmail.com</a>.
            <br />For enquiries, reach my response.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">Get In Touch</h3>
              <p className="text-text-secondary leading-relaxed mb-8">
                I'm always open to discussing new opportunities, interesting projects, 
                or just having a chat about technology and development. Don't hesitate to reach out!
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-card rounded-full flex items-center justify-center border border-border">
                  <Mail className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-text-muted text-sm">Email</p>
                  <a href="mailto:adityavarma1498@gmail.com" className="text-text-primary hover:text-primary transition-colors">
                    adityavarma1498@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-card rounded-full flex items-center justify-center border border-border">
                  <Phone className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-text-muted text-sm">Phone</p>
                  <a href="tel:+917013446701" className="text-text-primary hover:text-primary transition-colors">
                    +91 70134 46701
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-card rounded-full flex items-center justify-center border border-border">
                  <MapPin className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-text-muted text-sm">Location</p>
                  <p className="text-text-primary">Hyderabad, India</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <a 
                href="http://linkedin.com/in/aditya-varma-729843319" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-card rounded-full flex items-center justify-center border border-border hover:border-primary hover:shadow-glow transition-all duration-300"
              >
                <Linkedin className="text-text-muted hover:text-primary" size={20} />
              </a>
              <a 
                href="https://github.com/adityavarma1498" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-card rounded-full flex items-center justify-center border border-border hover:border-primary hover:shadow-glow transition-all duration-300"
              >
                <Github className="text-text-muted hover:text-primary" size={20} />
              </a>
              <a 
                href="mailto:adityavarma1498@gmail.com"
                className="w-12 h-12 bg-gradient-card rounded-full flex items-center justify-center border border-border hover:border-primary hover:shadow-glow transition-all duration-300"
              >
                <Mail className="text-text-muted hover:text-primary" size={20} />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-card p-8 rounded-xl border border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-background border-border focus:border-primary"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-background border-border focus:border-primary"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-text-primary mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  className="bg-background border-border focus:border-primary"
                  placeholder="Project Discussion"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-background border-border focus:border-primary min-h-[120px]"
                  placeholder="Tell me about your project or just say hello!"
                  required
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3 shadow-glow"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>

        <div className="text-center mt-16 pt-8 border-t border-border">
          <p className="text-text-muted">
            © 2024 Aditya Varma. Built with React & TypeScript. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;