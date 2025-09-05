// gitkeep
import React from 'react'

const Buttons = ({text}) => {
  return (
    <button
    className="w-full h-full bg-[#C6F806] rounded-[24px] border border-black font-bold cursor-pointer">
        <div style={{color: 'black', fontSize: 30.48, fontFamily: 'Cascadia Code', fontWeight: '400', textTransform: 'lowercase', wordWrap: 'break-word'}}>{text}</div>
    </button>
  )
}

export default Buttons