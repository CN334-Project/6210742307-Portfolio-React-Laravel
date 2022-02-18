import './AboutMePage.css';
import React, { useState, useEffect } from 'react';

function AboutMePage() {

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



    return (
        <div className="AboutMeSectionContainer">
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
                        {user.AboutMe}
                    </p>
                ))}
            </div>
        </div>
    );
}

export default AboutMePage;
