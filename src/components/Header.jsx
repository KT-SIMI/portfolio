import { ChevronRight, Github, Linkedin, Mail } from "lucide-react";

export default function Header({ scrollY, scrollToSection }) {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative px-6 pt-20"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="space-y-6">
          <div className="overflow-hidden">
            <h1
              className="text-6xl md:text-8xl font-bold mb-4"
              style={{ transform: `translateY(${scrollY * 0.5}px)` }}
            >
              <span className="inline-block hover:text-blue-400 transition-colors duration-300 cursor-default">
                I
              </span>
              <span className="inline-block hover:text-purple-400 transition-colors duration-300 cursor-default">
                k
              </span>
              <span className="inline-block hover:text-pink-400 transition-colors duration-300 cursor-default">
                e
              </span>
              <span className="inline-block hover:text-cyan-400 transition-colors duration-300 cursor-default">
                o
              </span>
              <span className="inline-block hover:text-green-400 transition-colors duration-300 cursor-default">
                l
              </span>
              <span className="inline-block hover:text-yellow-400 transition-colors duration-300 cursor-default">
                u
              </span>
              <span className="inline-block hover:text-orange-400 transition-colors duration-300 cursor-default">
                w
              </span>
              <span className="inline-block hover:text-red-400 transition-colors duration-300 cursor-default">
                a
              </span>
            </h1>
          </div>
          <div className="space-y-2">
            <p className="text-2xl md:text-4xl text-gray-400 font-light">
              Full-Stack Developer
            </p>
            <p className="text-xl md:text-2xl text-gray-500">
              Building digital experiences that don't suck
            </p>
          </div>
          <div className="flex space-x-4 pt-6">
            <a
              href="#"
              className="p-3 bg-gray-800 hover:bg-blue-500 rounded-lg transition-all duration-300 hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              href="#"
              className="p-3 bg-gray-800 hover:bg-blue-500 rounded-lg transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="#"
              className="p-3 bg-gray-800 hover:bg-blue-500 rounded-lg transition-all duration-300 hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </div>
          <button
            onClick={() => scrollToSection("projects")}
            className="mt-8 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 flex items-center space-x-2"
          >
            <span>View My Work</span>
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* scroll */}
      <div className="absolute bottom-10 left-1/2 transform -transalate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-500 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}
