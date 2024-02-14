import React from "react";
import { FaNodeJs } from "react-icons/fa";
import { GrReactjs } from "react-icons/gr";
import { SiMongodb, SiNextdotjs } from "react-icons/si";

const Skills = () => {
  return (
    <section id="skills" className="py-10 bg-gray-800 relative">
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Skills</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My knowledge</p>
        <div className="flex items-center justify-center mt-12 gap-10 flex-wrap">
          {/* skill 1 */}
          <div className="border-2 group border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl">
            <div
              style={{
                background: `conic-gradient(rgb(8,145,170) ,#ddd)`,
              }}
              className="w-32 h-32 flex items-center justify-center rounded-full"
            >
              <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600">
                <GrReactjs></GrReactjs>
              </div>
            </div>
            <p className="text-xl mt-3">React Js</p>
          </div>
          {/* skill 2  */}
          <div className="border-2 group border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl">
            <div
              style={{
                background: `conic-gradient(rgb(8,145,170) ,#ddd)`,
              }}
              className="w-32 h-32 flex items-center justify-center rounded-full"
            >
              <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600">
                <SiNextdotjs></SiNextdotjs>
              </div>
            </div>
            <p className="text-xl mt-3">Next Js</p>
          </div>
          {/* skill 3  */}
          <div className="border-2 group border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl">
            <div
              style={{
                background: `conic-gradient(rgb(8,145,170) ,#ddd)`,
              }}
              className="w-32 h-32 flex items-center justify-center rounded-full"
            >
              <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600">
                <FaNodeJs></FaNodeJs>
              </div>
            </div>
            <p className="text-xl mt-3">Node Js</p>
          </div>
          {/* skill 4  */}
          <div className="border-2 group border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl">
            <div
              style={{
                background: `conic-gradient(rgb(8,145,170) ,#ddd)`,
              }}
              className="w-32 h-32 flex items-center justify-center rounded-full"
            >
              <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600">
                <SiMongodb></SiMongodb>
              </div>
            </div>
            <p className="text-xl mt-3">Mongo DB</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
