import AnimatedLink from "./animated-link";

export default function Footer() {
  return (
    <footer className="flex flex-col sm:flex-row justify-between items-center mb-8 mt-4 sm:mt-32 text-lg text-gray-600 hover:text-gray-700">
      <p>portfolio by apoorva kumari</p>
      <p className="flex items-center gap-1">
        lets connect on{" "}
        <AnimatedLink
          label="linkedIn"
          href="https://www.linkedin.com/in/extrovert-designer/"
        />
      </p>
    </footer>
  );
}
