/* eslint-disable jsx-a11y/iframe-has-title */
import "bootstrap/dist/css/bootstrap.min.css";
import "./Buttons.css";

export default function Buttons() {
  return (
    <div className="fixed-buttons btn-group-vertical">
      <button className="btn btn-danger">
        <a href="/chat">Report a case</a>
      </button>

      <button className="btn btn-primary">Donate</button>
    </div>
  );
}
