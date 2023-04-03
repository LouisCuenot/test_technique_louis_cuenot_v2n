import { Suspense, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import Navbar from './Components/Navbar/Navbar'
import FirstSection from './Components/FirstSection/FirstSection'
import SecondSection from './Components/SecondSection/SecondSection'
import ThirdSection from './Components/ThirdSection/ThirdSection'
import Footer from './Components/Footer/Footer'



function App() {
  const [isScrollUp, setIscrollUp] = useState<boolean>(true)



 

  return (
    <div className="App"  onWheel={(e)=>{setIscrollUp(e.deltaY<100 ? true : false)}}>
      
        <Navbar
          isScrollUp={isScrollUp}
        />
        <FirstSection

        />
        <SecondSection

        />
        <ThirdSection/>
        <Footer/>
    </div>
  )
}

export default App
