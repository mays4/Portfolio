import './index.scss'
import { useEffect, useState,useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import AnimatedLetters from '../AnimatedLetters/index';

const Projcet = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const {theme,setTheme}= useContext(ThemeContext);
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  }, []);
  return (
    <>
    <div className={theme}> 
    <div className="project-title">
    <h1 className='letters'>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['P', 'r', 'o', 'j', 'e','c','t', 's']}
              idx={15}
            />
          </h1>
       
    </div>
    </div>
    </>
    
  )
}

export default Projcet