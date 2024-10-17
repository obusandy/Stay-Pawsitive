import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./Navbar.css";
import "../pages/Images/Capture.PNG";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light gradient-bg">
        <div className="container-fluid">
          <Link className="navbar-brand" to={"/"}>
            <img
              src={require("../pages/Images/Capture.PNG")}
              alt="pawprint"
              width="42"
              height="45"
              className="rounded-circle"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link
                  className="nav-link active me-3"
                  aria-current="page"
                  to={"/"}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link me-3" to="/signup">
                  Adopt
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link me-3" to="/signup">
                  List
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link me-3" to={"/signup"}>
                  Book appointment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link me-3" to={"/about"}>
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link me-3" to={"/partners"}>
                  Resources
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link me-3" href={"/contact"}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
