"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import SkillTable from "./SkillTable";
const SkillGraph3D = dynamic(() => import("./SkillGraph3D"), { ssr: false, loading: () => <p role="status">Loading interactive skill graph…</p> });
export default function Skills(){const [graph,setGraph]=useState(false);return <section id="skills" className="section shell"><div className="section-heading"><div><p className="eyebrow">03 / TOOLKIT</p><h2>A connected <em>skill set.</em></h2></div><button className="button button-outline" onClick={()=>setGraph(!graph)} aria-pressed={graph} aria-controls="skills-view">{graph?'Show skill categories':'Explore interactive graph'}</button></div><div id="skills-view">{graph?<div style={{height:650,overflow:'hidden'}}><SkillGraph3D/></div>:<SkillTable/>}</div></section>}
