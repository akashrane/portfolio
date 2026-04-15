import Header from "@/components/Header";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Publications from "@/components/Publications";
import Skills from "@/components/Skills";
import Resume from "@/components/Resume";
import Certifications from "@/components/Certifications";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1f1f1f]">
      <Header />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Publications />
      <Certifications />
      <Footer />
    </main>
  );
}
