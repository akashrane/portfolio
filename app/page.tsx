import Header from "@/components/Header";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Publications from "@/components/Publications";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="portfolio">
      <a className="skip-link" href="#projects">Skip to work</a>
      <Header />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Publications />
      <Certifications />
      <Footer />
    </main>
  );
}
