import React from "react";
// animations
// import { motion } from "framer-motion";
// import { fadeIn } from "../variants";
// // images
import img1 from "../assets/portfolio-img1.png";
// import img2 from "../assets/portfolio-img2";
// import img3 from "../assets/portfolio-img3";

const Work = () => {
  return (
    <div id="work" className="section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <div className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0">
            {/* text */}
            <div>
              <h2 className="h2 leading-tight text-accent">
                Most Recent <br />
                Work.
              </h2>
              <p className="max-w-sm mb-16">
                I recently developed a full-stack website for Osprey BP, a
                project that highlighted my extensive web development skills.
                The work included building the website from scratch and
                implementing advanced SEO strategies. Beyond the initial build,
                I provided continuous support and updates to keep the site
                optimized and secure, demonstrating my commitment to delivering
                a comprehensive, tailored online solution for Osprey BP.
              </p>
              <button className="btn btn-sm">View all Projects</button>
            </div>
            {/* image */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transtion-all duration-300"></div>
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
          </div>
        </div>
        <div>2</div>
        <div>3</div>
      </div>
    </div>
  );
};

export default Work;
