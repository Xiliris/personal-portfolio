import "./About.scss";
import { useInView } from "framer-motion";
import { useRef } from "react";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div id="about">
      <div className="title">
        <h1>ABOUT</h1>
      </div>
      <div
        className="content"
        ref={ref}
        style={{
          opacity: isInView ? 1 : 0,
        }}
      >
        <h3>ABOUT</h3>
        <p>
          My name is Adnan Skopljak and I am a Software Development Engineer
          based in Kreševo, Bosnia and Herzegovina. Certified Front-End
          JavaScript Developer with practical experience gained through training
          sessions with highly skilled mentors from IT Academy.
        </p>
        <p>
          My main focus is working on Front-end, creating, designing and
          developing high-quality, modern content. my abilities do not stop
          there, as I am skilled in Back-end technologies and more.
        </p>

        <button>DOWNLOAD CV</button>
      </div>
    </div>
  );
}

export default About;
