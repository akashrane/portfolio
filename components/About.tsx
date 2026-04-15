"use client";

import Image from "next/image";
import { FaLinkedin, FaGithub, FaGoogle, FaInstagram } from "react-icons/fa";
import { SiKaggle, SiLeetcode } from "react-icons/si";

const About = () => {
  return (
    <section id="home" className="pt-40 pb-16 px-4 sm:px-6 lg:px-8 bg-[#1f1f1f]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-white mb-6">About</h2>
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-10 items-center sm:items-start">
          {/* Left Column: Profile Image */}
          <div className="flex-shrink-0 flex flex-col items-center">
            <div className="overflow-hidden transition-transform hover:scale-[1.02]">
              <Image
                src="/profile.jpg"
                alt="Profile"
                width={200}
                height={200}
                className="w-[180px] sm:w-[200px] h-[180px] sm:h-[200px] object-cover"
                priority
              />
            </div>
            {/* Profile Icons Below Photo with Neon Halos */}
            <div className="flex flex-col items-center mt-6">
              <p className="text-base sm:text-lg text-gray-300 mb-3 font-medium">Connect with Me</p>
              <div className="grid grid-cols-3 gap-3 sm:gap-4">
                <a href="https://www.linkedin.com/in/akashrane/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center text-white hover:text-blue-400 transition-colors duration-200 hover:scale-110 transform">
                  <FaLinkedin size={40} />
                </a>
                <a href="https://www.kaggle.com/akashrane2609" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center text-white hover:text-blue-300 transition-colors duration-200 hover:scale-110 transform">
                  <SiKaggle size={40} />
                </a>
                <a href="https://github.com/akashrane" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center text-white hover:text-gray-300 transition-colors duration-200 hover:scale-110 transform">
                  <FaGithub size={40} />
                </a>
                <a href="https://leetcode.com/akashrane2609/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center text-white hover:text-yellow-400 transition-colors duration-200 hover:scale-110 transform">
                  <SiLeetcode size={40} />
                </a>
                <a href="https://developers.google.com/profile/u/akash_rane" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center text-white hover:text-red-400 transition-colors duration-200 hover:scale-110 transform">
                  <FaGoogle size={40} />
                </a>
                <a href="https://www.instagram.com/akash_rane2000/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center text-white hover:text-pink-400 transition-colors duration-200 hover:scale-110 transform">
                  <FaInstagram size={40} />
                </a>
              </div>
            </div>
          </div>
          {/* Right Column: About Text */}
          <div className="flex-1 text-white opacity-90 leading-relaxed">
            <div className="space-y-4">
              <p>
                I am Akash Rane, completing my Master's in Computer Science Degree. My professional focus is the complete data lifecycle, from initial engineering to its application in strategic decision-making.
              </p>
              <p>
                My experience stems from a strong foundation in back-end development and data engineering. I have expertise in building robust systems to efficiently collect, process, and transmit data using Python, SQL, REST APIs, and real-time protocols like MQTT and OPC-UA.
              </p>
              <p>
                I leverage this engineering foundation to build and deploy predictive models, using machine learning libraries (Scikit-learn, XGBoost, TensorFlow) to uncover actionable insights. I am also proficient in translating complex data into clear narratives via interactive dashboards and visualizations with tools like Grafana, Node-RED, and Power BI.
              </p>
              <p>
                Recently, I have also been exploring Agentic AI systems, focusing on designing intelligent, autonomous agents capable of decision-making, reasoning, and tool usage to enhance automation and system adaptability. This includes experimenting with frameworks that integrate LLMs, multi-agent coordination, and data-driven workflows to build AI systems that can operate with minimal human intervention.
              </p>
              <p>
                Whether building data pipelines, training predictive models, or developing KPI dashboards, I am driven to solve complex data problems. I am actively seeking full-time opportunities in Backend Engineering, Data Science, or Data Analytics where I can contribute this comprehensive, full-stack data expertise.
              </p>
            </div>
            {/* Download Resume Button */}
            <div className="pt-4">
              <a
                href="/resume.pdf"
                download
                className="inline-block border border-white px-4 py-[0.6rem] text-white hover:bg-white hover:text-[#1f1f1f] transition-all"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
