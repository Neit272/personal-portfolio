import { useState } from "react";
import { PageTransition } from "../components/PageTransition";
import { personalInfo, education, experience } from "../data";
import { cn } from "../utils/cn";
import { MapPin, Mail, Phone, Calendar, User } from "lucide-react";

export function Resume() {
  const [activeTab, setActiveTab] = useState<"education" | "experience">("education");

  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header Section */}
        <section className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Resume</h1>
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h2 className="text-xl font-semibold border-b border-border pb-2">Personal Info</h2>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <Calendar size={18} className="text-primary" />
                    <span>{personalInfo.dob}</span>
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <User size={18} className="text-primary" />
                    <span>{personalInfo.gender}</span>
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <MapPin size={18} className="text-primary" />
                    <span>{personalInfo.address}</span>
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <Mail size={18} className="text-primary" />
                    <span>{personalInfo.email}</span>
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <Phone size={18} className="text-primary" />
                    <span>{personalInfo.phone}</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h2 className="text-xl font-semibold border-b border-border pb-2">Career Objective</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {personalInfo.objective}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tabs Section */}
        <section className="space-y-6">
          <div className="inline-flex items-center p-1.5 bg-muted/50 rounded-xl border border-border/50 relative">
            <button
              onClick={() => setActiveTab("education")}
              className={cn(
                "px-6 py-2.5 text-sm md:text-base font-medium transition-colors rounded-lg relative z-10",
                activeTab === "education" 
                  ? "text-foreground" 
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Education
            </button>
            <button
              onClick={() => setActiveTab("experience")}
              className={cn(
                "px-6 py-2.5 text-sm md:text-base font-medium transition-colors rounded-lg relative z-10",
                activeTab === "experience" 
                  ? "text-foreground" 
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Experience
            </button>
            
            {/* Animated Tab Indicator */}
            <div 
              className={cn(
                "absolute top-1.5 bottom-1.5 w-[calc(50%-0.375rem)] bg-background border border-border/50 shadow-sm rounded-lg transition-transform duration-300 ease-out z-0",
                activeTab === "education" ? "translate-x-0" : "translate-x-full"
              )}
            />
          </div>

          <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm min-h-[300px]">
            {activeTab === "education" ? (
              <div className="space-y-8">
                {education.map((item) => (
                  <div key={item.id} className="relative pl-6 border-l-2 border-primary/30 last:border-transparent">
                    <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1.5" />
                    <div className="space-y-2">
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                        {item.period}
                      </span>
                      <h3 className="text-xl font-semibold">{item.school}</h3>
                      <p className="text-lg text-muted-foreground">{item.major}</p>
                      <p className="text-sm font-medium text-foreground">GPA: {item.gpa}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-8">
                {experience.map((item) => (
                  <div key={item.id} className="relative pl-6 border-l-2 border-primary/30 last:border-transparent">
                    <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1.5" />
                    <div className="space-y-2">
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                        {item.period}
                      </span>
                      <h3 className="text-xl font-semibold">{item.role}</h3>
                      <p className="text-lg text-muted-foreground">{item.company}</p>
                      <p className="text-muted-foreground leading-relaxed mt-2">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
