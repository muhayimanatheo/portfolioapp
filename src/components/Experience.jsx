import css from "../assets/css.png";
import html from "../assets/html.png";
import js from "../assets/js.png";
import library from "../assets/library.png";
import nodejs from "../assets/nodejs.png";
import react from "../assets/react.svg";
import django from "../assets/django.png"
import github from "../assets/github.png"

function Experience(){
    return(
        <div name="experience" className="w-full h-screen bg-[#0a192f] text-gray-300">
            {/* container */}
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div>
                <p className="text-4xl font-bold inline border-b-4 border-[#fde047]">Experience</p>
                <p className="py-4 text-3xl">This the technology i have worked with</p>
                </div>

                <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
                    <div className=" bg-[#151c4b] shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img src={html} alt="This html" className="w-20 mx-auto" />
                        <p className="my-4">THis HTML</p>
                    </div>
                    <div className="bg-[#151c4b] shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img src={css} alt="This html" className="w-20 mx-auto" />
                        <p className="my-4">THis CSS</p>
                    </div>
                    <div className="bg-[#151c4b] shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img src={js} alt="This html" className="w-20 mx-auto" />
                        <p className="my-4">THis JS</p>
                    </div>
                    <div className="bg-[#151c4b] shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img src={nodejs} alt="This html" className="w-20 mx-auto" />
                        <p className="my-4">THis NODEJS</p>
                    </div>
                    <div className="bg-[#151c4b] shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img src={react} alt="This html" className="w-20 mx-auto" />
                        <p className="my-4">THis REACT</p>
                    </div>
                    <div className="bg-[#151c4b] shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img src={django} alt="This html" className="w-20 mx-auto" />
                        <p className="my-4">THis DJANGO</p>
                    </div>
                    <div className="bg-[#151c4b] shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img src={library} alt="This html" className="w-20 mx-auto" />
                        <p className="my-4">THis LIBRARY</p>
                    </div>
                    <div className="bg-[#151c4b] shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img src={github} alt="This html" className="w-20 mx-auto" />
                        <p className="my-4">THis GITHUB</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience;