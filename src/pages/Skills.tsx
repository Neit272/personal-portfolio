import { PageTransition } from "../components/PageTransition";
import { skills } from "../data";

export function Skills() {
  // Group technical skills by category
  const technicalCategories = Array.from(
    new Set(skills.technical.map((s) => s.category))
  );

  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Skills & Expertise</h1>
          <p className="text-muted-foreground text-lg">A comprehensive overview of my technical and professional skills.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Technical Skills */}
          <section className="space-y-8">
            <h2 className="text-2xl font-semibold border-b border-border pb-2">Technical Skills</h2>
            
            <div className="space-y-8">
              {technicalCategories.map((category) => (
                <div key={category} className="space-y-4">
                  <h3 className="text-lg font-medium text-primary">{category}</h3>
                  <div className="space-y-4">
                    {skills.technical
                      .filter((s) => s.category === category)
                      .map((skill) => (
                        <div key={skill.name} className="space-y-2">
                          <div className="flex justify-between text-sm font-medium">
                            <span>{skill.name}</span>
                            <span className="text-muted-foreground">{skill.level}%</span>
                          </div>
                          <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                            <div
                              className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                              style={{ width: `${skill.level}%` }}
                            />
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="space-y-8">
            {/* Soft Skills */}
            <section className="space-y-6">
              <h2 className="text-2xl font-semibold border-b border-border pb-2">Soft Skills</h2>
              <div className="flex flex-wrap gap-3">
                {skills.soft.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-card border border-border rounded-xl text-sm font-medium shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            {/* Languages */}
            <section className="space-y-6">
              <h2 className="text-2xl font-semibold border-b border-border pb-2">Languages</h2>
              <div className="space-y-4">
                {skills.languages.map((lang) => (
                  <div key={lang.name} className="bg-card border border-border rounded-xl p-4 shadow-sm flex flex-col gap-1">
                    <span className="font-semibold text-lg">{lang.name}</span>
                    <span className="text-sm text-muted-foreground">{lang.proficiency}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
