import React from "react";

const About = () => {
  return (
    <div>
      <h1 className="text-6xl">About Page</h1>
      <button className="btn btn-accent btn-outline">Three</button>

      <div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://placeimg.com/400/225/arch"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>

      <div className="card w-96 glass">
        <figure>
          <img src="https://placeimg.com/400/225/arch" alt="car!" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Life hack</h2>
          <p>How to park your car at your garage?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Learn now!</button>
          </div>
        </div>
      </div>
      <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
        <div className="carousel-item">
          <img
            src="https://placeimg.com/250/180/arch"
            className="rounded-box"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://placeimg.com/250/180/arch"
            className="rounded-box"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://placeimg.com/250/180/arch"
            className="rounded-box"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://placeimg.com/250/180/arch"
            className="rounded-box"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://placeimg.com/250/180/arch"
            className="rounded-box"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://placeimg.com/250/180/arch"
            className="rounded-box"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://placeimg.com/250/180/arch"
            className="rounded-box"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
