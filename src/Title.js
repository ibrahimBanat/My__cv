import React from 'react'
import './Title.css'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const Title = () => {
    return (
        <div className='title'>
            <div className="title__container">
                <div className="title__section1">

                    <h1 className="title__name">Ibrahim Banat</h1>

                    <h4 className="title__key">Front End Developer</h4>

                    <div className="title__location">
                        <LocationOnIcon/>
                        <p>Amman</p>
                    </div>
                    
                    
                </div>

                <div className="title__desc">
                    <p>Front End Developer with good proficiency in JavaScript, including DOM manipulation and the object model. Also Thorough understanding of React.js and its core principles</p>
                    
                    <div className="title__icons">
                        <div className="title__phoneIcon">
                            <PhoneIphoneIcon/>
                                <p>07 96 027 693</p>
                        </div>


                       <div className="title__githubIcon">
                        <GitHubIcon/>
                            <p>github.com/ibrahimBanat</p>
                       </div>
                       <div className="title__linkedinIcon">
                        <LinkedInIcon/>
                            <p>in/ibrahim-banat</p>
                       </div>



                    </div>
                    
                    <p></p>
                </div>
            </div>
            
            
            
        </div>
    )
}

export default Title
