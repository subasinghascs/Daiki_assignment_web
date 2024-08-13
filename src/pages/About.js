import React from 'react';
import './About.css'
import backgroundImage from '../assets/premium_photo-1661902398022-762e88ff3f82.jpeg';
import person0Image from "../assets/nakamura-2.jpeg"
import person1Image from '../assets/mine-sa.jpeg';
import person2Image from '../assets/ran.jpg';
import person3Image from '../assets/sada.jpeg';
import person4Image from '../assets/cmb-staff.png';
import person5Image from '../assets/mr-saman.jpg';
import person6Image from '../assets/cmb-staff_1.png';
import person7Image from '../assets/cmb-staff_2.png';
import image1 from '../assets/cmb-staff_3.png'

const teamMembers = [
    {
        name: "Yosuke Nakamura",
        role: "Managing Director",
        description: "Daiki Lanka (PVT) Ltd.",
        image: person0Image
    },
    {
        name: "Soichiro Mine",
        role: "Manager",
        description: "Daiki Lanka (PVT) Ltd.",
        image: person1Image
    },
    {
        name: "Ranil Nimalasena",
        role: "Manager",
        description: "Daiki Lanka (PVT) Ltd.",
        image: person2Image
    },
    {
        name: "M.A.L. Sandaruwan",
        role: "Accountant",
        description: "Daiki Lanka (PVT) Ltd.",
        image: person3Image
    },
    {
        name: "A.A. Sirisena",
        role: "Financial Adviser",
        description: "Daiki Lanka (PVT) Ltd.",
        image: person4Image
    },
    {
        name: "Saman De Silva",
        role: "Legal Adviser",
        description: "Daiki Lanka (PVT) Ltd.",
        image: person5Image
    },
    {
        name: "Akila Dulanjali",
        role: "Japanese Lecturer",
        description: "Daiki Lanka (PVT) Ltd.",
        image: person6Image
    },
    {
        name: "M.S.A. Madhushani",
        role: "Japanese Lecturer",
        description: "Daiki Lanka (PVT) Ltd.",
        image: person7Image
    }

];

const About = () => {
    return (
        <div>
            <div className="background-image" style={{ backgroundImage: `url(${backgroundImage})` }}>
                <h1 className='contact_1'>About Us</h1>
            </div>
            <div className='intro-section'>
            <h1>We promise you the BEST</h1>
            <p>Daiki Lanka is an established company in Sri Lanka since 2010. We already get employed 140 Sri Lankans (100 trainees and 40 engineers) in Japan. We are the one and only consulting service in Sri Lanka who own Japanese Language School in Japan.</p>
            <div className='.topic1'>
                <h1>Our Team</h1>
                </div>
            </div>
            <div>
                
                <div className="team-section">
                    
                    {teamMembers.map((member, index) => (
                        <div className="team-member" key={index}>
                            <img src={member.image} alt={member.name} className="team-member-image" />
                            <h2>{member.name}</h2>
                            <h3>{member.role}</h3>
                            <p>{member.description}</p>
                        </div>
                    ))}
                </div>
                <div className='intro-section'>
                <h2>Daiki Japanese Language School Tokyo Staff</h2>
                <p>Daiki Japanese Language School Tokyo</p>
                        
                    </div>
                <div className='image-container'>
                    
                <img src={image1} alt="Daiki Staff" className="content-image" />
                
            </div>
            </div>
        </div>
    );
};

export default About;
