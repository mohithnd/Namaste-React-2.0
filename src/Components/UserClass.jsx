import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    console.log("UserClass Constructor Called...");

    super(props);

    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log("UserClass componentDidMount Called...");
  }

  render() {
    console.log("UserClass render Called...");

    const { name, location, github } = this.props;
    const { count } = this.state;

    return (
      <div className="user-card">
        <h1>Count: {count}</h1>
        <button
          onClick={() => {
            this.setState({ count: count + 1 });
          }}
        >
          Count Increase
        </button>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>GitHub: {github}</h4>
      </div>
    );
  }
}

export default UserClass;
