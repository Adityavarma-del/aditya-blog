const Skills = () => {
  const skills = [
    "HTML", "CSS", "JAVASCRIPT", "JAVA",
    "PYTHON", "REACT.JS"
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="section-heading text-center mb-16">MY CAPABILITIES</h2>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-text-secondary mb-12 text-center leading-relaxed">
            I am always looking to add more skills. Major expertise in React, Django, Artificial Intelligence,
            Salesforce, Machine Learning and more.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-secondary text-text-secondary px-4 py-3 text-center text-sm font-medium border border-border hover:border-primary hover:text-primary transition-colors"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;