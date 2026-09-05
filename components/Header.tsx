import { ArrowUpRight } from "lucide-react";
export default function Header() {
  return <header className="site-header"><a className="wordmark" href="#home" aria-label="Akash Rane home">ar<span>.</span></a><nav aria-label="Main navigation"><a href="#projects">Work</a><a href="#experience">Experience</a><a href="#skills">Expertise</a><a className="nav-resume" href="/resume.pdf" target="_blank" rel="noopener noreferrer">Résumé <ArrowUpRight size={16}/></a></nav></header>;
}
