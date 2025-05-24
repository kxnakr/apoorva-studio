import Link from "next/link";
import Image from "next/image";
import NavbarLink from "./navbar-link";

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
    href: "#resume",
  },
  {
    label: "linkedIn",
    href: "#linkedIn",
  },
];

const Navbar = () => {
  return (
    <nav className="flex justify-between py-8 px-10">
      <Link
        href="/"
        className="text-lg font-bold flex items-center gap-2 h-min"
      >
        <Image src="/logo.png" alt="logo" width={48} height={48} />
        <span>apoorva</span>
      </Link>

      <div className="flex flex-col text-lg text-gray-600 text-right font-normal">
        {links.map((link) => (
          <NavbarLink key={link.href} {...link} />
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
