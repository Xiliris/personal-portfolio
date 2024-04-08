import "./Contact.scss";
import { useInView } from "framer-motion";
import { useRef } from "react";

function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  function sendEmail() {
    const inputs = [
      {
        element: document.getElementById("subjectInput"),
        value: document.getElementById("subjectInput").value,
      },
      {
        element: document.getElementById("nameInput"),
        value: document.getElementById("subjectInput").value,
      },
      {
        element: document.getElementById("emailInput"),
        value: document.getElementById("subjectInput").value,
      },
      {
        element: document.getElementById("messageInput"),
        value: document.getElementById("subjectInput").value,
      },
    ];

    let hasError = false;

    inputs.forEach((input) => {
      const { element } = input;
      const inputValue = element.value.trim();
      if (inputValue === "") {
        element.classList.add("error");
        hasError = true;
      } else {
        element.classList.remove("error");
      }
    });

    if (hasError) {
      return;
    }

    /* RESET */
    inputs.forEach((input) => {
      input.element.value = "";
    });
  }

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
              <a
                href="https://github.com/Xiliris"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"         >
                <i className="fa-brands fa-github fa-2x"></i>
              </a>
              <a
                href="https://www.instagram.com/adnan.sko/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram Profile"              >
                <i className="fa-brands fa-instagram fa-2x"></i>
              </a>
              <a
                href="https://discordapp.com/users/400414917070422017"
                target="_blank"
                rel="noreferrer"
                aria-label="Discord Profile"              >
                <i className="fa-brands fa-discord fa-2x"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/adnan-skopljak-646994257/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"              >
                <i className="fa-brands fa-linkedin-in fa-2x"></i>
              </a>
            </div>
          </section>
        </main>

        <div className="message">
          <input type="text" placeholder="Subject" id="subjectInput" />
          <input type="text" placeholder="Full Name" id="nameInput" />
          <input type="text" placeholder="Email" id="emailInput" />
          <textarea placeholder="Message" id="messageInput"></textarea>
          <button onClick={sendEmail}>SEND</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
