import React from "react";
import Link from "next/image";
import Image from "next/image";
import phone from "../../assets/phone.svg";
import email from "../../assets/email.svg";
import location from "../../assets/location.svg";
import search from "../../assets/search.svg";
import close from "../../assets/close.svg";
import Logo from "../../assets/logo_otc.png";
import menu from "../../assets/menu.svg";
import "./Nav.css";
// import menu from "../../assets/menu.svg";
// import menu from "../../assets/menu.svg";

const Nav = () => {
  return (
    <div className="Nav">
      <header className="header1 desktop" id="top-of-site">
        <div className="top bg-white">
          <div className="contact-list">
            <a href="tel:+[tel]" className="contact-block">
              <span className="img-ctn">
                <Image src={phone} alt="contact icon" />
              </span>
              <span className="name">
                +27 (10) 065 2571 
              </span>
            </a>
            <a href="mailto:admin@hybridschools.co.za" className="contact-block">
              <span className="img-ctn">
                <Image src={email} alt="email icon" />
              </span>
              <span className="name">admin@hybridschools.co.za</span>
            </a>
            <a
              href="https://goo.gl/maps/1DZ7aFiaJ8QSAi6k9"
              className="contact-block"
            >
              <span className="img-ctn">
                <Image src={location} alt="address icon" />
              </span>
              <span className="name">
                06-10 Sherwell St, Doornfontein,
                Johannesburg, South Africa, 2028
              </span>
            </a>{" "}
          </div>
          <div className="search-top">
            <button className="search-btn img-ctn">
              <Image src={search} alt="Search Icon" />
            </button>
            <div className="search-input hanging-placeholder">
              <input type="search" autocomplete="off" required />
              <span className="floating-label">
                <span className="disappear">Search...</span>
                <span className="appear">(Hybrid keywords)</span>
              </span>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="search-bottom">
            <button className="btn search-close-btn img-ctn">
              <Image src={close} alt="close button" />
            </button>
            <div className="search-title">
              <b>Most Searched</b>
            </div>
            <div className="search-sugg">
              <button className="search-object" data-id="services">
                Pricing
              </button>
              <button className="search-object" data-id="Applications">
                Applications
              </button>
            </div>
          </div>
        </div>
      </header>
      <header className="header header2">
        <div className="mobile" id="mobile-nav-ctn">
          <div className="view">
            <div className="button-ctn left navBtn">
              <button className="btn menu-btn img-ctn">
                <Image src={menu} alt="menu button" />
              </button>
              <button className="btn close-btn img-ctn">
                <Image src={close} alt="close button" />
              </button>
            </div>
            <div className="quick-link-ctn">
              <a href="http://localhost/Hybrid-Schools" class="img-ctn logo">
                <Image src={Logo} alt="Logo" />
              </a>
            </div>
          </div>
          <aside className="popup-ctn mobile-menu">
            <div className="mobile-nav">
              <div className="search-ctn">
                <div className="search-top">
                  <button className="search-btn img-ctn">
                    <Image src={search} alt="Search Icon" />
                  </button>
                  <div className="search-input hanging-placeholder">
                    <input type="search" autocomplete="off" required />
                    <span className="floating-label">
                      <span className="disappear">Search...</span>
                      <span className="appear">(Hybrid Schools section)</span>
                    </span>
                  </div>
                </div>
                <div className="search-bottom">
                  <div className="search-title">
                    <b>Most Searched</b>
                  </div>
                  <div className="search-sugg">
                    <button className="search-object" data-id="services">
                      Pricing
                    </button>
                    <button className="search-object" data-id="Applications">
                      Applications
                    </button>
                  </div>
                </div>
              </div>
              <div className="bottom-nav">
                <span className="nav-title fw900">Hybrid Schools Inner City</span>
                <ul className="mobile-nav-sub">
                  <li>
                    <a className="page-link home-link fw600" href="home.html">
                      Home
                    </a>
                  </li>
                  <li>
                    <a className="page-link aboutus-link fw600" href="aboutus.html">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a className="page-link admin-link fw600" href="admin.html">
                      Administration
                    </a>
                  </li>
                  <li>
                    <a
                      className="page-link institution-link fw600"
                      href="institution.html"
                    >
                      Institution
                    </a>
                  </li>
                  <li>
                    <a className="page-link contact-link fw600" href="contact.html">
                      contact us
                    </a>
                  </li>{" "}
                </ul>
              </div>
              <div className="line-ctn">
                <div className="line"></div>
              </div>
              <div className="contact-list column">
                <a href="tel:+[tel]" class="contact-block">
                  <span className="img-ctn">
                    <Image src={phone} alt="contact icon" />
                  </span>
                  <span className="name">
                  +27 (10) 065 2571 
                  </span>
                </a>
                <a
                  href="mailto:admin@hybridschools.co.za"
                  className="contact-block"
                >
                  <span className="img-ctn">
                    <Image src={email} alt="email icon" />
                  </span>
                  <span className="name">admin@hybridschools.co.za</span>
                </a>
                <a
                  href="https://goo.gl/maps/1DZ7aFiaJ8QSAi6k9"
                  className="contact-block"
                >
                  <span className="img-ctn">
                    <Image src={location} alt="address icon" />
                  </span>
                  <span className="name">
                    06-10 Sherwell St, Doornfontein,
                    Johannesburg, South Africa, 2028
                  </span>
                </a>{" "}
              </div>
              <div className="booking-ctn">
                <a
                  href="apply.html"
                  className="page-link btn round-btn trial-btn fw700 animation appear-view grow-in"
                >
                  Apply
                </a>
              </div>
            </div>
          </aside>
        </div>
        <div className="desktop">
          <div className="view">
            <div className="left">
              <a href="http://localhost/Hybrid-Schools" class="img-ctn logo">
                <Image src={Logo} alt="Logo" />
              </a>
            </div>
            <div className="mid">
              <ul className="nav-menu">
                <li>
                  <a class="page-link home-link fw600" href="home.html">
                    Home
                  </a>
                </li>
                <li>
                  <a className="page-link aboutus-link fw600" href="aboutus.html">
                    About Us
                  </a>
                </li>
                <li>
                  <a className="page-link admin-link fw600" href="admin.html">
                    Administration
                  </a>
                </li>
                <li>
                  <a
                    className="page-link institution-link fw600"
                    href="institution.html"
                  >
                    Institution
                  </a>
                </li>
                <li>
                  <a className="page-link contact-link fw600" href="contact.html">
                    contact us
                  </a>
                </li>{" "}
              </ul>
            </div>

            <div className="right booking-ctn" style={{ marginLeft: "1rem" }}>
              <a
                href="apply.html"
                className="external-link btn round-btn stroke fw700 animation appear-view grow-in"
              >
                APPLY
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Nav;
