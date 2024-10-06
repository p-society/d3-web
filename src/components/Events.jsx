import React, {useRef,useEffect, useState} from 'react';
import  '../assets/css/events.css'; // Import the CSS file for styling

const EventCard = ({ title, image, description, prize_pool, coordinators, date}) => {
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
                }, 50);
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
                <div className='event-header'>
                <h3 className='event-title' >{title}</h3>
                <span className='prize_pool'>{prize_pool}</span> 
                </div>
                <p className='event-description' ref={descriptionRef}>{description}
                </p> 
                <div className='event-footer'>
        <span className='coordinators'><b>{coordinators}</b></span>
        <span className='date'><b>{date}</b></span>
            </div>
            </div>
        </div>
    );
};

export default EventCard;

