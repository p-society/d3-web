// src/components/EventCard.jsx
import React, {useRef,useEffect, useState} from 'react';
import './Events.css'; // Import the CSS file for styling

const EventCard = ({ title, image, description }) => {
     const descriptionRef = useRef(null);
    const [isHovering, setIsHovering] = useState(false);
    const scrollInterval = useRef(null);

    useEffect(() => {
        if (isHovering) {
            console.log('start scrolling');
            startScrolling();
        } else {
            console.log('stop scrolling');
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
                        scrollTop = 0;
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
        if (descriptionRef.current) {
            descriptionRef.current.scrollTop = 0;
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

