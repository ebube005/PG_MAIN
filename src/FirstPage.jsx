import Header from "./components/Header.jsx";
import Bar1 from "./components/Bar1.jsx";
import Footer from "./components/Footer.jsx";
import "./Firstpage.css";
// import file from "/file.svg";
import Cloud from "/clouduploaderr.svg";
import Audio from "/Audio.svg";
import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

// import { useCallback } from "react";
// function Audio() {}
// const Frame10 = () => {
// const onButtonContainerClick = useCallback(() => {
//   // Add your code here
// }, []);

function FirstPage1() {
  const AudioUploader = () => {};
  const [audioFile, setAudioFile] = useState(null);
  //   const [audioUrl, setAudioUrl] = useState(null);
  const fileInputRef = useRef();
  const navigate = useNavigate();
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (
      e.dataTransfer &&
      e.dataTransfer.files &&
      e.dataTransfer.files.length > 0
    ) {
      const dropped = e.dataTransfer.files[0];
      processFile(dropped);
      e.dataTransfer.clearData();
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleBrowseClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    processFile(file);
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return "0 KB";
    const kb = bytes / 1024;
    return `${kb.toFixed(2)} KB`;
  };

  const processFile = (file) => {
    if (file && file.type.startsWith("audio/")) {
      setAudioFile(file);
      //   setAudioUrl(URL.createObjectURL(file));
    } else {
      alert("Please upload a valid audio file.");
    }
  };

  const handleNext = () => {
    if (audioFile) {
      navigate("/nextpage");
    }
  };

  return (
    <div className="backgroundshadow">
      <div className="frame-parent">
        <div className="heading-2-parent">
          <div className="heading-2">
            <div className="symbol">
              <img src={Audio}></img>
            </div>
            <b className="upload-audio-files">Upload Audio Files</b>
          </div>
          <div className="please-upload-the">
            Please upload the audio files. We'll analyze each pronunciation
            against your criteria.
          </div>
        </div>
        <div className="border-wrapper">
          <div className="border">
            <div className="symbol1">{/* <img src={Cloud}></img> */}</div>
            <div
              className="drag-drop-your-audio-files-h-parent"
              onDrop={handleDrop}
              onDragOver={handleDragOver}
            >
              <div className="drag-drop">Drag & drop your audio files here</div>
              <div className="or">or</div>
              <div className="label-wrapper">
                <div className="label">
                  <div className="symbol-parent">
                    <div className="symbol2">
                      {/* <img src={file}></img> */}
                    </div>
                    <div className="browse-files" onClick={handleBrowseClick}>
                      {" "}
                      Browse Files
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <input
              type="file"
              accept="audio/*"
              onChange={handleFileChange}
              ref={fileInputRef}
              style={{ display: "none" }}
            />
          </div>
        </div>

        {audioFile && (
          <div className="file-display">
            <p className="selected-title">Selected Files</p>
            <div className="file-box">
              <img src={Audio} alt="audio icon" className="audio-icon" />
              <div className="file-details">
                <span className="file-name">{audioFile.name}</span>
                <span className="file-size">
                  {formatFileSize(audioFile.size)}
                </span>
              </div>
              <button
                onClick={() => setAudioFile(null)}
                aria-label="Remove file"
              >
                ×
              </button>
            </div>
          </div>
        )}
        <button
          className={`button ${audioFile ? "enabled" : "disabled"}`}
          disabled={!audioFile}
          onClick={handleNext}
        >
          <span className="next">Next</span>
        </button>
      </div>
    </div>
  );
}
function FirstPage() {
  return (
    <div>
      <Bar1 />
      <FirstPage1 />
    </div>
  );
}
{
  /* <div className="button">
          <div className="next">{`Next `}</div>
          <div className="symbol3"></div>
        </div>*/
}

export default FirstPage;
