import { useEffect, useRef } from "react";
import { setupPanoramaViewer } from "../scripts/ScenePan";

export default function SceneViewer() {
  const viewerRef = useRef<HTMLDivElement>(null);
  const panoramaRef = useRef<HTMLImageElement>(null);
  const offsetRef = useRef<HTMLSpanElement>(null);
  const angleRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (
      viewerRef.current &&
      panoramaRef.current &&
      offsetRef.current &&
      angleRef.current
    ) {
      setupPanoramaViewer(
        viewerRef.current,
        panoramaRef.current,
        offsetRef.current,
        angleRef.current
      );
    }
  }, []);

  return (
    <div className="h-full w-full flex items-center justify-center text-white">
      <div className="hud space-x-4 absolute top-4 left-4">
        <span ref={offsetRef}>Offset: 0px</span>
        <span ref={angleRef}>Angle: 0&deg;</span>
      </div>

      <div ref={viewerRef} className="viewer relative">
        <img
          ref={panoramaRef}
          src="/assets/testSlice.png"
          alt="Panoramic Slice"
          className="panorama"
        />
      </div>
    </div>
  );
}