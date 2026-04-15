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
    role: "Software Engineer / Core Contributor",
    company: "KYC Document Verification & Liveness System",
    date: "2023 - Present",
    description: [
      "Architected a video-based liveness pipeline replacing legacy static-image capture with an OpenCV engine, significantly reducing false-spoofing rejections.",
      "Hardened Anti-Spoofing Models by integrating the DeepFace 'yunet' backend alongside MiniFASNet, optimizing bounding-box context to differentiate legitimate users from advanced spoofing attempts.",
      "Built a standalone, ICAO-compliant MRZ extractor utilizing OCR heuristics, fastmrz, and stringent check-digit validation.",
      "Implemented robust cross-validation solving persistent decoding failures for high-resolution images by tuning preprocessing to extract AAMVA barcode payloads."
    ],
    tech: ["Python", "OpenCV", "MiniFASNet", "DeepFace", "Docker", "Streamlit"]
  },
  {
    id: 2,
    role: "AI Developer / Prompt Engineer",
    company: "Automated Equity Research Dashboard (Perplexity Integration)",
    date: "Recent",
    description: [
      "Engineered an automated financial analysis pipeline that synthesizes market data into interactive, comprehensive equity research dashboards.",
      "Integrated Perplexity / LLMs to perform deep financial modeling (SOTP, Scenario Analysis) and generate responsive UI elements with Chart.js.",
      "Facilitated rapid investment decision-making by converting unstructured raw data and market context into robust interactive HTML artifacts."
    ],
    tech: ["HTML/CSS", "Chart.js", "Perplexity API", "LLMs"]
  }
];
