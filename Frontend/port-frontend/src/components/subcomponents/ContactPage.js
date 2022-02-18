import './ContactPage.css';
import React, {useState, useEffect} from 'react';

function ContactPage() {

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
    <div className="ContactSectionContainer">
      {/* {items.map(user => (
        <h1 key={user.id}>
          {user.Name}
        </h1>
      ))} */}
        <h1>AboutMePage</h1>
    </div>
  );
}

export default ContactPage;
