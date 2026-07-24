export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h3>Xai – Intelligence Workspace</h3>
          <p>
            A calm, explainable workspace that transforms raw business data into
            structured intelligence, actionable insight, and AI automations.
          </p>
        </div>

        <div>
          <h4>Experience</h4>
          <div className="footer-links">
            <a href="#home">Overview</a>
            <a href="#flow">Insight flow</a>
            <a href="#workspace">Dashboard</a>
            <a href="#automation">Automations</a>
          </div>
        </div>

        <div>
          <h4>Core layers</h4>
          <div className="footer-links">
            <span>Raw data ingestion</span>
            <span>AI analysis</span>
            <span>Decision intelligence</span>
            <span>Monitored execution</span>
          </div>
        </div>
      </div>
      <div className="footer-bottom">© 2026 Xai Intelligence Workspace — Frontend experience prototype.</div>
    </footer>
  );
}
