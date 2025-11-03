"use client";

import { useState, useRef } from "react";
import { skillTree } from "@/data/skills";
import {
  Brain,
  Code,
  Database,
  BarChart3,
  Cloud,
  Kanban,
  TreePine,
  GitBranch,
  TrendingUp,
  Network,
  FlaskConical,
  Sparkles,
  Settings,
  FileCode,
  Database as DatabaseIcon,
  Code2,
  Cpu,
  Coffee,
  Globe,
  Zap,
  CloudRain,
  Webhook,
  Server,
  Plug,
  ChartBar,
  Activity,
  Workflow,
  HardDrive,
  FunctionSquare,
  Cog,
  Github,
  Container,
  CheckSquare,
  Calendar,
  Users,
  CircleDot,
} from "lucide-react";

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } =
  {
    "Machine Learning": Brain,
    "Programming & Data Processing": Code,
    "Data Engineering & APIs": Database,
    "Visualization & BI Tools": BarChart3,
    "Cloud & DevOps": Cloud,
    "Project Management & Collaboration": Kanban,
  };

const subSkillIconMap: {
  [key: string]: React.ComponentType<{ className?: string }>;
} = {
  // Machine Learning
  "XGBoost": TreePine,
  "Random Forest": GitBranch,
  "Linear Regression": TrendingUp,
  "Neural Networks (TensorFlow, Keras)": Network,
  "Scikit-Learn": FlaskConical,
  "SHAP": Sparkles,
  "Model Tuning & Evaluation": Settings,
  // Programming & Data Processing
  "Python (Pandas, NumPy)": FileCode,
  "SQL (PostgreSQL, MySQL)": DatabaseIcon,
  "R (basic)": Code2,
  "C++": Cpu,
  "Java": Coffee,
  "HTML / CSS / JavaScript": Globe,
  // Data Engineering & APIs
  "FastF1": Zap,
  "Open-Meteo API": CloudRain,
  "Ergast API": DatabaseIcon,
  "Web Scraping (Selenium)": Webhook,
  "OPC-UA": Server,
  "REST APIs": Plug,
  // Visualization & BI Tools
  "Matplotlib": ChartBar,
  "Seaborn": TrendingUp,
  "Power BI": BarChart3,
  "Grafana": Activity,
  "Node-RED": Workflow,
  "InfluxDB": DatabaseIcon,
  // Cloud & DevOps
  "AWS EC2": Server,
  "AWS S3": HardDrive,
  "AWS Lambda (basic)": FunctionSquare,
  "Jenkins CI/CD": Cog,
  "GitHub Actions": Github,
  "Docker fundamentals": Container,
  // Project Management & Collaboration
  "JIRA Agile Workflow": CheckSquare,
  "Sprint Planning": Calendar,
  "Retrospectives": Users,
};

const SkillTree = () => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [hoveredSubSkill, setHoveredSubSkill] = useState<string | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const categories = Object.entries(skillTree);

  const handleMouseEnter = (category: string, index: number) => {
    setHoveredCategory(category);
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredCategory(null);
    setHoveredIndex(null);
  };

  const getSubSkillIcon = (skill: string) => {
    return subSkillIconMap[skill] || CircleDot;
  };

  return (
    <div className="relative flex gap-8">
      {/* Left side: Main skills list */}
      <div className="w-64 flex-shrink-0">
        <div className="space-y-0.5">
          {categories.map(([category], index) => {
            const IconComponent = iconMap[category];
            return (
              <div
                key={category}
                ref={(el) => {
                  itemRefs.current[index] = el;
                }}
                className={`transition-colors cursor-pointer ${
                  hoveredCategory === category
                    ? "bg-white text-[#1f1f1f]"
                    : "text-white"
                }`}
                onMouseEnter={() => handleMouseEnter(category, index)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="flex items-center gap-2 px-4 py-3 text-base font-semibold">
                  {IconComponent && (
                    <IconComponent
                      className={`w-4 h-4 flex-shrink-0 transition-colors ${
                        hoveredCategory === category
                          ? "text-[#1f1f1f]"
                          : "text-gray-400"
                      }`}
                    />
                  )}
                  <span>{category}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Right side: Sub-skills panel (wider than main skills) */}
      <div className="w-90 flex-shrink-0 relative">
        {hoveredCategory && hoveredIndex !== null && (
          <div
            className="transition-colors"
            style={{
              position: "absolute",
              top: itemRefs.current[hoveredIndex]?.offsetTop || 0,
              width: "360px", // ~40% wider than 256px (w-64)
            }}
          >
            <div className="px-4 py-3 space-y-2">
              {skillTree[hoveredCategory as keyof typeof skillTree].map(
                (skill, index) => {
                  const SubSkillIcon = getSubSkillIcon(skill);
                  const isHovered = hoveredSubSkill === skill;
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-base text-gray-300 hover:text-white transition-colors group"
                      onMouseEnter={() => setHoveredSubSkill(skill)}
                      onMouseLeave={() => setHoveredSubSkill(null)}
                    >
                      <SubSkillIcon
                        className={`w-[18px] h-[18px] flex-shrink-0 transition-all ${
                          isHovered
                            ? "stroke-white text-white"
                            : ""
                        }`}
                      />
                      <span>{skill}</span>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SkillTree;
