import { Link, useLocation } from "react-router-dom";

function Tabs() {
  const mainPage = useLocation().pathname;

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
      <div className="container-fluid">
        <button
          data-mdb-collapse-init
          className="navbar-toggler"
          type="button"
          data-mdb-target="#navbarLeftAlignExample"
          aria-controls="navbarLeftAlignExample"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarLeftAlignExample">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* <a class="nav-link active" aria-current="page" href="#"> */}
              <Link
                to="/"
                className={mainPage === "/" ? "nav-link active" : "nav-link"}
              >
                About Me
              </Link>
              {/* </a> */}
            </li>
            <li className="nav-item">
              {/* <a class="nav-link" href="#"> */}
              <Link
                to="/Contact"
                className={
                  mainPage === "/Contact" ? "nav-link active" : "nav-link"
                }
              >
                Contact
              </Link>
              {/* </a> */}
            </li>
            <li className="nav-item">
              {/* <a class="nav-link" href="#"> */}
              <Link
                to="/Portfolio"
                className={
                  mainPage === "/Portfolio" ? "nav-link active" : "nav-link"
                }
              >
                Portfolio
              </Link>
              {/* </a> */}
            </li>
            <li className="nav-item">
              {/* <a class="nav-link" href="#"> */}
              <Link
                to="/Resume"
                className={
                  mainPage === "/Resume" ? "nav-link active" : "nav-link"
                }
              >
                Resume
              </Link>
              {/* </a> */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Tabs;
