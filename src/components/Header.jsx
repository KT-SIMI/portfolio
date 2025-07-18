import HeaderImage from "../assets/image-header.png";
import mobileHeaderImage from "../assets/image-mobile-header.png";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <div
      className="block bg-no-repeat bg-center bg-cover w-full max-w-[100vw] h-[100vh] p-0"
      style={{
        backgroundImage: `url(${HeaderImage})`,
      }}
      id="header"
    >
      <Navbar />
      <div className="block mt-[20%] max-md:mt-[63%] w-full max-md:text-center">
        <div className="w-[55%] max-md:w-full px-[5%] py-[2%] text-white">
          <h3 className="font-medium font-[Monserrat] text-[21px] max-md:text-[18px]">
            Build with Ikeoluwa Oyewole
          </h3>
          <h1 className="text-[40px] font-[Roboto Serif] font-bold text-white mb-4 max-md:text-[32px]">
            Software Engineer
          </h1>
          <p className="font-normal font-[Monserrat] text-[15px] mb-[35px] w-[85%] opacity-60 max-md:w-full max-md:px-[4%] max-md:opacity-75">
            Hi, I am Ikeoluwa Oyewole, a software engineer who transforms complex business challenges into elegant digital solutions. Over the past 2 years, I've helped startups and established companies increase their operational efficiency through custom web applications and automated systems.
          </p>
          <a
            href="#projects"
            className="border border-white rounded-[30px] w-full h-7 text-white no-underline px-16 py-4 hover:border-cyan-950 hover:text-[#ccc]"
          >
            Go to Projects →
          </a>
        </div>
      </div>
    </div>
  );
}
