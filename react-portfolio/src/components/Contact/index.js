import { useEffect, useState, useRef,useContext } from 'react';
import './index.scss';
import emailjs from '@emailjs/browser';
import Loader from 'react-loaders';
import LogoS from '../../assets/images/logo-m-m.png'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { ThemeContext } from '../../context/ThemeContext';
import AnimatedLetters from '../AnimatedLetters/index';



const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const {theme,setTheme}= useContext(ThemeContext);
  const form = useRef();

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  }, []);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        `${process.env.REACT_APP_service_id}`,
        `${process.env.REACT_APP_template_id}`,
        form.current,
        `${process.env.REACT_APP_user_id}`
      )
      .then(
        () => {
          alert('Message successfully sent!');
          window.location.reload(false);
        },
        () => {
          alert('Failed to send the message, please try again');
        }
      );
  };
 
  return (
    <>
      <div className={theme}>
     
      <div className="contact">
        {/* <div className="text-zone"> */}
        <div className='zone'>
          <h1 className='letters'>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a','c','t', '', 'M', 'e']}
              idx={15}
            />
          </h1>
          <div className='parg'>
          <p className="contact-info-p">
            I am  Full-Stack Developer seeking opportunities .
            if you have other request or question,
            don't hesitate to contact me using below form .
          </p>
          </div>
          
          <div className='form'> 
            <form  ref={form} onSubmit={sendEmail}>
           
              <div className='form-l'>
                <div className='name-email'>
                <input className="half"
                    type="text"
                    name="user_name"
                    placeholder="Name"
                    required
                  />
            
                
                  <input className="half"
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </div>
                 
                 <div>
                 <input className="half"
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                 </div>
                  
            
                <div>
                  <textarea className="half"
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </div>
               
                
                  <input  type="submit" value="Send" className=" half flat-button" />
            
              </div>
            </form>
          
          </div>
        </div>
       
       <div className="map-wrap">
           <MapContainer center={[43.651070, -79.347015]} zoom={13}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[43.651070, -79.347015]}>
              <Popup>
                This Toronto where Mays lives. <br />
                <img className='sidbar-img' src={LogoS} alt ='logo'/>
              </Popup>
            </Marker>
          </MapContainer>  
         
        {/* </div>  */}
      </div>
      </div>
      </div>
      <Loader type="line-spin-fade-loader" />
    </>
  );
};

export default Contact;
