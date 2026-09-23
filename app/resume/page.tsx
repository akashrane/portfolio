import type { Metadata } from "next";
import ResumeViewer from "./ResumeViewer";

export const metadata: Metadata = {
  title: "Akash Rane - Resume | Data Scientist & ML Engineer",
  description:
    "Official resume of Akash Rane, MS. Data Scientist & ML Engineer with 3+ years of experience building AI/ML systems, RAG pipelines, and scalable microservices.",
  openGraph: {
    title: "Akash Rane - Resume",
    description:
      "Data Scientist & ML Engineer | M.S. in Computer Science (Pace University)",
    url: "https://akashrane.com/resume",
    type: "profile",
  },
};

export default function ResumePage() {
  return <ResumeViewer />;
}
