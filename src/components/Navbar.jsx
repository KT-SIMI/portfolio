import { Menu, X } from "lucide-react";

export default function Navbar({
  activeSection,
  scrollToSection,
  openMenu,
  isMenuOpen,
}) {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-lg border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl z-100 font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            IO.
          </div>
          {/* Desktop */}
          <div className="hidden md:flex space-x-8">
            {["home", "about", "projects", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize transition-all duration-300 cursor-pointer ${
                  activeSection === section
                    ? "text-blue-400 font-semibold"
                    : "text-gray-400 hover:text-gray-200"
                }`}
              >
                {section}
              </button>
            ))}
          </div>
          {/* Mobile */}
          <button
            className="md:hidden text-gray-400"
            onClick={() => openMenu()}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {/* MobileMenu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            {["home", "about", "projects", "skills", "contact"].map(
              (section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left capitalize text-gray-400 hover:text-blue-400 transition-colors"
                >
                  {section}
                </button>
              )
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
