import {
  HiArrowCircleLeft,
  HiArrowCircleRight,
  HiArrowNarrowRight,
} from "react-icons/hi";
import minusbk from "../assets/minusbk.png";

function Home() {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      <div className="max-w-full mx-28 flex  justify-center h-auto">
        {/* discription devision */}
        <div className=" w-full h-auto justify-center py-5">
          <p className="text-2xl bg-gradient-to-r from-[#fde047] to-[#fafafa] inline-block text-transparent bg-clip-text mt-64">
            Hi, My name is
          </p>
          <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
            Theoneste Muhayimana
          </h1>
          <h2 className="text-4xl sm:text-7xl text-[#8892b0]">
            I'm Full stack developer.
          </h2>
          <p className="text-[#8892b0] py-4 max-w-[700px] text-2xl">
            I'm full stack developer specializing in builing web applications
            (and occassionaly designing) exceptional digital experience.
            currently,I'm focused on builing react responsive web application.{" "}
          </p>
          {/* Button division */}
          <div>
            <button className="text-white group border-2 py-3 px-6 my-2 flex items-center hover:bg-[#fde047] hover:border-[#fde047]">
              View More
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-2" />
              </span>
            </button>
          </div>
        </div>
        {/* Images devisions */}
        <div className="flex justify-center items-center w-full h-auto ">
          <img src={minusbk} alt=""  className="w-auto h-[32rem]"/>
        </div>
      </div>
    </div>
  );
}

export default Home;
