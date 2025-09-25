import React from 'react';

export default function App() {
  return (
    <div className="flex items-center justify-center p-4 font-sans">
      
      <div className="bg-white w-full max-w-7xl p-8 md:p-12 rounded-[50px] shadow-[8px_8px_0px_#000000] border-[3px] border-black">
        
        <form className="flex flex-col gap-6">
          
          <input
            type="text"
            placeholder="<Subject>"
            className="w-full bg-[#FF8C34] text-black placeholder:text-black font-bold text-lg border-[3px] border-black rounded-[37.5px] p-6 focus:outline-none focus:ring-4 focus:ring-orange-300 transition-all duration-300"
          />

          <textarea
            placeholder="<Write Your Message here!>"
            rows="8"
            className="w-full bg-[#FF8C34] text-black placeholder:text-black font-bold text-lg border-[3px] border-black rounded-[37.5px] p-6 focus:outline-none focus:ring-4 focus:ring-orange-300 transition-all duration-300 resize-none"
          ></textarea>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="<Your_Name>"
              className="w-full bg-[#FF8C34] text-black placeholder:text-black font-bold text-lg border-[3px] border-black rounded-[37.5px] p-6 focus:outline-none focus:ring-4 focus:ring-orange-300 transition-all duration-300"
            />

            <input
              type="email"
              placeholder="<Your_email>"
              className="w-full bg-[#FF8C34] text-black placeholder:text-black font-bold text-lg border-[3px] border-black rounded-[37.5px] p-6 focus:outline-none focus:ring-4 focus:ring-orange-300 transition-all duration-300"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

