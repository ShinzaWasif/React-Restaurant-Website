import { useState, useEffect } from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Banner from './components/Banner'
import ChooseUs from './components/ChooseUs'
import AboutUs from './components/AboutUs'
import Contact from './components/Contact'
import LoginPopup from './components/LoginPopup'
import AOS from 'aos'
import "aos/dist/aos.css"
function App() {

   const [showPopup,setshowpopup] =useState(false);

   const handlePopup=()=>{
    setshowpopup(true);
   }

   useEffect(()=>{
    AOS.init({
      offset:100,
      duration:800,
      easing:'ease-in-sine',
      delay:100,
    });
    AOS.refresh();
   },[])
  return (

    <>
    <div className='overflow-x-hidden'>
      <Navbar handlePopup={handlePopup}/>
      <Hero/>
      <Banner/>
      <ChooseUs/>
      <AboutUs handlePopup={handlePopup}/>
      <Banner/>
      <Contact/>
      <LoginPopup showPopup={showPopup} setshowpopup={setshowpopup}/>
    </div>
    </>
  )
}

export default App
