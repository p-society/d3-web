

import { RiFacebookBoxLine } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
function Bluefooter() {
  

  const buttons = ["Home", "Events", "Merch", "Register" ];

  return (
    <div className="bg-[#4271FF] min-h-screen relative p-4 md:p-8 flex flex-col items-center justify-center ">
      
      <div className="relative ">
        <img src="\src\assets\Group.svg" alt="star" className="absolute -top-11 -left-2 w-15 h-15 z-20" />
        
        <div className="absolute inset-0 bg-black rounded-[37.5px] "></div>
        <div className="relative z-10 bg-white rounded-[37.5px] border-3 border-black  p-7 w-full max-w-4xl flex flex-col items-center  md:space-y-6 transform -translate-x-4 -translate-y-4 md:pl-40 md:pr-40 ">
          <img src="\src\assets\Vector 17.svg" alt="arrow" className="absolute top-0 right-10 w-26 h-26 z-20" />
          <div className="relative h-2 w-2/5 bg-[#4271FF] rounded-full"></div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-5 w-auto p-2 font-aclinica ">
            {buttons.map((buttonText) => (
              <div key={buttonText} className="relative">
      
              <div className="absolute top-1 left-1 w-full h-full bg-black rounded-full "></div>
              

              <button className="relative w-full md:w-auto text-center px-6 py-2 
                         border-2 border-black rounded-full font-bold font-aclinica
                         bg-[#F7FFD9] text-lg 
                         transition-all duration-300 hover:bg-[#D8FF40]  font-aclinica hover:scale-108">
                {buttonText}
              </button>
              </div>
            ))}

            
          </div>

          
          <div className="flex items-center justify-center">
            <img src="\src\assets\Group 44810.svg" alt="TechSociety Logo" className="w-20 h-20" />
            <img src="\src\assets\Group 44818.svg" alt="TARS Logo" className="w-20 h-20" />
          </div>


          <div className="flex flex-wrap justify-center   text-md text-black pl-10 pr-10">
            <a href="#" className="font-poppins text-black pr-5 pl-1  " >
              <RiFacebookBoxLine className="text-black text-lg inline-block w-5 h-7 mr-1 fill-current w-5 h-5 sm:w-6 sm:h-6 mr-2"/>
              Facebook
            </a>
            <span>|</span>

            <a href="#" className="font-poppins text-black  pr-5 pl-1" >
              <IoLogoInstagram className="text-black text-lg inline-block w-5 h-7 mr-1 fill-current w-5 h-5 sm:w-6 sm:h-6 mr-2"/>
              Instagram
            </a>
            <span>|</span>
            <a href="#" className="font-poppins text-black  pr-5 pl-1" >
              <FaLinkedin className="text-black text-lg inline-block w-5 h-7 mr-1 fill-current w-5 h-5 sm:w-6 sm:h-6 mr-2"/>
              LinkedIn
            </a>

            <span>|</span>
            <a href="#" className="font-poppins text-black  pr-5 pl-1" >
              <FaXTwitter className="text-black text-lg inline-block w-5 h-7 mr-1 fill-current w-5 h-5 sm:w-6 sm:h-6 mr-2"/>
              Twitter
            </a>
            
            
          </div>
          <div className="flex flex-col md:text-base items-center text-center text-sm md:text-base text-black space-y-1 break-words">
            <p className="pb-2 pt-2 ">IIIT Bhubaneswar, Gothapatna, Bhubaneswar, Odisha, 751003</p>
            
            <p>Email: techsociety@iiitbh.ac.in</p>
            <p>Phone: +91-1234567890</p>
          </div>

          
          <p className="text-smmd:text-base text-black break-words pt-3">
            © 2025 IIIT Bhubaneswar Tech Society. All Rights Reserved.
          </p>
          
          
        </div>
        <img src="\src\assets\Ellipse 12.svg" alt="circle" className="absolute bottom-20 right-3  w-5 h-5 z-20" />
        <img src="\src\assets\Ellipse 12.svg" alt="circle" className="absolute -bottom-3 -right-3  w-22 h-22 z-20" />
        <img src="\src\assets\Ellipse 12.svg" alt="circle" className="absolute bottom- right-17  w-8 h-8 z-20" />
        

      
      
      
      </div>
    </div>
  );
}

export default Bluefooter;
