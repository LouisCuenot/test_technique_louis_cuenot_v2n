import React, { useEffect, useRef } from 'react'
import './Guidelines.scss'

const Guidelines = () => {

  const anim1 = useRef<HTMLDivElement>(null!)
  const anim2 = useRef<HTMLDivElement>(null!)
  const anim3 = useRef<HTMLDivElement>(null!)
  const anim4 = useRef<HTMLDivElement>(null!)
  const anim5 = useRef<HTMLDivElement>(null!)

  useEffect(()=>{
    const firstDivObserver = new IntersectionObserver((e)=>{
      if(e[0].isIntersecting){
        anim1.current.classList.remove('widthTransi')
      }
    })
    firstDivObserver.observe(anim1.current)
    const secondDivObserver = new IntersectionObserver((e)=>{
      if(e[0].isIntersecting){
      anim2.current.classList.remove('widthTransi')
      }
      })
      secondDivObserver.observe(anim2.current)
      
      const thirdDivObserver = new IntersectionObserver((e)=>{
      if(e[0].isIntersecting){
      anim3.current.classList.remove('widthTransi')
      }
      })
      thirdDivObserver.observe(anim3.current)
      
      const fourthDivObserver = new IntersectionObserver((e)=>{
      if(e[0].isIntersecting){
      anim4.current.classList.remove('widthTransi')
      }
      })
      fourthDivObserver.observe(anim4.current)
      
      const fifthDivObserver = new IntersectionObserver((e)=>{
      if(e[0].isIntersecting){
      anim5.current.classList.remove('widthTransi')
      }
      })
      fifthDivObserver.observe(anim5.current)
  })


  return (
    <div className='guidelinesSubSection'>
      <p>Massa Ambassadorship Program intends to spread awareness about the Massa Blockchain, its Team’s vision, and decentralization.</p>
      <p>The Mission of Masstronauts (Core Ambassadors) & Masscots (Community Ambassadors) is to reach those goals - with a qualitative approach more than a quantitative one, however to allow as many people as possible to participate, a new episode starting from 0 will allow new Masscots to onboard and try their luck at a later date!</p>
      <div ref={anim1} className="divText widthTransi">
        <h2  >Principles’ Summary</h2>
        <ul>
          <li>10 to 20 Masscots for each new Cohort</li>
          <li>20+ Masstronauts to manage the Masscots</li>
        </ul>
      </div>
      <div ref={anim2} className="divText widthTransi">
        <h2  >How to join?</h2>
        <p>From time to time, a selection will happen to allow new Masscots to join the program. Each selection will be done differently</p>
      </div>
        <div ref={anim3} className="divText widthTransi">
          <h2  >How does it work?</h2>
          <p>Each Masscot has a minimum amount of tasks to fill in. The more done the more points. It included articles, video tutorials, twitter threads, community management… They can be graded through our <a href="https://massalabs.crew3.xyz/">Crew3</a> or different means Massa team would deem appropriate</p>
        </div>
        <div ref={anim4} className="divText widthTransi">
          <h2  >Requirements to apply</h2>
          <p>All people who have been participating in previous cohorts, those who have been writing content about Massa, those who are active within the community (community support, committee calls participation, AMA questions…) are welcome to apply.</p>
          <span>For each Masscot it includes to fill in a form with:</span>
          <ul>
            <li>Twitter Handle</li>
            <li>Discord Handle</li>
            <li>Telegram Handle</li>
            <li>Agreeing & complying with the Massa Version of the Berlin Code of Conduct (<a href="https://drive.google.com/file/d/1KsJ9DrnsszzUdeHmvEyWJabeZy4Sy2hc/view?usp=sharing">read here</a>)</li>
            <li>A KYC (performed later on, but necessary to receive the rewards)</li>
          </ul>
        </div>
        <div ref={anim5} className="divText widthTransi">
          <h2  >Content creation expectations & Ranking</h2>
          <p>Based on the (1) content amount - some content will be graded automatically (2) content quality - some content will be reviewed by Masstronauts, a leaderboard will be established. We expect quality more than quantity from our Masscots! Therefore the amount of content to produce monthly is capped. However, extra content is always noticed and appreciated…</p>
          <span>For the each month it could include (examples):</span>
          <ul>
            <li>Articles</li>
            <li>Videos</li>
            <li>Twitter threads</li>
            <li>Reddit Posts</li>
            <li>Memes</li>
            <li>Additional exceptional quests</li>
            <li>Meetup organization</li>
            <li>Participating to Massadopted.com</li>
            <li>Proposing original ideas to promote Massa</li>
            <li>Anything you do best (but not in this list)</li>
            <li id='cr'>Cette page a été codée par Louis Cuenot dans le cadre d'un test technique pour un entretien</li>
          </ul>
        </div>
      </div>
      )
}

      export default Guidelines