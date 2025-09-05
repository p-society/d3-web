import React from 'react'

const Grid = ({ rows = 10, cols = 10, cellSize = 60 }) => {
  return (
    <div className="grid-container p-4">
      <div
        className="grid"
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${cols}, ${cellSize}px)`,
          gridTemplateRows: `repeat(${rows}, ${cellSize}px)`,
          gap: '0',
          zIndex: -1,
        }}
      >
        {Array.from({ length: rows * cols }, (_, index) => {
          const row = Math.floor(index / cols)
          const col = index % cols
          const borderTop = row > 0 ? 'border-t' : ''
          const borderLeft = col > 0 ? 'border-l' : ''

          return (
            <div
              key={index}
              className={`border-black ${borderTop} ${borderLeft}`}
              style={{
                width: `${cellSize}px`,
                height: `${cellSize}px`,
              }}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Grid
