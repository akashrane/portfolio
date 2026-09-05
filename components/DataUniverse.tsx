"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Pause, Play } from "lucide-react";

const systems = [
  { name: "Data engineering", label: "01 / INGEST", description: "Connecting industrial telemetry, APIs, and real-time streams to reliable data pipelines.", tools: "Python · SQL · MQTT · OPC-UA", href: "#experience" },
  { name: "Machine learning", label: "02 / UNDERSTAND", description: "Turning complex datasets into predictions, from shipment delays to racing strategy.", tools: "Scikit-learn · XGBoost · TensorFlow", href: "#projects" },
  { name: "Agentic AI", label: "03 / ACT", description: "Exploring reasoning, retrieval, and tool use to build more capable autonomous systems.", tools: "LLMs · RAG · Vector databases", href: "#skills" },
];

export default function DataUniverse() {
  const host = useRef<HTMLDivElement>(null);
  const selected = useRef(0);
  const paused = useRef(false);
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [available, setAvailable] = useState(true);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const element = host.current;
    if (!element) return;
    let disposed = false;
    let cleanup = () => {};
    import("three").then((THREE) => {
      if (disposed) return;
      let renderer: InstanceType<typeof THREE.WebGLRenderer>;
      try { renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true }); }
      catch { setAvailable(false); return; }
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.7));
      element.appendChild(renderer.domElement);
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(42, 1, .1, 100);
      camera.position.set(0, 0, 8.5);
      const universe = new THREE.Group();
      scene.add(universe);
      const materials: InstanceType<typeof THREE.Material>[] = [];
      const geometries: InstanceType<typeof THREE.BufferGeometry>[] = [];
      const coreGeometry = new THREE.IcosahedronGeometry(.95, 1);
      const coreMaterial = new THREE.MeshBasicMaterial({ color: 0xd5fa64, wireframe: true, transparent: true, opacity: .65 });
      geometries.push(coreGeometry); materials.push(coreMaterial);
      const core = new THREE.Mesh(coreGeometry, coreMaterial);
      universe.add(core);
      const shellGeometry = new THREE.IcosahedronGeometry(1.2, 1);
      const shellMaterial = new THREE.MeshBasicMaterial({ color: 0xd5fa64, wireframe: true, transparent: true, opacity: .12 });
      geometries.push(shellGeometry); materials.push(shellMaterial);
      universe.add(new THREE.Mesh(shellGeometry, shellMaterial));
      const nodes: InstanceType<typeof THREE.Mesh>[] = [];
      const colors = [0xd5fa64, 0x77d9ff, 0xc7a5ff];
      for (let i = 0; i < 3; i++) {
        const orbit = new THREE.Group();
        orbit.rotation.set(.55 + i * .75, i * .65, i * .5);
        universe.add(orbit);
        const ringGeometry = new THREE.TorusGeometry(1.85 + i * .28, .009, 6, 100);
        const ringMaterial = new THREE.MeshBasicMaterial({ color: colors[i], transparent: true, opacity: .4 });
        geometries.push(ringGeometry); materials.push(ringMaterial);
        orbit.add(new THREE.Mesh(ringGeometry, ringMaterial));
        const geometry = new THREE.OctahedronGeometry(.16);
        const material = new THREE.MeshBasicMaterial({ color: colors[i], wireframe: false });
        geometries.push(geometry); materials.push(material);
        const node = new THREE.Mesh(geometry, material);
        node.userData.index = i;
        orbit.add(node); nodes.push(node);
      }
      const positions = new Float32Array(450 * 3);
      for (let i = 0; i < 450; i++) {
        const angle = i * 2.399963;
        const y = 1 - (i / 449) * 2;
        const r = Math.sqrt(1 - y * y);
        const radius = 3.1 + .35 * Math.sin(i * 4.7);
        positions.set([Math.cos(angle) * r * radius, y * radius, Math.sin(angle) * r * radius], i * 3);
      }
      const pointsGeometry = new THREE.BufferGeometry();
      pointsGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      const pointsMaterial = new THREE.PointsMaterial({ color: 0xc6d4ba, size: .022, transparent: true, opacity: .5 });
      geometries.push(pointsGeometry); materials.push(pointsMaterial);
      universe.add(new THREE.Points(pointsGeometry, pointsMaterial));
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
      const pointer = new THREE.Vector2();
      const raycaster = new THREE.Raycaster();
      let visible = true;
      let frame = 0;
      let time = 0;
      let previous = 0;
      let drag = false;
      let moved = false;
      let lastX = 0;
      let lastY = 0;
      let yaw = 0;
      let pitch = 0;
      const resize = new ResizeObserver(() => {
        const { width, height } = element.getBoundingClientRect();
        if (!width || !height) return;
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      });
      resize.observe(element);
      const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; });
      observer.observe(element);
      const down = (e: PointerEvent) => { if (e.pointerType === "touch") return; drag = true; moved = false; lastX = e.clientX; lastY = e.clientY; element.setPointerCapture(e.pointerId); };
      const move = (e: PointerEvent) => {
        const rect = element.getBoundingClientRect();
        pointer.set((e.clientX - rect.left) / rect.width * 2 - 1, -(e.clientY - rect.top) / rect.height * 2 + 1);
        if (drag) { const dx = e.clientX - lastX; const dy = e.clientY - lastY; moved ||= Math.abs(dx) + Math.abs(dy) > 3; yaw += dx * .007; pitch = Math.max(-1, Math.min(1, pitch + dy * .007)); lastX = e.clientX; lastY = e.clientY; }
      };
      const up = () => { drag = false; };
      const click = () => {
        if (moved) return;
        raycaster.setFromCamera(pointer, camera);
        const hit = raycaster.intersectObjects(nodes)[0];
        if (hit) { const index = hit.object.userData.index as number; selected.current = index; setActive(index); }
      };
      element.addEventListener("pointerdown", down); element.addEventListener("pointermove", move);
      element.addEventListener("pointerup", up); element.addEventListener("pointercancel", up); element.addEventListener("click", click);
      const animate = (now: number) => {
        frame = requestAnimationFrame(animate);
        const delta = Math.min((now - previous) / 1000, .05); previous = now;
        if (!visible || document.hidden) return;
        if (!paused.current && !reduced.matches) time += delta;
        universe.rotation.y = yaw + time * .09;
        universe.rotation.x = pitch;
        core.rotation.y = -time * .22;
        nodes.forEach((node, i) => {
          const angle = time * (.22 + i * .08) + i * 2.1;
          node.position.set(Math.cos(angle) * (1.85 + i * .28), Math.sin(angle) * (1.85 + i * .28), 0);
          node.scale.setScalar(selected.current === i ? 1.7 : 1);
        });
        renderer.render(scene, camera);
      };
      frame = requestAnimationFrame(animate);
      setReady(true);
      cleanup = () => {
        cancelAnimationFrame(frame); resize.disconnect(); observer.disconnect();
        element.removeEventListener("pointerdown", down); element.removeEventListener("pointermove", move);
        element.removeEventListener("pointerup", up); element.removeEventListener("pointercancel", up); element.removeEventListener("click", click);
        geometries.forEach(g => g.dispose()); materials.forEach(m => m.dispose()); renderer.dispose(); renderer.domElement.remove();
      };
    }).catch(() => { if (!disposed) setAvailable(false); });
    return () => { disposed = true; cleanup(); };
  }, []);

  const system = systems[active];
  return <div className="universe-panel">
    <div className="universe-heading"><span className="eyebrow">THE SYSTEMS I BUILD</span><button className="scene-pause" aria-label={playing ? "Pause 3D animation" : "Resume 3D animation"} aria-pressed={!playing} onClick={() => { paused.current = playing; setPlaying(!playing); }}>{playing ? <Pause size={15}/> : <Play size={15}/>}</button></div>
    <div className="universe-stage" ref={host} aria-hidden="true" />
    {(!ready || !available) && <div className="scene-fallback">DATA → INTELLIGENCE → IMPACT</div>}
    <span className="scene-instruction">{available ? "Drag to orbit · Select a discipline below" : "Explore a discipline below"}</span>
    <div className="system-tabs" role="group" aria-label="Explore my disciplines">{systems.map((item, index) => <button key={item.name} aria-pressed={active === index} onClick={() => { selected.current = index; setActive(index); }}><span>0{index + 1}</span>{item.name}</button>)}</div>
    <div className="system-detail" aria-live="polite"><span className="eyebrow">{system.label}</span><p>{system.description}</p><div><span>{system.tools}</span><a href={system.href} aria-label={`Explore ${system.name} work`}><ArrowUpRight size={22}/></a></div></div>
  </div>;
}
