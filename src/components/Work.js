import React from "react";
// animations
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
// // images
import img1 from "../assets/portfolio-img1.png";
import img2 from "../assets/portfolio-img2.png";
import img3 from "../assets/portfolio-img3.png";

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView="show" // Ensure this works with your setup
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"
          >
            {/* text */}
            <div>
              <h2 className="h2 leading-tight text-accent">
                Most Recent <br />
                Work.
              </h2>
              <p className="max-w-sm mb-16">
                As a full-stack developer, I blend HTML, CSS, JavaScript, and
                Node.js to create seamless, user-centric web applications.
              </p>
              <button className="btn btn-sm">View all Projects</button>
            </div>
            {/* image */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/60 w-full h-full absolute z-40 transtion-all duration-300"></div>
              <img
                className="group-hover:scale-125 transtion all duration-500"
                src={img1}
                alt=""
              />
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transtion-all duration-500 z-50">
                <span className="text-gradient">FullStack Development</span>
              </div>
              {/* subtitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transtion-all duration-700 z-50">
                <span className="text-white text-3xl">Osprey BP</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView="show" // Ensure this works with your setup
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-10"
          >
            {/* image */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/60 w-full h-full absolute z-40 transtion-all duration-300"></div>
              <img
                className="group-hover:scale-125 transtion all duration-500"
                src={img2}
                alt=""
              />
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transtion-all duration-500 z-50">
                <span className="text-gradient">FullStack Development</span>
              </div>
              {/* subtitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transtion-all duration-700 z-50">
                <span className="text-white text-3xl">Osprey BP</span>
              </div>
            </div>
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/60 w-full h-full absolute z-40 transtion-all duration-300"></div>
              <img
                className="group-hover:scale-125 transtion all duration-500"
                src={img3}
                alt=""
              />
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transtion-all duration-500 z-50">
                <span className="text-gradient">FullStack Development</span>
              </div>
              {/* subtitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transtion-all duration-700 z-50">
                <span className="text-white text-3xl">Osprey BP</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
