import Header from "@/components/Header";
import ProjectCard from "@/components/ProjectCard";
import { useEffect } from "react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A modern e-commerce solution with real-time inventory management, secure payment processing, and personalized recommendations.",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"]
  },
  {
    title: "AI Content Generator",
    description: "Machine learning powered content generation tool that helps creators produce engaging copy for marketing campaigns.",
    tags: ["Python", "TensorFlow", "FastAPI", "React"]
  },
  {
    title: "Task Management App",
    description: "Collaborative project management platform with real-time updates, time tracking, and team analytics.",
    tags: ["TypeScript", "Next.js", "Prisma", "WebSocket"]
  },
  {
    title: "Design System",
    description: "Comprehensive component library and design tokens for maintaining consistency across multiple products.",
    tags: ["React", "Storybook", "CSS-in-JS", "Figma"]
  },
  {
    title: "Analytics Dashboard",
    description: "Real-time data visualization platform with customizable widgets and predictive analytics powered by AI.",
    tags: ["Vue.js", "D3.js", "Python", "MongoDB"]
  },
  {
    title: "Social Media Scheduler",
    description: "Multi-platform social media management tool with content calendar, analytics, and automated posting.",
    tags: ["React", "Express", "Redis", "OAuth"]
  }
];

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16 animate-slide-up">
              <h1 className="text-6xl md:text-7xl font-bold tracking-tighter mb-6">
                Featured Work
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                A collection of projects that showcase my expertise in building 
                scalable, user-focused digital experiences.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </main>

      <footer id="contact" className="border-t border-border py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold tracking-tighter mb-4">Let's Connect</h2>
            <p className="text-muted-foreground mb-8">
              Interested in working together? Get in touch.
            </p>
            <a
              href="mailto:jbizzell09@gmail.com"
              className="inline-block px-8 py-3 bg-accent text-white font-medium rounded-full hover:scale-105 transition-transform"
            >
              Send Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Projects;
