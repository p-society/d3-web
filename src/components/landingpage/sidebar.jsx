// gitkeep

const colorsData = [
  { class: 'bg-main-pink' },
  { class: 'bg-main-neon' },
  { class: 'bg-main-orange' },
]

const ColorBlock = ({ colorClass, children }) => {
  return <div className={`h-[500px] w-[47px] ${colorClass} border-2`}>{children}</div>
}

const SidebarColors = () => {
  return (
    <div className="flex">
      {colorsData.map((color, index) => (
        <ColorBlock key={index} colorClass={color.class}></ColorBlock>
      ))}
    </div>
  )
}

export default SidebarColors
