import React, { useState } from 'react'
import './Footer.scss'
import logoMassa from "../Navbar/img/logoMassa.webp"

import Medium from './img/Medium.svg'
import Github from '../Navbar/img/SVG/Github.svg'
import Twitter from '../Navbar/img/SVG/Twitter.svg'
import Telegram from './img/Telegram.svg'
import Discord from '../Navbar/img/SVG/Discord.svg'
import Reddit from './img/Reddit.svg'
import Youtube from './img/Youtube.svg'
import LinkedIn from './img/LinkedIn.svg'
import LinkArrow from '../Navbar/img/SVG/LinkArrow.svg'
import Arrow from './img/Arrow.svg'

const Footer = () => {

    const [isInputFocused, setIsInputFocused] = useState<boolean>(false)

    return (
        <div className='footer'>
            <div className="footerHead">
                <a href="https://massa.net/">
                    <img src={logoMassa} alt="The Massa's logo" />
                </a>
                <div className="socials">
                    <a href="https://massalabs.medium.com/">
                        <img src={Medium} alt="Medium's logo" />
                    </a>
                    <a href="https://github.com/massalabs/massa">
                        <img src={Github} alt="Github's logo" />
                    </a>
                    <a href="https://twitter.com/massalabs">
                        <img src={Twitter} alt="Twitter's logo" />
                    </a>
                    <a href="https://t.me/massanetwork">
                        <img src={Telegram} alt="Telegram's logo" />
                    </a>
                    <a href="https://discord.gg/massa">
                        <img src={Discord} alt="Discord's logo" />
                    </a>
                    <a href="https://www.reddit.com/r/massa">
                        <img src={Reddit} alt="Reddit's logo" />
                    </a>
                    <a href="https://www.youtube.com/channel/UChVfdvYpn0eFk4B-T7TGmOg">
                        <img src={Youtube} alt="Youtube's logo" />
                    </a>
                    <a href="https://www.linkedin.com/company/massa-labs/">
                        <img src={LinkedIn} alt="LinkedIn's logo" />
                    </a>
                </div>
            </div>
            <div className="footerMain">
                <div className="footerUlsContainer">
                    <div className="ulContainer">
                        <h3>About</h3>
                        <ul>
                            <li><a href="">Vision</a></li>
                            <li><a href="">Technology</a></li>
                            <li><a href="">Smart Contracts</a></li>
                            <li><a href="">Ecosystem</a></li>
                            <li><a href="">Team</a></li>
                        </ul>
                    </div>
                    <div className="ulContainer">
                        <h3>Testnet</h3>
                        <ul>
                            <li><a href="">Explorer</a></li>
                            <li><a href="">Run your node</a><img src={LinkArrow} alt="an arrow" /></li>
                            <li><a href="">Build on Massa</a><img src={LinkArrow} alt="an arrow" /></li>
                            <li><a href="">SC Playground</a><img src={LinkArrow} alt="an arrow" /></li>
                            <li><a href="">Apply for a grant</a></li>
                        </ul>
                    </div>
                    <div className="ulContainer">
                        <h3>Community</h3>
                        <ul>
                            <li><a href="">Ambassadorship</a></li>
                            <li><a href="">Useful links</a></li>
                            <li><a href="">Blog</a><img src={LinkArrow} alt="an arrow" /></li>
                            <li><a href="">Massadopted</a><img src={LinkArrow} alt="an arrow" /></li>
                        </ul>
                    </div>
                    <div className="ulContainer">
                        <h3>More</h3>
                        <ul>
                            <li><a href="">Press</a></li>
                            <li><a href="">Careers</a></li>
                            <li><a href="">Privacy Policy</a></li>
                            <li><a href="">Terms of Services</a></li>
                        </ul>
                    </div>
                </div>
                <div className="newsLetter">
                    <p><span>Subscribe</span> to receive Massa's <span>latest updates</span></p>
                    <div className="inputContainer">
                        <input placeholder='Type your mail here' type="text" name="email" id="email" onFocus={()=>setIsInputFocused(true)} onBlur={()=>setIsInputFocused(false)} />
                        <img src={Arrow} alt="An arrow" />
                    </div>
                    <div className={isInputFocused ? 'inputFocus' : ''} id="inputLine"></div>
                </div>
            </div>
        </div>
    )
}

export default Footer