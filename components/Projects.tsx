"use client";
import { useState } from "react";
import { FaGithub, FaYoutube, FaExternalLinkAlt } from "react-icons/fa";

interface Project {
  id: number;
  name: string;
  description: string;
  tech: string[];
  githubUrl?: string;
  videoUrl?: string;
  visitUrl?: string;
}

const projects: Project[] = [
  {
    id: 102,
    name: "Sequence Pro – Multiplayer Strategy Game Simulator",
    description: `Designed and built a full-stack, real-time web application that digitizes the popular board game "Sequence". The platform features a robust game engine, real-time multiplayer capabilities, and an advanced AI simulation laboratory for strategy analysis.

Key Features:
• Real-Time Multiplayer: Engineered a low-latency WebSocket architecture using FastAPI, enabling players to create private rooms, join via codes, and play turn-based matches with live state synchronization.
• Advanced Game Engine: Developed a deterministic Python game engine handling complex rules (Two-Eyed/One-Eyed Jacks, corner locking, sequence validation) with 100% accuracy.
• AI & Simulation Lab: Implemented a Monte Carlo Simulation system to run thousands of AI-vs-AI games in parallel, generating statistical insights on win rates and turn efficiency using Pandas.
• Modern Interactive UI: Built a responsive, high-fidelity frontend with React, TypeScript, and Tailwind CSS. Features include a 3D-perspective board, Framer Motion animations for card plays, and a glassmorphism design aesthetic.
• Resilient Architecture: Implemented a robust "Slot System" for player connection management, ensuring session stability and automatic reconnection handling.

Tech Stack:
Frontend: React, TypeScript, Vite, Tailwind CSS, Framer Motion, Lucide React.
Backend: Python, FastAPI, WebSockets, Uvicorn, Pandas (Data Analysis).
Architecture: Client-Server model with REST APIs for game management and WebSockets for real-time gameplay events.`,
    tech: ["React", "TypeScript", "FastAPI", "WebSockets", "Python", "TailwindCSS"],
    githubUrl: "https://github.com/akashrane/Sequence",
    visitUrl: "https://sequence-kohl.vercel.app/",
  },
  {
    id: 103,
    name: "Global Supply Chain Control Tower – AI-Driven Logistics Optimization Platform",
    description: `Developed an end-to-end analytical platform designed to transform static supply chain data into actionable intelligence. The "Control Tower" provides real-time visibility into global logistics, utilizes Machine Learning to predict shipment delays, and enables strategic "What-If" scenario planning.

Key Features:
• Advanced Visualization: Interactive Plotly dashboards featuring global heatmaps, dynamic SLA gauges, and a NetworkX graph modeling physical logistics flows.
• Predictive AI: Trained a Random Forest classification model to predict the probability of late deliveries at the order level, allowing for proactive risk mitigation.
• AI Analyst Agent: Integrated a natural language chatbot that enables users to query data (e.g., "Show me top 5 losing products") and generates charts on the fly.
• Strategy Simulation: Built a "What-If" simulator that quantifies the financial impact of operational changes (e.g., reducing shipping days by 1).
• Automated Reporting: Engineered a one-click PDF Executive Brief generator using FPDF for instant stakeholder reporting.

Technical Constraints Solved:
• Implemented a Star Schema data model for efficient querying.
• Solved GitHub file size limits by engineering a custom "Split & Merge" data loader to handle 100MB+ datasets seamlessly in cloud deployments.`,
    tech: [
      "Python",
      "Streamlit",
      "Pandas",
      "Scikit-Learn",
      "Plotly",
      "NetworkX",
    ],
    visitUrl: "https://akashraneglobalsuppychaincontroltower.streamlit.app/",
    githubUrl: "https://github.com/akashrane/Global-Supply-Chain-Control-Tower",
  },
  {
    id: 101, // Giving it a high ID or 0 to be top
    name: "FinStream – Real-Time Financial Analytics Platform",
    description: `FinStream is a comprehensive financial dashboard that empowers users to track stock market trends, manage portfolios, and analyze assets in real-time. The application utilizes a scalable microservices architecture to handle high-frequency data updates and complex analytical tasks. Key features include a customizable watchlist with interactive candlestick charts, automated email alerts for price movements, and a premium subscription model with PDF invoice generation.

Key Features:
• Live Market Dashboard: Real-time streaming of stock prices, indices, and top gainers/losers using WebSockets.
• Interactive Charting: Advanced technical analysis tools with TradingView Lightweight Charts and Chart.js.
• AI-Powered Insights: Integrated LangChain4j services for intelligent data processing and market analysis.
• Portfolio Management: Tools for tracking holdings, calculating performance metrics, and visualizing asset allocation.
• Secure Authentication: Enterprise-grade security using Keycloak (OIDC) for user identity management.
• Automated Alerts: Node.js-based notification service for sending timely email alerts via SMTP.`,
    tech: [
      "React",
      "TypeScript",
      "Node.js",
      "WebSockets",
      "Keycloak",
      "LangChain4j",
      "Chart.js",
    ],
    githubUrl: "https://github.com/akashrane/FinStream",
    visitUrl: "https://fin-stream-nu.vercel.app/",
    videoUrl:
      "https://drive.google.com/file/d/1TQyOq37F1EtofhfGkHPbR9Tbuk7wj1A8/view?usp=drive_link",
  },
  {
    id: 1,
    name: "amex-default-prediction",
    description:
      "ML model to predict credit card default using a large-scale, imbalanced dataset.",
    tech: ["Python", "Dask", "Scikit-learn", "XGBoost", "SHAP"],
    githubUrl:
      "https://colab.research.google.com/drive/1i0NGQfRjqxhq1-tOWCShLuWgTA2jRpf_?usp=sharing",
  },
  {
    id: 2,
    name: "kurry-kitchen",
    description:
      "Full-stack platform for home-food businesses to manage orders via WhatsApp integration.",
    tech: ["React", "Node.js", "MongoDB", "WhatsApp-API", "Firebase"],
    githubUrl: "https://github.com/akashrane/kurry-kitchen",
    videoUrl:
      "https://drive.google.com/file/d/1ddrhnDqn3GXgoEDEyX6sbDYMtdzYVUGi/view",
  },
  {
    id: 3,
    name: "nyc-energy-forecasting",
    description:
      "Time-series model using Prophet to forecast NYC electricity consumption for energy planning.",
    tech: ["Python", "Prophet", "Pandas", "Scikit-learn"],
    githubUrl:
      "https://www.kaggle.com/code/akashrane2609/nyc-electric-consumption-forecasting-prophet-model/notebook",
  },
  {
    id: 4,
    name: "automated-factory-reports",
    description:
      "Real-time analytics platform to process and visualize factory sensor data for operational reporting.",
    tech: ["Python", "InfluxDB", "Grafana", "Node-RED", "OPC-UA"],
    githubUrl: "https://github.com/akashrane",
  },
  {
    id: 5,
    name: "f1-strategy-model",
    description:
      "End-to-end ML pipeline predicting driver position changes from pit stop, tire, and weather data.",
    tech: ["Python", "FastF1", "Ergast-API", "XGBoost", "SHAP"],
    githubUrl: "https://github.com/akashrane/F1-Pitstop-and-Driver-Position-Strategy",
  },
];

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
        <div className="flex flex-wrap gap-3">
          {project.visitUrl && (
            <a
              href={project.visitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 rounded text-sm text-white font-semibold transition-all shadow-lg hover:shadow-cyan-500/20"
            >
              <FaExternalLinkAlt /> Visit App
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
              <FaYoutube /> Watch Demo
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
