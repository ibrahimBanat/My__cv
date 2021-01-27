import React from 'react'
import ProjectCard from './ProjectCard'
import './Projects.css'



const Projects = () => {
    return (
        <div className="projects">
            
            <div className="projects__title"><h2>
                Projects </h2>
            </div>
            <div className="div__line"></div>

            {/* <div className="project__type">
                <h3>Web Development</h3>
            </div>
            <div className="projects__desc_container">
                
                <div className="project1__photo">
                    <img src="https://blog.twitch.tv/assets/uploads/f91cd9204c0a71c6fe319943284522b2.jpeg" alt=""/>
                </div>

                <div className="project1__desc">
                    <h3>Twitch Clone</h3>
                    <p className="projects__desc_p">A simplified clone of the Twitch web application and it's UI, this clone was built using ReactJS</p>
                </div>
                

            
                <div className="project1__photo">
                    <img src="https://github.com/ibrahimBanat/Bankist__website/blob/master/img/bankist.png?raw=true" alt=""/>
                </div>

                <div className="project2__desc">
                    <h3>Banking Web</h3>
                    <p>Website with advanced DOM events handlers</p>
                </div>
                
            </div> */}
                  
            {/* <div className="project__type">
                <h3>Deep learning</h3>
            </div>

            <div className="projects__desc_container">
                
                <div className="project1__photo">
                    <img src="data:image/png;base64,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" alt=""/>
                </div>

                <div className="project1__desc">
                    <h3>Sentiment Prediction</h3>
                    <p>Developing a RNN model to predict user opinion with help of AWS Sagemaker</p>
                </div>
            

            
                <div className="project1__photo">
                    <img src="https://d1m75rqqgidzqn.cloudfront.net/wp-data/2020/04/16134154/pos2.png" alt=""/>
                </div>

                <div className="project1__desc">
                    <h3>Markov Model</h3>
                    <p>A Hidden Markov model for part of speech tagging with universal tag-set</p>
                </div>
                
            </div> */}
            <div className="projects__cardContainer1">
                <div className="project__card4">
                    <ProjectCard 
                    text= "A hidden Markov model for part of speech tagging with a universal tagset."
                    head= "Markov model"

                    link="https://github.com/ibrahimBanat/hmm-part_of_speech_tagging"
                    img="https://github.com/ibrahimBanat/imgurl/blob/main/hmm.png?raw=true"/>
                </div>
                <div className="project__card4">
                    <ProjectCard 
                    className="project__card4"
                    text= "a deep neural network that functions as part of an end-to-end machine translation pipeline."
                    head="Machine translation"
                    link="https://github.com/ibrahimBanat/Machine-translation"
                    img="https://github.com/ibrahimBanat/imgurl/blob/main/machine%20translition.png?raw=true"
                    />
                </div>
                <div className="project__card4">
                    <ProjectCard 
                    className="project__card4"
                    text= "A deep neural network that functions as an end-to-end speech recognition pipeline."
                    head="Speech recognizer"
                    link="https://github.com/ibrahimBanat/DNN-Speech-Recognizer"
                    img="https://github.com/ibrahimBanat/imgurl/blob/main/DNN%20speech%20recognizer.png?raw=true"
                    />
                </div>
                <div className="project__card3">
                    <ProjectCard className="project__card4"
                    text= "a deployed recurrent neural network performing sentiment analysis on movie reviews."
                    head="Sentiment prediction"
                    link="https://github.com/ibrahimBanat/Sagemaker-project-"
                    img="https://github.com/ibrahimBanat/imgurl/blob/main/Sentiment%20prediction.png?raw=true"
                    />
                </div>
            
            
            </div>
            
        </div>
    )
}

export default Projects
