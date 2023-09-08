import React from "react";
import Image from "../assets/avatar.svg";
import { FaGithub, FaYoutube, FaDribble } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section id="home" className="section">
      <div className="container mx-auto">
        <div>
          <h1>
            KONA<span> DEROIN</span>
          </h1>
          <div className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]">
            <span className="text-white mr-4">I am a</span>
            <TypeAnimation
              sequence={[
                "Developer",
                2000,
                "Designer",
                2000,
                "Programmer",
                2000,
              ]}
              speed={50}
              className="text-accent"
              wrapper="span"
              repeat={Infinity}
            />
            
          </div>
          <p>
          Recently graduated developer with a passion for cars and coding. When I'm not diving into tech, I'm spending time with my cherished cat or under the hood of an automobile.
            </p>
        </div>
        <div>
          <img src={Image} alt="Portfolio Picture" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
