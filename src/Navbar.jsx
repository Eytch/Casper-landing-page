// src/Navbar.jsx

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          Job Trackr
        </Link>
        <div>
          <Link to="/" className="px-4 py-2">
            Home
          </Link>
          <Link to="/download" className="px-4 py-2">
            Download App
          </Link>
          <Link to="/support" className="px-4 py-2">
            Support
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
