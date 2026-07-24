export const stats = [
  { value: "20+", label: "Connected sources" },
  { value: "2.4M", label: "Signals structured" },
  { value: "94%", label: "Insight confidence" },
  { value: "38", label: "Active automations" },
];

export const solutions = [
  {
    title: "Unified context",
    text: "Bring product, revenue, customer, and operational data into one calm intelligence layer.",
  },
  {
    title: "Explainable analysis",
    text: "Trace every signal back to its source and understand why the system produced each conclusion.",
  },
  {
    title: "Decision-ready insight",
    text: "Turn noisy datasets into concise priorities, risks, opportunities, and recommended next actions.",
  },
  {
    title: "AI automations",
    text: "Move from understanding to execution with monitored workflows, approvals, and measurable outcomes.",
  },
];

export const flowStages = [
  {
    id: "01",
    label: "Ingest Data",
    title: "Connect every operating signal.",
    text: "Xai continuously receives events from your warehouse, CRM, product analytics, support tools, and internal systems.",
    metric: "20 sources live",
  },
  {
    id: "02",
    label: "Analyze with AI",
    title: "Organize noise into structured intelligence.",
    text: "Models classify, compare, score, and connect signals while preserving traceability and confidence.",
    metric: "2.4M signals mapped",
  },
  {
    id: "03",
    label: "Generate Insight",
    title: "Surface the decisions that matter now.",
    text: "Decision-makers receive clear explanations, impact estimates, and recommended actions instead of another dashboard to decode.",
    metric: "12 priorities surfaced",
  },
];

export const intelligenceLayers = [
  {
    slug: "raw-data",
    badge: "Layer 01",
    name: "Raw Data",
    shortDescription: "Live events arrive from disconnected business systems.",
    category: "Observe",
    metric: "2.4M",
    metricLabel: "signals",
    miniDetail: "A continuous stream of product, customer, and operational events.",
    features: ["Warehouse events", "CRM activity", "Product telemetry"],
    useCases: ["Connect", "Normalize", "Validate"],
  },
  {
    slug: "structured-intelligence",
    badge: "Layer 02",
    name: "Structured Intelligence",
    shortDescription: "Signals are classified, connected, and scored by AI.",
    category: "Organize",
    metric: "94%",
    metricLabel: "confidence",
    miniDetail: "Context becomes a living intelligence graph with source-level traceability.",
    features: ["Entity mapping", "Pattern detection", "Confidence scoring"],
    useCases: ["Classify", "Compare", "Explain"],
  },
  {
    slug: "actionable-insight",
    badge: "Layer 03",
    name: "Actionable Insight",
    shortDescription: "High-impact risks and opportunities rise above the noise.",
    category: "Decide",
    metric: "12",
    metricLabel: "priorities",
    miniDetail: "Clear recommendations connect evidence, expected impact, and urgency.",
    features: ["Impact ranking", "Evidence trails", "Decision briefs"],
    useCases: ["Prioritize", "Forecast", "Decide"],
  },
  {
    slug: "ai-automations",
    badge: "Layer 04",
    name: "AI Automations",
    shortDescription: "Approved intelligence becomes monitored business action.",
    category: "Execute",
    metric: "38",
    metricLabel: "workflows",
    miniDetail: "Automations operate with clear triggers, approvals, owners, and outcomes.",
    features: ["Smart triggers", "Human approvals", "Outcome tracking"],
    useCases: ["Route", "Execute", "Measure"],
  },
];

export const decisionBriefs = [
  {
    quote: "Expansion revenue is at risk in the enterprise segment because onboarding time increased 18% this month.",
    name: "Revenue Signal",
    role: "High impact · 94% confidence",
  },
  {
    quote: "Support volume will exceed current capacity in nine days unless the billing workflow is automated.",
    name: "Operations Signal",
    role: "Time-sensitive · 91% confidence",
  },
  {
    quote: "Teams using the collaboration feature retain 1.7× better. Prioritize activation in the first session.",
    name: "Product Signal",
    role: "Growth opportunity · 96% confidence",
  },
];
