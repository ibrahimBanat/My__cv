import React from 'react'
import './Education.css'
const Education = () => {
    return (
        <div className="education">


            <div className="heading__box">
                <h2>Education</h2>
            </div>
            <div className="div__line"></div>

            <div className="education__content">
                <div className="education__img">
                    <p>
                        <img src="https://spa-assets.cakeresume.com/assets/a20f9b6f3eddbda6d140326fb089ecec.png" alt=""/>
                    </p>
                </div>
                <div className="education__content__details">
                    <p>
                        <h4>Computer Science</h4>
                        <h3>Hashemite University </h3>
                        <span> Sep 2016- Sep 2020</span>
                    </p>
                </div>
            </div>
            
        </div>
    )
}

export default Education
