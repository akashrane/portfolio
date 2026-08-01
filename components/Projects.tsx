"use client";
import { useState } from "react";
import { FaGithub, FaYoutube, FaExternalLinkAlt, FaFilePdf } from "react-icons/fa";
import { Project, projects } from "@/data/projects";

const ProjectCard = ({ project }: { project: Project }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const shouldTruncate = project.description.length > 150;

  const displayDescription = isExpanded
    ? project.description
    : project.description.slice(0, 150) + (shouldTruncate ? "..." : "");

  return (
    <div className="border border-gray-600 rounded p-4 hover:border-white transition-colors bg-[#1f1f1f]">
      <div className="flex flex-col sm:flex-row justify-between items-start mb-2 gap-2">
        <h3 className="text-lg font-bold text-white mb-1">{project.name}</h3>
        <div className="flex gap-3 shrink-0">
          {project.visitUrl && (
            <a
              href={project.visitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 rounded text-sm text-white font-semibold transition-all shadow-lg hover:shadow-cyan-500/20"
            >
              <FaExternalLinkAlt /> {project.name === "Cameco (CCJ) Equity Research" ? "Visualize Report" : "Visit App"}
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded text-sm text-white transition-colors"
            >
              <FaGithub /> Code
            </a>
          )}
          {project.videoUrl && (
            <a
              href={project.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1 bg-red-600 hover:bg-red-500 rounded text-sm text-white transition-colors"
            >
              {project.name === "Cameco (CCJ) Equity Research" ? <FaFilePdf /> : <FaYoutube />} {project.name === "Cameco (CCJ) Equity Research" ? "Download PDF" : "Watch Demo"}
            </a>
          )}
        </div>
      </div>

      <div className="mb-3 text-sm text-white opacity-90 whitespace-pre-line">
        {displayDescription}
        {shouldTruncate && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="ml-2 text-blue-400 hover:text-blue-300 font-medium focus:outline-none underline"
          >
            {isExpanded ? "Show Less" : "Read More"}
          </button>
        )}
      </div>

      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 text-xs text-white border border-gray-600 rounded hover:border-white hover:text-white transition-colors"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1f1f1f] border-t border-gray-600"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-white mb-6">Projects</h2>
        <div className="space-y-4">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
