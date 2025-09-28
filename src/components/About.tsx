import adityaRealPhoto from "@/assets/aditya-real-photo.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-section-bg">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h2 className="section-heading">ABOUT ME</h2>
            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              I am a passionate Computer Science student specializing in AI & ML at Malla Reddy College 
              Of Engineering And Technology, Hyderabad. Currently pursuing my Bachelor of Technology 
              with an expected graduation in June 2025.
            </p>
            
            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              With hands-on experience in Salesforce development, machine learning, and web technologies, 
              I have successfully completed multiple projects including drowsiness detection systems, 
              stock price prediction models, and blockchain frameworks for  content.
            </p>
            
            <p className="text-lg text-text-secondary mb-8 leading-relaxed">
              I hold professional certifications including Oracle Cloud Infrastructure 2024 Generative AI 
              Certified Professional and multiple Salesforce Super Badges, demonstrating my commitment 
              to continuous learning and excellence in technology.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gradient-card p-4 rounded-lg border border-border">
                <h4 className="text-primary font-semibold mb-2">Education</h4>
                <p className="text-text-muted text-sm">B.Tech CSE (AI&ML) - GPA: 7.14/10</p>
                <p className="text-text-muted text-xs">Expected Jun 2025</p>
              </div>
              <div className="bg-gradient-card p-4 rounded-lg border border-border">
                <h4 className="text-primary font-semibold mb-2">Specialization</h4>
                <p className="text-text-muted text-sm">AI & Machine Learning, Web Development</p>
              </div>
              <div className="bg-gradient-card p-4 rounded-lg border border-border">
                <h4 className="text-primary font-semibold mb-2">Certifications</h4>
                <p className="text-text-muted text-sm">Oracle Cloud AI, Salesforce Super Badges</p>
              </div>
              <div className="bg-gradient-card p-4 rounded-lg border border-border">
                <h4 className="text-primary font-semibold mb-2">Languages</h4>
                <p className="text-text-muted text-sm">English, Telugu, Hindi</p>
              </div>
            </div>
          </div>
          
          <div className="animate-bounce-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-2xl opacity-20"></div>
              <img 
                src={adityaRealPhoto} 
                alt="Aditya Varma - Computer Science Student specializing in AI & ML" 
                className="relative w-full max-w-md mx-auto rounded-2xl shadow-hero border border-border object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;