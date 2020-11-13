import React from 'react'
import SkillInfo from './SkillInfo'
import './Skills.css'

var sectionStyles = {
    sectionStyle1: {
        background: "url(https://spa-assets.cakeresume.com/assets/editor/icons/color/devicon/react.svg)"
    
    },
    sectionStyle2: {
        background: "url(https://spa-assets.cakeresume.com/assets/editor/icons/color/devicon/express.svg)"
    
    },
    sectionStyle3: {
        background: "url(https://spa-assets.cakeresume.com/assets/editor/icons/color/devicon/javascript.svg)"
    
    },
    sectionStyle4: {
        background: "url(https://spa-assets.cakeresume.com/assets/editor/icons/color/devicon/webpack.svg)"
    
    },
    sectionStyle5: { 
        background: "url(https://spa-assets.cakeresume.com/assets/editor/icons/color/devicon/sass.svg)"
    },
    sectionStyle6: { 
        background: "url(https://spa-assets.cakeresume.com/assets/editor/icons/color/devicon/html5.svg)"
    },
    sectionStyle7: { 
        background: "url(https://spa-assets.cakeresume.com/assets/editor/icons/color/devicon/css3.svg)"
    },
    sectionStyle8: { 
        background: "url(https://spa-assets.cakeresume.com/assets/editor/icons/color/logos/python.svg)"
    },
    sectionStyle9: {
        background: "url(https://spa-assets.cakeresume.com/assets/editor/icons/color/logos/git.svg)"
    },
    sectionStyle10: {
        background: "url(https://pytorch.org/assets/images/logo.svg)"
    },
    sectionStyle11: {
        background: "url(https://numpy.org/images/logos/numpy.svg)"
    },
    sectionStyle12: {
        background: "url(https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Pandas_mark.svg/1200px-Pandas_mark.svg.png)"
    },
    
    
    
};


const Skills = () => {
    return (
        <div className="skils">
            <div className="skills__container">
                <div className="skills__title">
                    <h2>Skills</h2>
                </div>
                <div className="div__line"></div>

                <div className="skills__infor">

                    <h3>Web Development Stack</h3>
                    <p>
                        <SkillInfo icon={sectionStyles.sectionStyle2} text={'Express'} />
                        <SkillInfo icon={sectionStyles.sectionStyle1} text={'React'} />
                        <SkillInfo icon={sectionStyles.sectionStyle3} text={'JavaScript'}/>
                        <SkillInfo icon={sectionStyles.sectionStyle4} text={'Webpack'}/>
                        <SkillInfo icon={sectionStyles.sectionStyle5} text={'Saas'}/>
                        <SkillInfo icon={sectionStyles.sectionStyle6} text={'Html'}/>
                        <SkillInfo icon={sectionStyles.sectionStyle7} text={'Css'}/>
                        
                        <SkillInfo icon={sectionStyles.sectionStyle9} text={'Git'}/>
                        
                    </p>
                    
                </div>
                
                <div className="skills__infor">

                    <h3>Other</h3>
                        
                    <p>
                        <SkillInfo icon={sectionStyles.sectionStyle8} text={'Python'}/>
                        <SkillInfo icon={sectionStyles.sectionStyle10} text={'Pytorch'}/>
                        <SkillInfo icon={sectionStyles.sectionStyle11} text={'Numpy'}/>
                        <SkillInfo icon={sectionStyles.sectionStyle12} text={'Pandas'}/>
                        
                    </p>
                    
                </div>
            </div>
        </div>
    )
}

export default Skills
