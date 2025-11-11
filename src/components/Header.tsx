import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="text-2xl font-bold tracking-tighter hover:text-accent transition-colors"
          >
            Jackson
          </Link>

          <nav className="flex gap-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-accent relative ${
                isActive("/") ? "text-accent" : "text-foreground"
              }`}
            >
              Home
              {isActive("/") && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent" />
              )}
            </Link>
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors hover:text-accent relative ${
                isActive("/about") ? "text-accent" : "text-foreground"
              }`}
            >
              About
              {isActive("/about") && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent" />
              )}
            </Link>
            <Link
              to="/projects"
              className={`text-sm font-medium transition-colors hover:text-accent relative ${
                isActive("/projects") ? "text-accent" : "text-foreground"
              }`}
            >
              Projects
              {isActive("/projects") && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent" />
              )}
            </Link>
            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors hover:text-accent relative ${
                isActive("/contact") ? "text-accent" : "text-foreground"
              }`}
            >
              Contact
              {isActive("/contact") && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent" />
              )}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
