
import { useEffect, useState } from 'react'
import Info from './Info/index'
import AnimatedLetters from'../AnimatedLetters/index'
import './index.scss'
import 'animate.css'
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
  const [letterClass, setLetterClass] = useState('text-animate')
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
  return (
    <>
    <div className='container about-page'>
      <div className='text-zone'>
      <h1>
        <AnimatedLetters letterClass={letterClass} strArray={['A','b','o','u','t',' ','M','e']}
        idx={15}
        />
      </h1>
      <p>I'm  Full-Stack developer looking for the opportunity to work with the latest
            technologies on challenging and diverse projects.</p>
      <p> I'm quietly confident,Like to solve-problems,curious to learn.</p>

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
    
    </>
  )
}

export default About