"use client";

interface Project {
  id: number;
  name: string;
  description: string;
  tech: string[];
  githubUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: "amex-default-prediction",
    description:
      "ML model to predict credit card default using a large-scale, imbalanced dataset.",
    tech: ["Python", "Dask", "Scikit-learn", "XGBoost", "SHAP"],
    githubUrl: "https://colab.research.google.com/drive/1i0NGQfRjqxhq1-tOWCShLuWgTA2jRpf_?usp=sharing",
  },
  {
    id: 2,
    name: "kurry-kitchen",
    description:
      "Full-stack platform for home-food businesses to manage orders via WhatsApp integration.",
    tech: ["React", "Node.js", "MongoDB", "WhatsApp-API", "Firebase"],
    githubUrl: "https://drive.google.com/file/d/1ddrhnDqn3GXgoEDEyX6sbDYMtdzYVUGi/view",
  },
  {
    id: 3,
    name: "nyc-energy-forecasting",
    description:
      "Time-series model using Prophet to forecast NYC electricity consumption for energy planning.",
    tech: ["Python", "Prophet", "Pandas", "Scikit-learn"],
    githubUrl: "https://www.kaggle.com/code/akashrane2609/nyc-electric-consumption-forecasting-prophet-model/notebook",
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

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1f1f1f] border-t border-gray-600"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-white mb-6">
          Projects
        </h2>
        <div className="space-y-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="border border-gray-600 rounded p-4 hover:border-white transition-colors"
            >
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block mb-2"
              >
                <h3 className="text-lg font-bold text-white hover:underline mb-2">
                  {project.name}
                </h3>
              </a>
              <p className="text-sm text-white opacity-80 mb-3">
                {project.description}
              </p>
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
