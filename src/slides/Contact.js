import "./Contact.scss";

function Contact() {
  return (
    <div id="contact">
      <div className="title">
        <h1>CONTACT</h1>
      </div>
      <div className="content">
        <h3>CONTACT</h3>
        <main>
          <section className="contacts">
            <h1>CONTACT</h1>
            <p>adnanskopljakofficial@gmail.com</p>
            <p>Kreševo, Bosnia and Herzegovina</p>
          </section>

          <section className="socials">
            <h1>SOCIALS</h1>
            <div className="social-subsection">
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
