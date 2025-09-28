const Experience = () => {
  const experiences = [
    {
      title: "Salesforce Developer Intern",
      company: "LINK Software",
      period: "May 2024 – Jun 2024", 
      description: "Gained proficiency in 3 key areas: Types of Flows & Security, Apex Testing & Debugging, and Lightning Web Components (LWC). • Configured and optimized 2 essential tools, VS Code and CLI, improving workflow efficiency • Achieved 3 Super Badges: Apex Specialist, Process Automation Specialist, and Developer Super Set, showcasing advanced problem-solving skills. • Designed, tested, and debugged Salesforce applications, reducing development errors by 30% and ensuring compliance with best practices. • Delivered 100% scalable solutions by integrating APIs and leveraging Lightning Web Components."
    }
  ];

  return (
    <section id="experience" className="py-20 bg-section-bg">
      <div className="container mx-auto px-6">
        <h2 className="section-heading text-center mb-16">MY EXPERIENCE</h2>
        
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-12 last:mb-0">
              <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-text-primary">{exp.title}</h3>
                  <p className="text-primary text-lg">{exp.company}</p>
                </div>
                <span className="text-text-muted bg-secondary px-3 py-1 rounded text-sm">
                  {exp.period}
                </span>
              </div>
              <p className="text-text-secondary leading-relaxed">
                {exp.description}
              </p>
              {index < experiences.length - 1 && (
                <div className="h-px bg-border mt-12"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;