import { useEffect, useState, useRef } from 'react';
import './index.scss';
import emailjs from '@emailjs/browser';
import Loader from 'react-loaders';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import AnimatedLetters from '../AnimatedLetters/index';
// import MapInfo from './MapInfo';


const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
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
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', '', 'M', 'e']}
              idx={15}
            />
          </h1>
          <p className="contact-info-p">
            I am  Full-Stack Developer seeking opportunities .
            if you have other request or question,
            don't hesitate to contact me using below form .
          </p>
          <div>
            <form className="contact-form" ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Name"
                    required
                  />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                
                  <input type="submit" value="Send" className="flat-button" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        {/* <div className="info-map">
          Mays Alraheem,
          <br />
          Canada,
          <br />
          toronto
          <br/>
        </div> */}
       <div className="map-wrap">
           <MapContainer center={[43.651070, -79.347015]} zoom={13}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[43.651070, -79.347015]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>  
         
        </div> 
      </div>
      <Loader type="line-spin-fade-loader" />
    </>
  );
};

export default Contact;
