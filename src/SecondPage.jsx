import React, { useState } from "react";
import "./SecondPage.css";
import Audio from "/Audio.svg";
import Bar2 from "./components/Bar2";
import { useNavigate } from "react-router-dom";

function SecondPage2() {
  <Bar2 />;
  const [targetWord, setTargetWord] = useState("");
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/thirdpage");
    // Implement the logic for handling the "Next" button click
  };
  const goBack = () => {
    navigate("/");
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
              <b className="target-word-analysis">Target Word Analysis</b>
            </div>
            <div className="enter-the-word">
              Enter the word you want to analyze from the audio files. We'll
              identify all pronunciation variants in your audio samples.
            </div>
          </div>
          <form className="analyze-form">
            <label htmlFor="word-input" className="word-label">
              Word to Analyze
            </label>
            <input
              id="word-input"
              className="word-input"
              type="text"
              placeholder="e.g 'water', 'apple', 'think'"
              autoComplete="off"
              value={targetWord}
              onChange={(e) => setTargetWord(e.target.value)}
            />
            <div className="input-helper">
              Enter the single word you want to generate the preferred grammar
              form of.
            </div>
            <div className="form-buttons">
              <button type="button" className="back-btn" onClick={goBack}>
                Back
              </button>
              <button
                className={`button ${
                  targetWord.trim() ? "enabled" : "disabled"
                }`}
                disabled={!targetWord.trim()}
                onClick={handleNext}
              >
                <span className="next">Next</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
function SecondPage() {
  return (
    <div>
      <Bar2 />
      <SecondPage2 />
    </div>
  );
}
export default SecondPage;
