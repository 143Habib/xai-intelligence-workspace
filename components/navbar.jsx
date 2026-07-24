"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const links = [
  { href: "#home", label: "Home", id: "home" },
  { href: "#flow", label: "Flow", id: "flow" },
  { href: "#workspace", label: "Workspace", id: "workspace" },
  { href: "#automation", label: "Automation", id: "automation" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { rootMargin: "-30% 0px -55%", threshold: [0.05, 0.2, 0.45] }
    );

    links.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="site-header">
      <div className="container nav-shell glass-card">
        <a href="#home" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark-shell" aria-hidden="true">
            <span className="brand-mark-glow" />
            <Image src="/xai-mark.svg" alt="Xai" width={44} height={44} className="brand-logo" />
          </span>
          <div className="brand-copy">
            <strong>Xai <span>Workspace</span></strong>
            <span>Intelligence for decision-makers</span>
          </div>
        </a>

        <button
          className="mobile-toggle"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav-links ${open ? "open" : ""}`}>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={active === link.id ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav-cta">
          <a href="#workspace" className="btn btn-primary btn-small">Open demo</a>
        </div>
      </div>
    </header>
  );
}
