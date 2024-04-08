import logo from "../assets/logo.jpg";
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useState } from "react";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(!isOpen);
  return (
    <div className="fixd w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={logo} alt="logo images" style={{ width: "80px" }} />
      </div>
      {/* menu */}

      <ul className=" hidden md:flex">
        <li>Home</li>
        <li>About</li>
        <li>Experience</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>
      {/* hamberg */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!isOpen ? <FaBars /> : <FaTimes />}
      </div>
      {/* mobile menu */}
      <ul
        className={
          !isOpen
            ? " hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-5 text-2xl">Home</li>
        <li className="py-5 text-2xl">About</li>
        <li className="py-5 text-2xl">Experience</li>
        <li className="py-5 text-2xl">Work</li>
        <li className="py-5 text-2xl">Contact</li>
      </ul>
      {/* social icons */}
      <div className=" hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a className="flex justify-between items-center w-full text-gray-300" href="">
              Linkedin
              <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a className="flex justify-between items-center w-full text-gray-300" href="">
              GitHub
              <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a className="flex justify-between items-center w-full text-gray-300" href="">
               Resume
               <BsFillPersonLinesFill size={30}/>
               </a>
               </li>
               <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a className="flex justify-between items-center w-full text-gray-300" href="">
              Mail
              <HiOutlineMail size={30} />
            </a>
          </li>

        </ul>
      </div>
    </div>
  );
}

export default Navbar;
