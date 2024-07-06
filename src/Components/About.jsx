import User from "./User";

const About = () => {
  return (
    <div className="about">
      <h1>About</h1>
      <h2>This is Namaste React Web Series.</h2>
      <User name={"Mohit Agrawal"} location={"Jaipur"} github={"@mohithnd"} />
    </div>
  );
};

export default About;
