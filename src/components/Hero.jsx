import React from "react";
import hero from "../assets/images/hero.png";
const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div
        id="hero-parent"
        className="flex-1 flex items-center justify-center h-full"
      >
        <img
          id="hero"
          src={hero}
          alt=""
          className="md:w-11/12 h-full object-cover"
        />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            My Name is <span>Roushan Sheik</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            Fullstack Developer
          </h4>
          <button className="btn-primary mt-8">Contact Me</button>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            <div className="text-gray-600 hover:text-white cursor-pointer ">
              <a id="my-icon"  href="https://www.linkedin.com/in/roushan-sheik/">
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
              <a id="my-icon" href="https://github.com/roushan-sheik">
                <ion-icon name="logo-github"></ion-icon>
              </a>
              <a id="my-icon" href="https://twitter.com/RoushanSheik">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
              <a id="my-icon" href="https://www.facebook.com/mdrowshansheikh008/">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
