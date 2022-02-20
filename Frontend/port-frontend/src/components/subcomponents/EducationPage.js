import './EducationPage.css';
import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

function EducationPage() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/education")
      .then(res => res.json())
      .then((result) => {
        console.log(result.Education)
        setIsLoaded(true);
        setItems(result.Education);
      },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])



  return (
    <div className="EducationSectionContainer">

      {isLoaded && (
        <div className="Content">

          <div className="EducationTitle">
            Education
            <p className="orange">Taeshin's</p>
            <p>Education Background</p>
          </div>

          {items.map(user => (
            <div className="SchoolList" key={user.id}>

              <h1 className="SchoolName">
                {user.SName}
              </h1>

              <hr/>

              <div className="SchoolDetails">
                <h3>
                  {user.Faculty}
                </h3>
                <h5>
                  GPA: {user.GPA}
                </h5>
                <p>
                  {user.StartYear} - {user.EndYear}
                </p>
              </div>

            </div>
          ))}

        </div>

      )} {!isLoaded && (
        <Box sx={{ width: '100%' }}>
            <LinearProgress />
        </Box>
    )}

    </div>
  );
}

export default EducationPage;
