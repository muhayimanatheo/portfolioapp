import workings from "../assets/workings.jpg";
import worked from "../assets/worked.png";
import real from "../assets/real.png";
import daco from "../assets/daco.png";
import health from "../assets/health.jpeg";
import Good from "../assets/Good.jpeg"


function Work(){
    return(
        <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full text-gray-300">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-[#fde047]">Worked In</p>
                    <p className="py-6">Check out some of my recently worked project</p>
                </div>
                {/* container */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {/* grid item */}
                    <div style={{backgroundImage:`url(${workings})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                        {/* hover effect */}
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold text-white tracking-wider">
      React js Application
                            </span>
                            <div className="pt-8 text-center">
                                <a href="/">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                                </a>
                                <a href="/">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                                </a>
                            </div>
                        </div>

                    </div>
                    <div style={{backgroundImage:`url(${daco})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                        {/* hover effect */}
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold text-white tracking-wider">
      React js Application
                            </span>
                            <div className="pt-8 text-center">
                                <a href="/">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                                </a>
                                <a href="/">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                                </a>
                            </div>
                        </div>

                    </div>
                    {/* grid item */}
                    <div style={{backgroundImage:`url(${real})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                        {/* hover effect */}
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold text-white tracking-wider">
      React js Application
                            </span>
                            <div className="pt-8 text-center">
                                <a href="/">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                                </a>
                                <a href="/">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                                </a>
                            </div>
                        </div>

                    </div>
                    {/* grid item */}
                    <div style={{backgroundImage:`url(${health})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                        {/* hover effect */}
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold text-white tracking-wider">
      React js Application
                            </span>
                            <div className="pt-8 text-center">
                                <a href="/">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                                </a>
                                <a href="/">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                                </a>
                            </div>
                        </div>

                    </div>
                    {/* grid item */}
                    <div style={{backgroundImage:`url(${Good})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                        {/* hover effect */}
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold text-white tracking-wider">
      React js Application
                            </span>
                            <div className="pt-8 text-center">
                                <a href="/">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                                </a>
                                <a href="/">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                                </a>
                            </div>
                        </div>

                    </div>
                    {/* grid item */}
                    <div style={{backgroundImage:`url(${worked})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                        {/* hover effect */}
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold text-white tracking-wider">
      React js Application
                            </span>
                            <div className="pt-8 text-center">
                                <a href="/">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                                </a>
                                <a href="/">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work;