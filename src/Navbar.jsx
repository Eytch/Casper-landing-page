import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="  text-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          <div className=" flex gap-2 justify-center align-middle">
            <img src="/App-Logo.webp" alt="JobTrackr" className="w-10" />
            <h2 className=" self-center">Casper</h2>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex">
          <Link to="/" className="px-4 py-2">
            Home
          </Link>
          <a
            href="https://apps.apple.com/us/app/track-your-job-applications/id6642659608"
            className=" self-center px-4 py-2"
          >
            Download App
          </a>
          <Link to="/support" className="px-4 py-2">
            Support
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <X size={24} color="black" />
          ) : (
            <Menu size={24} color="black" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="flex flex-col items-center">
            <Link
              to="/"
              className="px-4 py-2 w-full text-center"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/download"
              className="px-4 py-2 w-full text-center"
              onClick={toggleMenu}
            >
              Download App
            </Link>
            <Link
              to="/support"
              className="px-4 py-2 w-full text-center"
              onClick={toggleMenu}
            >
              Support
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
