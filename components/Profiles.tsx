const Profiles = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1f1f1f] border-t border-gray-600">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-white mb-6">Profiles</h2>
        <div className="flex flex-col gap-3">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-white opacity-70 hover:opacity-100 hover:underline transition-all"
          >
            GitHub
          </a>
          <a
            href="https://kaggle.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-white opacity-70 hover:opacity-100 hover:underline transition-all"
          >
            Kaggle
          </a>
        </div>
      </div>
    </section>
  );
};

export default Profiles;

