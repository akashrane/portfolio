"use client";

import { experiences } from "@/data/experience";

const Experience = () => {
    return (
        <section
            id="experience"
            className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1f1f1f] border-t border-gray-600"
        >
            <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-semibold text-white mb-6">
                    Professional Experience
                </h2>

                <div className="space-y-6">
                    {experiences.map((exp) => (
                        <div 
                            key={exp.id} 
                            className="border border-gray-600 rounded p-6 hover:border-white transition-colors bg-[#1f1f1f]"
                        >
                            <div className="flex flex-col md:flex-row justify-between items-start mb-4 gap-2">
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                                    <div className="text-gray-400 font-medium" style={{ color: '#f8f8f8ff' }}>{exp.company}</div>
                                </div>
                                <span className="text-gray-500 text-xs font-mono bg-gray-900 px-2 py-1 rounded border border-white/5">
                                    {exp.date}
                                </span>
                            </div>

                            <ul className="space-y-3 mb-6">
                                {exp.description.map((desc, i) => (
                                    <li key={i} className="text-sm text-gray-300 leading-relaxed font-light flex gap-3">
                                        <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#f8f8f8ff' }}></span>
                                        {desc}
                                    </li>
                                ))}
                            </ul>

                            <div className="flex flex-wrap gap-2">
                                {exp.tech.map((t) => (
                                    <span 
                                        key={t} 
                                        className="px-2 py-1 text-[10px] text-white border border-gray-600 rounded hover:border-white transition-colors font-mono"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;

