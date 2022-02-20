import './ProjectExpPage.css';
import React, { useState, useEffect } from 'react';


function ProjectExpPage() {

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
    <div className="ProjectExpSectionContainer">
      <div className="Content">

        <div id="ProjectExpTitle" className="ProjectExpTitle">
          Project Experience
          <br/>
          <a href="#ProjectTitle" className="ProjectExpSubTitle">
            These are some of the things of what i've done
          </a>
        </div>

        <div id="ProjectContainer" className="ProjectContainer">

          <div id="ProjectTitle" className="ProjectTitle">
            Projects
          </div>

          <div className="CardContainer">

            <div className="CardProject">
              <img className="CardImg1" src={require("../../images/openpy.png")}></img>
              <div className="CardTitle">eKYC Face Recognition Project</div>
              {/* <p>Text</p> */}
            </div>

            <div className="CardProject">
              <img className="CardImg2" src={require("../../images/reactlogo.png")}></img>
              <div className="CardTitle">COVID-19 Web Repot Project</div>
              {/* <p>Text</p> */}
            </div>

            <div className="CardProject">
              <img className="CardImg3" src={require("../../images/reactlogo.png")}></img>
              <div className="CardTitle">Mobile Application Project</div>
              {/* <p>Text</p> */}
            </div>

          </div>

          <div className="BackBtn">
            <a href="#ProjectExpTitle">Back Up</a>
          </div>
            
        </div>

      </div>
    </div>
  );
}

export default ProjectExpPage;
