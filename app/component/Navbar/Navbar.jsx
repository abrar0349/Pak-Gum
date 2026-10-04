"use client";

import Link from "next/link";
import {
  Home,
  Users,
  Factory,
  Award,
  FileText,
  Package,
  Phone,
  Search,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      <div className="nav-container">

        {/* Mobile Menu Button */}
        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>

        {/* Navigation Links */}
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>

          <Link href="/" className="nav-link active">
            <Home size={19} />
            <span>Home</span>
          </Link>

          <Link href="/about" className="nav-link">
            <Users size={19} />
            <span>About</span>
          </Link>

          <Link href="/facilities" className="nav-link">
            <Factory size={19} />
            <span>Facilities</span>
          </Link>

          <Link href="/certifications" className="nav-link">
            <Award size={19} />
            <span>Certifications</span>
          </Link>

          <Link href="/policies" className="nav-link">
            <FileText size={19} />
            <span>Policies</span>
          </Link>

          <Link href="/products" className="nav-link">
            <Package size={19} />
            <span>Products</span>
          </Link>

          <Link href="/contact" className="nav-link">
            <Phone size={19} />
            <span>Contact</span>
          </Link>

          {/* Search */}
          <button className="search-btn">
            <Search size={20} />
          </button>

        </div>

      </div>

    </nav>
  );
}