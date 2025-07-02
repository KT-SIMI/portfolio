import AboutCard from "./AboutCard";

export default function () {
  return (
    <main className="block pt-[120px] h-[80vh]">
        <h1 className="text-white font-medium font-[Roboto Serif] mb-[70px] mx-auto text-center text-3xl">
            About
        </h1>
    <div className="flex justify-center gap-[100px] relative text-white">
      <div className="column w-[400px] relative pl-5 pt-5 pb-0">
        <AboutCard
          head={"Hi, I am Ikeoluwa"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elementum elementum mattis. Curabitur tellus dolor, pharetra sed justo sit amet, eleifend pretium turpis"
          }
        />
        <AboutCard
          head={"My Experience"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elementum elementum mattis. Curabitur tellus dolor, pharetra sed justo sit amet, eleifend pretium turpis"
          }
        />
        <AboutCard
          head={"My Experience"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elementum elementum mattis. Curabitur tellus dolor, pharetra sed justo sit amet, eleifend pretium turpis"
          }
        />
      </div>
      <div className="column w-[400px] relative pl-5 pt-5 pb-0">
        <AboutCard
          head={"Frontend Development"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elementum elementum mattis. Curabitur tellus dolor, pharetra sed justo sit amet, eleifend pretium turpis"
          }
        />
        <AboutCard
          head={"Backend Development"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elementum elementum mattis. Curabitur tellus dolor, pharetra sed justo sit amet, eleifend pretium turpis"
          }
        />
        <AboutCard
          head={"My Experience"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elementum elementum mattis. Curabitur tellus dolor, pharetra sed justo sit amet, eleifend pretium turpis"
          }
        />
      </div>
    </div>
    </main>
  );
}
