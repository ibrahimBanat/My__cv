import React from 'react'
import './Title.css'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email';

const Title = () => {
    return (
        <div className='title'>
            <div className="title__container">
                <div className="title__section1">

                    <h1 className="title__name">Mohammad Abutair</h1>
                    
                    <h4 className="title__key">Machine learning Developer</h4>

                    <div className="title__location">
                        <LocationOnIcon/>
                        <p>Amman</p>
                    </div>
                    
                    
                </div>

                <div className="title__desc">
                    <p>I aim to attain an engaging position
                        in the fields of Data Science & Machine learning.</p>
                    
                    <div className="title__icons">
                        <div className="title__phoneIcon">
                            <PhoneIphoneIcon/>
                                <p>07 77 309 044</p>
                        </div>


                       <div className="title__githubIcon">
                        <GitHubIcon/>
                           <p><a className="link__text" href="https://github.com/abutair">abutair</a></p>
                       </div>
                       <div className="title__linkedinIcon">
                        <LinkedInIcon/>
                            <p><a className="link__text" href="https://www.linkedin.com/in/ibrahim-banat">in/ibrahim-banat</a></p>
                       </div>
                       
                           
                       



                    </div>
                                      
                    <div className="email__acc">
                        <EmailIcon/>
                        <div>mohammedabutair989@gmail.com</div>
                    </div>
                </div>
            </div>
            
            
            
        </div>
    )
}

export default Title
