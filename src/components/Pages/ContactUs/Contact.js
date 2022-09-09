import React from "react";
import doctor from "../../../assets/images/doctor.png";
import appointment from "../../../assets/images/appointment.png";
import PrimaryButton from "../../Sheared/Button/PrimaryButton";

const Contact = () => {
  return (
    <section
      style={{
        background: `url(${appointment})`,
      }}
      className="my-10"
    >
      <div className="hero min-h-screen">
        <div className="">
          <div className=" text-center py-5">
            <h1 className=" text-primary text-xl font-bold">Contact Us</h1>
            <p className=" text-white text-3xl">Stay Connected With Us</p>
          </div>
          <form action="#" class="space-y-8 bg-base-200 p-5 rounded-lg">
            <div>
              <input
                type="email"
                id="email"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <input
                type="text"
                id="subject"
                class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Subject"
                required
              />
            </div>
            <div class="sm:col-span-2">
              <textarea
                id="message"
                rows="6"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <div>
              <PrimaryButton></PrimaryButton>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
