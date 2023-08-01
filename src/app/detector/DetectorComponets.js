
import React, { useState } from 'react';
export default function PlagiatDetector() {

  const [plagiatActive, setPlagiatActive] = useState(true);
  const [aiActive, setAiActive] = useState(false);

  const handlePlagiatClick = () => {
    setPlagiatActive(true);
    setAiActive(false);
  };

  const handleAIClick = () => {
    setAiActive(true);
    setPlagiatActive(false);
  };
  return (
    <div style={{ marginTop: "-80px" }}>
      <button 
        className={plagiatActive ? 'plagiatbt active' : 'plagiatbt'}
        onClick={handlePlagiatClick}>Plagiat Detector
      </button>
      <button 
        className={aiActive ? 'AIbt active' : 'AIbt'}
        onClick={handleAIClick}>AI Detector
      </button>

      <form method="post" className="plagiat">
        <span className="min">
          <span></span>
        </span>

        <span className="max"></span>

        <textarea
          id="myTextarea"
          placeholder="Follow the user by pasting or typing your original içi text, up to 1,000 characters..."
        ></textarea>
        <br></br>
        <span className="exemple" id="characterCount">
          1,000 characters remaining.{" "}
        </span>
      </form>
    </div>
  );
}

