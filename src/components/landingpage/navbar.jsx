
let arr = ["HOME", "EVENTS", "MERCH", "CONTACT US"];
export default function Navbar() {
  return (
    <div className="w-[1440px] h-[935.238px] bg-[#ffeabb] flex justify-center items-center">
      <div className="inline-flex p-2 items-center gap-9 rounded-2xl border border-[#F06]">
        {arr.map((element, index) =>
         
            <div
              key={index}
              className="text-[#E30F70] font-Cascadia_Code text-[30.476px] 
                         flex h-10 
                         px-6 justify-center items-center gap-[10px] hover:text-[#FFEABB] hover:bg-[#F06] hover:rounded-[8px] cursor-pointer"
            >
              {element}
            </div>
          )
        }
      </div>
    </div>
  );
}
