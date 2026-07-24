"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { flowStages } from "@/lib/xai-data";

export default function InsightFlow() {
  const [active, setActive] = useState(0);
  const stage = flowStages[active];

  return (
    <div className="container device-band xai-flow-band">
      <div className="device-band-copy">
        <span className="eyebrow">Interactive Insight Flow</span>
        <h2>One continuous path from signal to decision.</h2>
        <p>
          Select a stage to see how Xai preserves context while progressively turning raw events into a clear next action.
        </p>
        <div className="xai-stage-tabs" role="tablist" aria-label="Intelligence flow stages">
          {flowStages.map((item, index) => (
            <button
              key={item.id}
              type="button"
              className={index === active ? "active" : ""}
              onClick={() => setActive(index)}
              role="tab"
              aria-selected={index === active}
            >
              <span>{item.id}</span>
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <motion.div
        className="glass-card band-panel xai-band-panel"
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.75 }}
      >
        <div className="band-grid" />
        <div className="xai-signal-track" aria-hidden="true">
          {flowStages.map((item, index) => (
            <motion.span
              key={item.id}
              animate={{
                scale: index === active ? 1.28 : 1,
                opacity: index <= active ? 1 : 0.35,
              }}
              transition={{ duration: 0.35 }}
            />
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={stage.id}
            className="xai-stage-detail"
            initial={{ opacity: 0, y: 26, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="solution-index">{stage.id}</span>
            <p className="mini-label">{stage.label}</p>
            <h3>{stage.title}</h3>
            <p>{stage.text}</p>
            <div className="xai-stage-metric">
              <span>Live workspace state</span>
              <strong>{stage.metric}</strong>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
