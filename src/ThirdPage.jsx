import React, { useState } from "react";
import "./ThirdPage.css";
import Audio from "/Audio.svg";
import Bar3 from "./components/Bar3";
// import Bar4 from "./components/Bar4";

const criteriaList = [
  {
    key: "IA",
    color: "#e0e7ff",
    abbr: "IA",
    title: "International Acceptance",
    desc: "How widely accepted the pronunciation is across different English - speaking regions",
  },
  {
    key: "DI",
    color: "#f3e8ff",
    abbr: "DI",
    title: "Dis-ambiguity",
    desc: "How clearly distinguishable the pronunciation is from the similar words",
  },
  {
    key: "CO",
    color: "#fef9c3",
    abbr: "CO",
    title: "Contrastiveness",
    desc: "How distinct is the pronunciation is form contrasting sounds in the language",
  },
  {
    key: "PC",
    color: "#fee2e2",
    abbr: "PC",
    title: "Pedagogic Convenience",
    desc: "How easy the pronunciation is to teach to language learners",
  },
  {
    key: "PS",
    color: "#f3e8ff",
    abbr: "PS",
    title: "Phonetic Simplicity",
    desc: "How simple and straightforward the pronunciation is",
  },
  {
    key: "F",
    color: "#dcfce7",
    abbr: "F",
    title: "Frequency",
    desc: "How frequently the pronunciation pattern occurs in the language",
  },
];

function ThirdPageContent() {
  const [sliders, setSliders] = useState({
    IA: 3,
    DI: 3,
    CO: 3,
    PC: 3,
    PS: 3,
    F: 3,
  });

  const handleSlider = (key, value) => {
    setSliders((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="backgroundshadow">
      <div className="frame-parent">
        <div className="card">
          <div className="heading-2-parent">
            <div className="heading-2">
              <div className="symbol">
                <img src={Audio} alt="Audio" />
              </div>
              <b className="target-word-analysis">Analysis Criteria</b>
            </div>
            <div className="enter-the-word">
              Rank these based on the criteria for your preference grammar (1 =
              least important, 6 = most important)
            </div>
          </div>
          <div className="criteria-list">
            {criteriaList.map((crit) => (
              <div className="criteria-card" key={crit.key}>
                <div className="criteria-header">
                  <div
                    className="criteria-abbr"
                    style={{ background: crit.color }}
                  >
                    {crit.abbr}
                  </div>
                  <div>
                    <div className="criteria-title">{crit.title}</div>
                    <div className="criteria-desc">{crit.desc}</div>
                  </div>
                  <div className="criteria-value">{sliders[crit.key]}</div>
                </div>
                <input
                  type="range"
                  min={1}
                  max={6}
                  value={sliders[crit.key]}
                  onChange={(e) =>
                    handleSlider(crit.key, Number(e.target.value))
                  }
                  className="criteria-slider"
                />
                <div className="criteria-labels">
                  <span>1 - Less Important</span>
                  <span>6 - More Important</span>
                </div>
              </div>
            ))}
          </div>
          <div className="form-buttons">
            <button type="button" className="back-btn">
              Back
            </button>
            <button className="button enabled">
              Generate Grammar <span className="next">→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ThirdPage() {
  return (
    <div>
      <Bar3 />
      <ThirdPageContent />
    </div>
  );
}

export default ThirdPage;
