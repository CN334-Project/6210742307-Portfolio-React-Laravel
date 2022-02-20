import './ContactPage.css';
import React, {useState, useEffect} from 'react';

function ContactPage() {

    // const [error, setError] = useState(null);
    // const [isLoaded, setIsLoaded] = useState(false);
    // const [items, setItems] = useState([]);

    // useEffect(() => {
    //     fetch("http://localhost:8000/api/profile")
    //         .then(res => res.json())
    //         .then((result) => {
    //                 console.log(result.Profile)
    //                 setIsLoaded(true);
    //                 setItems(result.Profile);
    //             },
    //             (error) => {
    //                 setIsLoaded(true);
    //                 setError(error);
    //             }
    //         )
    // }, [])

    

  return (
    <div className="ContactSectionContainer">
      <div className="Content">
        <div className="ContactTitle">
          CONTACT ME
        </div>

        <div className="RightContent">

          <div className="Header">Address</div>
          <p>5/13 Ladprao Bangkok, 10310</p>

          <div className="Header">Phone</div>
          <p>099-083-2110</p>

          <div className="Header">E-mail</div>
          <p>taeshin.roc@gmail.com</p>

          <div className="Header">Socials</div>
          <ul className='socials'>
                  <li><a href='https://www.instagram.com/taeshinnn/'><img src='https://cdn.discordapp.com/attachments/937272505993928765/937272969292558356/5296499_fb_facebook_facebook_logo_icon.png'></img></a></li>
                  <li><a href='https://www.instagram.com/taeshinnn/'><img src='https://cdn.discordapp.com/attachments/937272505993928765/937272969758117909/5296514_bird_tweet_twitter_twitter_logo_icon.png'></img></a></li>
                  <li><a href='https://www.instagram.com/taeshinnn/'><img src='https://cdn.discordapp.com/attachments/937272505993928765/937272969967849512/5296503_inspiration_pin_pinned_pinterest_social_network_icon.png'></img></a></li>
                  <li><a href='https://www.instagram.com/taeshinnn/'><img src='https://cdn.discordapp.com/attachments/937272505993928765/937272969535815680/5296765_camera_instagram_instagram_logo_icon.png'></img></a></li>
          </ul>
          <div className='footerBottom'>
                  <p>© 2022 Taeshin Rochananond All Rights Reserved</p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default ContactPage;
