import "./Experience.scss";
import { useInView } from "framer-motion";
import { useRef } from "react";

function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div id="experience">
      <div className="title">
        <h1>EXPERIENCE</h1>
      </div>
      <div
        className="content"
        ref={ref}
        style={{
          opacity: isInView ? 1 : 0,
        }}
      >
        <h3>EXPERIENCE</h3>
        <section>
          <h1>Back-End Team Managment</h1>
          <p>ITAcademy by LINKGroup</p>
          <p className="date">Dec/2023-Present</p>
        </section>
        <section>
          <h1>Front-End Team Lead</h1>
          <p>ITAcademy by LINKGroup</p>
          <p className="date">Nov/2023-Dec/2023</p>
        </section>
        <section>
          <h1>Website Production and Maintenance</h1>
          <p>OBRT STEELPRO, Elmir Skopljak</p>
          <p className="date">Jun/2022-May/2023</p>
        </section>
      </div>
    </div>
  );
}

export default Experience;
