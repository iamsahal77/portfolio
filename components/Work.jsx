"use client";
import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "motion/react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const Work = ({ isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="work"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        My portfolio
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        My latest work
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
      >
        Welcome to my web development portfolio! Explore a collection of
        projects showcasing my expertise in front-end development.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="grid grid-cols-auto my-10 gap-5 dark:text-black"
      >
        {workData.map((project, index) => {
          const [flipped, setFlipped] = useState(false);

          return (
            <div
              key={index}
              className="aspect-square w-60 h-60 mx-auto perspective"
              onMouseEnter={() => setFlipped(true)}
              onMouseLeave={() => setFlipped(false)}
              style={{ perspective: 1000 }}
            >
              <motion.div
                animate={{ rotateY: flipped ? 180 : 0 }}
                initial={false}
                transition={{ duration: 0.6 }}
                className="relative w-full h-full"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Front of card */}
                <div
                  className="absolute w-full h-full bg-no-repeat bg-cover bg-center rounded-lg cursor-pointer group"
                  style={{
                    backgroundImage: `url(${project.bgImage})`,
                    backfaceVisibility: "hidden",
                  }}
                >
                  <div className="bg-white w-11/12 rounded-md absolute bottom-3 left-1/2 -translate-x-1/2 py-2 px-3 flex items-center justify-between duration-500 group-hover:bottom-5">
                    <div>
                      <h2 className="font-semibold">{project.title}</h2>
                      <p className="text-sm text-gray-700">
                        {project.description}
                      </p>
                    </div>
                    <div className="border rounded-full border-black w-7 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                      <Image
                        src={assets.send_icon}
                        alt="send icon"
                        className="w-4"
                      />
                    </div>
                  </div>
                </div>
                {/* Back of card */}
                <div
                  className="absolute w-full h-full rounded-lg flex flex-col items-center justify-center border border-gray-200 bg-white/90 shadow-lg dark:bg-neutral-900 dark:border-gray-700"
                  style={{
                    transform: "rotateY(180deg)",
                    backfaceVisibility: "hidden",
                  }}
                >
                  <div className="mt-[23px] text-center">
                    <h2 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
                      {project.backTitle}
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 px-4">
                      {project.backDescription}
                    </p>
                  </div>
                  <div className="flex gap-4 mt-auto mb-[14px]">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600 text-white text-xs font-semibold shadow hover:bg-blue-700 transition"
                    >
                      <FiExternalLink className="w-4 h-4" />
                      Live
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900 text-white text-xs font-semibold shadow hover:bg-gray-800 transition"
                    >
                      <FaGithub className="w-4 h-4" />
                      GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          );
        })}
      </motion.div>

      <motion.a
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.5 }}
        href=""
        className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover"
      >
        Show more
        <Image
          src={
            isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold
          }
          alt="Right arrow"
          className="w-4"
        />
      </motion.a>
    </motion.div>
  );
};

export default Work;
