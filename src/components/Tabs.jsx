import { Link, useLocation } from "react-router-dom";

function Tabs() {
  const mainPage = useLocation().pathname;

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-body-tertiary">
      <div class="container-fluid">
        <button
          data-mdb-collapse-init
          class="navbar-toggler"
          type="button"
          data-mdb-target="#navbarLeftAlignExample"
          aria-controls="navbarLeftAlignExample"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fas fa-bars"></i>
        </button>

        <div class="collapse navbar-collapse" id="navbarLeftAlignExample">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                <Link
                  to="/"
                  className={mainPage === "/" ? "nav-link active" : "nav-link"}
                >
                  About Me
                </Link>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <Link
                  to="/"
                  className={
                    mainPage === "/Contact" ? "nav-link active" : "nav-link"
                  }
                >
                  Contact Me
                </Link>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <Link
                  to="/"
                  className={
                    mainPage === "/Portfolio" ? "nav-link active" : "nav-link"
                  }
                >
                  Portfolio
                </Link>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <Link
                  to="/"
                  className={
                    mainPage === "/Resume" ? "nav-link active" : "nav-link"
                  }
                >
                  Resume
                </Link>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Tabs;
