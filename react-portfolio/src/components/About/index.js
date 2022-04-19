
import { useEffect, useState ,useContext} from 'react'
import Info from './Info/index'
import AnimatedLetters from'../AnimatedLetters/index'
import './index.scss'
import { ThemeContext } from '../../context/ThemeContext';
import 'animate.css'
import Logo from '../Home/Logo/index'
import {
  faNode,
  faCss3Alt,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const About = () => {
  const {theme,setTheme}= useContext(ThemeContext);
  const [letterClass, setLetterClass] = useState('text-animate')
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
  return (
    <>
    <div className={theme}>
    <div className='page'>
      <div className='cont'>
      <div className='text-z'>
      <h1 className='about-p'>
        <AnimatedLetters letterClass={letterClass} strArray={['A','b','o','u','t',' ']}
        idx={16}
        />
        {/* <div className='name-logo'> */}
        <Logo/>
        {/* </div> */}
       
        
      </h1>
      </div>
      <div className='par-sect'>
         <p className='par'>I'm  Full-Stack developer looking for the opportunity to work with the latest
            technologies on challenging and diverse projects.</p>
      <p className='par'> I'm quietly confident,Like to solve-problems,curious to learn.</p>
      </div>
      </div>
     


            <div className="stage-cube-cont">
            
          <div className="cubespinner">
          
            <div className="face1">
              <FontAwesomeIcon icon={faNode}  />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5}  />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3Alt} />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact}  />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare}  />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt}  />
            
            </div>
            
          </div>
          <Info/>
        </div>
       
 
   
    </div>
    <Loader type="line-spin-fade-loader" />
    </div>
    </>
  )
}

export default About