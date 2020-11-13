import React from 'react'
import './SkillInfo.css'

const SkillInfo = ({icon, text}) => {
    return (
        <span className="skillInfo">
            <span
              style={icon}
              className="skill__photo">

            </span>
              
            <div className="skillInfo__text">
                {text}
            </div>
              
        </span>
    )
}

export default SkillInfo
