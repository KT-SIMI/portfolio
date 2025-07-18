import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Project from "./Project";
import projectImage1 from "../assets/image-project1.png";
import projectImage2 from "../assets/image-project2.png";
import projectImage3 from "../assets/image-project3.png";
import projectImage4 from "../assets/image-project4.png";
import projectImage5 from "../assets/image-project5.png";

const projects = [
  {
    imageURL: projectImage1,
    head: "Project One",
    text: "Lorem ipsum dolor sit amet consectetur. Viverra sapien sagittis eget elementum pretium magna nisi auctor cursu.",
    link: "#",
  },
  {
    imageURL: projectImage2,
    head: "Project Two",
    text: "Lorem ipsum dolor sit amet consectetur. Viverra sapien sagittis eget elementum pretium magna nisi auctor cursu.",
    link: "#",
  },
  {
    imageURL: projectImage3,
    head: "Project Three",
    text: "Lorem ipsum dolor sit amet consectetur. Viverra sapien sagittis eget elementum pretium magna nisi auctor cursu.",
    link: "#",
  },
  {
    imageURL: projectImage4,
    head: "Project Four",
    text: "Lorem ipsum dolor sit amet consectetur. Viverra sapien sagittis eget elementum pretium magna nisi auctor cursu.",
    link: "#",
  },
  {
    imageURL: projectImage5,
    head: "Project Five",
    text: "Lorem ipsum dolor sit amet consectetur. Viverra sapien sagittis eget elementum pretium magna nisi auctor cursu.",
    link: "#",
  },
];

export default function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const totalSlides = projects.length;

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setDirection(1);
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index) => {
    if (index === currentSlide) return;

    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  return (
    <main
      className="block pt-[100px] h-[auto] overflow-hidden pb-12 max-md:pt-[60px]"
      id="projects"
    >
      <h1 className="text-white font-medium font-[Roboto Serif] mb-[70px] max-md:mb-[50px] mx-auto text-center text-3xl">
        Projects
      </h1>
      <div className="relative w-full hidden md:flex flex-col items-center">
        <div className="w-[80%] h-[60vh] relative flex justify-center items-center overflow-hidden max-md:h-[48vh]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentSlide}
              custom={direction}
              initial={{ x: direction === 1 ? 300 : -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction === 1 ? -300 : 300, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute w-full h-full"
            >
              <Project
                {...projects[currentSlide]}
                step={currentSlide}
                totalSteps={totalSlides}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="w-4/5 flex justify-center mt-5 space-x-3 max-md:space-x-2">
          {projects.map((_, index) => (
            <span
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-5 h-5 rounded-full cursor-pointer ${
                index === currentSlide ? "bg-white" : "bg-white/40"
              }`}
            ></span>
          ))}
        </div>
        <div className="w-1/2 flex mt-5 justify-between items-center font-[Roboto Serif] max-md:w-4/5">
          <div className="flex space-x-2">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className={`bg-white/85 rounded-full w-6 h-6 max-md:w-5 max-md:h-5 max-md:text-xs flex items-center justify-center text-sm font-bold ${
                currentSlide === 0
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-white"
              }`}
            >
              &lt;
            </button>
            <button
              onClick={nextSlide}
              disabled={currentSlide === totalSlides - 1}
              className={`bg-white/85 rounded-full w-6 h-6 max-md:w-5 max-md:h-5 max-md:text-xs flex items-center justify-center text-sm font-bold ${
                currentSlide === totalSlides - 1
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-white"
              }`}
            >
              &gt;
            </button>
          </div>
          <span className="font-bold text-base max-md:text-sm text-white">
            {currentSlide + 1}/{totalSlides}
          </span>
        </div>
      </div>
      <div className="flex w-full relative flex-col items-center h-auto md:hidden pb-5">
        <div className="w-[80%] h-[400px] relative flex justify-center items-center overflow-hidden">
          <motion.div
            key={currentSlide}
            className="absolute w-full h-full"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(event, info) => {
              if (info.offset.x < -100) {
                nextSlide();
              } else if (info.offset.x > 100) {
                prevSlide();
              }
            }}
            initial={{ x: 0 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Project
              {...projects[currentSlide]}
              step={currentSlide}
              totalSteps={totalSlides}
            />
          </motion.div>
        </div>

          <div className="w-4/5 flex justify-center mt-5 space-x-2">
          {projects.map((_, index) => (
            <span
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 max-md:w-2.5 max-md:h-2.5 rounded-full cursor-pointer ${
                index === currentSlide ? "bg-white" : "bg-white/40"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </main>
  );
}
