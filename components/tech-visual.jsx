export default function TechVisual({ title, compact = false }) {
  return (
    <div className={`tech-visual ${compact ? "compact" : ""}`}>
      <div className="tech-core">
        <span className="tech-ring tech-ring-one" />
        <span className="tech-ring tech-ring-two" />
        <span className="tech-dot tech-dot-one" />
        <span className="tech-dot tech-dot-two" />
        <span className="tech-dot tech-dot-three" />
        <div className="tech-chip">
          <span>{title.split(" ")[0]}</span>
        </div>
      </div>
      <div className="tech-lines">
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}
