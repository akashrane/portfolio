export const SCENE_DURATION = 9000;
export const TRANSITION_DURATION = 1200;
export const FRAME_COUNT = 8;
export const FRAME_DURATION = 150;

/** Both layers remain mounted, so the outgoing scene can dissolve into the next. */
export function getStoryTiming(elapsed: number) {
  const time = ((elapsed % (SCENE_DURATION * 2)) + SCENE_DURATION * 2) % (SCENE_DURATION * 2);
  const scene = Math.floor(time / SCENE_DURATION);
  const local = time % SCENE_DURATION;
  const blend = Math.min(local / TRANSITION_DURATION, 1);
  const eased = blend * blend * (3 - 2 * blend);
  return {
    scene,
    frame: Math.floor(time / FRAME_DURATION) % FRAME_COUNT,
    progress: local / SCENE_DURATION,
    cityOpacity: scene === 1 ? eased : 1 - eased,
  };
}
