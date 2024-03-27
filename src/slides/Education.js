import "./Education.scss";

function Education() {
  return (
    <div id="education">
      <div className="title">
        <h1>EDUCATION</h1>
      </div>
      <div className="content">
        <h3>EDUCATION</h3>
        <section>
          <h1>COMPUTER TECHNICIAN</h1>
          <p>
            I learned basics of language C, and I also gained experience in
            building web applications using HTML, CSS, and JavaScript
          </p>
          <p className="date">2019-2023</p>
        </section>
        <section>
          <h1>IT ACADEMY</h1>
          <p>
            During this time, we built a complete web applications using latest
            software tools and managed our code with git
          </p>
          <p className="date">2023-2024</p>
        </section>
      </div>
    </div>
  );
}

export default Education;
