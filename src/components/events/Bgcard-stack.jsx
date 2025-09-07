import React from 'react'

const BgcardStack = ({ prop, ComponentToRender, componentProps }) => {
  const left = prop.isright ? -14.96 : 14.96

  return (
    <div className="relative mx-auto my-8" style={{ width: '1211.38px', height: '387.90px' }}>
      {/* Bottom offset layer */}
      <div
        className="absolute bg-lime-300 rounded-[31.78px] border-black"
        style={{
          top: '13.09px',
          left: `${left}px`,
          width: '1211.38px',
          height: '387.90px',
          borderWidth: '2.80px',
        }}
      />

      {/* Main background card */}
      <div
        className="absolute top-0 left-0 border-2 border-black"
        style={{
          width: '1211.38px',
          height: '387.90px',
          backgroundColor: prop.color,
          borderTopLeftRadius: '30px',
          borderTopRightRadius: '24.43px',
          borderBottomRightRadius: '24.43px',
          borderBottomLeftRadius: '24.43px',
          borderWidth: '2.44px',
        }}
      />

      {/* Foreground content centered within card */}
      <div className="absolute inset-0 flex items-center justify-center px-8">
        <ComponentToRender {...componentProps} />
      </div>
    </div>
  )
}

export default BgcardStack
