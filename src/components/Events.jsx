import React, {useRef,useEffect, useState} from 'react';
import  '../assets/css/events.css'; // Import the CSS file for styling

const EventCard = ({ title, image, description }) => {
    const descriptionRef = useRef(null);
    const [isHovering, setIsHovering] = useState(false);
    const scrollInterval = useRef(null);

    useEffect(() => {
        if (isHovering) {
            startScrolling();
        } else {
            stopScrolling();
        }

        return () => stopScrolling(); // Cleanup on component unmount
    }, [isHovering]);

    const startScrolling = () => {
        if (descriptionRef.current) {
            const element = descriptionRef.current;
            const scrollHeight = element.scrollHeight;
            const clientHeight = element.clientHeight;

            if (scrollHeight > clientHeight) {
                let scrollTop = 0;
                scrollInterval.current = setInterval(() => {
                    scrollTop += 1;
                    if (scrollTop >= scrollHeight - clientHeight) {
                        setIsHovering(false)
                    }
                    element.scrollTop = scrollTop;
                }, 30);
            }
        }
    };

    const stopScrolling = () => {
        if (scrollInterval.current) {
            clearInterval(scrollInterval.current);
            scrollInterval.current = null;
        }
    };
    return (
        <div className="event-card" 
            onMouseEnter={()=>setIsHovering(true)}
            onMouseLeave={()=>setIsHovering(false)}
        >
            <img src={image} alt={title}  className="event-image" />
            <div className="event-content">
                <h3 className='event-title' >{title}</h3>
                <p className='event-description' ref={descriptionRef}>{description}</p>
            </div>
        </div>
    );
};

export default EventCard;

