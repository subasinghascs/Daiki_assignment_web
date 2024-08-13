import React, { useState, useEffect } from 'react';
import './Services.css';
import backgroundImage from '../assets/premium_photo-1661902398022-762e88ff3f82.jpeg';
import Image1 from '../assets/daiki-jps-school_orig.png';
import Image2 from '../assets/web9.jpg';
import Image3 from '../assets/software-image_1.jpg';
import Image4 from '../assets/car-80-4.jpg';
import EN1 from '../assets/en.jpg';
import EN2 from '../assets/en1.jpg';
import EN3 from '../assets/en2.jpg';

import OF1 from '../assets/of1.jpg';
import OF2 from '../assets/of2.jpg';
import OF3 from '../assets/of3.jpg';
import OF4 from '../assets/of4.jpg';
import OF5 from '../assets/of5.png';
import OF6 from '../assets/of6.png';
import OF7 from '../assets/of6.png';
import OF8 from '../assets/of8.jpg';
const images = [OF1, OF2, OF3,OF4,OF5,OF6,OF7,OF8];

const Services = () => {
    const [index, setIndex] = useState(0);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 2000); 

        return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, [images.length]);

    return (
        <div>
            <div className="background-image" style={{ backgroundImage: `url(${backgroundImage})` }}>
                <h1 className='contact_1'>Services</h1>
            </div>
            
            <div className='content_about'>
                <div className='image-container_about'>
                    <img src={Image4} alt="Daiki Staff" className="content-image_about" />
                    <img src={Image3} alt="Daiki Staff" className="content-image_about" />
                </div>
                <div className='text-container_about'>
                    <h2>Consulting to build your ​career​ in​ Japan</h2>
                    <p className='content-text_about'>
                        We are representing Daiki Group of Japan in Sri Lanka. Being a bridge between Sri Lanka and Japan we found number of similarities and differences in both countries. As a result of that we were able to create opportunities for Sri Lankans who willing to learn/work in Japan.
                    </p>
                </div>
            </div>

            <div className='content_about_reverse'>
            <div className='image-container_about'>
                    <img src={Image1} alt="Daiki Staff" className="content-image_about1" />
                    <img src={Image2} alt="Daiki Staff" className="content-image_about1" />
                </div>
                <div className='text-container_about'>
                    <h2>Daiki Japanese Language School Tokyo</h2>
                    <p className='content-text_about'>
                    Our school aims to educate foreign students wishing to further their aspirations at universities, collages and professional training schools in Japan with a focus on Japanese Language, Japanese culture. In addition, school provides career guidance according to each student's goals.</p>
                    <div>
                            <h3>​Outputs</h3>
                            <ul>
                                <li>Qualify to enter institutions of higher education such as universities, colleges and professional training colleges.</li>
                                <li>Success in Japanese Language Proficiency Tests (JLPT/NAT)</li>
                                <li>(18-28) Success in qualification tests</li>
                                <li>(18-28) World-class human resources development for employment purpose</li>
                            </ul>
                            
                        </div>
            
                    
                </div>
                
            </div>

            <div className='content_about'>
                <div className='image-container_about'>
                    <img src={EN3} alt="Daiki Staff" className="content-image_about" />
                    <img src={EN2} alt="Daiki Staff" className="content-image_about" />
                    <img src={EN1} alt="Daiki Staff" className="content-image_about" />
                </div>
                <div className='text-container_about'>
                    <h2>Daiki Engineering Co. Ltd.</h2>
                    <p className='content-text_about'>
                    Provides the latest technologies to various manufactures including Automobiles, Ships, Air Crafts and all IT services
                    </p>
                    <p>Head Office : Hiroshima</p>
                    <p>Branches : Tokyo, Tokai, Osaka, Tohoku, Nagasaki, Fukuoka</p>
                    <p>Clients : Toyota, Mitsubishi, Hitachi, IHI, Kawasaki, Mazda, etc</p>
                </div>
               
            </div>
            <div>
                    <h2 className='official-details'>With Officials</h2>
                    <div
                className="home-container_1"
                style={{ backgroundImage: `url(${images[index]})` }}
            >
                
            </div>
                </div>
        </div>
    );
};

export default Services;
