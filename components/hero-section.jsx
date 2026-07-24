"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { stats } from "@/lib/xai-data";

export default function HeroSection() {
  return (
    <section id="home" className="hero section hero-global-wrap">
      <div className="hero-global-backdrop" />

      <div className="container hero-cursor-content">
        <div className="hero-copy hero-copy-centered">
          <motion.span
            className="eyebrow hero-eyebrow"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Intelligence Workspace • Explainable AI
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.12 }}
          >
            From raw data to <span>decisive action.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.22 }}
          >
            Xai turns disconnected business signals into structured intelligence,
            actionable insight, and monitored AI automations for decision-makers.
          </motion.p>

          <motion.div
            className="hero-actions center-actions"
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.32 }}
          >
            <a href="#workspace" className="btn btn-primary">Explore workspace</a>
            <a href="#flow" className="btn btn-ghost">See intelligence flow</a>
          </motion.div>

          <motion.div
            className="hero-stat-grid hero-stat-grid-centered"
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.42 }}
          >
            {stats.map((item) => (
              <div key={item.label} className="glass-card stat-card stat-card-dark">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="hero-floating-logo glass-card"
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.85, delay: 0.28 }}
        >
          <div className="hero-brand-lockup">
            <div className="hero-brand-mark-shell">
              <span className="hero-brand-mark-glow" />
              <Image
                src="/xai-mark.svg"
                alt="Xai Intelligence Workspace"
                width={220}
                height={220}
                className="hero-logo hero-logo-centered"
                priority
              />
            </div>

            <div className="hero-brand-copy">
              <strong>Xai <span>Workspace</span></strong>
              <p>Observe • Organize • Operationalize</p>
            </div>
          </div>

          <div className="hero-badge-row">
            <span className="chip">Explainable insight</span>
            <span className="chip">Live intelligence</span>
            <span className="chip">AI automations</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
