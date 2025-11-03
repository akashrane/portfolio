"use client";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-[#1f1f1f] z-50 border-b border-gray-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-4 gap-4">
          <div>
            <h1 className="text-2xl font-semibold text-white mb-1">
              Akash Rane
            </h1>
            <p className="text-sm text-white opacity-70">
              Masters in Computer Science
            </p>
          </div>
          <nav className="flex gap-6 text-sm">
            <a
              href="#home"
              className="text-white opacity-70 hover:opacity-100 hover:underline transition-all"
            >
              Home
            </a>
            <a
              href="#projects"
              className="text-white opacity-70 hover:opacity-100 hover:underline transition-all"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="text-white opacity-70 hover:opacity-100 hover:underline transition-all"
            >
              Skills
            </a>
            <a
              href="#resume"
              className="text-white opacity-70 hover:opacity-100 hover:underline transition-all"
            >
              Resume
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

