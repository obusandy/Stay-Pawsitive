/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./Resources.css";

const Resources = () => {
  const [tips, setTips] = useState(["Tip 1", "Tip 2", "Tip 3"]);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to manage login
  const [showLoginPopup, setShowLoginPopup] = useState(false); // State for login popup

  const addTip = () => {
    if (!isLoggedIn) {
      // Show login popup if user is not logged in
      setShowLoginPopup(true);
    } else {
      const newTip = prompt("Enter your new tip:");
      if (newTip) {
        setTips([...tips, newTip]);
      }
    }
  };

  const handleLogin = () => {
    // Simulate login logic
    setIsLoggedIn(true);
    setShowLoginPopup(false);
  };

  return (
    <div className="resources-container">
      <h1>Resources</h1>
      <div className="card-container">
        <div className="card" style={{ width: "18rem" }}>
          <img src="..." className="card-img-top" alt="Resource 1" />
          <div className="card-body">
            <h5 className="card-title">Resource Title 1</h5>
            <p className="card-text">
              Some example text to explain the content of the resource.
            </p>
            <a href="#" className="btn btn-primary">
              Learn More
            </a>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <img src="..." className="card-img-top" alt="Resource 2" />
          <div className="card-body">
            <h5 className="card-title">Resource Title 2</h5>
            <p className="card-text">
              Some example text to explain the content of the resource.
            </p>
            <a href="#" className="btn btn-primary">
              Learn More
            </a>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <img src="..." className="card-img-top" alt="Resource 3" />
          <div className="card-body">
            <h5 className="card-title">Resource Title 3</h5>
            <p className="card-text">
              Some example text to explain the content of the resource.
            </p>
            <a href="#" className="btn btn-primary">
              Learn More
            </a>
          </div>
        </div>
      </div>

      <ul className="tips-list">
        {tips.map((tip, index) => (
          <li key={index}>{tip}</li>
        ))}
      </ul>

      <button className="add-tip-button" onClick={addTip}>
        Add Tip
      </button>

      {showLoginPopup && (
        <div className="login-popup">
          <h3>Please Login to Add Tips</h3>
          <button className="btn btn-primary" onClick={handleLogin}>
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default Resources;
