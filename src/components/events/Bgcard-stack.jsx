import React from 'react'

const BgcardStack = ({
  prop,
  ComponentToRender,
  componentProps,
  isLoaded,
  animationDelay = '800ms',
}) => {
  const left = prop.isright ? '-14.96px' : '14.96px'

  return (
    <div
      className={`relative mx-auto my-8 transition-all duration-700 ease-out w-full max-w-[1211.38px] h-auto md:h-[387.90px] ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
      }`}
      style={{ transitionDelay: animationDelay }}
    >
      {/* Bottom offset layer */}
      <div
        className="absolute bg-lime-300 rounded-[31.78px] border-black w-full h-full"
        style={{
          top: '13.09px',
          left: left,
          borderWidth: '2.80px',
        }}
      />

      {/* Main background card */}
      <div
        className="absolute top-0 left-0 border-2 border-black w-full h-full"
        style={{
          backgroundColor: prop.color,
          borderRadius: '30px 24.43px 24.43px 24.43px',
          borderWidth: '2.44px',
        }}
      />

      {/* Foreground content centered within card */}
      <div className="relative inset-0 flex items-center justify-center p-4 md:px-8">
        <ComponentToRender {...componentProps} />
      </div>
    </div>
  )
}

export default BgcardStack
