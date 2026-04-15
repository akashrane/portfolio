"use client";

import { useState } from "react";
import SkillGraph3D from "./SkillGraph3D";
import SkillTable from "./SkillTable";
import { FaTable, FaProjectDiagram } from "react-icons/fa";

const Skills = () => {
    const [view, setView] = useState<'graph' | 'table'>('graph');

    return (
        <section
            id="skills"
            className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1f1f1f] border-t border-gray-600 relative overflow-hidden"
        >
                <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl font-semibold text-white mb-6">
                    Technical Expertise
                </h2>
            </div>

            <div className="absolute top-16 right-8 z-50">
                <button
                    onClick={() => setView(view === 'graph' ? 'table' : 'graph')}
                    className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-bold text-white uppercase tracking-widest hover:bg-white/10 hover:border-cyan-500/50 transition-all shadow-xl group pointer-events-auto"
                >
                    {view === 'graph' ? (
                        <>
                            <FaTable className="text-cyan-400 group-hover:scale-110 transition-transform" />
                            Switch to Table View
                        </>
                    ) : (
                        <>
                            <FaProjectDiagram className="text-cyan-400 group-hover:scale-110 transition-transform" />
                            Switch to Graph View
                        </>
                    )}
                </button>
            </div>

            <div className={`w-full relative z-10 transition-all duration-700 ${view === 'graph' ? 'h-[700px] mt-8' : 'mt-4'}`}>
                    <div className="max-w-6xl mx-auto">
                    {view === 'graph' ? (
                        <div className="h-full w-full">
                            <SkillGraph3D />
                        </div>
                    ) : (
                        <SkillTable />
                    )}
                </div>
            </div>
        </section>
    );
};

export default Skills;
