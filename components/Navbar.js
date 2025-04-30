import { useState, useEffect } from "react";
import Link from "next/link";
import { FaPhone, FaBars, FaTimes } from "react-icons/fa";
import { siteStructure, siteConfig, navStructure } from "../siteConfig";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setIsVisible(window.scrollY < lastScrollY);
      }
      setLastScrollY(window.scrollY);
      setIsScrolled(window.scrollY > 70);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // NEW: Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  return (
    <nav
      className={`fixed z-50 top-0 left-0 w-screen transition-all duration-300 ${
        isVisible
          ? isScrolled
            ? "bg-[var(--color-text)]/70 shadow-md"
            : "bg-transparent"
          : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-2 font-inter">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold text-[var(--color-surface)] whitespace-nowrap overflow-hidden text-ellipsis max-w-[10rem] sm:max-w-none"
        >
          <>
            <span className="block sm:hidden">Evergreen</span>
            <span className="hidden sm:block">{siteConfig.name}</span>
          </>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-10 text-[var(--color-surface)] font-medium text-lg items-center">
          {navStructure.map((section, i) => (
            <li key={i}>
              <Link
                href={`#${section.toLowerCase()}`}
                className="hover:text-[var(--color-accent)] transition text-xl "
              >
                {section}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Call Button */}
        <a
          href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`}
          className="hidden md:flex items-center bg-[var(--color-primary)] text-white px-4 py-2 rounded-lg font-semibold shadow-md hover:bg-[var(--color-primary)]/80 transition-all"
        >
          <FaPhone className="mr-2" /> Call Us
        </a>

        {/* Mobile Call Button */}
        <a
          href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`}
          className="md:hidden flex items-center bg-[var(--color-primary)] text-[var(--color-surface)] px-3 py-2 rounded-lg font-semibold shadow-md hover:bg-opacity-90 transition-all"
        >
          <FaPhone className="mr-2" size="1.2em" /> Call
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-2xl ml-4 focus:outline-none text-[var(--color-surface)]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes className="hidden" /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Fullscreen Menu */}
      <div
        className={`fixed inset-0 bg-[var(--color-text)]/70 bg-opacity-95 flex flex-col justify-center items-center space-y-10 text-[var(--color-background)] text-3xl font-semibold transform transition-transform duration-300 md:hidden ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          className="absolute top-6 right-6 text-4xl z-10"
          onClick={() => setIsMenuOpen(false)}
        >
          <FaTimes />
        </button>
        {siteStructure.map((section, i) => (
          <Link
            key={i}
            href={`#${section.toLowerCase()}`}
            onClick={() => setIsMenuOpen(false)}
          >
            {section}
          </Link>
        ))}
      </div>
    </nav>
  );
}

