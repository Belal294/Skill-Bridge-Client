import React from "react";
import { motion } from "framer-motion";
// import img from '../../assets/carosel/section.jpg';
import img1 from '../../assets/Template/assets/images/about-us-image.jpg'

const SectionOne = () => {
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">
      <div className="hero-content flex-col lg:flex-row-reverse text-center lg:text-left max-w-6xl gap-10">
        
        {/* Image with responsive design */}
        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          src={img1}
          alt="Freelancing Platform"
          className="w-full max-w-md lg:max-w-lg rounded-2xl object-cover aspect-video shadow-[0_10px_25px_rgba(0,0,0,0.3)]"
        />

        {/* Text section */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="lg:mr-10"
        >
          <h1 className="text-5xl font-bold mb-4 drop-shadow-sm">
            Build Your Freelance Career with Confidence!
          </h1>
          <p className="mb-6 text-gray-600">
            Join a thriving platform where skilled professionals and clients connect to bring projects to life. 
            From web development to graphic design, unlock opportunities and grow your freelance business with ease.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-secondary px-6 py-3 rounded-full shadow-lg transition-transform duration-200"
          >
            Get Started
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionOne;
