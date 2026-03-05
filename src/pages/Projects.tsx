import { useState, useMemo } from "react";
import { Search, ExternalLink, Github } from "lucide-react";
import { PageTransition } from "../components/PageTransition";
import { projects } from "../data";

export function Projects() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTech, setSelectedTech] = useState<string>("All");

  // Extract unique technologies for filter
  const allTechs = useMemo(() => {
    const techs = new Set<string>();
    projects.forEach((p) => p.technologies.forEach((t) => techs.add(t)));
    return ["All", ...Array.from(techs).sort()];
  }, []);

  // Filter projects based on search and selected tech
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            project.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesTech = selectedTech === "All" || project.technologies.includes(selectedTech);
      return matchesSearch && matchesTech;
    });
  }, [searchQuery, selectedTech]);

  return (
    <PageTransition>
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Projects</h1>
          <p className="text-muted-foreground text-lg">A selection of my recent work and personal projects.</p>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-card p-4 rounded-2xl border border-border shadow-sm">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
            />
          </div>
          
          <div className="w-full md:w-auto overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
            <div className="flex gap-2">
              {allTechs.map((tech) => (
                <button
                  key={tech}
                  onClick={() => setSelectedTech(tech)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-colors ${
                    selectedTech === tech
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "bg-background border border-border hover:bg-muted text-foreground"
                  }`}
                >
                  {tech}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <div key={project.id} className="group bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col h-full">
                <div className="relative aspect-video overflow-hidden bg-muted">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1 gap-4">
                  <div className="space-y-2 flex-1">
                    <h3 className="text-xl font-semibold line-clamp-1">{project.title}</h3>
                    <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-2.5 py-1 bg-primary/10 text-primary text-xs font-medium rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 pt-4 border-t border-border mt-auto">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Github size={16} />
                        Code
                      </a>
                    )}
                    {project.demo ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors ml-auto"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    ) : (
                      <span
                        className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground opacity-50 cursor-not-allowed ml-auto"
                        title="Chưa triển khai"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-12 text-center text-muted-foreground">
              No projects found matching your criteria.
            </div>
          )}
        </div>
      </div>
    </PageTransition>
  );
}
