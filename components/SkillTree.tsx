"use client";

import { useState, useRef, useEffect } from "react";
import { skillTree } from "@/data/skills";
import { motion, AnimatePresence } from "framer-motion";
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
  Bot,
  Command,
} from "lucide-react";

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } =
{
  "Machine Learning": Brain,
  "Programming & Data Processing": Code,
  "Data Engineering & APIs": Database,
  "Visualization & BI Tools": BarChart3,
  "Cloud & DevOps": Cloud,
  "Project Management & Collaboration": Kanban,
  "Agentic AI": Bot,
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
  // Agentic AI
  "LangChain": Sparkles,
  "LlamaIndex": Brain,
  "OpenAI API": Network,
  "Hugging Face Transformers": Zap,
  "CrewAI": Workflow,
  "AutoGen": GitBranch,
  "Function Calling (OpenAI / Anthropic)": Plug,
  "Prompt Engineering": Command,
  "Vector Databases (Pinecone, FAISS, ChromaDB)": DatabaseIcon,
  "RAG Pipelines": Settings,
  "Agent Workflows & Memory Management": Cpu,
};

const SkillTree = () => {
  const [pinnedCategory, setPinnedCategory] = useState<string | null>(null);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [hoveredSubSkill, setHoveredSubSkill] = useState<string | null>(null);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const leftColRef = useRef<HTMLDivElement | null>(null);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const panelRef = useRef<HTMLDivElement | null>(null);

  // Reorder categories explicitly (Agentic AI on top, and move Cloud & DevOps above Visualization)
  const categoriesArray = Object.entries(skillTree);
  const desiredOrder = [
    "Agentic AI",
    "Machine Learning",
    "Programming & Data Processing",
    "Data Engineering & APIs",
    "Cloud & DevOps",
    "Visualization & BI Tools",
    "Project Management & Collaboration",
  ];

  const reorderedCategories = desiredOrder
    .map((key) => categoriesArray.find(([k]) => k === key))
    .filter(Boolean) as [string, string[]][];

  const getSubSkillIcon = (skill: string) => subSkillIconMap[skill] || CircleDot;

  // visibleCategory: if hovering any category show that (preview), else show pinned
  const visibleCategory = hoveredCategory ?? pinnedCategory;

  // Track panel position (top) and whether we're on small screen
  const [panelTop, setPanelTop] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  // visual tuning constants (easy to tweak)
  const RAISE_PX = 10; // how much to raise the panel visually

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 640);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // compute panel top based on the visible category's button offsetTop
  useEffect(() => {
    if (!visibleCategory || !containerRef.current || !leftColRef.current) {
      setPanelTop(null);
      return;
    }

    const idx = reorderedCategories.findIndex(([c]) => c === visibleCategory);
    const btn = buttonRefs.current[idx];

    if (!btn) {
      setPanelTop(null);
      return;
    }

    // desired top (raise panel slightly)
    const desiredTop = btn.offsetTop - RAISE_PX;

    // boundary check: ensure panel doesn't overflow container vertically
    const containerHeight = containerRef.current.offsetHeight;
    const panelHeight = panelRef.current?.offsetHeight ?? 0;
    const maxTop = Math.max(0, containerHeight - panelHeight - 10);

    const top = Math.min(Math.max(0, desiredTop), maxTop);
    setPanelTop(top);
  }, [visibleCategory, reorderedCategories, isMobile]);

  // Close on outside click or Escape
  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        panelRef.current &&
        !panelRef.current.contains(target) &&
        leftColRef.current &&
        !leftColRef.current.contains(target)
      ) {
        setPinnedCategory(null);
        setHoveredCategory(null);
      }
    };

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setPinnedCategory(null);
        setHoveredCategory(null);
      }
    };

    document.addEventListener("mousedown", handleOutside);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  const handleClickCategory = (category: string) => {
    setPinnedCategory((prev) => (prev === category ? null : category));
    // clear hover when clicking
    setHoveredCategory(null);
  };

  const handleMouseEnterCategory = (category: string) => {
    setHoveredCategory(category);
  };

  const handleMouseLeaveCategory = () => {
    setHoveredCategory(null);
  };

  return (
    <div ref={containerRef} className="relative">
      <div className="flex gap-0">
        {/* Left column with categories */}
        <div ref={leftColRef} className="flex flex-col">
          {reorderedCategories.map(([category], idx) => {
            const IconComponent = iconMap[category];
            const isPinned = pinnedCategory === category;
            const isPreview = hoveredCategory === category;

            return (
              <button
                key={category}
                ref={(el) => { buttonRefs.current[idx] = el; }}
                onClick={() => handleClickCategory(category)}
                onMouseEnter={() => handleMouseEnterCategory(category)}
                onMouseLeave={handleMouseLeaveCategory}
                className={`flex items-center gap-3 px-4 py-3 text-base font-semibold transition-colors duration-200 border-l-2 ${isPinned
                    ? "bg-white text-[#1f1f1f] border-white"
                    : isPreview
                      ? "bg-[#f5f5f5] text-[#1f1f1f] border-transparent"
                      : "text-[#e5e5e5] border-transparent hover:bg-[#f5f5f5] hover:text-[#1f1f1f]"
                  }`}
              >
                {IconComponent && (
                  <IconComponent
                    className={`w-5 h-5 flex-shrink-0 transition-colors ${isPinned || isPreview ? "text-[#1f1f1f]" : "text-[#e5e5e5]"
                      }`}
                  />
                )}
                <span className="whitespace-nowrap">{category}</span>
              </button>
            );
          })}
        </div>

        {/* Side-floating panel */}
        <AnimatePresence>
          {visibleCategory && (
            <motion.div
              ref={panelRef}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className={`absolute z-10 ${isMobile ? 'static w-full' : ''}`}
              style={{
                left: leftColRef.current ? leftColRef.current.offsetWidth + 12 : undefined,
                top: typeof panelTop === "number" ? panelTop : undefined,
                width: isMobile ? undefined : 420,
              }}
              onClick={(e) => e.stopPropagation()}
              onMouseEnter={() => setHoveredCategory(visibleCategory)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <div
                className={`px-6 py-4 ${isMobile ? 'bg-transparent' : 'bg-transparent shadow-lg ring-1 ring-white/5'}`}
              >
                <div className="space-y-2">
                  {skillTree[visibleCategory as keyof typeof skillTree].map(
                    (skill, i) => {
                      const SubSkillIcon = getSubSkillIcon(skill);
                      const isHovered = hoveredSubSkill === skill;

                      return (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.18, delay: i * 0.02 }}
                          className="flex items-center gap-3 text-base text-[#cccccc] hover:text-white transition-colors group cursor-default"
                          onMouseEnter={() => setHoveredSubSkill(skill)}
                          onMouseLeave={() => setHoveredSubSkill(null)}
                        >
                          <SubSkillIcon
                            className={`w-5 h-5 flex-shrink-0 transition-all ${isHovered ? "text-white scale-110" : "text-gray-500"
                              }`}
                          />
                          <span className={`${isHovered ? "text-white" : ""}`}>
                            {skill}
                          </span>
                        </motion.div>
                      );
                    }
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SkillTree;
