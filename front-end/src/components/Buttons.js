import React from "react";

export default function Buttons() {
  return (
    <div className="btn-group-vertical">
      <button className="btn btn-danger">
        <i className="bi bi-flag"></i>Report a case
      </button>
      <button className="btn btn-primary">Donate</button>
    </div>
  );
}
