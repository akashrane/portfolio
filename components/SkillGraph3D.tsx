"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import { skillTree } from "@/data/skills";
import { projects } from "@/data/projects";
import * as THREE from "three";
import SpriteText from "three-spritetext";
import { FaTimes, FaExternalLinkAlt, FaGithub, FaTerminal } from "react-icons/fa";

// Dynamically import the 3D graph to avoid SSR issues
const ForceGraph3D = dynamic(() => import("react-force-graph-3d"), {
    ssr: false,
    loading: () => <div className="w-full h-full bg-black/5 animate-pulse flex items-center justify-center text-gray-500 text-xs text-cyan-400 font-mono tracking-widest">CALIBRATING NEURAL NETWORK...</div>
});

const SkillGraph3D = () => {
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
        nodes.push({ id: "root", name: "Akash Rane", val: 32, color: "#00f2ff", type: "root" });

        const categoryColors: { [key: string]: string } = {
            "Agentic AI": "#ff00ff",
            "Machine Learning": "#00f2ff",
            "Full-Stack & Web": "#00ff88",
            "Programming & Data Processing": "#ffff00",
            "Data Engineering & APIs": "#00f2ff",
            "Cloud & DevOps": "#ff00ff",
            "Visualization & BI Tools": "#ffff00",
            "Project Management & Collaboration": "#00f2ff",
            "Portfolio": "#ffffff"
        };

        nodes.push({ id: "portfolio_hub", name: "Project Deployments", val: 26, color: "#ffffff", type: "category" });
        links.push({ source: "root", target: "portfolio_hub", color: "#666", distance: 120 });

        Object.entries(skillTree).forEach(([category, skills]) => {
            nodes.push({ id: category, name: category, val: 22, color: categoryColors[category] || "#00f2ff", type: "category" });
            links.push({ source: "root", target: category, color: "#444", distance: 100 });

            skills.forEach((skill) => {
                nodes.push({ id: skill, name: skill, val: 10, color: categoryColors[category] || "#00f2ff", type: "skill" });
                links.push({ source: category, target: skill, color: "#222", distance: 50 });
            });
        });

        projects.forEach(project => {
            const projectId = `project-${project.id}`;
            const projNode = {
                id: projectId,
                name: project.name,
                val: 14,
                color: "#ffffff",
                type: "project",
                description: project.description,
                tech: project.tech,
                githubUrl: project.githubUrl,
                visitUrl: project.visitUrl
            };
            nodes.push(projNode);

            links.push({ source: "portfolio_hub", target: projectId, color: "rgba(255,255,255,0.2)", distance: 80 });

            project.tech.forEach(techName => {
                const searchName = techName.toLowerCase().trim();
                const targetNode = nodes.find(n => {
                    const nodeName = n.name.toLowerCase();
                    return nodeName === searchName ||
                        nodeName.includes(searchName) ||
                        searchName.includes(nodeName);
                });

                if (targetNode && targetNode.id !== projectId) {
                    links.push({
                        source: projectId,
                        target: targetNode.id,
                        color: "rgba(255, 255, 255, 0.3)",
                        type: "project-connection",
                        distance: 60
                    });
                }
            });
        });

        return { nodes, links };
    }, []);

    useEffect(() => {
        if (isReady && fgRef.current) {
            fgRef.current.d3Force('charge').strength(-300);
            fgRef.current.d3Force('link').distance((link: any) => link.distance || 50);

            const timer = setTimeout(() => {
                if (fgRef.current) {
                    fgRef.current.zoomToFit(1400, 50);
                    const controls = fgRef.current.controls();
                    if (controls) {
                        controls.autoRotate = true;
                        controls.autoRotateSpeed = 0.2;
                    }
                }
            }, 1200);
            return () => clearTimeout(timer);
        }
    }, [isReady]);

    const handleNodeClick = (node: any) => {
        setSelectedNode(node);
        const distance = 400;
        const distRatio = 1 + distance / Math.hypot(node.x, node.y, node.z);
        if (fgRef.current) {
            fgRef.current.cameraPosition(
                { x: node.x * distRatio, y: node.y * distRatio, z: node.z * distRatio },
                node,
                1500
            );
        }
    };

    if (!mounted) return <div className="w-full h-full bg-black/5" />;

    // Helper to get skills for a category
    const getSkillsForCategory = (catName: string): string[] => {
        return (skillTree as any)[catName] || [];
    };

    return (
        <div className="w-full h-full relative overflow-hidden flex items-center justify-center bg-transparent">
            {/* Ambient Background Fades (Tightened to 80px) */}
            <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#1f1f1f] to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#1f1f1f] to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#1f1f1f] to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#1f1f1f] to-transparent z-10 pointer-events-none" />

            {/* Minimalist HUD */}
            <div className="absolute top-6 left-6 z-10 pointer-events-none">
                <div className="flex flex-col gap-1 border-l-2 border-cyan-500/50 pl-4 py-1">
                    <p className="text-cyan-400 text-[10px] font-bold uppercase tracking-[0.5em] opacity-80">Skills</p>
                    <h3 className="text-white text-2xl font-black tracking-tighter">Skill Graph</h3>
                </div>
            </div>

            {/* Detail Box (Floating Panel) */}
            {selectedNode && (
                <div className="absolute right-10 top-1/2 -translate-y-1/2 z-50 w-[420px] animate-in slide-in-from-right duration-500">
                    <div className="relative border border-white/10 bg-black/70 backdrop-blur-2xl p-8 rounded-lg shadow-2xl overflow-hidden group">
                        {/* Decorative background scanlines */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_2px,3px_100%] pointer-events-none opacity-20"></div>

                        <button
                            onClick={() => setSelectedNode(null)}
                            className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors"
                        >
                            <FaTimes size={20} />
                        </button>

                        <div className="relative z-10">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="px-3 py-1 rounded-sm bg-cyan-500/10 border border-cyan-500/40 text-[9px] font-mono text-cyan-400 uppercase tracking-widest font-bold">
                                    {selectedNode.type}
                                </div>
                                {selectedNode.type === "project" && (
                                    <div className="px-3 py-1 rounded-sm bg-white/5 border border-white/20 text-[9px] font-mono text-white/70 uppercase tracking-widest">
                                        LIVE_DEPLOYMENT
                                    </div>
                                )}
                            </div>

                            <h4 className="text-2xl font-black text-white mb-6 tracking-tight leading-tight group-hover:text-cyan-400 transition-colors uppercase">
                                {selectedNode.name}
                            </h4>

                            <div className="h-[2px] w-20 bg-cyan-500/50 mb-8"></div>

                            {/* Section: Skills/Tech Stack (Simplified Tags as per user request) */}
                            <div className="mb-8">
                                <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] mb-4 font-black flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
                                    {selectedNode.type === "project" ? "TECHNOLOGY STACK" : "CORE COMPETENCIES"}
                                </p>
                                <div className="flex flex-wrap gap-2.5">
                                    {selectedNode.type === "category" ? (
                                        getSkillsForCategory(selectedNode.name).map((s: string) => (
                                            <span key={s} className="px-3 py-1.5 rounded-md border border-white/10 bg-white/5 text-[10px] text-gray-200 font-mono tracking-tight hover:border-cyan-500/50 transition-colors">
                                                {s}
                                            </span>
                                        ))
                                    ) : selectedNode.tech ? (
                                        selectedNode.tech.map((t: string) => (
                                            <span key={t} className="px-3 py-1.5 rounded-md border border-white/10 bg-white/5 text-[10px] text-gray-200 font-mono tracking-tight hover:border-cyan-500/50 transition-colors">
                                                {t}
                                            </span>
                                        ))
                                    ) : (
                                        <span className="px-3 py-1.5 rounded-md border border-white/10 bg-white/5 text-[10px] text-gray-200 font-mono">
                                            {selectedNode.name}
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* Conditional Description for Projects ONLY if user still wants it, but hidden for categories as per request */}
                            {selectedNode.type === "project" && (
                                <div className="mb-8">
                                    <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] mb-3 font-black">Brief</p>
                                    <p className="text-gray-400 text-xs leading-relaxed font-medium">
                                        {selectedNode.description?.slice(0, 150)}...
                                    </p>
                                </div>
                            )}

                            <div className="flex gap-4 pt-4 border-t border-white/5 mt-auto">
                                {selectedNode.visitUrl && (
                                    <a href={selectedNode.visitUrl} target="_blank" rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-5 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-black text-[10px] font-black rounded-sm transition-all shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                                        <FaExternalLinkAlt /> LAUNCH_INTERFACE
                                    </a>
                                )}
                                {selectedNode.githubUrl && (
                                    <a href={selectedNode.githubUrl} target="_blank" rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-5 py-2.5 border border-white/10 bg-white/5 hover:bg-white/10 text-white text-[10px] font-black rounded-sm transition-all">
                                        <FaGithub /> SOURCE_CODE
                                    </a>
                                )}
                                <div className="ml-auto flex items-center gap-2 text-[10px] text-cyan-400/60 font-mono font-bold">
                                    <FaTerminal className="animate-pulse" /> NEURAL_PATHWAY_VERIFIED
                                </div>
                            </div>
                        </div>

                        {/* Scanner effect line */}
                        <div className="absolute top-0 left-0 w-full h-[1px] bg-cyan-500/40 animate-scan pointer-events-none"></div>
                    </div>
                </div>
            )}

            {isReady && (
                <ForceGraph3D
                    key="skill-graph-v5.3"
                    ref={fgRef}
                    graphData={graphData}
                    backgroundColor="rgba(0,0,0,0)"
                    showNavInfo={false}
                    nodeRelSize={1}
                    linkColor={(link: any) => link.color || "rgba(255, 255, 255, 0.08)"}
                    linkWidth={(link: any) => link.type === "project-connection" ? 1.2 : 0.5}
                    linkResolution={8}
                    linkDirectionalParticles={(link: any) => link.type === "project-connection" ? 6 : 2}
                    linkDirectionalParticleSpeed={(link: any) => link.type === "project-connection" ? 0.008 : 0.004}
                    linkDirectionalParticleWidth={(link: any) => link.type === "project-connection" ? 2.5 : 1}
                    d3AlphaDecay={0.03}
                    d3VelocityDecay={0.4}
                    warmupTicks={250}
                    nodeThreeObject={(node: any) => {
                        const isSelected = selectedNode?.id === node.id;
                        const group = new THREE.Group();

                        let geometry;
                        if (node.type === "root") {
                            geometry = new THREE.IcosahedronGeometry(node.val, 1);
                        } else if (node.type === "category") {
                            geometry = new THREE.OctahedronGeometry(node.val, 1);
                        } else if (node.type === "project") {
                            geometry = new THREE.BoxGeometry(node.val * 1.5, node.val * 1.5, node.val * 1.5);
                        } else {
                            geometry = new THREE.SphereGeometry(node.val, 16, 16);
                        }

                        const material = new THREE.MeshPhongMaterial({
                            color: isSelected ? "#ffffff" : node.color,
                            emissive: isSelected ? "#ffffff" : node.color,
                            emissiveIntensity: isSelected ? 1.2 : (node.type === "project" ? 0.3 : 0.1),
                            transparent: true,
                            opacity: 0.8,
                            shininess: 100,
                            wireframe: node.type !== "skill" && node.type !== "project"
                        });

                        const mesh = new THREE.Mesh(geometry, material);
                        group.add(mesh);

                        if (node.type === "skill" || node.type === "project") {
                            const coreGeom = node.type === "project"
                                ? new THREE.BoxGeometry(node.val * 0.6, node.val * 0.6, node.val * 0.6)
                                : new THREE.SphereGeometry(node.val * 0.45, 8, 8);
                            const coreMat = new THREE.MeshBasicMaterial({ color: isSelected ? "#00f2ff" : "#ffffff" });
                            group.add(new THREE.Mesh(coreGeom, coreMat));
                        }

                        const sprite = new SpriteText(node.name);
                        sprite.color = isSelected ? "#ffffff" : node.color;
                        sprite.textHeight = node.type === "root" ? 10 : (node.type === "category" ? 7 : (node.type === "project" ? 5 : 3.5));
                        sprite.fontFace = "Inter, sans-serif";
                        sprite.fontWeight = isSelected ? "900" : "bold";
                        sprite.position.y = node.val + (node.type === "root" ? 18 : 12);
                        group.add(sprite);

                        return group;
                    }}
                    onNodeClick={handleNodeClick}
                    enableNodeDrag={false}
                />
            )}

            <style jsx global>{`
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

export default SkillGraph3D;
