const Footer = () => {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-[#1f1f1f] border-t border-gray-600">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-xs text-white opacity-60">
          © {new Date().getFullYear()} John Doe. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

