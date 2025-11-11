import Header from "@/components/Header";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="animate-slide-up">
              <h1 className="text-6xl md:text-7xl font-bold tracking-tighter mb-8">
                About Me
              </h1>
              
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p className="animate-slide-up" style={{ animationDelay: "100ms" }}>
                  I'm Jackson Bizzell, a junior at NCSSM and a passionate web developer and designer.
                  I truly enjoy anything related to STEM, such as coding and computer science in general.
                </p>
                
                <p className="animate-slide-up" style={{ animationDelay: "200ms" }}>
                  My work spans across web development, game design, and small self-coded projects that utilize many frameworks. 
                  I believe in the power of simplicity—that the best solutions often come 
                  from removing complexity rather than adding it.
                </p>
                
                <p className="animate-slide-up" style={{ animationDelay: "300ms" }}>
                  When I'm not learning or working, you'll find me exploring new technologies, 
                  playing sports, or listening to some of my favorite music!
                </p>
              </div>

              <div className="mt-16 grid md:grid-cols-3 gap-8 animate-slide-up" style={{ animationDelay: "400ms" }}>
                <div className="p-6 rounded-lg bg-card border border-border">
                  <h3 className="text-2xl font-bold mb-2">3+</h3>
                  <p className="text-muted-foreground">Years Experience</p>
                </div>
                <div className="p-6 rounded-lg bg-card border border-border">
                  <h3 className="text-2xl font-bold mb-2">5</h3>
                  <p className="text-muted-foreground">Projects Completed</p>
                </div>
                <div className="p-6 rounded-lg bg-card border border-border">
                  <h3 className="text-2xl font-bold mb-2">16</h3>
                  <p className="text-muted-foreground">Years Old</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer id="contact" className="border-t border-border py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold tracking-tighter mb-4">Let's Work Together</h2>
            <p className="text-muted-foreground mb-8">
              Feel free to reach out for any colabs!
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-3 bg-accent text-white font-medium rounded-full hover:scale-105 transition-transform"
            >
              Say hello 👋
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
