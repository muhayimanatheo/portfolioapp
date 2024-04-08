import { HiArrowCircleLeft, HiArrowCircleRight, HiArrowNarrowRight } from "react-icons/hi"

function Home() {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">

      <div className="max-w-[1000px] mx-auto px-8 flex-col justify-center h-full ">
        <p className="bg-gradient-to-r from-[#fde047] to-[#fafafa] inline-block text-transparent bg-clip-text">Hi, My name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">Theoneste Muhayimana</h1>
        <h2 className="text-4xl sm:text-7xl text-[#8892b0]">I'm Full stack developer.</h2>
        <p className="text-[#8892b0] py-4 max-w-[700px] text-2xl">I'm full stack developer specializing in builing 
          (and occassionaly designing) exceptional digital experience. currently,I'm focused on 
           builing react responsive web application. </p>
           <div>
            <button className="text-white group border-2 py-3 px-6 my-2 flex items-center hover:bg-[#fde047] hover:border-[#fde047]">View More
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-2"/></span>
            </button>
           </div>
      </div>
    </div>
  )
}

export default Home
