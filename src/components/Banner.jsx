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
          <div>
            <span>I am a </span>
            <TypeAnimation
              sequence={["Developer", 2000, "Designer", 2000, "King", 2000]}
              speed={50}
              className="text-accent"
              wrapper="span"
              repeat={Infinity}
            />
          </div>
        </div>
        <div>
          <img src={Image} alt="Portfolio Picture" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
