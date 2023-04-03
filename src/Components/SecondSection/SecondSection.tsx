import React from 'react'
import './SecondSection.scss'
import Vision from './Vision/Vision'
import Guidelines from './Guidelines/Guidelines'
import Apply from './Apply/Apply'


const SecondSection = () => {
  return (
    <div className='secondSection'>
        <div className="stickyContainer">
            <div className="stickyTitle">
                <div>
                    <h2>1</h2>
                    <span>Vision</span>
                </div>
                
            </div>
            <Vision/>
        </div>
        <div className="stickyContainer">
            <div className="stickyTitle">
                <div>
                <h2>2</h2>
                <span>Guidelines</span>
                </div>
                
            </div>
            <Guidelines/>
        </div>
        <div className="stickyContainer">
            <div className="stickyTitle">
                <div>
                    <h2>3</h2>
                    <span>Apply</span>
                </div>
                
            </div>
            <Apply/>
        </div>
        
        
        
    </div>
  )
}

export default SecondSection