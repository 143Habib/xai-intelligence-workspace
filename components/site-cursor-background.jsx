"use client";

import { useEffect, useRef } from "react";

const CURSOR_PALETTES = [
  {
    tubes: ["#071B31", "#0F5FE0", "#37DDF8"],
    lights: ["#0B213E", "#1A74FF", "#4FE8FF", "#DFF7FF"],
  },
  {
    tubes: ["#081F38", "#1984FF", "#7AE8FF"],
    lights: ["#102B4B", "#2B8CFF", "#74EDFF", "#EAFBFF"],
  },
  {
    tubes: ["#0A2540", "#1667EC", "#50E6FF"],
    lights: ["#112E50", "#377FFF", "#61ECFF", "#F2FDFF"],
  },
];

export default function SiteCursorBackground() {
  const canvasRef = useRef(null);
  const appRef = useRef(null);
  const paletteIndexRef = useRef(0);

  useEffect(() => {
    let blobUrl = null;

    const applyPalette = (palette) => {
      if (!appRef.current) return;
      if (appRef.current.tubes?.setColors) {
        appRef.current.tubes.setColors(palette.tubes);
      }
      if (appRef.current.tubes?.setLightsColors) {
        appRef.current.tubes.setLightsColors(palette.lights);
      }
    };

    const rotatePalette = () => {
      paletteIndexRef.current = (paletteIndexRef.current + 1) % CURSOR_PALETTES.length;
      applyPalette(CURSOR_PALETTES[paletteIndexRef.current]);
    };

    const initTimer = setTimeout(() => {
      fetch("https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js")
        .then((response) => response.text())
        .then((code) => {
          blobUrl = URL.createObjectURL(new Blob([code], { type: "text/javascript" }));
          return import(/* webpackIgnore: true */ blobUrl);
        })
        .then((module) => {
          const TubesCursor = module.default;
          const initialPalette = CURSOR_PALETTES[paletteIndexRef.current];

          if (canvasRef.current) {
            appRef.current = TubesCursor(canvasRef.current, {
              tubes: {
                colors: initialPalette.tubes,
                lights: {
                  intensity: 290,
                  colors: initialPalette.lights,
                },
              },
            });
          }
        })
        .catch((err) => console.error("Failed to load site cursor module:", err));
    }, 120);

    window.addEventListener("click", rotatePalette);

    return () => {
      clearTimeout(initTimer);
      window.removeEventListener("click", rotatePalette);
      if (blobUrl) URL.revokeObjectURL(blobUrl);
      if (appRef.current && typeof appRef.current.dispose === "function") {
        appRef.current.dispose();
      }
    };
  }, []);

  return (
    <div className="site-cursor-shell" aria-hidden="true">
      <canvas ref={canvasRef} className="site-cursor-canvas" />
      <div className="site-cursor-wash" />
      <div className="site-cursor-beam site-cursor-beam-left" />
      <div className="site-cursor-beam site-cursor-beam-right" />
      <div className="site-cursor-glow site-cursor-glow-one" />
      <div className="site-cursor-glow site-cursor-glow-two" />
      <div className="site-cursor-noise" />
    </div>
  );
}
