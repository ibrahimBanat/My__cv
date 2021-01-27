import React from 'react'
import Education from './Education'
import Experince from './Experince'
import './Main.css'
import Projects from './Projects'
import Skills from './Skills'
import Title from './Title'

const Main = () => {
    return (
        <div className="main">
            <Title/>
            <Skills/>
            <Experince/>
            <Education/>
            <Projects/>
            
        </div>
    )
}

export default Main
