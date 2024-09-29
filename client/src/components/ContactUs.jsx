import React, { useState } from 'react'
import bgImage from '../assets/minecraft-shader-wallpaper-preview 1.png'
import upperRectangle from '../assets/Rectangle 97.png'
import lowerRectangle from '../assets/contact_us banner.png'

const ContactUs = () => {
    const [subject, setsubject] = useState("");
    const [message, setmessage] = useState("");
    const [name, setname] = useState("");
    const [email, setemail] = useState("");

    const handlesubmit = (e) => {
        e.preventDefault();
        const formData = {
            subject, name, email, message
        }
        console.table(formData)
    }
    const backgroundStyle = {
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        width: '100vw',
        overflow: 'hidden',
        position: 'absolute',
        top: 0,
        left: 0,
    };

    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        marginTop: '-150px',
        padding: '0 20px'
    };

    const centeredDivStyle = {
        width: '90%',
        maxWidth: '600px',
        height: '40%',
        zIndex: 1,
        margin: '0 auto'
    };

    const imgStyle = {
        maxWidth: '100%',
        height: 'auto',
        display: 'block',
        margin: '0 auto',
        marginTop: '20px'
    };
    const inputstyle = {
        background: 'none',
        border: 'none',
        width: '100%',
        fontSize: '16px',
    }

    return (
        <div style={backgroundStyle}>
            <div style={containerStyle}>
                <div style={centeredDivStyle}>
                    <img src={upperRectangle} style={imgStyle} />
                    <p style={{ fontFamily: 'MINECRAFTER', fontSize: '65px', marginTop: '0px' }}>
                        CONTACT US
                    </p>
                    <form onSubmit={handlesubmit}>
                        <div style={{ backgroundImage: `url(${lowerRectangle})`, height: '50px', display: 'flex', flexWrap: 'wrap', flexDirection: 'row', gap: '20px', marginTop: '-40px' }}>
                            <p style={{ fontFamily: 'MINECRAFTER', fontSize: '23px', paddingLeft: '20px', marginTop: '7px' }}>SUBJECT</p>
                            <input required value={subject} type='text' style={{ background: 'none', border: 'none' }} onChange={(e) => setsubject(e.target.value)} />
                        </div>
                        <div style={{
                            backgroundImage: `url(${lowerRectangle})`,
                            height: 'auto',
                            marginTop: '20px',
                            display: 'flex',

                            flexDirection: 'column',
                            gap: '20px',
                            overflow: 'hidden',
                            boxSizing: 'border-box'
                        }}>

                            <p
                                className='message-label'
                                style={{
                                    fontFamily: 'MINECRAFTER',
                                    marginLeft: '-185px',
                                    marginTop: '7px',
                                    marginBottom: '0px'
                                }}
                            >
                                WRITE YOUR MESSAGE...
                            </p>
                            <input required value={message} type='text' style={{ background: 'none', border: 'none' }} onChange={(e) => setmessage(e.target.value)} />
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', marginTop: '20px' }}>
                            <div style={{ backgroundImage: `url(${lowerRectangle})`, width: '50%', height: '70px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                <p style={{ fontFamily: 'MINECRAFTER', fontSize: '23px', margin: '0' }}>
                                    YOUR NAME
                                </p>
                                <input required value={name} type='text' style={{ border: 'none', background: 'none' }} onChange={(e) => setname(e.target.value)} />
                            </div>
                            <div style={{ backgroundImage: `url(${lowerRectangle})`, width: '50%', height: '70px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                <p style={{ fontFamily: 'MINECRAFTER', fontSize: '23px', margin: '0' }}>
                                    YOUR EMAIL
                                </p>
                                <input required value={email} type='email' style={{ border: 'none', background: 'none' }} onChange={(e) => setemail(e.target.value)} />
                            </div>
                        </div>
                        <button type='submit'>SEND</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactUs