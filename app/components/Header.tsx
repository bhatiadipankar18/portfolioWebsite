import Link from "next/link";
import { FC } from "react";

const Header: FC = () => {
  // Ensure navItems is defined inside the component
  const navItems = [
    "About",
    "Resume",
    "Skills",
    "Projects",
    "Academic Journey",
    "Experience",
    "Timeline",
    "Contact Me"
  ];

  return (
    <header className="bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-lg sticky top-0 z-10 shadow-md">
      <nav className="container mx-auto px-6 py-4">
        <ul className="flex justify-center space-x-8">
          {navItems.map((item) => (
            <li key={item}>
              <Link
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="text-gray-300 hover:text-indigo-400 transition-colors duration-200 text-lg font-medium"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

