import './index.scss'
import { useEffect, useState,useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import AnimatedLetters from '../AnimatedLetters/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  DialogActions, DialogContent, DialogTitle, Grow,  } from '@mui/material';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Dialog from '@mui/material/Dialog';
import { Tabs } from '@mui/material';
import { Tab } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import data from '../../assets/Data/data';
const Projcet = () => {
  const [letterClass, setLetterClass] = useState
  ('text-animate');

  const [isOpen, setIsOpen] = useState(false);
  const {theme,setTheme}= useContext(ThemeContext);
  const [tabValue, setTabValue] = useState('All');
  const [project,setProject] = useState(false)
  const handleClose = () => setIsOpen(false);
 
  const handleShow = () => {
    setIsOpen(true);
    };
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
      <div >
        <h2 className='porojects_par'>Some of the projects</h2>
        <div>
          <Tabs
          value={tabValue}
          
          className='custom_tabs'
          onChange={(event, newValue) => setTabValue(newValue)}>
          
          <Tab value="All" label="All" className={tabValue ? 'customTabs_item active' : 'customtabs_item'} />
            {[...new Set(data.projects.map(item => item.tag))].map(
              tag => (
              <Tab 
              label={tag}
              value={tag}
              className={tabValue === tag
              ? 'customTabs_item active' 
              : 'customTabs_item'
            }
            />
              ))} 
          </Tabs>
        </div>
      </div>
      <div className="post_wrapper">
        {data.projects.map((item,key) => (
          <>
          {tabValue == item.tag || tabValue == 'All' ? (
            <div className='project-post'key={key} onClick={() => setProject(item)}>
              <img onClick={handleShow} className='thum'  src={item.image} alt="register page"></img>
              <div className='preview'>
              <h2 className='post-title'> {item.title}</h2>
             <p className='post-intro'>{item.description}</p>
            </div>
             </div>
           ):null}
          </>    
       ))}
      </div>
    </div>
   
    <Dialog open={project} className="dail">
               <div > <button onClick={handleClose}>X</button></div>
                {project.images.map((image ,key) =>(
                  <Carousel className="projectDialog_image" autoPlay interval="5000" key={key} transitionTime="2000" showThumbs={false} >
                  <img className='thumnail' src={image.image_1} alt="create URL"></img>
                  <img className='thumnail' src={image.image_2} alt="create URL"></img>
                  <img className='thumnail' src={image.image_3} alt="create URL"></img>
                  </Carousel>
              
         ))}
            <DialogTitle className='post-title'>{project.title}</DialogTitle>
         
            <p className='post-intro'>{project.info}</p>
             { project.links.map((link,key) =>(
               <div key={key}>
              <a target="_blank" rel="noreferrer" href={link.link}>
                <FontAwesomeIcon icon={link.icon} color="#4d4d4e" className='github'/>
               </a>
               </div>
               )) }
            </Dialog>
            
    </>   
  )
}

export default Projcet