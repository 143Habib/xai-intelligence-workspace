"use client";

import React, { useId } from "react";

export default function ElectricCard({
  variant = "swirl",
  color = "#1E90FF",
  badge = "Featured",
  title = "AI Device",
  description = "Premium animated showcase card.",
  width = "100%",
  aspectRatio = "4 / 5",
  className = "",
  children,
}) {
  const uid = useId().replace(/:/g, "");
  const ids = {
    swirl: `swirl-${uid}`,
    hue: `hue-${uid}`,
  };

  const filterURL = variant === "hue" ? `url(#${ids.hue})` : `url(#${ids.swirl})`;

  return (
    <div className={`ec-wrap ${className}`}>
      <svg className="svg-container" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
          <filter id={ids.swirl} colorInterpolationFilters="sRGB" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="8" result="noise1" seed="1" />
            <feOffset in="noise1" dx="0" dy="0" result="offsetNoise1">
              <animate attributeName="dy" values="620; 0" dur="7s" repeatCount="indefinite" calcMode="linear" />
            </feOffset>

            <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="8" result="noise2" seed="1" />
            <feOffset in="noise2" dx="0" dy="0" result="offsetNoise2">
              <animate attributeName="dy" values="0; -620" dur="7s" repeatCount="indefinite" calcMode="linear" />
            </feOffset>

            <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="8" result="noise3" seed="2" />
            <feOffset in="noise3" dx="0" dy="0" result="offsetNoise3">
              <animate attributeName="dx" values="420; 0" dur="7s" repeatCount="indefinite" calcMode="linear" />
            </feOffset>

            <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="8" result="noise4" seed="2" />
            <feOffset in="noise4" dx="0" dy="0" result="offsetNoise4">
              <animate attributeName="dx" values="0; -420" dur="7s" repeatCount="indefinite" calcMode="linear" />
            </feOffset>

            <feComposite in="offsetNoise1" in2="offsetNoise2" result="part1" />
            <feComposite in="offsetNoise3" in2="offsetNoise4" result="part2" />
            <feBlend in="part1" in2="part2" mode="screen" result="combinedNoise" />
            <feDisplacementMap in="SourceGraphic" in2="combinedNoise" scale="24" xChannelSelector="R" yChannelSelector="B" />
          </filter>

          <filter id={ids.hue} colorInterpolationFilters="sRGB" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="6" />
            <feColorMatrix type="hueRotate" result="pt1">
              <animate attributeName="values" values="0;360;" dur="1.2s" repeatCount="indefinite" calcMode="paced" />
            </feColorMatrix>
            <feComposite />
            <feTurbulence type="turbulence" baseFrequency="0.03" numOctaves="6" seed="5" />
            <feColorMatrix type="hueRotate" result="pt2">
              <animate
                attributeName="values"
                values="0; 320; 190; 275; 70; 160; 255; 145; 360;"
                dur="6s"
                repeatCount="indefinite"
                calcMode="paced"
              />
            </feColorMatrix>
            <feBlend in="pt1" in2="pt2" mode="normal" result="combinedNoise" />
            <feDisplacementMap in="SourceGraphic" scale="20" xChannelSelector="R" yChannelSelector="B" />
          </filter>
        </defs>
      </svg>

      <div className="card-container" style={{ "--electric-border-color": color, "--f": filterURL }}>
        <div className="inner-container">
          <div className="border-outer">
            <div className="main-card" />
          </div>
          <div className="glow-layer glow-layer-1" />
          <div className="glow-layer glow-layer-2" />
        </div>

        <div className="overlay overlay-1" />
        <div className="overlay overlay-2" />
        <div className="background-glow" />
        <div className="circuit circuit-1" />
        <div className="circuit circuit-2" />

        <div className="content-container">
          <div className="content-top">
            <div className="badge-row">
              <div className="glass-pill">{badge}</div>
            </div>
            <div className="title-block">
              <p className="card-title">{title}</p>
              <p className="card-description">{description}</p>
            </div>
          </div>

          {children ? (
            <>
              <hr className="divider" />
              <div className="content-bottom">{children}</div>
            </>
          ) : null}
        </div>
      </div>

      <style jsx>{`
        .ec-wrap {
          position: relative;
          display: block;
          width: 100%;
          color: #f5f9ff;
        }

        .svg-container {
          position: absolute;
          width: 0;
          height: 0;
          overflow: hidden;
        }

        .card-container {
          position: relative;
          width: ${width};
          min-height: 100%;
          padding: 2px;
          border-radius: 30px;
          overflow: hidden;
          background:
            linear-gradient(150deg, rgba(255,255,255,0.12), rgba(255,255,255,0.03) 28%, transparent 48%),
            linear-gradient(135deg, rgba(11, 16, 32, 0.98), rgba(17, 24, 39, 0.96), rgba(26, 35, 64, 0.94));
          box-shadow:
            0 30px 80px rgba(2, 6, 23, 0.46),
            inset 0 1px 0 rgba(255,255,255,0.08);
        }

        .inner-container {
          position: relative;
        }

        .border-outer {
          border: 1px solid color-mix(in srgb, var(--electric-border-color) 58%, white 10%);
          border-radius: 28px;
          padding-right: 0.12rem;
          padding-bottom: 0.12rem;
        }

        .main-card {
          width: 100%;
          aspect-ratio: ${aspectRatio};
          border-radius: 28px;
          border: 1px solid color-mix(in srgb, var(--electric-border-color) 70%, white 8%);
          margin-top: -3px;
          margin-left: -3px;
          filter: var(--f);
          background:
            radial-gradient(circle at 18% 18%, color-mix(in srgb, var(--electric-border-color) 56%, transparent) 0%, transparent 18%),
            radial-gradient(circle at 85% 12%, rgba(139,92,246,0.12), transparent 24%),
            linear-gradient(165deg, rgba(11,16,32,0.98), rgba(17,24,39,0.94) 34%, rgba(99,102,241,0.14) 78%, rgba(94,231,255,0.16));
        }

        .glow-layer,
        .overlay,
        .background-glow,
        .circuit {
          position: absolute;
          inset: 0;
          border-radius: 28px;
          pointer-events: none;
        }

        .glow-layer-1 {
          border: 1px solid color-mix(in srgb, var(--electric-border-color) 45%, white 18%);
          filter: blur(1px);
        }

        .glow-layer-2 {
          border: 1px solid color-mix(in srgb, var(--electric-border-color) 68%, white 18%);
          filter: blur(7px);
          opacity: 0.6;
        }

        .overlay {
          mix-blend-mode: screen;
          transform: scale(1.02);
        }

        .overlay-1 {
          background: linear-gradient(145deg, rgba(94,231,255,0.12), transparent 36%, transparent 62%, rgba(139,92,246,0.12));
          opacity: 0.85;
        }

        .overlay-2 {
          background: radial-gradient(circle at top right, rgba(94,231,255,0.14), transparent 28%);
          filter: blur(18px);
          opacity: 0.9;
        }

        .background-glow {
          inset: 8%;
          z-index: 0;
          filter: blur(42px);
          opacity: 0.55;
          background: radial-gradient(circle at center, color-mix(in srgb, var(--electric-border-color) 45%, transparent), transparent 65%);
        }

        .circuit {
          z-index: 0;
          opacity: 0.38;
          background-size: 120px 120px, 120px 120px;
        }

        .circuit-1 {
          background-image:
            linear-gradient(rgba(245,249,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(245,249,255,0.08) 1px, transparent 1px);
          mask-image: linear-gradient(180deg, black, transparent 88%);
        }

        .circuit-2 {
          background-image: radial-gradient(circle at center, rgba(0,207,255,0.16) 0%, transparent 55%);
          filter: blur(22px);
          opacity: 0.5;
        }

        .content-container {
          position: absolute;
          inset: 0;
          z-index: 2;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: clamp(18px, 2vw, 28px);
        }

        .content-top {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .badge-row {
          display: flex;
          justify-content: flex-start;
        }

        .glass-pill {
          position: relative;
          width: fit-content;
          border-radius: 999px;
          padding: 0.7rem 1rem;
          border: 1px solid rgba(255,255,255,0.14);
          background:
            radial-gradient(60% 80% at 50% 100%, rgba(94,231,255,0.12), rgba(255,255,255,0) 100%),
            rgba(255,255,255,0.06);
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(245,249,255,0.9);
          backdrop-filter: blur(12px);
        }

        .title-block {
          display: grid;
          gap: 10px;
          max-width: 18rem;
        }

        .card-title {
          margin: 0;
          font-size: clamp(1.6rem, 2.1vw, 2.15rem);
          line-height: 1.02;
          font-weight: 700;
          text-shadow: 0 8px 22px rgba(0,0,0,0.24);
        }

        .card-description {
          margin: 0;
          font-size: 0.98rem;
          line-height: 1.7;
          color: rgba(168,179,199,0.9);
          max-width: 22rem;
        }

        .divider {
          width: 100%;
          border: 0;
          height: 1px;
          margin: auto 0 0;
          background: linear-gradient(90deg, transparent, rgba(94,231,255,0.22), rgba(139,92,246,0.18), transparent);
        }

        .content-bottom {
          display: flex;
          flex-direction: column;
          gap: 16px;
          padding-top: 18px;
        }

        @media (max-width: 640px) {
          .card-container {
            border-radius: 24px;
          }

          .border-outer,
          .main-card,
          .glow-layer,
          .overlay,
          .background-glow,
          .circuit {
            border-radius: 22px;
          }

          .content-container {
            padding: 18px;
          }

          .card-title {
            font-size: 1.45rem;
          }

          .card-description {
            font-size: 0.92rem;
          }
        }
      `}</style>
    </div>
  );
}
