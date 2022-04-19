import {  useState,useContext } from 'react';
import { Link ,NavLink} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope, faComputer,faSun,faMoon} from '@fortawesome/free-solid-svg-icons'
import {
  faLinkedin,
  faGithub,
  
} from '@fortawesome/free-brands-svg-icons'
import './index.scss'
import LogoS from '../../assets/images/logo-m-m.png'
import LogoSubtitle from '../../assets/images/mays.png'
import { ThemeContext } from '../../context/ThemeContext';
const Sidbar = () => {

  
  const {theme,setTheme}= useContext(ThemeContext);

  const toggleButton=()=>{
    setTheme(theme === 'light' ? 
       'dark':'light')     
  }
 

  return (
    <>
    <div className='nav-bar'>
      <Link className='logo' to='/'>
        <img className='sidbar-img' src={LogoS} alt ='logo'/>
        <img className='sub-logo sidbar-img' src={LogoSubtitle} alt ='mays'/>
      </Link>
      <div className="sun-moon" >
          <button  className='btn'onClick={toggleButton}></button>
          { theme ==='light'?
          
        <FontAwesomeIcon className='sun' icon={faSun}color="#4d4d4e" />
        :
            <FontAwesomeIcon className='moon' icon={faMoon}color="#4d4d4e" />
          }
        </div>
      <nav>
        <NavLink exact='true' activeclassname='active' to='/'>
          <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
        </NavLink>
        <NavLink exact='true' activeclassname='active' to='/about' className="about-link">
          <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
        </NavLink>
        <NavLink exact='true' activeclassname='active' to='/contact' className="contact-link">
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
        </NavLink>
        <NavLink exact='true' activeclassname='active' to='/project' className="project-link">
          <FontAwesomeIcon icon={faComputer} color="#4d4d4e"/>
        </NavLink>
      </nav>
      <ul>
        <li>
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/mays-alraheem">
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" className='linkedin'/>
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="https://github.com/mays4">
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" className='github'/>
          </a>
        </li>
      </ul>
    </div>
   
    </>
  )
}

export default Sidbar