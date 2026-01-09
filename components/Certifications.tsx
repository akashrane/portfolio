const Certifications = () => {
  return (
    <section id="certifications" className="py-16 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-white mb-8 border-b border-gray-700 pb-2">Certifications</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">




          {/* 5-Day AI Agents Intensive Course with Google */}
          <div className="bg-[#1f1f1f] border border-gray-800/60 rounded-xl p-4 hover:bg-[#2a2a2a] transition-colors duration-200">
            <img src="/assets/certificates/google-ai-agents.png" alt="5-Day AI Agents Intensive Course with Google" className="rounded-lg mb-3 shadow-md" />
            <h3 className="text-white font-medium text-[15px]">5-Day AI Agents Intensive Course with Google</h3>
            <p className="text-gray-400 text-xs mt-1">Kaggle · Google</p>
            <p className="text-gray-500 text-[11px]">Issued Nov 2025</p>
          </div>


          {/* Machine Learning Specialization */}
          <div className="bg-[#1f1f1f] border border-gray-800/60 rounded-xl p-4 hover:bg-[#2a2a2a] transition-colors duration-200">
            <img src="/assets/certificates/stanford-ml.jpg" alt="Machine Learning Specialization" className="rounded-lg mb-3 shadow-md" />
            <h3 className="text-white font-medium text-[15px]">Machine Learning Specialization</h3>
            <p className="text-gray-400 text-xs mt-1">DeepLearning.AI · Coursera · Stanford CPD</p>
            <p className="text-gray-500 text-[11px]">Issued Jun 2025</p>
          </div>

          {/* MongoDB SQL for Pros */}
          <div className="bg-[#1f1f1f] border border-gray-800/60 rounded-xl p-4 hover:bg-[#2a2a2a] transition-colors duration-200">
            <img src="/assets/certificates/mongodb-sql.jpg" alt="MongoDB SQL for Pros" className="rounded-lg mb-3 shadow-md" />
            <h3 className="text-white font-medium text-[15px]">MongoDB SQL for Pros</h3>
            <p className="text-gray-400 text-xs mt-1">MongoDB</p>
            <p className="text-gray-500 text-[11px]">Issued Nov 2020</p>
          </div>

          {/* Python for Data Professionals in Finance */}
          <div className="bg-[#1f1f1f] border border-gray-800/60 rounded-xl p-4 md:p-5 hover:bg-[#2a2a2a] transition-colors duration-200">
            <div className="flex items-center gap-3 mb-2">
              <img src="/assets/logos/linkedin.svg" alt="LinkedIn Learning" className="w-5 h-5 opacity-90" />
              <h3 className="text-white font-medium text-[15px] leading-snug">Python for Data Professionals in Finance</h3>
            </div>
            <p className="text-gray-400 text-xs mb-1">LinkedIn Learning</p>
            <p className="text-gray-500 text-[11px]">Issued Jan 2025</p>
          </div>

          {/* Kaggle - Intermediate Machine Learning */}
          <div className="bg-[#1f1f1f] border border-gray-800/60 rounded-xl p-4 hover:bg-[#2a2a2a] transition-colors duration-200">
            <img src="public/assets/certificates/certificate1.png" alt="Intermediate Machine Learning" className="rounded-lg mb-3 shadow-md" />
            <h3 className="text-white font-medium text-[15px]">Intermediate Machine Learning</h3>
            <p className="text-gray-400 text-xs mt-1">Kaggle · DeepLearning.AI</p>

            <p className="text-gray-500 text-[11px]">Issued Sep 2025</p>
          </div>

          {/* Kaggle - Intro to Machine Learning */}
          <div className="bg-[#1f1f1f] border border-gray-800/60 rounded-xl p-4 hover:bg-[#2a2a2a] transition-colors duration-200">
            <img src="/assets/certificates/akash-intro-ml.png" alt="Intro to Machine Learning" className="rounded-lg mb-3 shadow-md" />
            <h3 className="text-white font-medium text-[15px]">Intro to Machine Learning</h3>
            <p className="text-gray-400 text-xs mt-1">Kaggle · DeepLearning.AI</p>
            <p className="text-gray-500 text-[11px]">Issued Apr 2024</p>
          </div>

          {/* INSPIRE Program Certification */}
          <div className="bg-[#1f1f1f] border border-gray-800/60 rounded-xl p-4 md:p-5 hover:bg-[#2a2a2a] transition-colors duration-200">
            <div className="flex items-center gap-3 mb-2">
              <img src="/assets/logos/pace.svg" alt="Pace University" className="w-5 h-5 opacity-90" />
              <h3 className="text-white font-medium text-[15px] leading-snug">INSPIRE Program Certification</h3>
            </div>
            <p className="text-gray-400 text-xs mb-1">Pace University</p>
            <p className="text-gray-500 text-[11px]">Issued Apr 2024</p>
          </div>

          {/* Ask Questions to Make Data-Driven Decisions */}
          <div className="bg-[#1f1f1f] border border-gray-800/60 rounded-xl p-4 md:p-5 hover:bg-[#2a2a2a] transition-colors duration-200">
            <div className="flex items-center gap-3 mb-2">
              <img src="/assets/logos/google.svg" alt="Google" className="w-5 h-5 opacity-90" />
              <h3 className="text-white font-medium text-[15px] leading-snug">Ask Questions to Make Data-Driven Decisions</h3>
            </div>
            <p className="text-gray-400 text-xs mb-1">Google</p>
            <p className="text-gray-500 text-[11px]">Issued Jan 2023</p>
          </div>


          {/* Android Development (Udemy) */}
          <div className="bg-[#1f1f1f] border border-gray-800/60 rounded-xl p-4 md:p-5 hover:bg-[#2a2a2a] transition-colors duration-200">
            <div className="flex items-center gap-3 mb-2">
              <img src="/assets/logos/udemy.svg" alt="Udemy" className="w-5 h-5 opacity-90" />
              <h3 className="text-white font-medium text-[15px] leading-snug">Android Development</h3>
            </div>
            <p className="text-gray-400 text-xs mb-1">Udemy</p>
            <p className="text-gray-500 text-[11px]">Issued Jan 2020</p>
          </div>

          {/* Kaggle - Python */}
          <div className="bg-[#1f1f1f] border border-gray-800/60 rounded-xl p-4 hover:bg-[#2a2a2a] transition-colors duration-200">
            <img src="/assets/certificates/akash-python.png" alt="Python" className="rounded-lg mb-3 shadow-md" />
            <h3 className="text-white font-medium text-[15px]">Python</h3>
            <p className="text-gray-400 text-xs mt-1">Kaggle · DeepLearning.AI</p>
            <p className="text-gray-500 text-[11px]">Issued Jun 2023</p>
          </div>

          {/* Kaggle - Intro to Programming */}
          <div className="bg-[#1f1f1f] border border-gray-800/60 rounded-xl p-4 hover:bg-[#2a2a2a] transition-colors duration-200">
            <img src="/assets/certificates/akash-intro-programming.png" alt="Intro to Programming" className="rounded-lg mb-3 shadow-md" />
            <h3 className="text-white font-medium text-[15px]">Intro to Programming</h3>
            <p className="text-gray-400 text-xs mt-1">Kaggle · DeepLearning.AI</p>
            <p className="text-gray-500 text-[11px]">Issued Jun 2023</p>
          </div>

          {/* Introduction to Programming Using Python (Udemy) */}
          <div className="bg-[#1f1f1f] border border-gray-800/60 rounded-xl p-4 md:p-5 hover:bg-[#2a2a2a] transition-colors duration-200">
            <div className="flex items-center gap-3 mb-2">
              <img src="/assets/logos/udemy.svg" alt="Udemy" className="w-5 h-5 opacity-90" />
              <h3 className="text-white font-medium text-[15px] leading-snug">Introduction to Programming Using Python</h3>
            </div>
            <p className="text-gray-400 text-xs mb-1">Udemy</p>
            <p className="text-gray-500 text-[11px]">Issued Jan 2020</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Certifications;
