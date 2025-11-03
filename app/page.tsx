import Header from "@/components/Header";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Publications from "@/components/Publications";
import Skills from "@/components/Skills";
import Profiles from "@/components/Profiles";
import Resume from "@/components/Resume";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1f1f1f]">
      <Header />
      <About />
      <Projects />
      <Skills />
      <Publications />
      <Profiles />
      <Resume />
      <Footer />
    </main>
  );
}
