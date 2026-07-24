"use client";

import HeroSection from "@/components/hero-section";
import Reveal from "@/components/reveal";
import InsightFlow from "@/components/insight-flow";
import XaiFlowCard from "@/components/xai-flow-card";
import IntelligenceDashboard from "@/components/intelligence-dashboard";
import SignatureCluster from "@/components/signature-cluster";
import { decisionBriefs, intelligenceLayers, solutions } from "@/lib/xai-data";

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <section className="section" id="product">
        <div className="container">
          <Reveal className="section-header">
            <span className="eyebrow">Why Xai</span>
            <h2>Designed to make complex operations feel clear.</h2>
            <p>
              Xai is not another reporting layer. It connects context, explains what changed,
              and helps teams move from observation to deliberate execution.
            </p>
          </Reveal>

          <div className="solution-grid">
            {solutions.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.08}>
                <div className="glass-card solution-card">
                  <span className="solution-index">0{index + 1}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-highlighted" id="flow">
        <InsightFlow />
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="section-header">
            <span className="eyebrow">Intelligence Transformation</span>
            <h2>Four layers. One continuous decision system.</h2>
            <p>
              Hover or tap each layer to inspect how Xai preserves the original signal while adding structure, context, and action.
            </p>
          </Reveal>

          <div className="product-grid xai-layer-grid">
            {intelligenceLayers.map((item, index) => (
              <XaiFlowCard key={item.slug} item={item} priority={index < 2} />
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="workspace">
        <div className="container">
          <Reveal className="section-header">
            <span className="eyebrow">Intelligence Dashboard Preview</span>
            <h2>A real product workspace—not a collection of marketing cards.</h2>
            <p>
              Switch between executive overview, source-level signals, and monitored automations to see the interface respond as one system.
            </p>
          </Reveal>

          <Reveal>
            <IntelligenceDashboard />
          </Reveal>
        </div>
      </section>

      <section className="section section-highlighted" id="automation">
        <div className="container">
          <Reveal>
            <SignatureCluster />
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="section-header">
            <span className="eyebrow">Decision Briefs</span>
            <h2>Insight written for action, not interpretation.</h2>
          </Reveal>

          <div className="testimonial-grid">
            {decisionBriefs.map((item, index) => (
              <Reveal key={item.name} delay={index * 0.08}>
                <article className="glass-card testimonial-card">
                  <p>“{item.quote}”</p>
                  <div>
                    <strong>{item.name}</strong>
                    <span>{item.role}</span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container cta-block glass-card">
          <Reveal>
            <span className="eyebrow">Xai Intelligence Workspace</span>
            <h2>Understand what changed. Decide what matters. Automate what comes next.</h2>
            <p>
              A single-page interactive product experience built around clarity, explainability, purposeful motion, and decision-ready intelligence.
            </p>
            <div className="hero-actions center-actions">
              <a href="#home" className="btn btn-primary">Replay experience</a>
              <a href="#workspace" className="btn btn-ghost">Open workspace</a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
