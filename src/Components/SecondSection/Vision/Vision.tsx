import React, { useEffect, useRef } from 'react'
import './Vision.scss'

import FirstCardImg from './img/FirstCardImg.webp'
import SecondCardImg from './img/SecondCardImg.webp'
import ThirdCardImg from './img/ThirdCardImg.webp'

const Vision = () => {

  const cardOne = useRef<HTMLDivElement>(null!)
  const cardTwo = useRef<HTMLDivElement>(null!)
  const cardThree = useRef<HTMLDivElement>(null!)


  useEffect(()=>{
    const firstObserver = new IntersectionObserver((e)=>{
      if(e[0].isIntersecting){
        cardOne.current.classList.remove('fadeInLeft')
      }
    })
    firstObserver.observe(cardOne.current)
    const secondObserver = new IntersectionObserver((e)=>{
      if(e[0].isIntersecting){
        cardTwo.current.classList.remove('fadeInRight')
      }
    })
    secondObserver.observe(cardTwo.current)
    const thirdObserver = new IntersectionObserver((e)=>{
      if(e[0].isIntersecting){
        cardThree.current.classList.remove('fadeInLeft')
      }
    })
    thirdObserver.observe(cardThree.current)
    

  },[])


  return (
    <div className='visionSubSection'>
      <div className="card fadeInLeft" ref={cardOne}>
        <div className="cardText">
          <h3 >Be decentralization warriors</h3>
          <p>Masscots and Masstronauts are here to make that Massa stands for Mass Adoption, and they will make it happen.</p>
        </div>
        <img src={FirstCardImg} />
      </div>
      <div className="card fadeInRight" ref={cardTwo}>
        <img src={SecondCardImg} />
        <div className="cardText">
          <h3 >Share love and build with love</h3>
          <p>That’s one of the core principles of Masscots and Masstronauts. They are here to make Massa a better place for everyone.</p>
        </div>
      </div>
      <div className="card fadeInLeft" ref={cardThree}>
        <div className="cardText">
          <h3 >Take-off Mission</h3>
          <p>Help to bring new perspectives for the ecosystem, projects to reach the community, developers to try out their apps and communicate. Time to get your boosters ready.</p>
        </div>
        <img src={ThirdCardImg} />
      </div>
    </div>
  )
}

export default Vision