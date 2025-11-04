import { useState, useEffect } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Track scrolling to highlight active link
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "blog", "contact"];
      let current = "home";

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = id;
          }
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setMenuOpen(false); // close menu on click
    }
  };

  return (
    <nav className="fixed w-full bg-black/80 text-white backdrop-blur-md z-50 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo / Name */}
        <div className="font-bold text-lg cursor-pointer" onClick={() => scrollToSection("home")}>
          MyPortfolio
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          {["home", "about", "projects", "blog", "contact"].map((id) => (
            <li
              key={id}
              className={`cursor-pointer capitalize ${
                activeSection === id ? "text-purple-400" : "hover:text-purple-300"
              }`}
              onClick={() => scrollToSection(id)}
            >
              {id}
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col bg-black/95 text-center py-4 space-y-4">
          {["home", "about", "projects", "blog", "contact"].map((id) => (
            <li
              key={id}
              className={`cursor-pointer capitalize ${
                activeSection === id ? "text-purple-400" : "hover:text-purple-300"
              }`}
              onClick={() => scrollToSection(id)}
            >
              {id}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
