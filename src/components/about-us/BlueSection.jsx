import React from "react";

const BlueSection = ({ children }) => {
  return (
    <div className="w-full h-[1063.5px] flex-shrink-0 rounded-t-[75px] bg-[#36F] relative flex items-center justify-center"    >
      <p className="absolute top-[40px] left-[40px] w-[836.25px] text-[#FFEABB] font-['AlfaSlabOne'] text-[52.5px] font-normal leading-[131%] m-0"      >
        Unleash 
        <br />
        Your Potential. 
      </p>

      <img
        src="/Frame.svg"
        alt="Frame"
        className="absolute top-[20px] right-[20px] w-[150px] h-auto"      />

      {children}
    </div>
  );
};

export default BlueSection;
