import React from "react";

const AboutHeader = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-">
            <h2 className="text-2xl md:text-4xl lg:text-6xl uppercase">
              Welcome to
            </h2>
            <h1 className="text-3xl md:text-6xl lg:text-8xl uppercase font-black mb-8  text-purple-400 shadow-md">
              The coding club
            </h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHeader;
