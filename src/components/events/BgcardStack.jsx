//gitkeep
/* eslint-disable */
import React from 'react'

const BgcardStack = ({ prop, ComponentToRender, componentProps }) => {
  const left = prop.isright ? -14.96 : 14.96

  return (
    <div>
      <div className="w-full h-full relative">
        <div
          className="absolute top-[13.09px] bg-lime-300 rounded-[31.78px] border-black w-[1211.38px] h-[387.90px] "
          style={{
            left: `${left}px`,
            borderWidth: '2.80px',
          }}
        />
        <div
          className="absolute top-0 left-0 border-2 border-black w-[1211.38px] h-[387.90px]"
          style={{
            backgroundColor: prop.color,
            borderTopLeftRadius: '30px',
            borderTopRightRadius: '24.43px',
            borderBottomRightRadius: '24.43px',
            borderBottomLeftRadius: '24.43px',
            borderWidth: '2.44px',
          }}
        />
      </div>
      <div className="relative">
        <ComponentToRender {...componentProps} />
      </div>
    </div>
  )
}

export default BgcardStack
