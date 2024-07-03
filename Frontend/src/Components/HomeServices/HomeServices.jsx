// HomeServices.js
import React from "react";
import { Link } from "react-router-dom";

const HomeServices = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit();
  };

  return (
    <div className="home-services bg-gray-100 h-screen flex flex-col justify-center">
      <section
        id="home"
        className="home flex flex-col justify-center items-center mb-12"
      >
        <div className="home-content text-center">
          <h3 className="text-4xl font-bold mb-4">Easy Access Account</h3>
          <p className="text-lg">
            Get your{" "}
            <span className="text-primary">Digital Current Account</span>{" "}
            allocated in 2 mins using PAN, Aadhaar and KYC.
          </p>
        </div>
      </section>
      <section id="services" className="services bg-gra p-8 w-full">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white col-span-1 p-6 shadow-md rounded-lg text-center">
              <i className="bx bxs-bank text-4xl text-primary mb-4"></i>
              <h3 className="text-xl font-bold mb-2 text-primary">
                Personal Banking
              </h3>
              <p className="text-black">
                Manage your finances with ease through our personal banking
                services.
              </p>
            </div>
            <div className="bg-white col-span-1 p-6 shadow-md rounded-lg text-center">
              <i className="bx bxs-business text-4xl text-primary mb-4"></i>
              <h3 className="text-xl font-bold mb-2 text-primary">
                Business Banking
              </h3>
              <p className="text-black">
                Grow your business with our broad business banking solutions.
              </p>
            </div>
            <div className="bg-white col-span-1 p-6 shadow-md rounded-lg text-center">
              <i className="bx bxs-credit-card text-4xl text-primary mb-4"></i>
              <h3 className="text-xl font-bold mb-2 text-primary">
                Credit Cards
              </h3>
              <p className="text-black">
                Choose from a diverse range of credit cards that perfectly suit
                your needs and lifestyle.
              </p>
            </div>
          </div>
          <div className="flex justify-end mt-8">
            <button
              onClick={handleSubmit}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              APPLY NOW
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeServices;
