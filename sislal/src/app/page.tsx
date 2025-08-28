"use client";
import { useState } from "react";

export default function Home() {
  // === Estados de switches ===
  const [reduceMotion, setReduceMotion] = useState(true);
  const [autoPlay, setAutoPlay] = useState(true);
  const [highQuality, setHighQuality] = useState(false);

  return (
    <div className="container">
      <header className="header">
        <h1 className="title">Appearance</h1>
        <p className="subtitle">
          Set or customize your preferences for the system
        </p>
      </header>

      <main className="content">
        {/* Language */}
        <section>
          <h2>Language</h2>
          <select className="input">
            <option>English</option>
            <option>Español</option>
          </select>
        </section>

        {/* Interface theme */}
        <section>
          <h2>Interface theme</h2>
          <p className="hint">Customize your application appearance</p>
          <nav className="themes">
            <button>
              <img src="/auto.png" alt="Auto" />
            </button>
            <button className="active">
              <img src="/light.png" alt="Light" />
            </button>
            <button>
              <img src="/dark.png" alt="Dark" />
            </button>
          </nav>
        </section>

        {/* Accent color */}
        <section>
          <h2>Accent color</h2>
          <p className="hint">Pick your platform’s main color</p>
          <nav className="colors">
            <span className="red"></span>
            <span className="green"></span>
            <span className="blue"></span>
            <span className="purple"></span>
            <span className="yellow"></span>
          </nav>
        </section>

        {/* Toggles */}
        <section>
          <div className="toggle">
            <span>Reduce motion</span>
            <div
              className={`switch ${reduceMotion ? "active" : ""}`}
              onClick={() => setReduceMotion(!reduceMotion)}
            ></div>
          </div>
          <div className="toggle">
            <span>Auto play</span>
            <div
              className={`switch ${autoPlay ? "active" : ""}`}
              onClick={() => setAutoPlay(!autoPlay)}
            ></div>
          </div>
          <div className="toggle">
            <span>High quality photo</span>
            <div
              className={`switch ${highQuality ? "active" : ""}`}
              onClick={() => setHighQuality(!highQuality)}
            ></div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <button className="reset">Reset to default</button>
        <div>
          <button className="cancel">Cancel</button>
          <button className="save">Save Preferences</button>
        </div>
      </footer>
    </div>
  );
}
