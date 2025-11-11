import { useState } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  index: number;
}

const ProjectCard = ({ title, description, tags, index }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative p-8 rounded-lg border border-border bg-card hover:shadow-xl transition-all duration-500 animate-slide-up"
      style={{ animationDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
      
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-2xl font-bold tracking-tight group-hover:text-accent transition-colors">
            {title}
          </h3>
          <div 
            className={`w-2 h-2 rounded-full bg-accent transition-transform duration-500 ${
              isHovered ? "scale-150" : "scale-100"
            }`}
          />
        </div>
        
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs font-medium bg-secondary text-foreground rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
