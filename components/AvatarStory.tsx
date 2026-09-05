"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { ArrowUpRight, Pause, Play } from "lucide-react";
import { getStoryTiming, SCENE_DURATION, TRANSITION_DURATION } from "./avatar-timeline";

const scenes = [
  { title: "Inside the build.", place: "AT THE KEYBOARD", description: "Turning ideas into systems, one line at a time.", image: "/avatar/programming.webp" },
  { title: "Outside the editor.", place: "NEW YORK, NY", description: "A different perspective. The same curiosity.", image: "/avatar/new-york.webp" },
];
const subscribeMotion = (callback: () => void) => {
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
};
const getReducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function AvatarStory() {
  const reduced = useSyncExternalStore(subscribeMotion, getReducedMotion, () => true);
  const [paused, setPaused] = useState(false);
  const [active, setActive] = useState(0);
  const [status, setStatus] = useState<"loading" | "ready" | "failed">("loading");
  const root = useRef<HTMLDivElement>(null);
  const layers = useRef<(HTMLDivElement | null)[]>([]);
  const bars = useRef<(HTMLSpanElement | null)[]>([]);
  const elapsed = useRef(TRANSITION_DURATION);
  const currentScene = useRef(0);
  const running = !paused && !reduced && status === "ready";

  useEffect(() => {
    let cancelled = false;
    Promise.all(scenes.map(scene => new Promise<void>((resolve, reject) => {
      const image = new window.Image();
      image.onload = () => resolve();
      image.onerror = reject;
      image.src = scene.image;
    }))).then(() => { if (!cancelled) setStatus("ready"); })
      .catch(() => { if (!cancelled) setStatus("failed"); });
    return () => { cancelled = true; };
  }, []);

  useEffect(() => {
    let frame = 0;
    let previous = 0;
    let visible = true;
    const element = root.current;
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; });
    if (element) observer.observe(element);
    const render = (now: number) => {
      const delta = previous ? Math.min(now - previous, 64) : 0;
      previous = now;
      if (running && visible && !document.hidden) elapsed.current += delta;
      const timing = getStoryTiming(elapsed.current);
      if (currentScene.current !== timing.scene) {
        currentScene.current = timing.scene;
        setActive(timing.scene);
      }
      const x = (timing.frame % 4) * 100 / 3;
      const y = Math.floor(timing.frame / 4) * 100;
      layers.current.forEach((layer, index) => {
        if (!layer) return;
        layer.style.backgroundPosition = `${x}% ${y}%`;
        layer.style.opacity = String(index === 1 ? timing.cityOpacity : 1);
      });
      bars.current.forEach((bar, index) => {
        if (bar) bar.style.transform = `scaleX(${timing.scene === index ? timing.progress : 0})`;
      });
      frame = requestAnimationFrame(render);
    };
    frame = requestAnimationFrame(render);
    return () => { cancelAnimationFrame(frame); observer.disconnect(); };
  }, [running]);

  function selectScene(index: number) {
    if (index === currentScene.current) return;
    elapsed.current = index * SCENE_DURATION + (running ? 0 : TRANSITION_DURATION);
    currentScene.current = index;
    setActive(index);
  }

  return <div className={`avatar-story ${running ? "is-playing" : "is-still"}`} ref={root}>
    <div className="story-topline"><span><i/> A LITTLE OF MY WORLD</span><span>AK / 01—02</span></div>
    <div className="story-viewport" role="img" aria-label={active === 0 ? "Animated illustrated avatar of Akash programming at his desk" : "Animated illustrated avatar of Akash walking through New York"}>
      <div className="story-camera">
        {scenes.map((scene, index) => <div key={scene.image} ref={element => { layers.current[index] = element; }} className={`story-sprite story-sprite-${index}`} style={{ backgroundImage: `url(${scene.image})` }}/>) }
      </div>
      {status !== "ready" && <div className="story-loading"><span>{status === "failed" ? "A little of my world" : "Setting the scene…"}</span></div>}
      <div className="story-vignette"/>
      <div className="story-scene-label"><span className="story-coordinate">{scenes[active].place}</span><span className="story-scene-number">0{active + 1}<small> / 02</small></span></div>
      <div className="story-caption"><h2>{scenes[active].title}</h2><p>{scenes[active].description}</p></div>
    </div>
    <div className="story-controls">
      <div className="story-chapters" role="group" aria-label="Choose avatar scene">{scenes.map((scene, index) => <button key={scene.image} onClick={() => selectScene(index)} aria-pressed={active === index}><span className="chapter-label"><small>0{index + 1}</small>{index === 0 ? "Programming" : "New York"}</span><span className="chapter-track"><span ref={element => { bars.current[index] = element; }}/></span></button>)}</div>
      <button className="story-play" onClick={() => setPaused(!paused)} disabled={reduced || status !== "ready"} aria-label={reduced ? "Animation disabled by reduced-motion preference" : paused ? "Play avatar story" : "Pause avatar story"} aria-pressed={paused}>{running ? <Pause size={18}/> : <Play size={18}/>}</button>
    </div>
    <div className="story-footnote"><span>{reduced ? "STILL SCENES · REDUCED MOTION" : "TWO SCENES. ONE CONTINUOUS STORY."}</span><a href="#projects">Meet the work <ArrowUpRight size={14}/></a></div>
  </div>;
}
