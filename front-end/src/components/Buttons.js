import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Buttons.css";

export default function Buttons() {
  return (
    <div className="fixed-buttons btn-group-vertical">
      <button className="btn btn-danger">
        <i className="bi bi-flag"></i>Report a case
      </button>
      <button className="btn btn-primary">Donate</button>
    </div>
  );
}
