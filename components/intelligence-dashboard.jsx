"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const tabs = [
  {
    id: "overview",
    label: "Overview",
    title: "Executive intelligence",
    description: "A concise operating view of risks, growth signals, and automated actions.",
    metrics: [
      ["Insight confidence", "94%", "+6.2%"],
      ["Revenue at risk", "$184K", "3 accounts"],
      ["Automation coverage", "68%", "+12%"],
      ["Signals processed", "2.4M", "Today"],
    ],
    rows: [
      ["Enterprise onboarding slowdown", "Revenue", "High", "94%"],
      ["Billing support spike", "Operations", "High", "91%"],
      ["Collaboration activation", "Product", "Medium", "96%"],
    ],
  },
  {
    id: "signals",
    label: "Signals",
    title: "Signal intelligence",
    description: "Every conclusion remains connected to its source, pattern, and confidence score.",
    metrics: [
      ["New signals", "1,248", "+18%"],
      ["Mapped entities", "6,410", "+220"],
      ["Anomalies", "14", "5 critical"],
      ["Source health", "99.8%", "Stable"],
    ],
    rows: [
      ["CRM expansion probability changed", "Salesforce", "High", "97%"],
      ["Time-to-value increased", "Warehouse", "High", "92%"],
      ["Billing topic accelerating", "Support", "Medium", "89%"],
    ],
  },
  {
    id: "automations",
    label: "Automations",
    title: "Monitored execution",
    description: "Turn approved insights into clear workflows with ownership, guardrails, and outcome tracking.",
    metrics: [
      ["Active workflows", "38", "+4"],
      ["Hours recovered", "126", "This month"],
      ["Approval rate", "87%", "+3.4%"],
      ["Successful runs", "99.2%", "Stable"],
    ],
    rows: [
      ["Route at-risk accounts", "Revenue Ops", "Live", "12 runs"],
      ["Escalate billing clusters", "Support", "Approval", "8 runs"],
      ["Trigger activation playbook", "Growth", "Live", "18 runs"],
    ],
  },
];

function MiniChart({ tab }) {
  const values = tab === "automations" ? [25, 38, 34, 52, 48, 66, 72, 84] : tab === "signals" ? [58, 44, 70, 52, 78, 69, 91, 82] : [36, 52, 44, 68, 60, 78, 72, 88];
  const points = values.map((value, index) => `${index * 14.285},${100 - value}`).join(" ");

  return (
    <svg className="xai-chart" viewBox="0 0 100 100" preserveAspectRatio="none" aria-label="Trend chart">
      <defs>
        <linearGradient id={`chart-fill-${tab}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5ee7ff" stopOpacity="0.34" />
          <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
        </linearGradient>
      </defs>
      <motion.polygon
        points={`0,100 ${points} 100,100`}
        fill={`url(#chart-fill-${tab})`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
      <motion.polyline
        points={points}
        fill="none"
        stroke="#5ee7ff"
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      />
    </svg>
  );
}

export default function IntelligenceDashboard() {
  const [active, setActive] = useState("overview");
  const tab = tabs.find((item) => item.id === active) ?? tabs[0];

  return (
    <div className="xai-dashboard-shell glass-card">
      <aside className="xai-sidebar">
        <div className="xai-sidebar-brand"><span>X</span><strong>Xai</strong></div>
        <div className="xai-sidebar-links">
          {tabs.map((item) => (
            <button key={item.id} type="button" className={active === item.id ? "active" : ""} onClick={() => setActive(item.id)}>
              <span className="xai-nav-dot" />{item.label}
            </button>
          ))}
        </div>
        <div className="xai-sidebar-status"><span /> All systems live</div>
      </aside>

      <div className="xai-dashboard-main">
        <div className="xai-dashboard-topbar">
          <div><span>Intelligence Workspace</span><strong>{tab.title}</strong></div>
          <button type="button" className="btn btn-ghost btn-small">Last 30 days ▾</button>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab.id}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.38 }}
          >
            <p className="xai-dashboard-description">{tab.description}</p>
            <div className="dashboard-grid xai-metric-grid">
              {tab.metrics.map(([label, value, note]) => (
                <article key={label} className="glass-card dashboard-card">
                  <span>{label}</span><strong>{value}</strong><p>{note}</p>
                </article>
              ))}
            </div>

            <div className="xai-dashboard-content-grid">
              <div className="glass-card dashboard-panel xai-chart-panel">
                <div className="xai-panel-heading"><div><span>Operating trend</span><strong>Intelligence velocity</strong></div><em>Live</em></div>
                <MiniChart tab={tab.id} />
              </div>
              <div className="glass-card dashboard-panel xai-priority-panel">
                <div className="xai-panel-heading"><div><span>Priority queue</span><strong>What needs attention</strong></div></div>
                <div className="xai-priority-list">
                  {tab.rows.map(([title, source, level, confidence], index) => (
                    <motion.div key={title} initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.08 }}>
                      <span className="xai-row-rank">0{index + 1}</span>
                      <div><strong>{title}</strong><span>{source} · {level}</span></div>
                      <em>{confidence}</em>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
