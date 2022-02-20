import './Home.css';
import React, { useState, useEffect } from 'react';

import AboutMePage from './subcomponents/AboutMePage';
import EducationPage from './subcomponents/EducationPage';
import ProjectExpPage from './subcomponents/ProjectExpPage';
import ContactPage from './subcomponents/ContactPage';


function Home() {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/api/profile")
            .then(res => res.json())
            .then((result) => {
                console.log(result.Profile)
                setIsLoaded(true);
                setItems(result.Profile);
            },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    const scrollContainer = document.querySelector("SectionContainer");

    return (
        <div className="App">

            <nav className="mainNav">
                <ul className="ul_First">
                    <li id="logo">
                        <a href="#">T</a>
                    </li>
                </ul>
                <ul className="ul_Second">
                    <li><a href="#AboutMeSection">About Me</a></li>
                    <li><a href="#EducationSection">Education</a></li>
                    <li><a href="#ProjectExpSection">Project Experience</a></li>
                    <li><a href="#ContactSection">Contact</a></li>
                </ul>
            </nav>

            <div className="SectionContainer">
                <div id="AboutMeSection" className="AboutMeSection">
                    <AboutMePage />
                </div>

                <div id="EducationSection" className="EducationSection">
                    <EducationPage />
                </div>

                <div id="ProjectExpSection" className="ProjectExpSection">
                    <ProjectExpPage />
                </div>

                <div id="ContactSection" className="ContactSection">
                        <ContactPage />
                </div>
            </div>

        </div>
    );
}

export default Home;
