import AboutCard from "./AboutCard";

export default function () {
  return (
    <main className="block pt-[80px] h-[auto] max-md:h-auto max-md:pt-[60px] pb-[50px] max-md:pb-[20px]">
        <h1 className="text-white font-medium font-[Roboto Serif] mb-[70px] max-md:mb-[60px] mx-auto text-center text-3xl">
            About
        </h1>
    <div className="flex justify-center gap-[100px] relative text-white max-md:flex-col max-md:gap-0 max-md:pb-8">
      <div className="column w-[400px] relative pl-5 pt-5 pb-0 max-md:w-full max-md:p-0">
        <AboutCard
          head={"Hi, I am Ikeoluwa"}
          text={
            "As a detail-oriented engineer, i believe great software is built on 3 core components: robust architecture, exceptional user experience, and continuous learning. My experience spans these components as well as building software that challenges me to learn new technologies"
          }
        />
        <AboutCard
          head={"My Experience"}
          text={
            "I’ve developed platforms across e-commerce, role-based systems, and the server side of fintech, edutech, and SaaS applications. This experience gives me a strong grasp of software architecture and the factors that drive optimal performance"
          }
        />
        <AboutCard
          head={"My Passion"}
          text={
            "For me, technology is more than just code, it's a powerful to solve real-world problems and simplify everyday life. I am driven by the idea of building products that genuinely improve how we live, and therefore pushing the boundaries of human potential"
          }
        />
      </div>
      <div className="column w-[400px] relative pl-5 pt-5 pb-0 max-md:w-full max-md:p-0">
        <AboutCard
          head={"Frontend Development"}
          text={
            "While frontend isn’t my primary focus, I’ve built polished client-side interfaces using React and TailwindCSS. My backend expertise gives me deeper insight into client-server interactions, making me well-suited for crafting effective, high-quality frontends"
          }
        />
        <AboutCard
          head={"Backend Development"}
          text={
            "With a strong passion for logical systems, backend development is a natural fit for me. It allows me to dive deep into what makes software truly tick. My experience with Node.js and Express positions me well to build efficient and reliable server-side solutions."
          }
        />
        <AboutCard
          head={"My Philosophy"}
          text={
            "Building software has taught me that as humans, we’re meant to leave a lasting mark. We do this by connecting with those who share our vision, collaborating to create meaningful products that leave our footprints not just in code, but in the timeline of progress."
          }
        />
      </div>
    </div>
    </main>
  );
}
