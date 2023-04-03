import React, { useEffect, useRef } from 'react'
import './FirstSection.scss'

import MassambassadorsLogo from './img/massambassador_logo.webp'

const FirstSection = () => {


  const AmbassadorShipRef = useRef<HTMLHeadingElement>(null!)
  const paragraphRef = useRef<HTMLDivElement>(null!)
  const imgRef = useRef<HTMLImageElement>(null!)
  const refApplication = useRef<HTMLDivElement>(null!)

  
 

  useEffect(()=>{
    paragraphRef.current.classList.remove('fadeInLeft')
    AmbassadorShipRef.current.classList.remove('fadeInLeft')
    imgRef.current.classList.remove('fadeInRight')
    setTimeout(()=>refApplication.current.classList.remove('transiOpacity'),1500)
    
  },[])

  

  return (
    <div className='firstSection'>
        <h1 className='fadeInLeft'  ref={AmbassadorShipRef}>Ambassadorship</h1>
        <div className="masstronauts">
            <div className="mainText fadeInLeft" ref={paragraphRef}>
                <h3>Masstronauts, Masscots! It's a call for you to join the adventure!</h3>
                <p>Massa Ambassadorship program intends to help Massa to extend its outreach and give the opportunity for the community to be part of the adventure together. We want the community to join us and bring Massadoption of the blockchain technology to the world, without compromizing on our values such as decentralization. <a href='https://massalabs.crew3.xyz/'>You can join our Crew3</a> and do the quests or write articles with <a href='https://massadopted.com/'>Massadopted</a> to get extra chances to be noticed.</p>
            </div>
            <img className='fadeInRight'  ref={imgRef} src={MassambassadorsLogo} alt="The massambassador's logo" />
        </div>
        <div ref={refApplication} className="applications transiOpacity">
            <span>Applications are closed 😢</span>
        </div>
    </div>
  )
}

export default FirstSection