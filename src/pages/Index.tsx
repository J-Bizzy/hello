import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LoadingScreen from "@/components/LoadingScreen";
import Header from "@/components/Header";

const Index = () => {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    // Prevent scrolling during loading
    if (showLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showLoading]);

  if (showLoading) {
    return <LoadingScreen onComplete={() => setShowLoading(false)} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
          {/* Decorative image placeholders (replace src with your images) */}
          <div className="absolute inset-0">
            <img src="/sophie.jpeg" alt="photo 1" className="hidden md:block absolute left-1/2 top-20 w-56 h-36 rounded-2xl object-cover border border-border shadow-lg opacity-90 transform -rotate-6 transition-transform duration-300 ease-out hover:scale-110 hover:rotate-0 hover:shadow-2xl hover:opacity-100 cursor-pointer" />
            <img src="/Philmont.jpeg" alt="photo 2" className="hidden md:block absolute right-16 top-32 w-72 h-44 rounded-2xl object-cover border border-border shadow-lg opacity-90 transform rotate-3 transition-transform duration-300 ease-out hover:scale-110 hover:rotate-0 hover:shadow-2xl hover:opacity-100 cursor-pointer" />
            <img src="/Ravens.jpeg" alt="photo 3" className="hidden md:block absolute left-1/2 bottom-12 w-64 h-40 rounded-2xl object-cover border border-border shadow-lg opacity-90 transform -translate-x-1/2 rotate-1 transition-transform duration-300 ease-out hover:scale-110 hover:rotate-0 hover:shadow-2xl hover:opacity-100 cursor-pointer" />
            <img src="/Masters.jpeg" alt="photo 4" className="hidden md:block absolute right-16 bottom-28 w-64 h-40 rounded-2xl object-cover border border-border shadow-lg opacity-90 transform -translate-x-1/2 rotate-1 transition-transform duration-300 ease-out hover:scale-110 hover:rotate-0 hover:shadow-2xl hover:opacity-100 cursor-pointer" />
          </div>

          <div className="max-w-5xl w-full relative z-10">
            <div className="space-y-8 animate-slide-up">
              <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent font-medium text-sm mb-4">
                NCSSM C/O '27 ⚛️
              </div>
              
              <h1 className="text-7xl md:text-9xl font-bold tracking-tighter bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent">
                Jackson Bizzell
              </h1>
              
              <p className="text-2xl md:text-3xl text-muted-foreground max-w-2xl leading-relaxed">
                Hey there! I'm Jackson Bizzell, and im the best junior here at NCSSM! My portfolio is lowkey lame, but go ahead and have a look around!
              </p>
              
              <div className="flex gap-4 pt-4">
                <Link
                  to="/projects"
                  className="px-8 py-3 bg-accent text-accent-foreground font-medium rounded-full hover:scale-105 transition-transform shadow-lg"
                >
                  View Work
                </Link>
                <Link
                  to="/contact"
                  className="px-8 py-3 border-2 border-border font-medium rounded-full hover:bg-secondary transition-colors"
                >
                  Say hey
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 border-t border-border">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-4 gap-12">
                <div className="text-center animate-fade-in" style={{ animationDelay: "0ms" }}>
                  <div className="text-5xl font-bold text-accent mb-2">16</div>
                  <div className="text-muted-foreground">Years Old</div>
                </div>
                <div className="text-center animate-fade-in" style={{ animationDelay: "100ms" }}>
                  <div className="text-5xl font-bold text-accent mb-2">Eagle Scout (almost)</div>
                  <div className="text-muted-foreground">Boy Scouts of America</div>
                </div>
                <div className="text-center animate-fade-in" style={{ animationDelay: "200ms" }}>
                  <div className="text-5xl font-bold text-accent mb-2">4th East</div>
                  <div className="text-muted-foreground">NCSSM</div>
                </div>
                <div className="text-center animate-fade-in" style={{ animationDelay: "300ms" }}>
                  <div className="text-5xl font-bold text-accent mb-2">100%</div>
                  <div className="text-muted-foreground">certified idiot</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What I Do Section */}
        <section className="py-24 border-t border-border bg-muted/20">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-5xl font-bold tracking-tighter mb-4 animate-slide-up">
                What I Do
              </h2>
              <p className="text-xl text-muted-foreground mb-16 animate-slide-up">
                Here's some stuff that I do, not to good at it tho ngl.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="p-8 rounded-2xl bg-card border border-border hover:border-accent/50 hover:shadow-2xl transition-all duration-500 animate-slide-up group" style={{ animationDelay: "100ms" }}>
                  <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <span className="text-accent text-3xl">👨‍💻</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Web Development</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Building fast, scalable, and responsive web applications with modern frameworks and best practices.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 text-xs bg-accent/10 text-accent rounded-full">React</span>
                    <span className="px-3 py-1 text-xs bg-accent/10 text-accent rounded-full">TypeScript</span>
                    <span className="px-3 py-1 text-xs bg-accent/10 text-accent rounded-full">Node.js</span>
                  </div>
                </div>

                <div className="p-8 rounded-2xl bg-card border border-border hover:border-accent/50 hover:shadow-2xl transition-all duration-500 animate-slide-up group" style={{ animationDelay: "200ms" }}>
                  <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <span className="text-accent text-3xl">🎮</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Game Design</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    I make some cool games
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 text-xs bg-accent/10 text-accent rounded-full">Unity</span>
                    <span className="px-3 py-1 text-xs bg-accent/10 text-accent rounded-full">C#</span>
                    <span className="px-3 py-1 text-xs bg-accent/10 text-accent rounded-full">Blender</span>
                  </div>
                </div>

                <div className="p-8 rounded-2xl bg-card border border-border hover:border-accent/50 hover:shadow-2xl transition-all duration-500 animate-slide-up group" style={{ animationDelay: "300ms" }}>
                  <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <span className="text-accent text-3xl">❮❯</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Coding</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Some small projects.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 text-xs bg-accent/10 text-accent rounded-full">Python</span>
                    <span className="px-3 py-1 text-xs bg-accent/10 text-accent rounded-full">Java</span>
                    <span className="px-3 py-1 text-xs bg-accent/10 text-accent rounded-full"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Work Preview */}
        <section className="py-24 border-t border-border">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="flex justify-between items-end mb-16">
                <div>
                  <h2 className="text-5xl font-bold tracking-tighter mb-4">Featured Work</h2>
                  <p className="text-xl text-muted-foreground">A selection of recent projects</p>
                </div>
                <Link 
                  to="/projects" 
                  className="text-accent hover:underline font-medium flex items-center gap-2"
                >
                  View All Projects →
                </Link>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="group cursor-pointer">
                  <div className="aspect-video bg-gradient-to-br from-accent/20 to-primary/5 rounded-2xl mb-6 border border-border overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl text-accent/30">◆</div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors">E-Commerce Platform</h3>
                  <p className="text-muted-foreground mb-3">Full-stack web application</p>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 text-xs bg-secondary rounded-full">React</span>
                    <span className="px-3 py-1 text-xs bg-secondary rounded-full">MongoDB</span>
                    <span className="px-3 py-1 text-xs bg-secondary rounded-full">Node.js</span>
                  </div>
                </div>

                <div className="group cursor-pointer">
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/5 rounded-2xl mb-6 border border-border overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl text-accent/30">◇</div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors">Design System</h3>
                  <p className="text-muted-foreground mb-3">Comprehensive component library and brand guidelines</p>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 text-xs bg-secondary rounded-full">Figma</span>
                    <span className="px-3 py-1 text-xs bg-secondary rounded-full">Storybook</span>
                    <span className="px-3 py-1 text-xs bg-secondary rounded-full">TypeScript</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="border-t border-border py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold tracking-tighter mb-4">Ready to Start?</h2>
            <p className="text-muted-foreground mb-8">
              Let's create something extraordinary together.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-3 bg-accent text-white font-medium rounded-full hover:scale-105 transition-transform"
            >
              Start a Conversation
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
