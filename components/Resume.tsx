const Resume = () => {
  return (
    <section
      id="resume"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1f1f1f] border-t border-gray-600"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-white mb-6">Resume</h2>
        <a
          href="/resume.pdf"
          download
          className="inline-block border border-white px-6 py-2 text-sm text-white hover:bg-white hover:text-[#1f1f1f] transition-all"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Resume;

