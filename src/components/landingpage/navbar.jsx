
let arr = ["HOME", "EVENTS", "MERCH", "CONTACT US"];

export default function Navbar() {
  return (
    <div className="w-full bg-[#ffeabb] shadow-md">
      <div className="flex justify-center items-center gap-9 py-4">
        {arr.map((element, index) => (
          <div
            key={index}
            className="text-[#E30F70] font-mono text-xl px-6 py-2 
                       hover:text-[#FFEABB] hover:bg-[#F06] 
                       rounded-md cursor-pointer transition"
          >
            {element}
          </div>
        ))}
      </div>
    </div>
  );
}

