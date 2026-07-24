"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const rawNodes = [
  { label: "CRM", x: 8, y: 18 }, { label: "ARR", x: 72, y: 12 }, { label: "NPS", x: 30, y: 68 },
  { label: "Usage", x: 82, y: 68 }, { label: "Tickets", x: 50, y: 38 }, { label: "Churn", x: 10, y: 78 },
  { label: "Latency", x: 66, y: 86 }, { label: "Pipeline", x: 88, y: 34 },
];

const structuredNodes = [
  { label: "CRM", x: 18, y: 22 }, { label: "ARR", x: 50, y: 22 }, { label: "NPS", x: 82, y: 22 },
  { label: "Usage", x: 18, y: 54 }, { label: "Tickets", x: 50, y: 54 }, { label: "Churn", x: 82, y: 54 },
  { label: "Latency", x: 34, y: 84 }, { label: "Pipeline", x: 66, y: 84 },
];

export default function SignatureCluster() {
  const [structured, setStructured] = useState(false);
  const nodes = structured ? structuredNodes : rawNodes;

  return (
    <div className="xai-signature-grid">
      <div className="xai-signature-copy">
        <span className="eyebrow">Signature Interaction</span>
        <h2>Watch scattered signals become an intelligence system.</h2>
        <p>
          The same data points remain visible, but Xai reorganizes their relationships so the operating picture becomes understandable and actionable.
        </p>
        <button type="button" className="btn btn-primary" onClick={() => setStructured((value) => !value)}>
          {structured ? "Return to raw data" : "Structure intelligence"}
        </button>
      </div>

      <motion.div
        className="glass-card xai-cluster-stage"
        animate={{ rotateX: structured ? 0 : 7, rotateY: structured ? 0 : -6 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="band-grid" />
        <motion.div className="xai-cluster-core" animate={{ scale: structured ? 1.08 : 0.9, opacity: structured ? 1 : 0.55 }}>
          <span>Xai</span><small>Intelligence core</small>
        </motion.div>
        <svg className="xai-cluster-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          {nodes.map((node) => (
            <motion.line
              key={node.label}
              x1="50" y1="50" x2={node.x} y2={node.y}
              stroke="#5ee7ff" strokeOpacity={structured ? 0.42 : 0.14} strokeWidth="0.6"
              initial={false}
              animate={{ x2: node.x, y2: node.y }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            />
          ))}
        </svg>
        {nodes.map((node, index) => (
          <motion.button
            type="button"
            key={node.label}
            className="xai-cluster-node"
            animate={{ left: `${node.x}%`, top: `${node.y}%`, scale: structured ? 1 : index % 2 ? 0.88 : 1.05 }}
            transition={{ duration: 0.8, delay: index * 0.035, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.12, zIndex: 5 }}
          >
            <span>{node.label}</span><small>{structured ? "Mapped" : "Raw"}</small>
          </motion.button>
        ))}
        <div className="xai-cluster-state">
          <span>{structured ? "Structured intelligence" : "Raw data field"}</span>
          <strong>{structured ? "8 entities mapped" : "8 disconnected signals"}</strong>
        </div>
      </motion.div>
    </div>
  );
}
