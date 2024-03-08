import React from "react";
import logo from "../logoBio.png";
import styled from "styled-components";
// import { MdOutlineShoppingCart } from "react-icons/md";
const NotificationContainer = styled.div`
  position: relative;
  display: inline-block;
`;
const Badge = styled.div`
  position: absolute;
  top: 3px;
  right: -10px;
  padding: 2px 7px;
  border-radius: 50%;
  background-color: red;
  color: white;
  font-size: 10px;
`;
interface AppProps {
  handleShowModal: () => void;
  numberOfCartItem: number;
}
const Header = () => {
  function toggleNavbar() {
    var x: any = document.getElementById("myNavbar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }

  return (
    <nav
      data-mdb-navbar-init
      className="navbar navbar-expand-lg navbar-light bg-body-tertiary"
      id="myNavbar"
    >
      <div className="container">
        <a
          className="navbar-brand me-2"
          href="https://www.lab.biologix.com.ng/"
        >
          <img
            src={logo}
            height="40"
            alt="Biologix Lab Logo"
            loading="lazy"
            style={{ marginTop: "-1px" }}
          />
        </a>

        <button
          data-mdb-collapse-init
          className="navbar-toggler"
          type="button"
          data-mdb-target="#navbarButtonsExample"
          aria-controls="navbarButtonsExample"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => toggleNavbar()}
        >
          <i className="fas fa-bars"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarButtonsExample">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.lab.biologix.com.ng/staging/"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.lab.biologix.com.ng/staging/about-us/"
              >
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.lab.biologix.com.ng/staging/blog/"
              >
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.lab.biologix.com.ng/staging/contact-us/"
              >
                Contact Us
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.lab.biologix.com.ng/staging/test-categories/"
              >
                Plan/Packages
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.lab.biologix.com.ng/staging/faqs/"
              >
                FAQs
              </a>
            </li>
          </ul>

          <div className="d-flex align-items-center">
            <button
              data-mdb-ripple-init
              type="button"
              className="btn btn-danger me-3"
              style={{
                backgroundColor: "#ed4e4e",
                maxWidth: "200px",
                fontSize: "12px",
                fontWeight: 600,
              }}
            >
              VISIT BIOLOGIX SUPPORT SERVICES
            </button>
          </div>
          {/* <NotificationContainer style={{ fontSize: "2rem" }}>
            <MdOutlineShoppingCart
              onClick={handleShowModal}
              style={{ cursor: "pointer" }}
            />
            <Badge>{numberOfCartItem}</Badge>
          </NotificationContainer> */}
        </div>
      </div>
    </nav>
  );
};

export default Header;
