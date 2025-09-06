let arr = ["HOME", "EVENTS", "MERCH", "CONTACT US"];

export default function Navbar() {
  return (
    <div >
      <div className="w-[717px]  h-[56px] bg-[#ffeabb]   absolute top-[10px] left-[361px] flex justify-center items-center gap-4 py-2 rounded-2xl border border-[#F06]">
        {arr.map((element, index) => (
          <div
            key={index}
            className="text-[#E30F70] font-cascadia text-xl px-10 py-1 
                       hover:text-[#FFEABB] hover:bg-[#F06] 
                       rounded-md cursor-pointer transition m-1 "
          >
            {element}
          </div>
        ))}
      </div>
    </div>
  );
}

