import Link from "next/link";
import { cn } from "@/lib/utils";

type AnimatedLinkProps = {
  label: string;
  href: string;
  className?: string;
  decorationClassName?: string;
};

const AnimatedLink = ({
  label,
  href,
  className,
  decorationClassName,
}: AnimatedLinkProps) => {
  return (
    <span
      className={cn(
        "relative text-xl text-gray-600 hover:text-gray-700 transition-colors duration-500 group",
        className
      )}
    >
      <Link
        href={href}
        target={href.startsWith("http") ? "_blank" : "_self"}
        className="relative after:content-['\2197'] after:absolute after:bottom-0 after:-right-3 after:text-sm group-hover:after:font-light after:font-sans after:opacity-0 after:transition-all after:duration-300 group-hover:after:opacity-100 group-hover:after:-right-4"
      >
        {label}
        <span
          className={cn(
            "absolute left-0 bottom-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-gray-600",
            decorationClassName
          )}
        />
      </Link>
    </span>
  );
};

export default AnimatedLink;
