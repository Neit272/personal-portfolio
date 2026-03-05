import { Link } from "react-router-dom";
import { ArrowRight, Download } from "lucide-react";
import { PageTransition } from "../components/PageTransition";
import { personalInfo } from "../data";

export function Home() {
  return (
    <PageTransition>
      <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 min-h-[70vh]">
        <div className="flex-1 flex flex-col items-start gap-6">
          <div className="space-y-2">
            <h2 className="text-xl md:text-2xl font-medium text-primary">
              Hello, I'm
            </h2>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
              {personalInfo.name}
            </h1>
            <h3 className="text-2xl md:text-3xl font-semibold text-muted-foreground">
              {personalInfo.title}
            </h3>
          </div>
          <p className="text-lg text-muted-foreground max-w-lg leading-relaxed text-balance">
            {personalInfo.intro}
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link
              to="/projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 shadow-sm"
            >
              View Projects
              <ArrowRight size={18} />
            </Link>
            <a
              href="/CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-muted text-foreground font-medium hover:bg-muted/80 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              Download CV
              <Download size={18} />
            </a>
          </div>
        </div>
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
            <img
              src={personalInfo.avatar}
              alt={personalInfo.name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
