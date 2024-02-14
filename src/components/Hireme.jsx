import React from "react";
import hireMe from "../assets/images/person1.png";
const Hireme = () => {
  return (
    <section id="hireme" className="py-10 px-3 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          Hire <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Do you have any work?</p>
      </div>
      <div className="bg-gray-700 lg:flex lg:items-center relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row flex-col-reverse items-center">
        <div>
          <h2 className="text-2xl font-semibold">
            Are you in need of a skilled web developer? Look no further! If
            you're seeking professional expertise in web development, don't
            hesitate to reach out. Connect with me on LinkedIn and let's discuss
            how I can help bring your projects to life!
          </h2>
          <p className="lg:text-left text-justify max-w-lg text-sm mt-4 text-gray-200 leading-6">
            If you do l
          </p>
          <button className="btn-primary mt-10">
            <a href="https://www.linkedin.com/in/roushan-sheik/">Say Hello</a>
          </button>
        </div>
        <div id="hire-me-parent" className="">
          <img
            id="hire-me-img"
            src={hireMe}
            alt=""
            className="lg:h-[32rem] h-80 lg:absolute bottom-0 -right-3 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hireme;
