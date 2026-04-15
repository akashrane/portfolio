"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import { experiences } from "@/data/experience";
import * as THREE from "three";
import SpriteText from "three-spritetext";
import { FaTimes, FaExternalLinkAlt, FaTerminal } from "react-icons/fa";

const ForceGraph3D = dynamic(() => import("react-force-graph-3d"), {
    ssr: false,
    loading: () => <div className="w-full h-full bg-black/5 animate-pulse flex items-center justify-center text-gray-500 text-xs text-cyan-400 font-mono tracking-widest">INITIALIZING EXPERIENCE_STREAM...</div>
});

const ExperienceGraph3D = () => {
    const fgRef = useRef<any>(null);
    const [mounted, setMounted] = useState(false);
    const [isReady, setIsReady] = useState(false);
    const [selectedNode, setSelectedNode] = useState<any>(null);

    useEffect(() => {
        setMounted(true);
        const timer = setTimeout(() => setIsReady(true), 1200);
        return () => clearTimeout(timer);
    }, []);

    const graphData = useMemo(() => {
        const nodes: any[] = [];
        const links: any[] = [];

        // Root Node
        nodes.push({ id: "current", name: "Career Path", val: 30, color: "#00f2ff", type: "root" });

        experiences.forEach((exp) => {
            const companyId = `comp-${exp.id}`;
            const roleId = `role-${exp.id}`;

            // Company Node
            nodes.push({
                id: companyId,
                name: exp.company,
                val: 20,
                color: "#ff00ff",
                type: "company",
                date: exp.date,
                description: exp.description,
                tech: exp.tech
            });

            // Role Node
            nodes.push({
                id: roleId,
                name: exp.role,
                val: 15,
                color: "#00ff88",
                type: "role",
                date: exp.date,
                description: exp.description,
                tech: exp.tech
            });

            // Connect root to company
            links.push({ source: "current", target: companyId, color: "#444", distance: 120 });
            // Connect company to role
            links.push({ source: companyId, target: roleId, color: "#666", distance: 60 });

            // Connect role to tech used (simplified version - just labels)
            exp.tech.forEach((skill) => {
                const skillId = `skill-${exp.id}-${skill}`;
                nodes.push({
                    id: skillId,
                    name: skill,
                    val: 8,
                    color: "#ffffff",
                    type: "tech"
                });
                links.push({ source: roleId, target: skillId, color: "rgba(255,255,255,0.1)", distance: 40 });
            });
        });

        // Sequence links (Temporal connection)
        for (let i = 0; i < experiences.length - 1; i++) {
            links.push({
                source: `comp-${experiences[i].id}`,
                target: `comp-${experiences[i + 1].id}`,
                color: "rgba(0, 242, 255, 0.2)",
                distance: 150,
                type: "sequence"
            });
        }

        return { nodes, links };
    }, []);

    useEffect(() => {
        if (isReady && fgRef.current) {
            fgRef.current.d3Force('charge').strength(-400);
            fgRef.current.d3Force('link').distance((link: any) => link.distance || 80);

            const timer = setTimeout(() => {
                if (fgRef.current) {
                    fgRef.current.zoomToFit(1200, 50);
                    const controls = fgRef.current.controls();
                    if (controls) {
                        controls.autoRotate = true;
                        controls.autoRotateSpeed = 0.3;
                    }
                }
            }, 1200);
            return () => clearTimeout(timer);
        }
    }, [isReady]);

    if (!mounted) return <div className="w-full h-full bg-black/5" />;

    return (
        <div className="w-full h-full relative overflow-hidden flex items-center justify-center bg-transparent">
            {/* Ambient Background Fades */}
            <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#1f1f1f] to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#1f1f1f] to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#1f1f1f] to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#1f1f1f] to-transparent z-10 pointer-events-none" />

            {/* HUD */}
            <div className="absolute top-6 left-6 z-10 pointer-events-none">
                <div className="flex flex-col gap-1 border-l-2 border-magenta-500/50 pl-4 py-1">
                    <p className="text-magenta-400 text-[10px] font-bold uppercase tracking-[0.5em] opacity-80">Experience</p>
                    <h3 className="text-white text-2xl font-black tracking-tighter">Experience Stream</h3>
                </div>
            </div>

            {/* Selection Panel */}
            {selectedNode && (selectedNode.type === 'company' || selectedNode.type === 'role') && (
                <div className="absolute right-10 top-1/2 -translate-y-1/2 z-50 w-[420px] animate-in slide-in-from-right duration-500">
                    <div className="relative border border-white/10 bg-black/80 backdrop-blur-2xl p-8 rounded-lg shadow-2xl overflow-hidden group">
                        {/* Decorative background scanlines */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_2px,3px_100%] pointer-events-none opacity-20"></div>
                        
                        <button onClick={() => setSelectedNode(null)} className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors">
                            <FaTimes size={20} />
                        </button>

                        <div className="relative z-10">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="px-3 py-1 rounded-sm bg-magenta-500/10 border border-magenta-500/40 text-[9px] font-mono text-magenta-400 uppercase tracking-widest font-bold">
                                    {selectedNode.type}
                                </div>
                                <div className="px-3 py-1 rounded-sm bg-white/5 border border-white/20 text-[9px] font-mono text-white/70 uppercase tracking-widest">
                                    {selectedNode.date}
                                </div>
                            </div>

                            <h4 className="text-2xl font-black text-white mb-6 tracking-tight leading-tight group-hover:text-magenta-400 transition-colors uppercase">
                                {selectedNode.name}
                            </h4>

                            <div className="h-[2px] w-20 bg-magenta-500/50 mb-8"></div>

                            <div className="mb-8 max-h-[200px] overflow-y-auto pr-4 custom-scrollbar">
                                <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] mb-3 font-black flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-magenta-500"></span>
                                    LOG_DETAILS
                                </p>
                                <ul className="space-y-2">
                                    {selectedNode.description?.map((desc: string, i: number) => (
                                        <li key={i} className="text-gray-400 text-xs leading-relaxed font-medium flex gap-2">
                                            <span className="text-magenta-500" style={{ color: '#ff00ff' }}>»</span> {desc}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="flex flex-wrap gap-2 mb-8">
                                {selectedNode.tech?.map((t: string) => (
                                    <span key={t} className="px-2 py-1 rounded border border-white/5 bg-white/5 text-[9px] text-gray-400 font-mono">
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-4 pt-4 border-t border-white/5 mt-auto">
                                <div className="ml-auto flex items-center gap-2 text-[10px] text-magenta-400/60 font-mono font-bold">
                                    <FaTerminal className="animate-pulse" /> EXPERIENCE_DECODED
                                </div>
                            </div>
                        </div>

                        {/* Scanner effect line */}
                        <div className="absolute top-0 left-0 w-full h-[1px] bg-magenta-500/40 animate-scan pointer-events-none"></div>
                    </div>
                </div>
            )}

            {isReady && (
                <ForceGraph3D
                    ref={fgRef}
                    graphData={graphData}
                    backgroundColor="rgba(0,0,0,0)"
                    showNavInfo={false}
                    nodeRelSize={1}
                    linkColor={(link: any) => link.color}
                    linkWidth={(link: any) => link.type === "sequence" ? 2 : 0.5}
                    linkDirectionalArrowLength={(link: any) => link.type === "sequence" ? 3.5 : 0}
                    linkDirectionalArrowRelPos={1}
                    linkDirectionalParticles={(link: any) => link.type === "sequence" ? 4 : 1}
                    linkDirectionalParticleSpeed={(link: any) => link.type === "sequence" ? 0.01 : 0.005}
                    nodeThreeObject={(node: any) => {
                        const isSelected = selectedNode?.id === node.id;
                        const group = new THREE.Group();

                        let geometry;
                        if (node.type === "root") {
                            geometry = new THREE.IcosahedronGeometry(node.val * 0.8, 1);
                        } else if (node.type === "company") {
                            geometry = new THREE.BoxGeometry(node.val, node.val, node.val);
                        } else if (node.type === "role") {
                            geometry = new THREE.OctahedronGeometry(node.val * 0.7, 0);
                        } else {
                            geometry = new THREE.SphereGeometry(node.val * 0.5, 8, 8);
                        }

                        const material = new THREE.MeshPhongMaterial({
                            color: isSelected ? "#ffffff" : node.color,
                            emissive: isSelected ? "#ffffff" : node.color,
                            emissiveIntensity: isSelected ? 1.5 : 0.1,
                            transparent: true,
                            opacity: 0.9,
                            wireframe: node.type === "root" || node.type === "company"
                        });

                        const mesh = new THREE.Mesh(geometry, material);
                        group.add(mesh);

                        const sprite = new SpriteText(node.name);
                        sprite.color = isSelected ? "#ffffff" : node.color;
                        sprite.textHeight = node.type === "root" ? 8 : (node.type === "company" ? 6 : 4);
                        sprite.fontFace = "Inter, sans-serif";
                        sprite.fontWeight = "bold";
                        sprite.position.y = node.val + 5;
                        group.add(sprite);

                        return group;
                    }}
                    onNodeClick={(node: any) => {
                        setSelectedNode(node);
                        if (fgRef.current) {
                            fgRef.current.cameraPosition(
                                { x: node.x * 1.5, y: node.y * 1.5, z: node.z * 1.5 },
                                node,
                                1500
                            );
                        }
                    }}
                />
            )}

            <style jsx global>{`
                .custom-scrollbar::-webkit-scrollbar { width: 3px; }
                .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255, 0, 255, 0.3); border-radius: 10px; }
                .custom-scrollbar-magenta::-webkit-scrollbar-thumb { background: rgba(255, 0, 255, 0.5); }
                
                @keyframes scan {
                    0% { top: -10%; }
                    100% { top: 110%; }
                }
                .animate-scan {
                    animation: scan 4s linear infinite;
                }
            `}</style>
        </div>
    );
};

export default ExperienceGraph3D;
