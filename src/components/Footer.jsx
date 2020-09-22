import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import { SiThemighty } from "react-icons/si";
import { Link as Scroll } from "react-scroll";

function Footer() {
  const [formState, setFormState] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  function handleChange(event) {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formState }),
    })
      .then(() => alert("Awesome! I'll text you soon! Have a nice day!"))
      .catch((error) => alert(error));

    setFormState({
      name: "",
      email: "",
      message: "",
    });
  }

  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">Let's get in Touch!</p>
        <p className="footer-subscription-text">
          Say Hello. Don't hesitate. Do it! 😇
        </p>
        <div className="input-areas">
          <form
            style={{ display: "flex", flexDirection: "column" }}
            onSubmit={handleSubmit}
            autoComplete="off"
            name="contact"
            method="POST"
            data-netlify-honeypot="bot-field"
            data-netlify="true"
          >
            <input
              className="footer-input"
              name="name"
              type="name"
              placeholder="Your Name"
              id="name"
              type="text"
              name="name"
              value={formState.name}
              onChange={handleChange}
            />
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Your Email"
              value={formState.email}
              onChange={handleChange}
            />
            <textarea
              className="footer-input"
              name="message"
              type="text"
              onChange={handleChange}
              value={formState.message}
              placeholder="Your Message"
              style={{ height: "100px" }}
            />
            <button
              className="footer-input"
              type="submit"
              style={{ cursor: "pointer" }}
            >
              Submit
            </button>
          </form>
        </div>
      </section>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Scroll
              activeClass="active"
              to="hero-container"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={-60}
              duration={700}
              delay={100}
              isDynamic={true}
              ignoreCancelEvents={false}
              className="social-logo"
            >
              <SiThemighty />
            </Scroll>
          </div>
          <div className="social-icons">
            <a
              className="social-icon-link facebook"
              href="https://www.facebook.com/milan.milenkovic.376?ref=bookmarks"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f" />
            </a>
            <a
              className="social-icon-link instagram"
              href="https://www.instagram.com/mmilan876/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" />
            </a>
            <a
              className="social-icon-link youtube"
              href="https://github.com/Lane876"
              target="_blank"
              aria-label="github"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              className="social-icon-link twitter"
              href="https://twitter.com/Lane8765"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="twitter"
            >
              <i className="fab fa-twitter" />
            </a>
            <a
              className="social-icon-link twitter"
              href="https://www.linkedin.com/in/milanjs/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin" />
            </a>
          </div>
        </div>
      </section>
      <p className="website-rights">MM © 2020</p>
    </div>
  );
}

export default Footer;
