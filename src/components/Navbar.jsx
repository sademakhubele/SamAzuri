import { useEffect } from "react";
import { Link } from "react-router-dom";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
  
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/media/logo.jpg"
              alt="Sam Azuri Logo"
              className="w-12 h-12 rounded-full object-cover"
            />
            <span className="font-script text-2xl text-white">Sam Azuri</span>
          </Link>

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden text-white text-3xl"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-black hover:text-gray-300 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/services"
              className="text-black hover:text-gray-300 transition-colors"
            >
              Services
            </Link>
            <Link
              to="/gallery"
              className="text-black hover:text-gray-300 transition-colors"
            >
              Gallery
            </Link>
        
            <a
              href="#contact"
              className="text-black hover:text-gray-300 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
