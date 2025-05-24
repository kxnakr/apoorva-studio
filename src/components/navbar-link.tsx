"use client";

import Link from "next/link";
// import { motion } from "framer-motion";

const NavbarLink = ({ label, href }: { label: string; href: string }) => {
  return (
    <div className="relative text-lg text-gray-600 hover:text-gray-700 transition-colors duration-500 group">
      <Link
        href={href}
        className="relative after:content-['\2197'] after:absolute after:bottom-0 after:-right-3 after:text-sm group-hover:after:font-light after:font-sans after:opacity-0 after:transition-all after:duration-300 group-hover:after:opacity-100 group-hover:after:-right-4"
      >
        {label}
        <span className="absolute left-0 bottom-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-gray-600"></span>
      </Link>
    </div>
  );
};

export default NavbarLink;
