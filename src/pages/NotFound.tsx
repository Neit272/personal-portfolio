import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { PageTransition } from "../components/PageTransition";

export function NotFound() {
  return (
    <PageTransition>
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6">
        <h1 className="text-6xl md:text-8xl font-bold text-primary">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-foreground">Page Not Found</h2>
        <p className="text-muted-foreground max-w-md text-lg">
          Oops! The page you are looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors shadow-sm"
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>
      </div>
    </PageTransition>
  );
}
