import React from "react";
// countup
import CountUp from "react-countup";
// intersection observer
import { useInView } from "react-intersection-observer";
// motion
import { motion } from "framer-motion";
// variant
import { fadeIn } from "../variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section id="about" className="section" ref={ref}>
      <div className="container mx-auto">
        {/* image */}
        <div className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"></div>
        {/* text */}
        <div>
          <h2>About Me</h2>
          <h3>
            Hello! I'm Kona, a web developer recently graduated from a coding
            bootcamp. I've acquired skills in HTML, CSS, JavaScript, React, and
            library integrations. Through the bootcamp, I've not only honed my
            technical abilities but also developed a sharp sense for design and
            user experience. I'm passionate about turning ideas into dynamic web
            experiences. Eager to dive into new projects and collaborations,
            please reach out if you'd like to connect!
          </h3>
          {/* stats */}
        </div>
      </div>
    </section>
  );
};

export default About;
