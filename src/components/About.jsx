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
                    <p>Hi, I'm Theo, Nice to meet you. Please take to look around.</p>
                   </div>
                   <div>
                    <p>
                    Our full-stack developers are web craftsmen, wielding expertise 
                    across the entire development stack.  They bridge the gap between
                     user experience and functionality, ensuring beautiful interfaces powered by robust features.
                      This combined skillset allows them to bring your web vision to life, seamlessly.
                    </p>
                   </div>
               </div>
           </div>
        </div>
    )
};

export default About;