import React from "react";
import { BsArrowUpRight } from "react-icons/bs";

// import { bsArrowUpRight } from "react-icons-bs";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

// service data
const services = [
  {
    name: "UI/UX",
    description:
      "Upgrade your website's appeal and functionality with my professional UI/UX design services. Perfect for businesses seeking improved user engagement. ",
    link: "learn more",
  },
  {
    name: "Search Engine Optimization",
    description:
      "Improve your online visibility and search rankings with my effective SEO services, including keyword optimization and link building, suitable for all business sizes.",
    link: "learn more",
  },
  {
    name: "Digital Marketing",
    description:
      "Elevate your online impact with our comprehensive digital marketing services. Ideal for businesses seeking enhanced engagement and growth.",
    link: "learn more",
  },
  {
    name: "Backend Development",
    description:
      "Elevate your online impact with our comprehensive digital marketing services. Ideal for businesses seeking enhanced engagement and growth.",
    link: "learn more",
  },{
    name: "Api implimentation",
    description:
      "Elevate your online impact with our comprehensive digital marketing services. Ideal for businesses seeking enhanced engagement and growth.",
    link: "learn more",
  },
];

const Services = () => {
  return (
    <div className="section" id="skills">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView="show" // Ensure this works with your setup
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:lg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6">What I Do.</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              I am a Fullstack developer that is breaking into the field to
              bring new technologies and ideas.
            </h3>
            <button className="btn btn-sm">See my work</button>
          </motion.div>
          <div>
            <motion.div
              variants={fadeIn("left", 0.3)}
              initial="hidden"
              whileInView="show" // Ensure this works with your setup
              viewport={{ once: false, amount: 0.3 }}
              className="flex-1"
            >
              {/* service list */}
              {services.map((services, index) => {
                const { name, description, link } = services;
                return (
                  <div
                    className="border-b border-white/20 h-[146px] mb-[38px] flex"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px} tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight">
                        {description}
                      </p>
                    </div>
                    <div classname="flex flex-col flex-1 items-end">
                      <a
                        href="#"
                        className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                      >
                        <BsArrowUpRight />
                      </a>
                      <a href="#" className="text-gradient text-sm">
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
