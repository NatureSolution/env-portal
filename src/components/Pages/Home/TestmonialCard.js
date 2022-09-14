import React from "react";

const TestmonialCard = ({ review }) => {
  return (
    <div className="container px-8 py-5 shadow-lg rounded-lg">
      <div>
        <p className="text-left py-5">{review.testimonials}</p>
      </div>
      <div>
        <figcaption className="flex justify-left items-center space-x-3 py-2">
          <div className="avatar">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={review.img} />
            </div>
          </div>
          <div className="space-y-0.5 font-medium dark:text-white text-left">
            <div>{review.name}</div>
            <div className="text-sm font-light text-gray-500 dark:text-gray-400">
              {review.address}
            </div>
          </div>
        </figcaption>
      </div>
    </div>
  );
};

export default TestmonialCard;
