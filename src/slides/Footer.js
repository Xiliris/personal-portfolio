import "./Footer.scss";
import { useInView } from "framer-motion";
import { useRef } from "react";

function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <footer>
      <div className="title">
        <h1>THANKS FOR VISITING</h1>
      </div>
      <div
        className="content"
        ref={ref}
        style={{
          opacity: isInView ? 1 : 0,
        }}
      >
        <div className="visit">
          <h1>PORTFOLIO</h1>
          <p>ABOUT</p>
          <p>EXPERIENCE</p>
          <p>EDUCATION</p>
          <p>SKILLS</p>
          <p>CONTACT</p>
        </div>
        <div className="contact">
          <h1>CONTACT</h1>
          <p>
            adnanskopljakofficial@gmail.com
            <i className="fa-solid fa-envelope"></i>
          </p>
          <p>
            Kreševo, Bosnia and Herzegovina
            <i className="fa-solid fa-location-dot"></i>
          </p>
          <p>
            @adnan.sko
            <i className="fa-brands fa-instagram"></i>
          </p>
          <p>
            Xiliris
            <i className="fa-brands fa-github"></i>
          </p>
        </div>
      </div>
      <div className="footer-end">
        <p>© 2024 Adnan Skopljak. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
