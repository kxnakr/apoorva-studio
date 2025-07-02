"use client";

import Link from "next/link";
import Image from "next/image";
import AnimatedLink from "./animated-link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import {
  useScrollAnimation,
  useStaggerAnimation,
} from "@/lib/useScrollAnimation";

const links = [
  {
    label: "works",
    href: "#works",
  },
  {
    label: "about me",
    href: "#about-me",
  },
  {
    label: "get in touch",
    href: "#get-in-touch",
  },
  {
    label: "resume",
    href: "https://drive.google.com/file/d/1hkYmUfxDc1tXd0Eczd1Cyh_3E03mnFah/view",
  },
  {
    label: "linkedIn",
    href: "https://www.linkedin.com/in/extrovert-designer/",
  },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const logoRef = useScrollAnimation<HTMLAnchorElement>({
    x: -40,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });

  const linksRef = useStaggerAnimation(links.length, {
    x: 40,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: "power3.out",
  });

  // Close mobile menu when clicking on a link
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav className="flex justify-between py-4 sm:py-6 lg:py-8 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
        <Link
          ref={logoRef}
          href="/"
          className="text-lg font-bold flex items-center gap-2 h-min z-50 relative"
        >
          <Image
            src="/logo.png"
            alt="logo"
            width={75}
            height={75}
            quality={100}
            priority
            className="sm:w-12 sm:h-12"
          />
          <span className="text-base sm:text-xl">apoorva</span>
        </Link>

        {/* Desktop Navigation */}
        <div
          ref={linksRef}
          className="hidden lg:flex flex-col text-lg text-gray-600 text-right font-normal"
        >
          {links.map((link) => (
            <AnimatedLink key={link.href} {...link} />
          ))}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="lg:hidden z-50 relative p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Full-Screen Navigation Overlay */}
      <div
        className={`fixed inset-0 bg-white bg-opacity-95 z-40 transition-all duration-500 ease-in-out lg:hidden ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <div className="flex flex-col space-y-8 text-center text-2xl font-normal">
            {links.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className={`opacity-0 transition-all duration-300 ease-out hover:text-gray-600 ${
                  isMobileMenuOpen
                    ? "animate-[fadeInUp_0.6s_ease-out_forwards]"
                    : ""
                }`}
                style={{
                  animationDelay: isMobileMenuOpen ? `${index * 0.1}s` : "0s",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
