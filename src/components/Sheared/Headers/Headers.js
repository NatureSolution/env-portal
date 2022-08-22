import React from "react";
import { Link } from "react-router-dom";

const Headers = () => {
  return (
    <div>
      <h1>This is headers Page</h1>
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
};

export default Headers;
