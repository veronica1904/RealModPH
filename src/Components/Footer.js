import { EmailOutlined, LocationOn, LocationOnOutlined, PhoneInTalk, PhoneInTalkOutlined } from '@mui/icons-material';
import React from 'react'
import "../style/Footer.css";


function Footer() {
    return (
        <div className='footer'>
            <div className='bigSpace'>
                <div className='column1'>
                    <img src='https://res.cloudinary.com/veronicaduque/image/upload/v1653365417/RealMod/Logo_jbrxg9.png' />
                    <span>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters
                        , as opposed to using 'Content here, content here', making it look like readable.</span>
                    <div className='icons'>
                        <button>
                            <img src='https://res.cloudinary.com/veronicaduque/image/upload/v1653365474/RealMod/twitter_dbgjaf.png' />
                        </button>
                        <button>
                            <img src='https://res.cloudinary.com/veronicaduque/image/upload/v1653365684/RealMod/facebook_zntyhe.png' />
                        </button>
                        <button>
                            <img src='https://res.cloudinary.com/veronicaduque/image/upload/v1653365813/RealMod/linkedin_h7mvv9.png' />
                        </button>
                        <button>
                            <img src='https://res.cloudinary.com/veronicaduque/image/upload/v1653365815/RealMod/instagram_mmbo3d.png' />
                        </button>
                        <button>
                            <img src='https://res.cloudinary.com/veronicaduque/image/upload/v1653365889/RealMod/pinterest_nj3y4c.png' />
                        </button>
                        <button>
                            <img src='https://res.cloudinary.com/veronicaduque/image/upload/v1653365892/RealMod/skype_vtsuu0.png' />
                        </button>
                    </div>
                </div>
                <div className='column2'>
                    <div><h2>Quick Links</h2></div>
                    <div>-</div>
                    <ul>
                        <li>home</li>
                        <li>About</li>
                        <li>Property</li>
                        <li>Contract</li>
                        <li>Blog Articles</li>
                    </ul>
                </div>
                <div className='column3'>
                    <div><h2>Contract us</h2></div>
                    <div>-</div>
                    <div>
                        <LocationOnOutlined />
                        <span> 121 King St, Melbourne Australia</span>
                    </div>
                    <div>
                        <PhoneInTalkOutlined />
                        <span> +1 (500) 250-6969 </span>
                    </div>
                    <div>
                        <EmailOutlined />
                        <span> Support@urmail.net</span>
                    </div>
                </div>
                <div className='column4'>
                    <div><h2>Newsletter</h2></div>
                    <div>-</div>
                    <input />
                    <button>Subscribe</button>
                    <p>We never spam you!</p>


                </div>

            </div>
            <div className='shortSpace'>
                <span>©2021 Realmod - Buy Sell or Rent. All rights reserved.</span>
            </div>
        </div>

    )
}
export default Footer