import React from 'react'

const Buttons = ({text,onClick}) => {
  return (
    <button
    onClick={onClick}
    className="w-fit p-2 h-fit bg-[#C6F806] rounded-[24px] border border-black font-bold cursor-pointer">
        <div className="text-[30.48px] lowercase break-words font-cascadia">
        {text}
      </div>
    </button>
  )
}

export default Buttons