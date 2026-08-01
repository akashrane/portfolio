export interface Project {
    id: number;
    name: string;
    description: string;
    tech: string[];
    githubUrl?: string;
    videoUrl?: string;
    visitUrl?: string;
}

export const projects: Project[] = [
    {
        id: 102,
        name: "Sequence Pro – Multiplayer Strategy Game Simulator",
        description: `Designed and built a full-stack, real-time web application that digitizes the popular board game "Sequence". The platform features a robust game engine, real-time multiplayer capabilities, and an advanced AI simulation laboratory for strategy analysis.`,
        tech: ["React", "TypeScript", "FastAPI", "WebSockets", "Python", "TailwindCSS"],
        githubUrl: "https://github.com/akashrane/Sequence",
        visitUrl: "https://sequence-kohl.vercel.app/",
    },
    {
        id: 103,
        name: "Global Supply Chain Control Tower – AI-Driven Logistics Optimization Platform",
        description: `Developed an end-to-end analytical platform designed to transform static supply chain data into actionable intelligence. The "Control Tower" provides real-time visibility into global logistics, utilizes Machine Learning to predict shipment delays, and enables strategic "What-If" scenario planning.`,
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
        id: 101,
        name: "FinStream – Real-Time Financial Analytics Platform",
        description: `FinStream is a comprehensive financial dashboard that empowers users to track stock market trends, manage portfolios, and analyze assets in real-time. The application utilizes a scalable microservices architecture to handle high-frequency data updates and complex analytical tasks.`,
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
        videoUrl: "https://drive.google.com/file/d/1TQyOq37F1EtofhfGkHPbR9Tbuk7wj1A8/view?usp=drive_link",
    },
    {
        id: 6,
        name: "WiseRun",
        description: "Fitness Analytics for Runners, Riders & Hikers. Turn your workouts into insights and connect Strava in seconds. Built via Lovable.",
        tech: ["React", "Lovable", "TypeScript", "TailwindCSS"],
        visitUrl: "https://vigor-viz.lovable.app",
    },
    {
        id: 8,
        name: "SiliconWatch",
        description: "Analyst-grade dashboard tracking DRAM, NAND, GPU, and HBM pricing plus supply-chain risks through the 2025–2028 AI memory supercycle.",
        tech: ["React", "Lovable", "TypeScript", "TailwindCSS"],
        visitUrl: "https://siliconwatch.lovable.app",
    },
    {
        id: 7,
        name: "Cameco (CCJ) Equity Research",
        description: "Comprehensive equity research dashboard and pitch deck for Cameco Corporation (CCJ). Includes interactive charts and deep financial modeling.",
        tech: ["HTML", "Chart.js", "Financial Modeling", "Equity Research"],
        visitUrl: "/Cameco_CCJ_Equity_Research_Dashboard.html",
        videoUrl: "/Cameco_CCJ_Pitch_Final.pdf",
    },
    {
        id: 1,
        name: "amex-default-prediction",
        description: "ML model to predict credit card default using a large-scale, imbalanced dataset.",
        tech: ["Python", "Dask", "Scikit-learn", "XGBoost", "SHAP"],
        githubUrl: "https://colab.research.google.com/drive/1i0NGQfRjqxhq1-tOWCShLuWgTA2jRpf_?usp=sharing",
    },
    {
        id: 2,
        name: "kurry-kitchen",
        description: "Full-stack platform for home-food businesses to manage orders via WhatsApp integration.",
        tech: ["React", "Node.js", "MongoDB", "WhatsApp-API", "Firebase"],
        githubUrl: "https://github.com/akashrane/kurry-kitchen",
        videoUrl: "https://drive.google.com/file/d/1ddrhnDqn3GXgoEDEyX6sbDYMtdzYVUGi/view",
    },
    {
        id: 3,
        name: "nyc-energy-forecasting",
        description: "Time-series model using Prophet to forecast NYC electricity consumption for energy planning.",
        tech: ["Python", "Prophet", "Pandas", "Scikit-learn"],
        githubUrl: "https://www.kaggle.com/code/akashrane2609/nyc-electric-consumption-forecasting-prophet-model/notebook",
    },
    {
        id: 4,
        name: "automated-factory-reports",
        description: "Real-time analytics platform to process and visualize factory sensor data for operational reporting.",
        tech: ["Python", "InfluxDB", "Grafana", "Node-RED", "OPC-UA"],
        githubUrl: "https://github.com/akashrane",
    },
    {
        id: 5,
        name: "f1-strategy-model",
        description: "End-to-end ML pipeline predicting driver position changes from pit stop, tire, and weather data.",
        tech: ["Python", "FastF1", "Ergast-API", "XGBoost", "SHAP"],
        githubUrl: "https://github.com/akashrane/F1-Pitstop-and-Driver-Position-Strategy",
    },
];
