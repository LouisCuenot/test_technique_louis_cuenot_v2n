import React, {useEffect, useState} from 'react'
import './Navbar.scss'
import logoMassa from './img/logoMassa.webp'
import linkArrow from './img/SVG/linkArrow.svg'

const NavBarLink = (props:{
    link:{
        title:string,
        innerLinks:{
            name:string,
            link:string,
            arrow:boolean
        }[]
    },
    activeLink:string,
    setActiveLink:(e:string)=>void
}) => {

    const {link, activeLink, setActiveLink} = props




    return(
        <div className={
                'navbarLink' 
                /*+ (activeLink === link.title ? ' linkIsActive' : '')*/
            } 
            onClick={()=>setActiveLink(link.title)}
            style={{height:activeLink === link.title ? 40+25*link.innerLinks.length : 20}}
        >
            <span className='linkName'>{link.title}</span>
            {
                link.innerLinks.map((innerLink)=>(
                    <a 
                        href={innerLink.link} 
                        className="innerLink"
                        key={innerLink.name}
                    >
                        <span>{innerLink.name}</span>
                        {
                            innerLink.arrow &&
                            <img src={linkArrow} alt="an arrow" />
                        }
                    </a>
                ))
            }
        </div>
    )
}

const Navbar = (props:{
    isScrollUp:boolean
}) => {

    const [links, setLinks] = useState<{
        title:string,
        innerLinks:{
            name:string,
            link:string,
            arrow:boolean
        }[]
    }[]>([
        {
            title:'About Massa',
            innerLinks:[
                {
                    name:'Vision',
                    link:'https://massa.net/vision',
                    arrow:false                    
                },
                {
                    name:'Technology',
                    link:'https://massa.net/technology',
                    arrow:false                    
                },
                {
                    name:'Smart Contracts',
                    link:'https://massa.net/autonomous-sc',
                    arrow:false                    
                },
                {
                    name:'Ecosystem',
                    link:'https://massa.net/ecosystem',
                    arrow:false                    
                },
                {
                    name:'Team',
                    link:'https://massa.net/team',
                    arrow:false                    
                }
            ]
        },
        {
            title:'Testnet',
            innerLinks:[
                {
                    name:'Explorer',
                    link:'https://massa.net/testnet',
                    arrow:false                    
                },
                {
                    name:'Run your node',
                    link:'https://docs.massa.net/en/latest/testnet/install.html',
                    arrow:true                   
                },
                {
                    name:'Build on Massa',
                    link:'https://docs.massa.net/en/latest/web3-dev/smart-contracts.html#introduction',
                    arrow:true                    
                },
                {
                    name:'SC Playground',
                    link:'https://massa.net/sc-playground',
                    arrow:true                
                },
                {
                    name:'Apply for a grant',
                    link:'https://massa.net/grants',
                    arrow:true                  
                }
            ]
        },
        {
            title:'Community',
            innerLinks:[
                {
                    name:'Ambassadorship',
                    link:'https://massa.net/ambassadorship',
                    arrow:false                    
                },
                {
                    name:'Useful links',
                    link:'https://massa.net/community',
                    arrow:false                  
                },
                {
                    name:'Blog',
                    link:'https://massalabs.medium.com/',
                    arrow:true                    
                },
                {
                    name:'Massadopted',
                    link:'https://massadopted.com/',
                    arrow:true                
                }
            ]
        },
        {
            title:'More',
            innerLinks:[
                {
                    name:'Press',
                    link:'https://massa.net/press',
                    arrow:false                    
                },
                {
                    name:'Careers',
                    link:'https://massa.net/careers',
                    arrow:false                  
                },
                {
                    name:'Blog',
                    link:'https://massalabs.medium.com/',
                    arrow:true                    
                }
            ]
        },
    ])

    const [activeLink, setActiveLink] = useState('')

    const {isScrollUp} = props

    const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className={'navbar' + (isScrollUp ? ' navbarOn' : '') + (menuOpen ? ' navbarOn' : '')}>
        <a href="https://massa.net" className='logo'>
            <img src={logoMassa} alt="Massa's Logo" />
        </a>
        
        <div className={"hamburger"+(menuOpen?' croix':'')} onClick={()=>setMenuOpen(!menuOpen)}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
        </div>
        <div className={"menu" + (menuOpen? ' menuIsOpen' : '')}>
            <div className="menuContent">
                {
                    links.map((link)=>(
                        <NavBarLink
                            link={link}
                            activeLink={activeLink}
                            setActiveLink={(e)=>setActiveLink(e)}
                            key={link.title}
                        />
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Navbar