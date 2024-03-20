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
      <header class="header1 desktop" id="top-of-site">
        <div class="top bg-white">
          <div class="contact-list">
            <a href="tel:+[tel]" class="contact-block">
              <span class="img-ctn">
                <Image src={phone} alt="contact icon" />
              </span>
              <span class="name">
                +27 (00) 000 0000 / <br /> +27 (00) 000 0000
              </span>
            </a>
            <a href="mailto:admin@hybridschools.co.za" class="contact-block">
              <span class="img-ctn">
                <Image src={email} alt="email icon" />
              </span>
              <span class="name">admin@hybridschools.co.za</span>
            </a>
            <a
              href="https://goo.gl/maps/1DZ7aFiaJ8QSAi6k9"
              class="contact-block"
            >
              <span class="img-ctn">
                <Image src={location} alt="address icon" />
              </span>
              <span class="name">
                06-10 Sherwell St, Doornfontein, <br />
                Johannesburg, South Africa, 2028
              </span>
            </a>{" "}
          </div>
          <div class="search-top">
            <button class="search-btn img-ctn">
              <Image src={search} alt="Search Icon" />
            </button>
            <div class="search-input hanging-placeholder">
              <input type="search" autocomplete="off" required />
              <span class="floating-label">
                <span class="disappear">Search...</span>
                <span class="appear">(Hybrid keywords)</span>
              </span>
            </div>
          </div>
        </div>
        <div class="bottom">
          <div class="search-bottom">
            <button class="btn search-close-btn img-ctn">
              <Image src={close} alt="close button" />
            </button>
            <div class="search-title">
              <b>Most Searched</b>
            </div>
            <div class="search-sugg">
              <button class="search-object" data-id="services">
                Pricing
              </button>
              <button class="search-object" data-id="Applications">
                Applications
              </button>
            </div>
          </div>
        </div>
      </header>
      <header class="header header2">
        <div class="mobile" id="mobile-nav-ctn">
          <div class="view">
            <div class="button-ctn left navBtn">
              <button class="btn menu-btn img-ctn">
                <Image src={menu} alt="menu button" />
              </button>
              <button class="btn close-btn img-ctn">
                <Image src={close} alt="close button" />
              </button>
            </div>
            <div class="quick-link-ctn">
              <a href="http://localhost/Hybrid-Schools" class="img-ctn logo">
                <Image src={Logo} alt="Logo" />
              </a>
            </div>
          </div>
          <aside class="popup-ctn mobile-menu">
            <div class="mobile-nav">
              <div class="search-ctn">
                <div class="search-top">
                  <button class="search-btn img-ctn">
                    <Image src={search} alt="Search Icon" />
                  </button>
                  <div class="search-input hanging-placeholder">
                    <input type="search" autocomplete="off" required />
                    <span class="floating-label">
                      <span class="disappear">Search...</span>
                      <span class="appear">(Hybrid Schools section)</span>
                    </span>
                  </div>
                </div>
                <div class="search-bottom">
                  <div class="search-title">
                    <b>Most Searched</b>
                  </div>
                  <div class="search-sugg">
                    <button class="search-object" data-id="services">
                      Pricing
                    </button>
                    <button class="search-object" data-id="Applications">
                      Applications
                    </button>
                  </div>
                </div>
              </div>
              <div class="bottom-nav">
                <span class="nav-title fw900">Hybrid Schools Inner City</span>
                <ul class="mobile-nav-sub">
                  <li>
                    <a class="page-link home-link fw600" href="home.html">
                      Home
                    </a>
                  </li>
                  <li>
                    <a class="page-link aboutus-link fw600" href="aboutus.html">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a class="page-link admin-link fw600" href="admin.html">
                      Administration
                    </a>
                  </li>
                  <li>
                    <a
                      class="page-link institution-link fw600"
                      href="institution.html"
                    >
                      Institution
                    </a>
                  </li>
                  <li>
                    <a class="page-link contact-link fw600" href="contact.html">
                      contact us
                    </a>
                  </li>{" "}
                </ul>
              </div>
              <div class="line-ctn">
                <div class="line"></div>
              </div>
              <div class="contact-list column">
                <a href="tel:+[tel]" class="contact-block">
                  <span class="img-ctn">
                    <Image src={phone} alt="contact icon" />
                  </span>
                  <span class="name">
                    +27 (00) 000 0000 / <br /> +27 (00) 000 0000
                  </span>
                </a>
                <a
                  href="mailto:admin@hybridschools.co.za"
                  class="contact-block"
                >
                  <span class="img-ctn">
                    <Image src={email} alt="email icon" />
                  </span>
                  <span class="name">admin@hybridschools.co.za</span>
                </a>
                <a
                  href="https://goo.gl/maps/1DZ7aFiaJ8QSAi6k9"
                  class="contact-block"
                >
                  <span class="img-ctn">
                    <Image src={location} alt="address icon" />
                  </span>
                  <span class="name">
                    06-10 Sherwell St, Doornfontein, <br />
                    Johannesburg, South Africa, 2028
                  </span>
                </a>{" "}
              </div>
              <div class="booking-ctn">
                <a
                  href="apply.html"
                  class="page-link btn round-btn trial-btn fw700 animation appear-view grow-in"
                >
                  Apply
                </a>
              </div>
            </div>
          </aside>
        </div>
        <div class="desktop">
          <div class="view">
            <div class="left">
              <a href="http://localhost/Hybrid-Schools" class="img-ctn logo">
                <Image src={Logo} alt="Logo" />
              </a>
            </div>
            <div class="mid">
              <ul class="nav-menu">
                <li>
                  <a class="page-link home-link fw600" href="home.html">
                    Home
                  </a>
                </li>
                <li>
                  <a class="page-link aboutus-link fw600" href="aboutus.html">
                    About Us
                  </a>
                </li>
                <li>
                  <a class="page-link admin-link fw600" href="admin.html">
                    Administration
                  </a>
                </li>
                <li>
                  <a
                    class="page-link institution-link fw600"
                    href="institution.html"
                  >
                    Institution
                  </a>
                </li>
                <li>
                  <a class="page-link contact-link fw600" href="contact.html">
                    contact us
                  </a>
                </li>{" "}
              </ul>
            </div>

            <div class="right booking-ctn" style={{ marginLeft: "1rem" }}>
              <a
                href="apply.html"
                class="external-link btn round-btn stroke fw700 animation appear-view grow-in"
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
