"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import TechVisual from "@/components/tech-visual";
import ElectricCard from "@/components/electric-card";

const cardThemes = [
  { color: "#1E90FF", variant: "swirl" },
  { color: "#00CFFF", variant: "hue" },
  { color: "#3A8BFF", variant: "swirl" },
  { color: "#8B5CF6", variant: "hue" },
];

function getTheme(item) {
  const hash = item.slug.split("").reduce((sum, char) => sum + char.charCodeAt(0), 0);
  return cardThemes[hash % cardThemes.length];
}

export default function XaiFlowCard({ item, priority = false }) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [flipped, setFlipped] = useState(false);
  const theme = useMemo(() => getTheme(item), [item]);

  const onMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    setRotate({
      y: ((x / rect.width) - 0.5) * 7,
      x: ((y / rect.height) - 0.5) * -7,
    });
  };

  const resetCard = () => {
    setRotate({ x: 0, y: 0 });
    setFlipped(false);
  };

  return (
    <motion.article
      className={`product-card-shell xai-flow-card ${flipped ? "is-flipped" : ""}`}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay: priority ? 0.05 : 0 }}
      onMouseEnter={() => setFlipped(true)}
      onMouseMove={onMove}
      onMouseLeave={resetCard}
      onFocus={() => setFlipped(true)}
      onBlur={resetCard}
      onClick={() => setFlipped((value) => !value)}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          setFlipped((value) => !value);
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`Preview ${item.name}`}
      style={{ transform: `perspective(1200px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)` }}
    >
      <div className="card-flip-scene" style={{ transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}>
        <div className="card-face card-face-front">
          <ElectricCard
            variant={theme.variant}
            color={theme.color}
            badge={item.badge}
            title={item.name}
            description={item.shortDescription}
            width="100%"
            aspectRatio="4 / 5"
            className="store-electric-card"
          >
            <div className="electric-meta-row">
              <span className="product-category-tag">{item.category}</span>
              <div className="electric-price-block">
                <strong>{item.metric}</strong>
                <small>{item.metricLabel}</small>
              </div>
            </div>

            <div className="product-visual-shell">
              <TechVisual title={item.name} compact />
            </div>

            <div className="product-tags compact">
              {item.useCases.map((tag) => <span key={tag}>{tag}</span>)}
            </div>

            <div className="product-actions-row">
              <span className="flip-hint">Hover to inspect</span>
              <span className="btn btn-primary btn-small electric-btn">View layer</span>
            </div>
          </ElectricCard>
        </div>

        <div className="card-face card-face-back">
          <ElectricCard
            variant={theme.variant === "swirl" ? "hue" : "swirl"}
            color={theme.color}
            badge="Inside the layer"
            title={item.name}
            description={item.miniDetail}
            width="100%"
            aspectRatio="4 / 5"
            className="store-electric-card back-electric-card"
          >
            <div className="back-copy-shell">
              <p className="back-short-copy">{item.miniDetail}</p>
              <div className="back-feature-list">
                {item.features.map((feature) => <span key={feature}>{feature}</span>)}
              </div>
              <div className="back-bottom-row">
                <div className="electric-price-block">
                  <strong>{item.metric}</strong>
                  <small>{item.metricLabel}</small>
                </div>
                <span className="btn btn-ghost btn-small electric-btn secondary-btn">Return</span>
              </div>
            </div>
          </ElectricCard>
        </div>
      </div>

      <style jsx>{`
        .product-card-shell {
          width: 100%;
          max-width: 320px;
          min-height: 530px;
          transform-style: preserve-3d;
          transition: transform 0.18s ease-out;
          will-change: transform;
          cursor: pointer;
          outline: none;
          overflow: visible;
        }
        .product-card-shell:focus-visible {
          box-shadow: 0 0 0 3px rgba(94, 231, 255, 0.24);
          border-radius: 30px;
        }
        .card-flip-scene {
          position: relative;
          width: 100%;
          min-height: 530px;
          transform-style: preserve-3d;
          transition: transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .card-face {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          transform-style: preserve-3d;
        }
        .card-face-back { transform: rotateY(180deg); }
        .electric-meta-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
        }
        .product-category-tag {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 34px;
          padding: 8px 14px;
          border-radius: 999px;
          font-size: 0.82rem;
          color: rgba(245, 249, 255, 0.92);
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(94,231,255,0.18);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.05);
          backdrop-filter: blur(14px);
        }
        .electric-price-block { display: grid; justify-items: end; }
        .electric-price-block strong {
          display: block;
          font-size: 1.2rem;
          color: #ffffff;
          letter-spacing: -0.02em;
        }
        .electric-price-block small { color: rgba(168,179,199,0.76); }
        .product-visual-shell {
          display: grid;
          place-items: center;
          min-height: 120px;
          margin-top: 2px;
        }
        .product-actions-row {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 10px;
          align-items: center;
        }
        .flip-hint {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 42px;
          padding: 0 14px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.14);
          background: rgba(255,255,255,0.06);
          color: rgba(245,249,255,0.82);
          font-size: 0.9rem;
        }
        .electric-btn { width: 100%; min-height: 42px; position: relative; z-index: 5; }
        .secondary-btn {
          background: rgba(255,255,255,0.08);
          color: #f5f7fb;
          border-color: rgba(255,255,255,0.14);
          backdrop-filter: blur(14px);
        }
        .back-copy-shell { display: grid; gap: 16px; }
        .back-short-copy {
          margin: 0;
          color: rgba(245,249,255,0.84);
          line-height: 1.5;
          max-width: 28ch;
        }
        .back-feature-list { display: grid; gap: 10px; }
        .back-feature-list span {
          display: block;
          padding: 12px 14px;
          border-radius: 16px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.12);
          color: rgba(245,249,255,0.9);
          line-height: 1.5;
        }
        .back-bottom-row {
          display: flex;
          align-items: end;
          justify-content: space-between;
          gap: 14px;
          margin-top: auto;
        }
        .store-electric-card :global(.tech-core) {
          background: linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02));
          border: 1px solid rgba(255,255,255,0.14);
          box-shadow: 0 18px 46px rgba(0,0,0,0.22);
        }
        .store-electric-card :global(.tech-ring) { border-color: rgba(255,255,255,0.22); }
        .store-electric-card :global(.tech-ring-two) { border-color: rgba(0,207,255,0.38); }
        .store-electric-card :global(.tech-chip) {
          background: linear-gradient(135deg, rgba(56,189,248,0.78), rgba(99,102,241,0.72));
        }
        @media (max-width: 640px) {
          .product-card-shell, .card-flip-scene { min-height: 520px; max-width: 100%; }
          .electric-meta-row, .back-bottom-row { flex-direction: column; align-items: flex-start; }
          .electric-price-block { justify-items: start; }
          .product-actions-row { grid-template-columns: 1fr; }
        }
      `}</style>
    </motion.article>
  );
}
