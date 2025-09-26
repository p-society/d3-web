import React, { useEffect, useRef } from 'react'

const StaticEffect = ({ width = 300, height = 200, className = '' }) => {
  const canvasRef = useRef(null)
  const animationRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    canvas.width = width
    canvas.height = height

    const generateStatic = () => {
      const w = canvas.width
      const h = canvas.height
      const imageData = ctx.createImageData(w, h)
      const data = new Uint32Array(imageData.data.buffer)

      for (let i = 0; i < data.length; i++) {
        // Generate random grayscale noise with alpha
        const intensity = Math.random() * 255
        data[i] =
          (((255 * Math.random()) | 0) << 24) | (intensity << 16) | (intensity << 8) | intensity
      }

      ctx.putImageData(imageData, 0, 0)
    }

    const animate = () => {
      generateStatic()
      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [width, height])

  return (
    <canvas
      ref={canvasRef}
      className={`static-effect ${className}`}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        opacity: 1,
        filter: 'blur(0.5px)',
        mixBlendMode: 'multiply',
        transform: 'translateX(-20px)',
      }}
    />
  )
}

export default StaticEffect
