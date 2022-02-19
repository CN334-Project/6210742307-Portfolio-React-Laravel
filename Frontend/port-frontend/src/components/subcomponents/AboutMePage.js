import './AboutMePage.css';
import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

function AboutMePage() {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/api/profile")
            .then(res => res.json())
            .then((result) => {
                // console.log(result.Profile)
                setIsLoaded(true);
                setItems(result.Profile);
            },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])



    return (
        
        <div className="AboutMeSectionContainer">
            {isLoaded && (
                <div className="Content">
                    {/* Name */}
                    {items.map(user => (
                        <h1 className="TitleName" key={user.id}>
                            {user.Name}
                        </h1>
                    ))}

                    {/* About Me */}
                    {items.map(user => (
                        <p className="AboutMe" key={user.id}>
                            <h5>
                                Software Engineer
                            </h5>
                            {user.AboutMe}
                        </p>
                    ))}

                    <button className="ResumeBtn">Download Resume</button>

                    <img className="image1" src={require('../../images/image1.jpg')} />
                </div>
            )} {!isLoaded && (
                <Box sx={{ width: '100%' }}>
                    <LinearProgress />
                </Box>
            )}
        </div>
    );
}

export default AboutMePage;
