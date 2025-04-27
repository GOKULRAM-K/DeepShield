import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import { DivOrigami } from "./DivOrigami";

function App() {
  const [file, setFile] = useState(null);
  const [fileURL, setFileURL] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const navLinks = document.querySelectorAll(".nav-links a");
      let scrollPos = window.scrollY + 80; // Adjusted for navbar height

      sections.forEach((section) => {
        if (
          section.offsetTop <= scrollPos &&
          section.offsetTop + section.offsetHeight > scrollPos
        ) {
          navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href").substring(1) === section.id) {
              link.classList.add("active");
            }
          });
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = useCallback((event) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 60,
        behavior: "smooth",
      });
    }
  }, []);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      if (
        !selectedFile.type.startsWith("video/") &&
        !selectedFile.type.startsWith("image/")
      ) {
        alert("Invalid file type. Please upload a video or image.");
        return;
      }

      setFile(selectedFile);
      setFileURL(URL.createObjectURL(selectedFile));
      setResult(null); // Reset result when new file is uploaded
    }
  };

  const handleDetect = () => {
    if (!file) {
      alert("Please upload a video/image first.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      const isDeepfake = Math.random() < 0.5;
      setResult(isDeepfake ? "Deepfake Detected!! ❌" : "Real Content ✅");
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="app">
      {/* Navigation Bar */}
      <nav className="navbar" id="main-nav">
        <div className="logo">
          <DivOrigami />
        </div>
        <ul className="nav-links">
          <li>
            <a href="#home" onClick={handleSmoothScroll}>
              Home
            </a>
          </li>
          <li>
            <a href="#design" onClick={handleSmoothScroll}>
              Design
            </a>
          </li>
          <li>
            <a href="#contact" onClick={handleSmoothScroll}>
              Contact Us
            </a>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <section id="home" className="container">
        <h1 className="title">Deepfake Detector</h1>

        <div className="upload-box">
          <input
            type="file"
            accept="video/*,image/*"
            onChange={handleFileChange}
            disabled={loading}
          />
        </div>

        {fileURL && (
          <div className="media-preview">
            {file.type.startsWith("video/") ? (
              <video src={fileURL} controls autoPlay loop className="media" />
            ) : (
              <img src={fileURL} alt="Uploaded Preview" className="media" />
            )}
          </div>
        )}

        <button
          className="detect-btn"
          onClick={handleDetect}
          disabled={loading}
        >
          {loading ? "Analyzing..." : "Detect Deepfake"}
        </button>

        {result && (
          <div
            className={`result ${
              result.includes("Deepfake") ? "fake" : "real"
            }`}
          >
            {result}
          </div>
        )}
      </section>

      <section id="design">
        <h2>Design Section</h2>
        <p>More content goes here...</p>
      </section>

      <section id="contact">
        <h2>Contact Us</h2>
        <p>Contact details here...</p>
      </section>
    </div>
  );
}

export default App;
