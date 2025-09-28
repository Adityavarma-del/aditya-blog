import { GraduationCap, Award, Calendar } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology",
      field: "Computer Science and Engineering (AI & ML)",
      institution: "Malla Reddy College Of Engineering And Technology",
      location: "Maisammaguda, Hyderabad",
      period: "Expected Jun 2025",
      gpa: "7.14/10",
      coursework: ["Software Engineering", "Operating Systems", "Algorithms", "Artificial Intelligence"]
    },
    {
      degree: "Intermediate Education (XII)",
      field: "Telangana Board of Intermediate Education",
      institution: "Sri Gayatri Junior College",
      location: "Hyderabad",
      period: "Jun 2020 – Mar 2021",
      gpa: "680/1000",
      coursework: []
    },
    {
      degree: "Secondary Education (X)",
      field: "Central Board of Secondary Education",
      institution: "VRS & VJRS Residential School",
      location: "Hyderabad, Telangana",
      period: "Jun 2019 – Mar 2020",
      gpa: "64%",
      coursework: []
    }
  ];

  const certifications = [
    {
      title: "Oracle Cloud Infrastructure 2024 Generative AI Certified Professional",
      issuer: "Oracle",
      type: "Professional Certification"
    },
    {
      title: "Salesforce Super Badges",
      issuer: "Salesforce",
      type: "Super Badges",
      badges: ["Apex Specialist", "Process Automation Specialist", "Developer Super Set"]
    },
    {
      title: "Cambridge English Empower B2 Level",
      issuer: "Cambridge",
      type: "Language Certification"
    },
    {
      title: "Web Development",
      issuer: "Udemy",
      type: "Course Completion"
    }
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading">EDUCATION & CERTIFICATIONS</h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            My academic journey and professional certifications that have shaped my expertise 
            in computer science and emerging technologies.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-primary mb-12 text-center">Academic Background</h3>
          <div className="max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <div key={index} className="relative pl-8 pb-12 last:pb-0">
                {/* Timeline Line */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-border"></div>
                <div className="absolute left-0 top-2 w-3 h-3 bg-primary rounded-full -translate-x-1/2 border-2 border-background"></div>
                
                <div className="bg-gradient-card p-6 rounded-xl border border-border card-hover">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <GraduationCap className="text-primary" size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-primary mb-1">{edu.degree}</h4>
                      <p className="text-lg text-text-secondary font-medium mb-1">{edu.field}</p>
                      <p className="text-text-secondary">{edu.institution}</p>
                    </div>
                    <div className="text-right text-sm text-text-muted">
                      <div className="flex items-center gap-1 mb-1">
                        <Calendar size={14} />
                        <span>{edu.period}</span>
                      </div>
                      <p className="font-medium">GPA: {edu.gpa}</p>
                    </div>
                  </div>
                  
                  <p className="text-text-muted mb-2">📍 {edu.location}</p>
                  
                  {edu.coursework.length > 0 && (
                    <div>
                      <p className="text-sm font-medium text-text-secondary mb-2">Relevant Coursework:</p>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course, courseIndex) => (
                          <span key={courseIndex} className="skill-badge text-xs">
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-3xl font-bold text-primary mb-12 text-center">Professional Certifications</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-gradient-card p-6 rounded-xl border border-border card-hover">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-primary mb-2">{cert.title}</h4>
                    <p className="text-text-secondary font-medium mb-1">{cert.issuer}</p>
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                      {cert.type}
                    </span>
                    
                    {cert.badges && (
                      <div className="mt-3">
                        <p className="text-sm text-text-muted mb-2">Includes:</p>
                        <div className="flex flex-wrap gap-1">
                          {cert.badges.map((badge, badgeIndex) => (
                            <span key={badgeIndex} className="skill-badge text-xs">
                              {badge}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;