import "./Contact.scss";
import { useInView } from "framer-motion";
import { useRef } from "react";

function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div id="contact">
      <div className="title">
        <h1>CONTACT</h1>
      </div>
      <div
        className="content"
        ref={ref}
        style={{
          opacity: isInView ? 1 : 0,
        }}
      >
        <h3>CONTACT</h3>
        <main>
          <section className="contacts">
            <h1>CONTACT</h1>
            <p>adnanskopljakofficial@gmail.com</p>
            <p>Kreševo, Bosnia and Herzegovina</p>
            <div className="socials">
              <i className="fa-brands fa-github fa-2x"></i>
              <i className="fa-brands fa-instagram fa-2x"></i>
              <i className="fa-brands fa-discord fa-2x"></i>
              <i className="fa-brands fa-linkedin-in fa-2x"></i>
            </div>
          </section>
        </main>

        <div className="message">
          <input type="text" placeholder="Subject" />
          <input type="text" placeholder="Full Name" />
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button>SEND</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
