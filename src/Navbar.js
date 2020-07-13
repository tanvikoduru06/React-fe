import React from 'react'

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="https://www.graymatter.co.in/">
            GrayMatter
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="toggle"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Categories
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a
                    className="dropdown-item"
                    href="https://www.cuemath.com/math-tuition-in-hyderabad-1111/"
                  >
                    Math
                  </a>
                  <a
                    className="dropdown-item"
                    href="https://www.justdial.com/Hyderabad/Music-Classes-in-Kukatpally/nct-10332940"
                  >
                    Music
                  </a>
                  <div className="dropdown-divider" />
                  <a
                    className="dropdown-item"
                    href="https://www.sulekha.com/science-tuitions/hyderabad"
                  >
                    Science
                  </a>
                </div>
              </li>
            </ul>
            <ul>
              <li className="nav-item active">
                <a
                  className="nav-link"
                  href="https://en.wikipedia.org/wiki/GrayMatter_Software"
                >
                  About Us <span class="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://getbootstrap.com/docs/4.5/components/card/"
                >
                  FAQ
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://getbootstrap.com/docs/4.5/components/buttons/"
                >
                  Home Tuition Prices
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.graymatter.co.in/blogs-2017/"
                >
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.graymatter.co.in/contactus/"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
export default Navbar
