import { useEffect, useState,useContext } from 'react';
import './index.scss';
import title from '../../assets/images/logo-m-m.png'
import { Link } from 'react-router-dom'
import AnimatedLetters from "../AnimatedLetters"
import Profile from './Profile'
import Loader from 'react-loaders'
import { ThemeContext } from '../../context/ThemeContext';
import ScrollableFeed from 'react-scrollable-feed';
import 'animate.css'
import Contact from '../Contact';
import About from'../About';
import Projects from '../Projects'


const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const {theme,setTheme}= useContext(ThemeContext);
  const items=[<About/>,<Contact/>]
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
    <div className='home'>
    <div className="home-page" >
 
    
      <div className="text-zone">
      
        <h1 className='words'>
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
     
        <h2>Full stack Developer</h2>
       <br></br>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
        
        </div>

      </div>
      <div className='proto'>
        <Profile/>
      </div>
      
    
    </div>
    <div className='about-item'>
    <ScrollableFeed>
       <About/>
      </ScrollableFeed>
      </div>
      <div className='contact-item'>
      <ScrollableFeed>
       <Contact/>
      </ScrollableFeed>
    </div>
    <div className='contact-item'>
      <ScrollableFeed>
       <Projects/>
      </ScrollableFeed>
    </div>
  
 </div>
    <Loader type="line-spin-fade-loader" />
  
  </>
  )
}

export default Home