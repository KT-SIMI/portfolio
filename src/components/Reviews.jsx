import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import profileImage1 from "../assets/image-profile1.png";
import profileImage2 from "../assets/image-profile2.png";
import profileImage3 from "../assets/image-profile3.png";
import Review from "./Review";

const reviews = [
  {
    text: "Working with Ike has been an absolute pleasure and we'll definitely turn to his expertise for new projects.",
    imageURL: profileImage1,
    name: "James Wittings",
    position: "Marketing Director at Amazon",
  },
  {
    text: "Coding with Ike has been an absolute pleasure and we'll definitely turn to his expertise for new projects.",
    imageURL: profileImage2,
    name: "John Von Neumann",
    position: "Chief Technology Officer at Google",
  },
  {
    text: "Vibe coding with Ike has been an absolute pleasure and we'll definitely turn to his expertise for new projects.",
    imageURL: profileImage3,
    name: "Kyle Jonas",
    position: "CEO at Space X Tech",
  },
];

export default function Reviews() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const totalSlides = reviews.length;

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const goToSlide = (index) => {
    if (index === currentSlide) return;

    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <main className="block pt-[120px] h-auto overflow-hidden pb-12 max-md:pt-[60px]" id="reviews">
      <h1 className="text-white font-medium font-[Roboto Serif] mb-[70px] max-md:mb-[50px] mx-auto text-center text-3xl">
        Reviews
      </h1>
      <div className="relative w-full flex flex-col items-center">
        <div className="w-[80%] h-[40vh] max-md:h-[270px] relative flex justify-center items-center overflow-hidden">
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
              <Review {...reviews[currentSlide]} />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="w-4/5 flex justify-center mt-5 max-md:mt-0 space-x-2">
          {reviews.map((_, index) => (
            <span
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-4 h-2 rounded-xl cursor-pointer transition-colors duration-800 ease-linear ${
                index === currentSlide ? "bg-white" : "bg-white/40"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </main>
  );
}
