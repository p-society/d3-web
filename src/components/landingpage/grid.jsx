import React from 'react'

const Grid = ({ rows = 10, cols = 13, cellSize = '1.2rem', isLoaded }) => {
  return (
    <div
      className={`absolute inset-0 flex top-[52vh] h-1/20 items-center pointer-events-none z-0 transition-all duration-700 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
      style={{ transform: 'translateX(19rem)', transitionDelay: '400ms' }}
    >
      <div
        className="grid gap-0"
        style={{
          gridTemplateColumns: `repeat(${cols}, ${cellSize})`,
          gridTemplateRows: `repeat(${rows}, ${cellSize})`,
          '--cell-size-phone': '1.2rem',
          '--cell-size-sm': '1.5rem',
          '--cell-size-md': '2.0rem',
          '--cell-size-lg': '3.0rem',
          '--cell-size-default': cellSize,
          display: 'none', // Hide by default
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
                width: 'var(--cell-size-default)',
                height: 'var(--cell-size-default)',
              }}
            />
          )
        })}
      </div>

      {/* Responsive CSS for phone, sm, md, and lg viewports */}
      <style jsx>{`
        @media (max-width: 374px) {
          .grid {
            display: none !important;
          }
        }
        @media (min-width: 375px) and (max-width: 639px) {
          .grid {
            display: none !important;
          }
        }
        @media (min-width: 640px) and (max-width: 767px) {
          .grid {
            display: none !important;
          }
          .grid > div {
            width: 1.5rem !important;
            height: 1.5rem !important;
          }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .grid {
            display: none !important;
          }
        }
        @media (min-width: 1024px) {
          .grid {
            grid-template-columns: repeat(${cols}, 3rem) !important;
            grid-template-rows: repeat(${rows}, 3rem) !important;
            display: grid !important;
          }
          .grid > div {
            width: 3rem !important;
            height: 3rem !important;
          }
        }
      `}</style>
    </div>
  )
}

export default Grid
