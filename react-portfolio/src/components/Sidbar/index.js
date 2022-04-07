import React from 'react'
import { Link ,NavLink} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {
  faLinkedin,
  faGithub,
  
} from '@fortawesome/free-brands-svg-icons'
import './index.scss'
import LogoS from '../../assets/images/logo-m-m.png'
import LogoSubtitle from '../../assets/images/mays.png'
const Sidbar = () => {
  return (
    <div className='nav-bar'>
      <Link className='logo' to='/'>
        <img className='sidbar-img' src={LogoS} alt ='logo'/>
        <img className='sub-logo sidbar-img' src={LogoSubtitle} alt ='mays'/>
      </Link>
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
  )
}

export default Sidbar