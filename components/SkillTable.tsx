"use client";

import { skillTree } from "@/data/skills";

const SkillTable = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(skillTree).map(([category, skills]) => (
                <div 
                    key={category} 
                    className="border border-gray-600 rounded p-4 hover:border-white transition-colors bg-[#1f1f1f]"
                >
                    <h3 className="text-lg font-bold text-white mb-3">{category}</h3>
                    <div className="flex flex-wrap gap-2">
                        {skills.map((skill) => (
                            <span 
                                key={skill} 
                                className="skill-tag"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SkillTable;
