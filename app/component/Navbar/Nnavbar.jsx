"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Users,
  Factory,
  Award,
  FileText,
  Package,
  Phone,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";
import "./Nnavbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

  const facilitiesList = [
    { name: "Handling, Packaging and Storage", href: "/facilities/handling-packaging-storage" },
    { name: "Quality Control at all Stages of the Process", href: "/facilities/quality-control" },
    { name: "Food Safety and Quality Assurance", href: "/facilities/food-safety" },
    { name: "Hygiene Practices", href: "/facilities/hygiene-practices" },
    { name: "Storage Warehouses", href: "/facilities/storage-warehouses" },
    { name: "RO plant, Water filters and Air filters", href: "/facilities/ro-plant-filters" },
    { name: "Supervisory Control And Data Acquisition (SCADA) system", href: "/facilities/scada-system" },
    { name: "Backup Power Generation and SNG Systems", href: "/facilities/backup-power" },
    { name: "Fire fighting", href: "/facilities/fire-fighting" },
  ];

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
          <Link 
            href="/" 
            className={`nav-link ${pathname === "/" ? "active" : ""}`}>
              <Home size={19} />
              <span>Home</span>
          </Link>

          <Link href="/about" className={`nav-link ${pathname === "/about" ? "active" : ""}`}>
            <Users size={19} />
            <span>About</span>
          </Link>

          {/* Facilities Dropdown */}
          <div 
            className="dropdown-container"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <Link 
              href="/facilities" 
              className={`nav-link ${pathname.startsWith("/facilities") ? "active" : ""}`}
              onClick={(e) => {
                // Mobile par click karne se toggle ho sake agar chahein
                // e.preventDefault();
                // setDropdownOpen(!dropdownOpen);
              }}
            >
              <Factory size={19} />
              <span>Facilities</span>
              <ChevronDown size={15} className={`chevron-icon ${dropdownOpen ? "rotate" : ""}`} />
            </Link>

            {dropdownOpen && (
              <div className="dropdown-menu">
                {facilitiesList.map((item, index) => (
                  <Link key={index} href={item.href} className="dropdown-item">
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/certifications" className={`nav-link ${pathname === "/certifications" ? "active" : ""}`}>
            <Award size={19} />
            <span>Certifications</span>
          </Link>

          <Link href="/policies" className={`nav-link ${pathname === "/policies" ? "active" : ""}`}>
            <FileText size={19} />
            <span>Policies</span>
          </Link>

          <Link href="/products" className={`nav-link ${pathname === "/products" ? "active" : ""}`}>
            <Package size={19} />
            <span>Products</span>
          </Link>

          <Link href="/contact" className={`nav-link ${pathname === "/contact" ? "active" : ""}`}>
            <Phone size={19} />
            <span>Contact</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}