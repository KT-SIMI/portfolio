import { useEffect, useState } from "react";
import Navbar from "../Navbar";
import Header from "../Header";
import About from "../About";
import Projects from "../ProjectsSection";
import Skills from "../Skills";
import Contact from "../Contact";
import Footer from "../Footer";

export default function Homepage() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  const scrollToSection = (section) => {
    setActiveSection(section);
    setIsMenuOpen(false);
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  };

  const openMenu = () => {
    console.log("Toggling menu");
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-black text-gray-100 min-h-screen relative overflow-x-hidden">
      {/* Animated BG */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 50%)`,
        }}
      >
        {/* Floating circles */}
        <div className="fixed inset-0 opacity-75 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-500 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Actual content (clickable) */}
      <Navbar
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        openMenu={openMenu}
        isMenuOpen={isMenuOpen}
      />
      <Header scrollY={scrollY} scrollToSection={scrollToSection} />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
