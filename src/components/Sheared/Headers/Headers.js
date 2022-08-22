import React from "react";
import { Link } from "react-router-dom";

const Headers = () => {
  return (
    <div>
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
};

export default Headers;
