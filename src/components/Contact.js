import React from "react";
// motion
import { motion } from "framer-motion";
// variant
import { fadeIn } from "../variants";

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          {/* form section */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent mb-6">Get In Touch</h2>
            <p className="mb-12">
              I'm always excited to collaborate on new projects or discuss
              creative ideas. Please fill out the form below and I'll get back
              to you as soon as possible.
            </p>
            <form className="flex flex-col gap-y-6">
              <div className="flex gap-x-6">
                <input
                  type="text"
                  className="input input-lg w-1/2"
                  placeholder="Your Name"
                />
                <input
                  type="email"
                  className="input input-lg w-1/2"
                  placeholder="Your Email"
                />
              </div>
              <input
                type="text"
                className="input input-lg"
                placeholder="Subject"
              />
              <textarea
                className="textarea textarea-lg"
                placeholder="Your Message"
              ></textarea>
              <button className="btn btn-lg">Send Message</button>
            </form>
          </motion.div>

          {/* image section */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-contact bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"
          >
            {/* You can replace the background image in your CSS with a relevant contact image or map */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
