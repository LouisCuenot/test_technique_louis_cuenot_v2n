import React, { useEffect, useRef } from 'react'
import './Apply.scss'
import FirstCardImg from '../Vision/img/FirstCardImg.webp'
import SecondCardImg from '../Vision/img/ThirdCardImg.webp'

const Apply = () => {

  const applyCardOne = useRef<HTMLDivElement>(null!)
  const applyCardTwo = useRef<HTMLDivElement>(null!)


  useEffect(()=>{
    const applyCardOneObserver = new IntersectionObserver((e)=>{
      if(e[0].isIntersecting){
      applyCardOne.current.classList.remove('scaleTransi')
      }
      })
      applyCardOneObserver.observe(applyCardOne.current)
      const applyCardTwoObserver = new IntersectionObserver((e)=>{
        if(e[0].isIntersecting){
        applyCardTwo.current.classList.remove('scaleTransi')
        }
        })
        applyCardTwoObserver.observe(applyCardTwo.current)
  },[])

  return (
    <div className='applySubSection'>
      <div className="applyCard scaleTransi" ref={applyCardOne}>
        <img src={FirstCardImg} />
        <h3>Be a Masscot</h3>
        <p>Every time we can, we onboard 10 to 20 Masscots. Those spots will be filled by those who participated in the community, created content (articles, tutorials…), participated to our Crew3 Quests, and Massadopted.<br />Do you fit this description? Apply for the next cohort!! And this is now.</p>
        <a href="https://massa.net/ambassadorship"><span>Closed (for now)</span></a>
      </div>
      <div className="applyCard scaleTransi" ref={applyCardTwo}>
        <img src={SecondCardImg}/>
        <h3>Be a Masstronaut</h3>
        <p>Masstronauts are outstanding Massatizen. They are not many, but they are here to support the community any way they can. You currently count around 20 of them.<br />From time to time a spot might open. Masscots get priority to fill it.</p>
        <a href="https://massa.net/ambassadorship"><span>Closed (for now)</span></a>
      </div>
    </div>
  )
}

export default Apply