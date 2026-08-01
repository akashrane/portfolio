export interface Experience {
  id: number;
  role: string;
  company: string;
  date: string;
  description: string[];
  tech: string[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    role: "Data Scientist",
    company: "Shoptaki",
    date: "Feb 2025 - Present",
    description: [
      "Architected a video-based liveness pipeline replacing legacy static-image capture with an OpenCV engine, significantly reducing false-spoofing rejections.",
      "Hardened Anti-Spoofing Models by integrating the DeepFace 'yunet' backend alongside MiniFASNet, optimizing bounding-box context to differentiate legitimate users from advanced spoofing attempts.",
      "Built a standalone, ICAO-compliant MRZ extractor utilizing OCR heuristics, fastmrz, and stringent check-digit validation.",
      "Implemented robust cross-validation solving persistent decoding failures for high-resolution images by tuning preprocessing to extract AAMVA barcode payloads.",
      "Pioneered a sophisticated Smart ID system leveraging advanced data analytics to extract actionable intelligence from multi-dimensional healthcare datasets.",
      "Engineered end-to-end AI-powered data ingestion and processing frameworks in Python, enhancing the precision of automated identity validation protocols.",
      "Architected secure LLM-driven RAG (Retrieval-Augmented Generation) architectures to enable high-fidelity querying of hybrid medical data structures."
    ],
    tech: ["Python", "OpenCV", "DeepFace", "RAG", "LLMs", "Vector Databases", "Streamlit", "Docker"]
  },
  {
    id: 2,
    role: "Software Engineer & Business Lead",
    company: "Optify Industrial Solutions",
    date: "Jul 2022 - Dec 2023",
    description: [
      "Spearheaded the creation of a high-performance Python analytics suite for industrial automation, translating raw sensor telemetry into data-driven operational insights for factory leadership.",
      "Orchestrated the entire development cycle of complex visualization dashboards using Node-RED and Grafana, optimizing real-time monitoring and UX for industrial stakeholders.",
      "Standardized IoT connectivity by implementing robust OPC-UA and MQTT communication layers, facilitating seamless real-time data flow between hardware and software ecosystems.",
      "Directed cross-functional on-site deployment efforts, managing full-cycle system integration, debugging, and client validation for mission-critical industrial interfaces.",
      "Authored impact-focused technical proposals and business cases that successfully secured government innovation grants and strategic funding."
    ],
    tech: ["Python", "Node-RED", "Grafana", "OPC-UA", "MQTT", "IoT", "SQL"]
  }
];
