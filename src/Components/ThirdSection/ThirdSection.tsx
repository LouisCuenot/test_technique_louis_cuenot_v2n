import React, { useEffect, useRef, useState } from 'react'
import './ThirdSection.scss'
import DropDownArrow from '../Navbar/img/SVG/DropDownArrow.svg'


const Question = (props:{
    question:string,
    children:any
}) => {

    const [isQuestionOpen, setIsQuestionOpen] = useState<boolean>(false)

    const answer = useRef<HTMLDivElement>(null!)

    useEffect(()=>console.log(answer,props.children),[answer])

    return(
        <div className={'questionContainer'+ (isQuestionOpen ? ' isOpen' : '')} style={{height:isQuestionOpen?answer.current.clientHeight+60:40}}>
            <div className={"question"} onClick={()=>setIsQuestionOpen(!isQuestionOpen)}>
                <span>{props.question}</span>
                <img src={DropDownArrow} alt="An icon" />
            </div>
            <div className="answer" ref={answer}>
                {props.children}
            </div>
        </div>
    )
}


const ThirdSection = () => {
  return (
    <div className='thirdSection'>
        <h2>Q&A</h2>
        <Question
            question={'What can I get if I am an active masscot?'}
        >
            <ul>
                <li>Early access to new features</li>
                <li>Close communication with the project team</li>
                <li>Project tokens, based on contributions made</li>
            </ul>
        </Question>
        <Question
            question={'Is there a Code of Conduct?'}
        >
            <span>Yes! Please read the Massa Version of the Berlin Code of Conduct (<a href="https://drive.google.com/file/d/1KsJ9DrnsszzUdeHmvEyWJabeZy4Sy2hc/view?usp=sharing">read here</a>)</span>
        </Question>
        <Question
            question={'How much rewards can I expect from this Beta program?'}
        >
            <p>Rewards depend of the tasks you will perform: you get points for what you do. Please note that it is a BETA program to brainstrom, try things and see how the community can be involved better in the future.</p>
        </Question>
        <Question
            question={'What does Massa team look for as ambassadors?'}
        >
            <p>Graphism (infrographics...), development, copywriting, translation, community management are as many of the things you might be asked to do.</p>
        </Question>
        <Question
            question={'How do I apply?'}
        >
            <p>You can already follow our Twitter account, join our Discord, our Telegram, follow our Github. And wait for the countdown to be over. Once done, there will be a Google form opened for couple of days, and then couple of weeks to review applications.</p>
        </Question>
        
    </div>
  )
}

export default ThirdSection