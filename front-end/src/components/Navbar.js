import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import "../pages/Images/Capture.PNG";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light gradient-bg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src={require("../pages/Images/Capture.PNG")}
              alt="pawprint"
              width="42"
              height="45"
              className="rounded-circle"
            />
          </a>
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
                <a
                  className="nav-link active me-3"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link me-3" href="/adopt">
                  Adopt
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link me-3" href="/list">
                  List
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link me-3" href="#">
                  Book appointment
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link me-3" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link me-3" href="#">
                  Resources
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link me-3" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
