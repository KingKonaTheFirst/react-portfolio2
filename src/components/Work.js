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
        <div>
          <div>
            <div>
              {/* text */}
              <div>
                <h2 className="h2 leading-tight text-accent">
                  Most Recent <br />
                  Work.
                </h2>
                <p className="max-w-sm mb-16">
                  I recently had the opportunity to develop a full-stack website
                  for Osprey BP, a dynamic project that showcased my
                  comprehensive web development skills. This endeavor
                  encompassed everything from the ground-up construction of the
                  website to integrating advanced SEO strategies. My role
                  extended beyond the initial development, as I continued to
                  provide ongoing support and updates, ensuring the site
                  remained optimized, secure, and ahead in the ever-evolving
                  digital landscape. This project was a testament to my ability
                  to deliver a complete and robust online solution, tailored to
                  meet the specific needs of Osprey BP.
                </p>
                <button className="btn btn-sm">View all Projects</button>
              </div>
              {/* image */}
              <div>
                {/* overlay */}
                <div></div>
              <img src={img1} alt="" />
              </div>
            </div>
          </div>
          <div>2</div>
          <div>3</div>
        </div>
      </div>
    </div>
  );
};

export default Work;
