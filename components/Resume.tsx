import React from "react";
import Link from "next/link";
import { Download, ExternalLink, FileText, ArrowRight } from "lucide-react";

const Resume = () => {
  return (
    <section
      id="resume"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1f1f1f] border-t border-gray-600"
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl font-semibold text-white mb-1">Resume</h2>
            <p className="text-sm text-gray-400">
              Data Scientist & ML Engineer with 3+ years of experience
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/resume"
              className="inline-flex items-center gap-2 bg-white text-[#1f1f1f] px-5 py-2 text-sm font-semibold hover:bg-gray-200 transition-all rounded"
            >
              <FileText className="w-4 h-4" />
              <span>View Full Resume</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <a
              href="/Akash_Rane_Resume.pdf"
              download="Akash_Rane_Resume.pdf"
              className="inline-flex items-center gap-2 border border-gray-500 hover:border-white px-4 py-2 text-sm text-white hover:bg-white hover:text-[#1f1f1f] transition-all rounded"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </a>
          </div>
        </div>

        {/* Resume Summary Card */}
        <div className="border border-gray-600 rounded-lg p-6 bg-[#1a1a1a] hover:border-gray-400 transition-colors">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <span className="text-xs font-mono text-gray-400 uppercase tracking-wider block mb-1">
                Current Role
              </span>
              <p className="text-white font-semibold">Data Scientist</p>
              <p className="text-sm text-gray-300">Shoptaki • New York</p>
              <p className="text-xs text-gray-500 font-mono mt-0.5">
                Jan 2026 – Present
              </p>
            </div>

            <div>
              <span className="text-xs font-mono text-gray-400 uppercase tracking-wider block mb-1">
                Education
              </span>
              <p className="text-white font-semibold">M.S. in Computer Science</p>
              <p className="text-sm text-gray-300">Pace University, NYC</p>
              <p className="text-xs text-emerald-400 font-mono mt-0.5">
                GPA: 3.89 / 4.00
              </p>
            </div>

            <div>
              <span className="text-xs font-mono text-gray-400 uppercase tracking-wider block mb-1">
                Core Domains
              </span>
              <p className="text-white font-semibold">AI/ML & Generative AI</p>
              <p className="text-sm text-gray-300">
                RAG Pipelines • Microservices
              </p>
              <p className="text-xs text-gray-500 mt-0.5">
                Python, LangChain, FastAPI, AWS
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-gray-700/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-gray-400">
            <span>
              Includes full project portfolio, published work, and verified technical credentials.
            </span>
            <div className="flex items-center gap-3">
              <a
                href="/Akash_Rane_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:underline inline-flex items-center gap-1"
              >
                <span>Raw PDF</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <span>•</span>
              <Link href="/resume" className="text-white hover:underline">
                Interactive Viewer →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
