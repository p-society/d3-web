import React from 'react';
import Arrow from '../../assets/bluearrow.svg'
import Circle from '../../assets/circle.svg'
import Sparkle from '../../assets/Sparkles1.svg'

// A component for the header section of the contact page
const ContactHeader = () => {
    return (
        <div className="relative w-full flex flex-col items-start justify-center pt-2 pb-1 px-4">
            {/* Decorative elements */}
            {/* <div className="absolute top-4 w-full flex justify-center items-center gap-5">
                <div className="w-3 h-3 bg-orange-400 border border-black rounded-full"></div>
                <div className="w-3 h-3 bg-orange-400 border border-black rounded-full"></div>
                <div className="w-3 h-3 bg-orange-400 border border-black rounded-full"></div>
            </div> */}

            {/* Circle at top-right - hidden on mobile */}
            <img 
                src={Circle} 
                alt="Decorative Circle" 
                className="absolute top-12 right-18 w-16 sm:w-18 md:w-28 hidden sm:block" 
            />
            
            {/* Sparkle at top-right - hidden on mobile */}
            <img 
                src={Sparkle} 
                alt="" 
                className="absolute top-30 right-24 w-16 sm:w-18 md:w-24 hidden sm:block" 
            />

            <div className="flex justify-start p-4 relative">
                {/* The main heading text */}
                <div className="text-left space-y-2 relative">
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-black" style={{ fontFamily: 'AlfaSlabOne-Regular' }}>
                        Want To Talk To Us ?
                    </h1>
                    <div className="flex justify-start items-center gap-2 sm:gap-4 flex-wrap">
                        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl bg-black text-[#D8FF40] rounded-full px-6 py-1" style={{ fontFamily: 'Bowlby One SC' }}>
                            CONTACT
                        </h1>
                        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-black" style={{ fontFamily: 'AlfaSlabOne-Regular' }}>
                            Here
                        </h1>
                    </div>

                    {/* Arrow pointing to subject input - hidden on mobile */}
                    <img 
                        src={Arrow} 
                        alt="Arrow" 
                        className="absolute top-20 left-5 w-12 sm:w-10 md:w-14 rotate-330 hidden sm:block" 
                    />
                </div>
            </div>
        </div>
    );
};

export default ContactHeader;