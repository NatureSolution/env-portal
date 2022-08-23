import React from "react";

const About = () => {
  return (
    <div>
      <h1 className="text-6xl">About Page</h1>
      <button class="btn btn-accent btn-outline">Three</button>

      <div>
        <div class="card w-96 bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
            <img
              src="https://placeimg.com/400/225/arch"
              alt="Shoes"
              class="rounded-xl"
            />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions">
              <button class="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>

      <div class="card w-96 glass">
        <figure>
          <img src="https://placeimg.com/400/225/arch" alt="car!" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">Life hack</h2>
          <p>How to park your car at your garage?</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Learn now!</button>
          </div>
        </div>
      </div>
      <div class="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
        <div class="carousel-item">
          <img src="https://placeimg.com/250/180/arch" class="rounded-box" />
        </div>
        <div class="carousel-item">
          <img src="https://placeimg.com/250/180/arch" class="rounded-box" />
        </div>
        <div class="carousel-item">
          <img src="https://placeimg.com/250/180/arch" class="rounded-box" />
        </div>
        <div class="carousel-item">
          <img src="https://placeimg.com/250/180/arch" class="rounded-box" />
        </div>
        <div class="carousel-item">
          <img src="https://placeimg.com/250/180/arch" class="rounded-box" />
        </div>
        <div class="carousel-item">
          <img src="https://placeimg.com/250/180/arch" class="rounded-box" />
        </div>
        <div class="carousel-item">
          <img src="https://placeimg.com/250/180/arch" class="rounded-box" />
        </div>
      </div>
    </div>
  );
};

export default About;
