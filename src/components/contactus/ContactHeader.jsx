import React from 'react';
import Arrow from '../../assets/bluearrow.svg'
import Circle from '../../assets/circle.svg'

// A component for the header section of the contact page
const ContactHeader = () => {
    return (
        <div className="relative w-full flex flex-col items-start justify-center pt-8 pb-4 px-4">
            {/* Decorative elements */}
            {/* <div className="absolute top-4 w-full flex justify-center items-center gap-5">
                <div className="w-3 h-3 bg-orange-400 border border-black rounded-full"></div>
                <div className="w-3 h-3 bg-orange-400 border border-black rounded-full"></div>
                <div className="w-3 h-3 bg-orange-400 border border-black rounded-full"></div>
            </div> */}

            {/* Circle at top-right */}
            <img src={Circle} alt="Decorative Circle" className="absolute top-20 right-15 w-16 sm:w-20 md:w-30" />

            <div className="flex justify-start p-4 relative">
                {/* The main heading text */}
                <div className="text-left space-y-2 relative">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black">
                        Want To Talk To Us ?
                    </h1>
                    <div className="flex justify-start items-center gap-2 sm:gap-4 flex-wrap">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-black text-[#D8FF40] rounded-full px-6 py-1">
                            CONTACT
                        </h1>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black">
                            Here
                        </h1>
                    </div>

                    {/* Arrow pointing to subject input */}
                    <img src={Arrow} alt="Arrow" className="absolute top-32 left-0 w-12 sm:w-14 md:w-22" />
                </div>
            </div>
        </div>
    );
};

export default ContactHeader;
