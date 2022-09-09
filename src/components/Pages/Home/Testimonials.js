import React from "react";
import TestmonialCard from "./TestmonialCard";
import quate from "../../../assets/icons/quote.svg";

const Testimonials = () => {
  const reviewes = [
    {
      _id: 1,
      testimonials:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus beatae in autem perferendis dolore exercitationem, temporibus, iure laborum necessitatibus obcaecati explicabo veniam tenetur aliquid optio pariatur non, possimus ab officia!",
      name: "Javed Korim",
      img: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png",
      address: "Sylhet",
    },
    {
      _id: 2,
      testimonials:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus beatae in autem perferendis dolore exercitationem, temporibus, iure laborum necessitatibus obcaecati explicabo veniam tenetur aliquid optio pariatur non, possimus ab officia!",
      name: "Javed Korim",
      img: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png",
      address: "Rajshahi",
    },
    {
      _id: 3,
      testimonials:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus beatae in autem perferendis dolore exercitationem, temporibus, iure laborum necessitatibus obcaecati explicabo veniam tenetur aliquid optio pariatur non, possimus test officia!",
      name: "Javed Korim",
      img: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png",
      address: "Khulna",
    },
  ];
  return (
    <div>
      <div className="text-left flex justify-between ">
        <div className="py-10">
          <h4 className="text-xl text-primary font-bold">Testimonial</h4>
          <h2 className="text-3xl">What our Patients Say</h2>
        </div>
        <div>
          <img className="lg:w-48 w-24" src={quate} alt="" />
        </div>
      </div>
      <div>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviewes.map((review) => (
            <TestmonialCard key={review._id} review={review}></TestmonialCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
