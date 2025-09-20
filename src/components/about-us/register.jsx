import React from 'react'
import '../../Register.css'

export default function Register() {
  const registerText = (
    <span className="flex items-center mr-10" style={{ fontFamily: 'AlfaSlabOne-Regular' }}>
      REGISTER NOW &nbsp; &nbsp;
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="44"
        height="42"
        viewBox="0 0 44 42"
        fill="none"
      >
        <path
          d="M41.0037 19.3619L2.78556 22.7055M20.1081 2.67192L23.6811 39.3954M11.7898 32.7199L31.9994 9.34743M34.0837 30.7695L9.70552 11.2979"
          stroke="black"
          strokeWidth="4.60714"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      &nbsp; &nbsp;
    </span>
  )

  return (
    <div className="bg-gray-900 py-3 overflow-hidden w-screen Router-box">
      <div className="marquee whitespace-nowrap flex items-center text-white text-xl font-bold Rinner-box">
        {/* First set of 3 */}
        <React.Fragment key="set1">
          {registerText}
          {registerText}
          {registerText}
        </React.Fragment>
        {/* Second set of 3 - exact duplicate for seamless loop */}
        <React.Fragment key="set2">
          {registerText}
          {registerText}
          {registerText}
        </React.Fragment>
      </div>
    </div>
  )
}
