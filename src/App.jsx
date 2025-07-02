import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/ProjectsSection";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
     <Header />
     <About />
     <Projects />
     <Reviews />
     <Contact />
     <Footer />
    </>
  );
}

export default App;
