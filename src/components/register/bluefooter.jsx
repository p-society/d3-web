// import curlArrow from '../../assets/Vector 17.svg'
import techSoc from '../../assets/Group 44810.svg'
import tarsSoc from '../../assets/Group 44818.svg'
import useRouteAnimation from '../../utils/animatie'

function Bluefooter() {
  const isLoaded = useRouteAnimation()
  // const buttons = ['Home', 'Events', 'Merch', 'Register']

  return (
    <div
      className={`relative transition-all duration-700 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
      style={{ transitionDelay: '400ms' }}
    >
      {/* <img
          src={hourGlass}
          alt="hourGlassimg"
          className="absolute -top-[45px] -left-[3px] w-[60px] h-[60px] z-20"
        /> */}

      <div className="absolute inset-0 max-w-4xl bg-black rounded-[37.5px] "></div>
      <div className="relative z-10 bg-white rounded-[37.5px] border-[3px] border-black p-6 w-full max-w-4xl flex flex-col items-center  md:space-y-2 transform -translate-x-4 -translate-y-4 md:pl-10 md:pr-10 ">
        {/* <img
            src={curlArrow}
            alt="arrow"
            className="absolute top-0 right-[15px] h-[120px] w-[120px]"
          /> */}
        <div className="relative h-[8px] w-full bg-[#4271FF] rounded-full"></div>
        {/* <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-5 w-auto p-2 font-aclinica ">
            {buttons.map(buttonText => (
              <div key={buttonText} className="relative">
                <div className="absolute top-[4px] left-[3px] w-full h-full bg-black rounded-full "></div>

                <button
                  className="relative w-full md:w-auto text-center px-[30px] py-[7px] 
                         border-[1.5px] border-black rounded-full font-bold font-aclinica
                         bg-[#F7FFD9] text-lg 
                         transition-all duration-250 text-black hover:bg-[#D8FF40]   hover:scale-95"
                >
                  {buttonText}
                </button>
              </div>
            ))}
          </div> */}

        <div className="flex items-center justify-center">
          <img src={techSoc} alt="TechSociety Logo" className="w-[90px] h-[90px]" />
          <img src={tarsSoc} alt="TARS Logo" className="w-[90px] h-[90px]" />
        </div>

        {/* <div className="flex flex-wrap justify-center   text-md text-black pl-5 pr-5 divide-x divide-black">
            <a href="#" className="font-poppins text-black pr-4 pl-1  ">
              <RiFacebookBoxLine className="text-black text-lg inline-block w-5 h-7 mr-1 fill-current w-5 h-5 sm:w-6 sm:h-6 mr-2" />
              Facebook
            </a>

            <a href="#" className="font-poppins text-black  pr-4 pl-1">
              <IoLogoInstagram className="text-black text-lg inline-block w-5 h-7 mr-1 fill-current w-5 h-5 sm:w-6 sm:h-6 mr-2" />
              Instagram
            </a>

            <a href="#" className="font-poppins text-black  pr-4 pl-1">
              <FaLinkedin className="text-black text-lg inline-block w-5 h-7 mr-1 fill-current w-5 h-5 sm:w-6 sm:h-6 mr-2" />
              LinkedIn
            </a>

            <a href="#" className="font-poppins text-black  pr-4 pl-1">
              <FaXTwitter className="text-black text-lg inline-block w-5 h-7 mr-1 fill-current w-5 h-5 sm:w-6 sm:h-6 mr-2" />
              Twitter
            </a>
          </div> */}
        <div className="flex flex-col md:text-base items-center text-center text-sm md:text-base text-black space-y-1 break-words">
          <p className="pb-2 pt-2 ">IIIT Bhubaneswar, Gothapatna, Bhubaneswar, Odisha, 751003</p>

          <p>Email: techsociety@iiitbh.ac.in</p>
          <p>Phone: +91-1234567890</p>
        </div>

        <p className="text-sm md:text-base text-black break-words pt-3">
          © 2025 IIIT Bhubaneswar Tech Society. All Rights Reserved.
        </p>
      </div>
      {/* <img src={circle} alt="circle" className="absolute bottom-20 right-3  w-5 h-5 z-20" />
        <img src={circle} alt="circle" className="absolute -bottom-3 -right-3  w-22 h-22 z-20" />
        <img src={circle} alt="circle" className="absolute bottom- right-17  w-8 h-8 z-20" /> */}
    </div>
  )
}

export default Bluefooter
