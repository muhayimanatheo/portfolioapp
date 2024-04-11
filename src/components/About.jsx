function About(){
    return(
        <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
           <div className="w-full h-full flex flex-col justify-center items-center">
               <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
                   <div className="sm:text-right pb-8 pl-4">
                       <p className="text-4xl font-bold inline border-b-4 border-[#fde047]">About</p>
                   </div>
                   <div></div>
               </div>
               <div className="max-w[1000px] grid sm:grid-cols-2 gap-8 w-full px-4">
                   <div className="sm:text-right text-4xl font-bold">
                    <p className="w-[35rem] mx-20">Hi, I'm Theoneste, Nice to meet you. Please take to look around.</p>
                   </div>
                   <div>
                    <p className="w-[35rem] text-2xl ">
                    I'm a full stack developer, which means I have experience working on both the 
                    front end (the part of the application users interact with) and the 
                    back end (the server-side logic and database management). 
                    I'm proficient in a range of technologies, including [Phython,JavaScript,Django,react js, Html, and css], and 
                    I enjoy building scalable and user-friendly web applications.
                    </p>
                   </div>
               </div>
           </div>
        </div>
    )
};

export default About;