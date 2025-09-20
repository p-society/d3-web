const Sidebar = ({ isLoaded }) => {
  return (
    <div
      className={`absolute left-8 phone:left-12 sm:left-20 top-0 h-1/2 flex items-start justify-start transition-all duration-700 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
      style={{ transitionDelay: '350ms' }}
    >
      {/* Vertical bars - pink, lime/yellow, orange with proper spacing from edge */}
      <div className="flex h-full">
        <div className="w-6 phone:w-8 sm:w-14 h-full bg-[#ff0066] border-2 border-black"></div>
        <div className="w-6 phone:w-8 sm:w-14 h-full bg-[#c6f806] border-2 border-black"></div>
        <div className="w-6 phone:w-8 sm:w-14 h-full bg-[#ff8c34] border-2 border-black"></div>
      </div>
    </div>
  )
}

export default Sidebar
