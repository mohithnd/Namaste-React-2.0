import React from "react";
import UserClass from "./UserClass";

class AboutClass extends React.Component {
  constructor(props) {
    console.log("AboutClass Constructor Called...");

    super(props);
  }

  componentDidMount() {
    console.log("AboutClass componentDidMount Called...");
  }

  render() {
    console.log("AboutClass render Called...");

    return (
      <div className="about">
        <h1>About</h1>
        <h2>This is Namaste React Web Series.</h2>
        <UserClass
          name={"Mohit Agrawal"}
          location={"Jaipur"}
          github={"@mohithnd"}
        />
      </div>
    );
  }
}

export default AboutClass;
