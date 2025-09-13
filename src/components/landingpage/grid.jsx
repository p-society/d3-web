import React from 'react'

const Grid = ({ rows = 10, cols = 13, cellSize = '5.0rem' }) => {
  return (
    <div className="absolute inset-0 flex top-[52vh] h-1/20 left-70 items-center pointer-events-none z-0 ">
      <div
        className="grid gap-0"
        style={{
          gridTemplateColumns: `repeat(${cols}, ${cellSize})`,
          gridTemplateRows: `repeat(${rows}, ${cellSize})`,
        }}
      >
        {Array.from({ length: rows * cols }, (_, index) => {
          const row = Math.floor(index / cols)
          const col = index % cols
          const borderTop = row > 0 ? 'border-t' : ''
          const borderLeft = col > 0 ? 'border-l' : ''

          return <div key={index} className={`border-black ${borderTop} ${borderLeft}`} />
        })}
      </div>
    </div>
  )
}

export default Grid
