import AnimatedLink from "./animated-link";

export default function Footer() {
  return (
    <footer className="flex flex-col sm:flex-row justify-between items-center mb-8 mt-14 sm:mt-32 text-xl text-gray-600 hover:text-gray-700">
      <p>portfolio by apoorva kumari</p>
      <p className="flex items-center gap-1">
        lets connect on{" "}
        <AnimatedLink
          label="linkedIn"
          className="text-[#4F80FF] hover:text-[#4F80FF]"
          decorationClassName="bg-[#4F80FF]"
          href="https://www.linkedin.com/in/extrovert-designer/"
        />
      </p>
    </footer>
  );
}
