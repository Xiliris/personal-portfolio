import { useInView } from "framer-motion";
import { useRef } from "react";
import "./Skills.scss";
import reactImg from "../images/skills/reactjs.png";
import javascriptImg from "../images/skills/javascript.png";
import typescriptImg from "../images/skills/typescript.webp";
import htmlImg from "../images/skills/html.png";
import cssImg from "../images/skills/css.webp";
import sassImg from "../images/skills/sass.png";
import nodeImg from "../images/skills/nodejs.png";
import nestImg from "../images/skills/NestJS.svg";
import mongoImg from "../images/skills/mongodb.png";
import sqlImg from "../images/skills/sql.png";
import firebaseImg from "../images/skills/firebase.png";
import jqueryImg from "../images/skills/jquery.svg";
import gitImg from "../images/skills/git.png";
import nextjsImg from "../images/skills/nextjs.png";
import cImg from "../images/skills/c.png";
import javaImg from "../images/skills/java.png";
import tailwindImg from "../images/skills/tailwind.png";
import bootstrapImg from "../images/skills/bootstrap.svg";

function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div id="skills">
      <div className="title">
        <h1>SKILLS</h1>
      </div>
      <div
        className="content"
        ref={ref}
        style={{
          opacity: isInView ? 1 : 0,
        }}
      >
        <h3>SKILLS</h3>
        <ListSkill name="ReactJS" imgSrc={reactImg} />
        <ListSkill name="JavaScript" imgSrc={javascriptImg} />
        <ListSkill name="TypeScript" imgSrc={typescriptImg} />
        <ListSkill name="HTML" imgSrc={htmlImg} />
        <ListSkill name="CSS" imgSrc={cssImg} />
        <ListSkill name="SASS" imgSrc={sassImg} />
        <ListSkill name="NodeJS" imgSrc={nodeImg} />
        <ListSkill name="NestJS" imgSrc={nestImg} />
        <ListSkill name="MongoDB" imgSrc={mongoImg} />
        <ListSkill name="SQL" imgSrc={sqlImg} />
        <ListSkill name="Firebase" imgSrc={firebaseImg} />
        <ListSkill name="JQuery" imgSrc={jqueryImg} />
        <ListSkill name="Git" imgSrc={gitImg} />
        <ListSkill name="NextJS" imgSrc={nextjsImg} className="invert" />
        <ListSkill name="C" imgSrc={cImg} />
        <ListSkill name="Java" imgSrc={javaImg} />
        <ListSkill name="Bootstrap" imgSrc={bootstrapImg} />
        <ListSkill name="Tailwind" imgSrc={tailwindImg} />
      </div>
    </div>
  );
}

function ListSkill(props) {
  const { name, imgSrc } = props;
  return (
    <div className="list-skill">
      <img src={imgSrc} alt={name} />
      <p>{name}</p>
    </div>
  );
}

export default Skills;
