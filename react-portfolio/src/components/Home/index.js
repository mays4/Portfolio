import { useEffect, useState,useContext } from 'react';
import './index.scss';
import title from '../../assets/images/logo-m-m.png'
import { Link } from 'react-router-dom'
import AnimatedLetters from "../AnimatedLetters"
import Logo from './Logo'
import Profile from './Profile'
import Loader from 'react-loaders'
import { ThemeContext } from '../../context/ThemeContext';

import 'animate.css'
import Contact from '../Contact';


const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const {theme,setTheme}= useContext(ThemeContext);
  // const [theme , setTheme]=useState('light')
  const nameArray =['a','y','s']
  const jobArray=['w','e','b',' ','d','e','v','e','l','o','p','e','r','.']
  useEffect(() => {
   setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

 

  return (
    <>
    
    <div className={theme}> 
    <div className="container home-page" >
 
    
      <div className="text-zone">
      
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>
          <img className='logo-img'
            src={title}
            alt="JavaScript Developer Name, Web Developer Name"
          />
        
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={21}
          />
        </h1>
        
        <h2>Full Stack Developer</h2>
    
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
        
     

      </div>
      
      <Profile/>
      
     
    </div>
    {/* <Logo/> */}
    {/* <div className='conatiner-contact'>
        <Contact/>
    </div> */}
 </div>
    <Loader type="line-spin-fade-loader" />
  
  </>
  )
}

export default Home