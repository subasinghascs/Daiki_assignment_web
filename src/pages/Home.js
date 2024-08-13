import React, { useState, useEffect } from 'react';
import './Home.css';

import image1 from '../assets/premium_photo-1661902398022-762e88ff3f82.jpeg';
import image2 from '../assets/pexel.jpg';
import image3 from '../assets/pexel1.jpeg';
import add1 from '../assets/study-and-work-in-japan_1_orig.jpg'; // Add the path to your student image
import add2 from '../assets/study-and-work-in-japan2_orig.jpg';

const images = [image1, image2, image3];

const Home = () => {
    const [index, setIndex] = useState(0);
    const [showStudentsRequirements, setShowStudentsRequirements] = useState(false);
    const [showEngineersRequirements, setShowEngineersRequirements] = useState(false);

    const texts = [
        "DAIKI JAPANESE STUDIES",
        "BRIDGE TO JAPAN",
        "日本への掛け橋"
    ];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 4000); // Change image and text every 4 seconds

        return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, [images.length]);

    const toggleStudentsRequirements = () => {
        setShowStudentsRequirements(!showStudentsRequirements);
    };

    const toggleEngineersRequirements = () => {
        setShowEngineersRequirements(!showEngineersRequirements);
    };

    return (
        <div>
            <div
                className="home-container"
                style={{ backgroundImage: `url(${images[index]})` }}
            >
                <div className="text-overlay">
                    <h1>{texts[index]}</h1>
                </div>
            </div>
            <div className="intro-section">
                <h1>Welcome to Daiki Japanese Studies</h1>
                <p>
                    Japan is a prosperous country and has the most diverse economy in Asia. The leading Japanese companies are among the largest, most efficiently run, and most well-known firms in the world. Familiar names like Sony, Toshiba, Sanyo, Casio, Canon, Minolta, Honda, Toyota, Mitsubishi, and many others have infiltrated the world market in a variety of sectors.

                    Whether you're in the field of business, engineering, manufacturing, research, economics, or politics, chances are you will be competing with, if not working for, a Japanese entity.
                </p>
            </div>
            <div className='student_engineers'>
                <h1>Daiki Students</h1>
                <p>We have our own Japanese Language School in Tokyo. Daiki Group of Japan established Daiki Japanese Language School Tokyo in Shiba, Minato-ku, Tokyo. We route students to Tokyo who are willing to learn Japanese Language in Daiki Japanese Language School Tokyo in Japan.</p>
                <div>

                    {showStudentsRequirements && (
                        <div>
                            <h2>Requirements</h2>
                            <ul>
                                <li>A/Levels</li>
                                <li>NAT 5 (We conduct classes)</li>
                                <li>(18-28) Age Limit</li>
                            </ul>
                            <button onClick={toggleStudentsRequirements}>See Less</button>
                        </div>
                    )}
                    {!showStudentsRequirements && (
                        <button onClick={toggleStudentsRequirements}>Show Requirements</button>
                    )}
                </div>
            </div>
            <div className='student_engineers'>
                <h1>Daiki Engineers</h1>
                <p>We create opportunities for Engineers who are willing to work in Japan as Daiki Engineers. People who have a B.Sc degree from a recognized university can easily become Daiki Engineers in Japan.</p>
                <div id='requirment'>

                    {showEngineersRequirements && (
                        <div>
                            <h2>Requirements</h2>
                            <ul>
                                <li>B.Sc. Degree</li>
                                <li>NAT 2 (We conduct classes)</li>
                                <li>(18-28) Age Limit</li>
                            </ul>
                            <button onClick={toggleEngineersRequirements}>See Less</button>
                        </div>
                    )}
                    {!showEngineersRequirements && (
                        <button onClick={toggleEngineersRequirements}>Show Requirements</button>
                    )}
                </div>

            </div>
            <div className='image-container'>
                <img src={add1} alt="Daiki Engineers" className="content-image" />
                <img src={add2} alt="Daiki Engineers" className="content-image" />
            </div>
            <div className="intro-section">
                <h2>"We learn from failure, not from success!"
                </h2>
                <h2>~Bram Stoker</h2>
            </div>
            <div className="video-container">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video 1" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/3JZ_D3ELwOQ" title="YouTube video 2" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/tgbNymZ7vqY" title="YouTube video 3" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <div className="intro-section">
                <h2>DAIKI LANKA (PVT) LTD.</h2>
            </div>
        </div>
    );
};

export default Home;
