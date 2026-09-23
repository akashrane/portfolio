"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Download,
  ExternalLink,
  Printer,
  ArrowLeft,
  FileText,
  Eye,
  Check,
  Share2,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Globe,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";
import { SiKaggle } from "react-icons/si";

export default function ResumeViewer() {
  const [viewMode, setViewMode] = useState<"pdf" | "web">("pdf");
  const [copied, setCopied] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className="h-screen w-screen overflow-hidden bg-[#121212] text-gray-200 flex flex-col md:flex-row">
      {/* Mobile Top Header (only visible on mobile) */}
      <header className="md:hidden flex items-center justify-between px-4 py-2.5 bg-[#1a1a1a] border-b border-gray-800 z-30 shrink-0">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs text-gray-300 hover:text-white"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Portfolio</span>
        </Link>

        <div className="flex items-center gap-2">
          <a
            href="/Akash_Rane_Resume.pdf"
            download="Akash_Rane_Resume.pdf"
            className="flex items-center gap-1 px-2.5 py-1 text-xs font-semibold text-black bg-white rounded shadow-sm"
          >
            <Download className="w-3 h-3" />
            <span>Download</span>
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-gray-300 hover:text-white bg-gray-800 rounded border border-gray-700"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-4 h-4" />
            ) : (
              <Menu className="w-4 h-4" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[49px] z-40 bg-[#141414]/95 backdrop-blur-md p-6 flex flex-col justify-between border-t border-gray-800 animate-in fade-in duration-200">
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold text-white">Akash Rane, MS</h2>
              <p className="text-xs text-gray-400">
                Data Scientist & ML Engineer
              </p>
            </div>

            {/* View Mode Toggle */}
            <div className="flex bg-gray-800 p-1 rounded-lg border border-gray-700 text-xs">
              <button
                onClick={() => {
                  setViewMode("pdf");
                  setMobileMenuOpen(false);
                }}
                className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-md font-medium ${
                  viewMode === "pdf"
                    ? "bg-[#2b2b2b] text-white shadow-sm border border-gray-600"
                    : "text-gray-400"
                }`}
              >
                <FileText className="w-4 h-4" />
                <span>PDF View</span>
              </button>
              <button
                onClick={() => {
                  setViewMode("web");
                  setMobileMenuOpen(false);
                }}
                className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-md font-medium ${
                  viewMode === "web"
                    ? "bg-[#2b2b2b] text-white shadow-sm border border-gray-600"
                    : "text-gray-400"
                }`}
              >
                <Eye className="w-4 h-4" />
                <span>Web View</span>
              </button>
            </div>

            {/* Actions */}
            <div className="space-y-2.5">
              <a
                href="/Akash_Rane_Resume.pdf"
                download="Akash_Rane_Resume.pdf"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-sm font-semibold text-black bg-white hover:bg-gray-200 rounded-lg transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Download Akash_Rane_Resume.pdf</span>
              </a>

              <a
                href="/Akash_Rane_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-sm text-gray-200 bg-gray-800 hover:bg-gray-700 rounded-lg border border-gray-700 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Open in New Browser Tab</span>
              </a>

              <button
                onClick={handleCopyLink}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-sm text-gray-200 bg-gray-800 hover:bg-gray-700 rounded-lg border border-gray-700 transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-green-400" />
                    <span className="text-green-400">Link Copied!</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-4 h-4" />
                    <span>Share / Copy Link</span>
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="pt-6 border-t border-gray-800 flex justify-center gap-4 text-gray-400">
            <a
              href="https://www.linkedin.com/in/akashrane/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:text-white"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/akashrane"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:text-white"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.kaggle.com/akashrane2609"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:text-white"
            >
              <SiKaggle className="w-5 h-5" />
            </a>
            <a
              href="mailto:akashrane2609@gmail.com"
              className="p-2 hover:text-white"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      )}

      {/* Desktop Left Sidebar */}
      <aside
        className={`hidden md:flex flex-col justify-between shrink-0 bg-[#1a1a1a] border-r border-gray-800 transition-all duration-300 relative z-20 ${
          sidebarOpen ? "w-80 p-6" : "w-16 p-3 items-center"
        }`}
      >
        {/* Toggle Collapse Button */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          title={sidebarOpen ? "Collapse Sidebar" : "Expand Sidebar"}
          className="absolute -right-3.5 top-7 bg-[#252525] hover:bg-[#333333] border border-gray-700 rounded-full p-1 text-gray-300 hover:text-white transition-all shadow-md z-30"
        >
          {sidebarOpen ? (
            <ChevronLeft className="w-4 h-4" />
          ) : (
            <ChevronRight className="w-4 h-4" />
          )}
        </button>

        {/* Top Section of Sidebar */}
        <div className="space-y-6">
          {/* Back to Portfolio */}
          <Link
            href="/"
            className={`inline-flex items-center text-gray-400 hover:text-white transition-colors group ${
              sidebarOpen ? "gap-2 text-xs" : "justify-center"
            }`}
            title="Back to Portfolio"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            {sidebarOpen && <span>Back to Portfolio</span>}
          </Link>

          {/* Profile Header */}
          {sidebarOpen ? (
            <div className="pt-2">
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-gray-700 shrink-0">
                  <Image
                    src="/profile.jpg"
                    alt="Akash Rane"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h1 className="text-base font-bold text-white leading-snug">
                    Akash Rane, MS
                  </h1>
                  <p className="text-xs text-gray-400">
                    Data Scientist & ML Engineer
                  </p>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-1.5 text-[11px] text-gray-400">
                <MapPin className="w-3 h-3 text-gray-500" />
                <span>New York City, NY</span>
              </div>
            </div>
          ) : (
            <div className="pt-2 flex flex-col items-center">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-gray-700">
                <Image
                  src="/profile.jpg"
                  alt="Akash Rane"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          )}

          {/* View Mode Toggle */}
          {sidebarOpen ? (
            <div>
              <label className="text-[10px] uppercase font-mono tracking-wider text-gray-500 block mb-1.5">
                View Mode
              </label>
              <div className="flex bg-gray-800/80 p-1 rounded-lg border border-gray-700 text-xs">
                <button
                  onClick={() => setViewMode("pdf")}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-md font-medium transition-all ${
                    viewMode === "pdf"
                      ? "bg-[#2c2c2c] text-white shadow-sm border border-gray-600"
                      : "text-gray-400 hover:text-gray-200"
                  }`}
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Full PDF</span>
                </button>
                <button
                  onClick={() => setViewMode("web")}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-md font-medium transition-all ${
                    viewMode === "web"
                      ? "bg-[#2c2c2c] text-white shadow-sm border border-gray-600"
                      : "text-gray-400 hover:text-gray-200"
                  }`}
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Web Version</span>
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-2 items-center">
              <button
                onClick={() => setViewMode("pdf")}
                title="Full PDF Document"
                className={`p-2.5 rounded-lg border transition-all ${
                  viewMode === "pdf"
                    ? "bg-[#2c2c2c] text-white border-gray-600"
                    : "text-gray-400 border-transparent hover:text-white"
                }`}
              >
                <FileText className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("web")}
                title="Web Version"
                className={`p-2.5 rounded-lg border transition-all ${
                  viewMode === "web"
                    ? "bg-[#2c2c2c] text-white border-gray-600"
                    : "text-gray-400 border-transparent hover:text-white"
                }`}
              >
                <Eye className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Action Buttons */}
          <div className="space-y-2 pt-2 border-t border-gray-800">
            {sidebarOpen && (
              <label className="text-[10px] uppercase font-mono tracking-wider text-gray-500 block mb-1.5">
                Actions
              </label>
            )}

            {/* Primary Download Button */}
            <a
              href="/Akash_Rane_Resume.pdf"
              download="Akash_Rane_Resume.pdf"
              title="Download Akash_Rane_Resume.pdf"
              className={`flex items-center font-semibold text-black bg-white hover:bg-gray-200 rounded-lg transition-all shadow hover:scale-[1.02] active:scale-[0.98] ${
                sidebarOpen
                  ? "w-full justify-center gap-2 py-2.5 px-3 text-xs"
                  : "w-10 h-10 justify-center p-0"
              }`}
            >
              <Download className="w-4 h-4 shrink-0" />
              {sidebarOpen && <span>Download PDF</span>}
            </a>

            {/* Open Raw PDF in New Tab */}
            <a
              href="/Akash_Rane_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              title="Open raw PDF in new tab"
              className={`flex items-center text-gray-300 hover:text-white bg-gray-800/80 hover:bg-gray-700/80 rounded-lg border border-gray-700 transition-colors ${
                sidebarOpen
                  ? "w-full justify-center gap-2 py-2 px-3 text-xs"
                  : "w-10 h-10 justify-center p-0"
              }`}
            >
              <ExternalLink className="w-3.5 h-3.5 shrink-0" />
              {sidebarOpen && <span>Open in Tab</span>}
            </a>

            {/* Print Button */}
            <button
              onClick={handlePrint}
              title="Print Resume"
              className={`flex items-center text-gray-300 hover:text-white bg-gray-800/80 hover:bg-gray-700/80 rounded-lg border border-gray-700 transition-colors ${
                sidebarOpen
                  ? "w-full justify-center gap-2 py-2 px-3 text-xs"
                  : "w-10 h-10 justify-center p-0"
              }`}
            >
              <Printer className="w-3.5 h-3.5 shrink-0" />
              {sidebarOpen && <span>Print Resume</span>}
            </button>

            {/* Share / Copy Link */}
            <button
              onClick={handleCopyLink}
              title="Copy Page Link"
              className={`flex items-center text-gray-300 hover:text-white bg-gray-800/80 hover:bg-gray-700/80 rounded-lg border border-gray-700 transition-colors ${
                sidebarOpen
                  ? "w-full justify-center gap-2 py-2 px-3 text-xs"
                  : "w-10 h-10 justify-center p-0"
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-green-400 shrink-0" />
                  {sidebarOpen && (
                    <span className="text-green-400">Link Copied!</span>
                  )}
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5 shrink-0" />
                  {sidebarOpen && <span>Share Link</span>}
                </>
              )}
            </button>
          </div>
        </div>

        {/* Bottom Social / Contact Links */}
        <div className="pt-4 border-t border-gray-800">
          {sidebarOpen ? (
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-gray-400">
                <a
                  href="https://www.linkedin.com/in/akashrane/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors p-1"
                  title="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://github.com/akashrane"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors p-1"
                  title="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://www.kaggle.com/akashrane2609"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-400 transition-colors p-1"
                  title="Kaggle"
                >
                  <SiKaggle className="w-4 h-4" />
                </a>
                <a
                  href="mailto:akashrane2609@gmail.com"
                  className="hover:text-red-400 transition-colors p-1"
                  title="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href="tel:+12019188710"
                  className="hover:text-green-400 transition-colors p-1"
                  title="Call"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>
              <p className="text-[10px] text-gray-600 text-center font-mono">
                Akash_Rane_Resume.pdf
              </p>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-3 text-gray-400">
              <a
                href="https://www.linkedin.com/in/akashrane/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/akashrane"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          )}
        </div>
      </aside>

      {/* Main Full-Page Resume Viewing Area */}
      <main className="flex-1 h-full overflow-hidden relative bg-[#121212] flex flex-col">
        {/* PDF VIEW (Full viewport height & width, 0 wasted space) */}
        {viewMode === "pdf" && (
          <div className="w-full h-full flex flex-col">
            <iframe
              src="/Akash_Rane_Resume.pdf#toolbar=1&navpanes=0&view=Fit"
              title="Akash Rane Resume PDF"
              className="w-full h-full border-none bg-[#2c2c2c] flex-1"
            />
          </div>
        )}

        {/* WEB INTERACTIVE VIEW (Scrollable only if in web view) */}
        {viewMode === "web" && (
          <div className="w-full h-full overflow-y-auto p-4 sm:p-8 lg:p-12">
            <div className="max-w-4xl mx-auto bg-[#1c1c1c] border border-gray-700 rounded-2xl p-6 sm:p-10 shadow-2xl mb-8">
              {/* Header Section */}
              <div className="border-b border-gray-700 pb-6 text-center">
                <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                  Akash Rane, MS
                </h1>
                <p className="text-gray-400 font-medium text-sm sm:text-base mt-1">
                  Data Scientist & ML Engineer
                </p>

                {/* Contact & Social Links */}
                <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs sm:text-sm text-gray-300">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-gray-400" />
                    New York City, NY
                  </span>
                  <span className="text-gray-600 hidden sm:inline">•</span>
                  <a
                    href="mailto:akashrane2609@gmail.com"
                    className="flex items-center gap-1.5 text-gray-200 hover:text-white underline decoration-gray-600 underline-offset-2 hover:decoration-white"
                  >
                    <Mail className="w-3.5 h-3.5 text-gray-400" />
                    akashrane2609@gmail.com
                  </a>
                  <span className="text-gray-600 hidden sm:inline">•</span>
                  <a
                    href="tel:+12019188710"
                    className="flex items-center gap-1.5 text-gray-200 hover:text-white"
                  >
                    <Phone className="w-3.5 h-3.5 text-gray-400" />
                    +1 (201) 918-8710
                  </a>
                </div>

                {/* Social Profile Badges */}
                <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs">
                  <a
                    href="https://www.linkedin.com/in/akashrane/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#252525] hover:bg-[#303030] text-gray-300 hover:text-white rounded border border-gray-700 transition-colors"
                  >
                    <Linkedin className="w-3.5 h-3.5 text-[#0a66c2]" />
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/akashrane"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#252525] hover:bg-[#303030] text-gray-300 hover:text-white rounded border border-gray-700 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5 text-gray-200" />
                    GitHub
                  </a>
                  <a
                    href="https://www.kaggle.com/akashrane2609"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#252525] hover:bg-[#303030] text-gray-300 hover:text-white rounded border border-gray-700 transition-colors"
                  >
                    <SiKaggle className="w-3.5 h-3.5 text-[#20beff]" />
                    Kaggle
                  </a>
                  <Link
                    href="/"
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#252525] hover:bg-[#303030] text-gray-300 hover:text-white rounded border border-gray-700 transition-colors"
                  >
                    <Globe className="w-3.5 h-3.5 text-emerald-400" />
                    Portfolio
                  </Link>
                </div>
              </div>

              {/* SUMMARY */}
              <div className="mt-6 border-b border-gray-700 pb-6">
                <h2 className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-2">
                  SUMMARY
                </h2>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Data Scientist and ML engineer with an M.S. in Computer Science
                  and 3+ years of experience building AI/ML systems, RAG
                  pipelines, and production-oriented software applications. At
                  Shoptaki, developed ML-based KYC verification, LangChain-powered
                  RAG workflows, and scalable microservices for identity and risk
                  decision systems. Previously built real-time Python/IoT
                  analytics solutions at Optify, including sensor-data pipelines,
                  monitoring dashboards, and on-site system deployments.
                  Comfortable and proficient with a wide range of AI tools, coding
                  assistants, and AI agents, using them extensively across
                  development, research, analysis, and automation.
                </p>
              </div>

              {/* SKILLS */}
              <div className="mt-6 border-b border-gray-700 pb-6">
                <h2 className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-3">
                  SKILLS
                </h2>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-semibold text-white">
                      Data Science & ML:{" "}
                    </span>
                    <span className="text-gray-300">
                      Python, Pandas, NumPy, Scikit-learn, Feature Engineering,
                      Hyperparameter Tuning, Model Evaluation.
                    </span>
                  </div>
                  <div>
                    <span className="font-semibold text-white">
                      Generative AI & RAG:{" "}
                    </span>
                    <span className="text-gray-300">
                      LLMs, RAG, LangGraph, Prompt Engineering, Embeddings, BM25,
                      Hybrid Retrieval, Cross-Encoder Reranking.
                    </span>
                  </div>
                  <div>
                    <span className="font-semibold text-white">
                      Data & Analytics:{" "}
                    </span>
                    <span className="text-gray-300">
                      SQL, PostgreSQL, Power BI, Matplotlib, Exploratory Data
                      Analysis, Data Cleaning & Preprocessing.
                    </span>
                  </div>
                  <div>
                    <span className="font-semibold text-white">
                      AI Engineering & Cloud:{" "}
                    </span>
                    <span className="text-gray-300">
                      FastAPI, REST APIs, Supabase, Docker, AWS, Apache Kafka,
                      Git.
                    </span>
                  </div>
                </div>
              </div>

              {/* PROFESSIONAL EXPERIENCE */}
              <div className="mt-6 border-b border-gray-700 pb-6">
                <h2 className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-4">
                  PROFESSIONAL EXPERIENCE
                </h2>

                <div className="space-y-6">
                  {/* Shoptaki */}
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
                      <div className="flex items-baseline gap-2">
                        <h3 className="font-bold text-white text-base">
                          Shoptaki
                        </h3>
                        <span className="text-xs text-gray-400">New York</span>
                      </div>
                      <span className="text-xs font-mono text-gray-400">
                        Jan 2026 – Present
                      </span>
                    </div>
                    <div className="text-sm font-semibold text-gray-300 mb-2">
                      Data Scientist
                    </div>
                    <ul className="list-disc list-outside pl-4 space-y-1.5 text-xs sm:text-sm text-gray-300 leading-relaxed">
                      <li>
                        Designed an end-to-end AI-based KYC verification pipeline
                        using Python and Scikit-learn, integrating structured and
                        unstructured identity data with ML risk scoring to
                        automatically classify users into auto-verify,
                        human-review, or auto-reject workflows.
                      </li>
                      <li>
                        Built a Retrieval-Augmented Generation (RAG) pipeline
                        using LangChain to extract information from identity
                        documents, retrieve verification context, and
                        cross-reference user records against KYC rules for
                        automated decision support.
                      </li>
                      <li>
                        Engineered ML classification models for high-risk profile
                        detection and integrated model outputs into downstream
                        application workflows for automated decision support.
                      </li>
                      <li>
                        Architected a 5-service microservices backend (gateway,
                        auth, user, messaging, master) supporting WebSocket chat,
                        WebRTC audio/video calling, and AES-256-GCM encrypted
                        storage.
                      </li>
                    </ul>
                  </div>

                  {/* Optify */}
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
                      <div className="flex items-baseline gap-2">
                        <h3 className="font-bold text-white text-base">
                          Optify Industrial Solutions Pvt. Ltd.
                        </h3>
                        <span className="text-xs text-gray-400">Pune, India</span>
                      </div>
                      <span className="text-xs font-mono text-gray-400">
                        Jul 2022 – Dec 2023
                      </span>
                    </div>
                    <div className="text-sm font-semibold text-gray-300 mb-2">
                      Data Engineer and Analyst
                    </div>
                    <ul className="list-disc list-outside pl-4 space-y-1.5 text-xs sm:text-sm text-gray-300 leading-relaxed">
                      <li>
                        Led end-to-end design and development of a Python-based
                        IoT analytics platform liaising with factory owners to
                        gather requirements, implementing OPC-UA and MQTT
                        protocols for real-time sensor data transmission, and
                        delivering Node-RED and Grafana dashboards that
                        significantly improved operational oversight.
                      </li>
                      <li>
                        Managed a 1-month on-site deployment as primary technical
                        and client-facing lead, configuring interfaces, debugging
                        systems, and ensuring 100% operational integration and
                        project sign-off.
                      </li>
                      <li>
                        Created data-backed presentations on operational
                        efficiency gains and presented findings to senior
                        government stakeholders, securing innovation grant
                        approvals demonstrating the ability to translate complex
                        technical insights for non-technical executives.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* PROJECTS */}
              <div className="mt-6 border-b border-gray-700 pb-6">
                <div className="flex items-baseline justify-between mb-4">
                  <h2 className="text-xs uppercase tracking-widest text-gray-400 font-bold">
                    PROJECTS
                  </h2>
                  <span className="text-[11px] text-gray-400 italic">
                    All projects are available on GitHub (click titles to explore)
                  </span>
                </div>

                <div className="space-y-5">
                  {/* F1 Pit-Stop */}
                  <div>
                    <div className="flex flex-wrap items-baseline gap-2 mb-1">
                      <a
                        href="https://github.com/akashrane/F1-Pitstop-and-Driver-Position-Strategy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-white text-sm sm:text-base hover:underline inline-flex items-center gap-1"
                      >
                        F1 Pit-Stop & Driver Position Prediction
                        <ExternalLink className="w-3 h-3 text-gray-400" />
                      </a>
                      <span className="text-xs text-gray-400">
                        | Scikit-learn, FastF1/OpenF1, GitHub Actions
                      </span>
                    </div>
                    <ul className="list-disc list-outside pl-4 space-y-1 text-xs sm:text-sm text-gray-300 leading-relaxed">
                      <li>
                        Built end-to-end ML pipelines using historical race,
                        tyre, weather, and driver data to predict finishing
                        positions and pit-stop strategies with leakage-safe
                        feature engineering and chronological validation.
                      </li>
                      <li>
                        Compared and evaluated machine-learning models using
                        future-season holdouts and performance metrics, while
                        building automated data pipelines spanning verified F1
                        datasets with 7K+ views and 1K+ downloads.
                      </li>
                    </ul>
                  </div>

                  {/* Failure-Pattern Retrieval */}
                  <div>
                    <div className="flex flex-wrap items-baseline gap-2 mb-1">
                      <h3 className="font-bold text-white text-sm sm:text-base">
                        Failure—Pattern Retrieval Assistant
                      </h3>
                      <span className="text-xs text-gray-400">
                        | Python, Chroma, OpenAI, BM25, RAG
                      </span>
                    </div>
                    <ul className="list-disc list-outside pl-4 space-y-1 text-xs sm:text-sm text-gray-300 leading-relaxed">
                      <li>
                        Built a hybrid RAG system combining semantic embeddings,
                        BM25, Reciprocal Rank Fusion, and cross-encoder reranking
                        to retrieve similar equipment failures and generate
                        citation-backed root-cause recommendations.
                      </li>
                      <li>
                        Developed failure-mode evaluation using Precision@K and
                        confidence-based pattern analysis to measure retrieval
                        quality and identify recurring systemic failure patterns.
                      </li>
                    </ul>
                  </div>

                  {/* Job Hawk */}
                  <div>
                    <div className="flex flex-wrap items-baseline gap-2 mb-1">
                      <h3 className="font-bold text-white text-sm sm:text-base">
                        Job Hawk — AI-Powered Job Application Agent
                      </h3>
                      <span className="text-xs text-gray-400">
                        | Python, FastAPI, LangGraph, Llama, Gemini, Supabase
                      </span>
                    </div>
                    <ul className="list-disc list-outside pl-4 space-y-1 text-xs sm:text-sm text-gray-300 leading-relaxed">
                      <li>
                        Built an AI agent that parses resumes, discovers jobs,
                        and scores candidate-job fit across skills, experience,
                        domain relevance, and role alignment using LLM-driven
                        structured evaluation.
                      </li>
                      <li>
                        Orchestrated resume analysis, job ranking, and tailored
                        application generation through LangGraph workflows with
                        FastAPI and Supabase-backed human approval and application
                        tracking.
                      </li>
                    </ul>
                  </div>

                  {/* NLP-Powered Power BI */}
                  <div>
                    <div className="flex flex-wrap items-baseline gap-2 mb-1">
                      <h3 className="font-bold text-white text-sm sm:text-base">
                        NLP-Powered Power BI Custom Visual
                      </h3>
                      <span className="text-xs text-gray-400">
                        | TypeScript, D3.js, Gemini 2.5 Flash
                      </span>
                    </div>
                    <ul className="list-disc list-outside pl-4 space-y-1 text-xs sm:text-sm text-gray-300 leading-relaxed">
                      <li>
                        Built an NLP-powered Power BI visual that translates
                        natural-language analytics questions into dynamically
                        generated charts using intent classification, fuzzy field
                        matching, and Gemini fallback.
                      </li>
                      <li>
                        Developed validation and field-matching logic that maps
                        user queries to appropriate dataset dimensions and
                        measures while preventing invalid or misleading chart
                        generation.
                      </li>
                    </ul>
                  </div>

                  {/* FinStream */}
                  <div>
                    <div className="flex flex-wrap items-baseline gap-2 mb-1">
                      <a
                        href="https://github.com/akashrane/FinStream"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-white text-sm sm:text-base hover:underline inline-flex items-center gap-1"
                      >
                        FinStream — Real-Time Financial Analytics Platform
                        <ExternalLink className="w-3 h-3 text-gray-400" />
                      </a>
                      <span className="text-xs text-gray-400">
                        | Python, PostgreSQL, WebSockets, REST APIs, Docker, AWS
                      </span>
                    </div>
                    <ul className="list-disc list-outside pl-4 space-y-1 text-xs sm:text-sm text-gray-300 leading-relaxed">
                      <li>
                        Built real-time financial data pipelines to ingest,
                        normalize, store, and serve multi-source market data for
                        portfolio tracking, market analysis, and downstream
                        analytical workflows.
                      </li>
                      <li>
                        Developed transformations for price movement, portfolio
                        performance, gain/loss, and market metrics while
                        supporting low-latency delivery through APIs, persistent
                        storage, and streaming architecture.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* EDUCATION */}
              <div className="mt-6">
                <h2 className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-4">
                  EDUCATION
                </h2>
                <div className="space-y-4">
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-0.5">
                      <h3 className="font-bold text-white text-sm sm:text-base">
                        Pace University, Seidenberg School of Computer Science
                        and Information Systems
                      </h3>
                      <span className="text-xs text-gray-400">New York, NY</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs sm:text-sm text-gray-300">
                      <span>
                        Master’s in Computer Science |{" "}
                        <span className="font-semibold text-white">
                          GPA: 3.89/4.00
                        </span>
                      </span>
                      <span className="font-mono text-gray-400">Dec 2025</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-0.5">
                      <h3 className="font-bold text-white text-sm sm:text-base">
                        SPPU - Savitribai Phule Pune University
                      </h3>
                      <span className="text-xs text-gray-400">Pune, India</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs sm:text-sm text-gray-300">
                      <span>
                        Bachelor of Engineering in Computer Engineering |
                        Concentration: Data Science |{" "}
                        <span className="font-semibold text-white">
                          GPA: 8.18/10
                        </span>
                      </span>
                      <span className="font-mono text-gray-400">Jul 2022</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer inside Web Resume */}
              <div className="mt-10 pt-6 border-t border-gray-700 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-gray-500">
                  Official Resume • Akash Rane • Akash_Rane_Resume.pdf
                </span>
                <a
                  href="/Akash_Rane_Resume.pdf"
                  download="Akash_Rane_Resume.pdf"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-black bg-white hover:bg-gray-200 rounded-lg transition-colors shadow"
                >
                  <Download className="w-3.5 h-3.5" />
                  Download Akash_Rane_Resume.pdf
                </a>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
