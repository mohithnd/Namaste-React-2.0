import { useState } from "react";

const User = ({ name, location, github }) => {
  const [count, setCount] = useState(0);

  return (
    <div className="user-card">
      <h1>Count: {count}</h1>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        Count Increase
      </button>
      <h2>Name: {name}</h2>
      <h3>Location: {location}</h3>
      <h4>GitHub: {github}</h4>
    </div>
  );
};

export default User;
