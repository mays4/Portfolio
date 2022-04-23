import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faDisplay} from '@fortawesome/free-solid-svg-icons'
import {
  faGithub as git,
} from '@fortawesome/free-brands-svg-icons';
import Register from '../images/register.png';
import Update from '../images/urls-page.png .png';
import Create from '../images/create-URL.png';
import Text from '../images/emptyText.png';
import showText from '../images/showText.png';
import Tweeter from '../images/tweeterPage.png';
import homebidder1 from '../images/homebidder1.gif';
import homebidder2 from '../images/homebidder2.gif';
import homebidder3 from '../images/homebidder3.gif';
import Landing from '../images/Landing_page.png';
import Payment from '../images/payment.png';
import Card from '../images/Adding_to_card.png';
import Chat from '../images/chat.png';
import Page from '../images/page.png';
import Search from '../images/Search.png';
import Save from '../images/Saving-an-appointment.png';
import View from '../images/Scheduler-view.png';
import Appointment from '../images/Appointment_booked.png';


export default{
  projects:[
    { 
      id:1,
      tag: 'React',
      image:Landing,
      info:'Amazon Clone it is a mini Amazon Project..',
      description: 'RESTful URL Shortening service.\n' + 
      'Tech Stack: Express, Node' ,
      title: 'Amazon Clone',
      
      links: [
          {link: 'https://github.com/mays4/Amazon', icon:git},
          {link: 'https://amazon-clone-jxgfi8qnr-mays.vercel.app', icon: faDisplay},
      ] ,
      images:[{
        image_1:Landing,
        image_2:Card,
        image_3:Payment,
      }]
    },
    { 
      id:4,
      tag: 'Express',
      image: Tweeter,
      info:'This repository is the starter code for the project: Students will fork and clone this repository, then build upon it to practice their HTML, CSS, JS, jQuery and AJAX front-end skills, and their Node, Express and MongoDB back-end skills.',
      description: 'Twitter clone powered by AJAX. Tech Stack: Express, jQuery, MongoDB, Node',
      title: 'Tweeter',
     
      links: [
          {link: 'https://github.com/mays4/tweeter', icon:git},
          {link: 'https://github.com/mays4/tweeter', icon: faDisplay},
      ],
      images:[{
        image_1:Tweeter,
        image_2:Text,
        image_3:showText,
      } ]
    },
    {
    id:2,
    tag: 'React',
    image:Register,
    info:'TinyApp is a full stack web application built with Node and Express that allows users to shorten long URLs (à la bit.ly).',
    description: 'RESTful URL Shortening service.\n' + 
    'Tech Stack: Express, Node' ,
    title: 'TinyApp',
    
    links: [
        {link: 'https://github.com/mays4/tinyapp', icon:git},
        {link: 'https://app-tiny.herokuapp.com/login', icon: faDisplay},
    ] ,
    images:[{
      image_1:Register,
      image_2:Update,
      image_3:Create,
    }]
    },
    {
    id:5,
    tag: 'React',
    image:Page,
    info:'is an online platform for buying and selling homes without the use of blind-bidding. Instead of making an offer on a home without knowing the offers that have already been made, **HomeBidder** empowers buyers by putting the tools and data they need at their fingertips to help inform their decision-making during this critical process..',
    description: 'A real chat app using Stream-api' ,
    title: 'Medical-pager',
    
    links: [
        {link: 'https://github.com/mays4/medical-pager', icon:git},
        {link:'https://medical-chat-page.netlify.app', icon: faDisplay},
    ] ,
    images:[{
      image_1:Page,
      image_2:Chat,
      image_3:Search,
    }]
    },
    {
      id:3,
      tag: 'React',
      image:homebidder1,
      info:'is an online platform for buying and selling homes without the use of blind-bidding. Instead of making an offer on a home without knowing the offers that have already been made, **HomeBidder** empowers buyers by putting the tools and data they need at their fingertips to help inform their decision-making during this critical process..',
      description: 'RESTful URL Shortening service.\n' + 
      'Tech Stack: Express, Node' ,
      title: 'HomeBidder',
      
      links: [
          {link: 'https://github.com/RameesaRijas/HomeBidder', icon:git},
          {link: 'https://app-tiny.herokuapp.com/login', icon: faDisplay},
      ] ,
      images:[{
        image_1:homebidder1,
        image_2:homebidder2,
        image_3:homebidder3,
      }]
      },
      {
        id:6,
        tag: 'React',
        image: View,
        info:'This is a Interview Scheduler app using React.',
        description: 'RESTful URL Shortening service.\n' + 
        'Tech Stack: Express, Node' ,
        title: 'Scheduler',
        
        links: [
            {link: 'https://github.com/mays4/Scheduler', icon:git},
            {link: 'https://app-tiny.herokuapp.com/login', icon: faDisplay},
        ] ,
        images:[{
          image_1: View,
          image_2:Appointment,
          image_3:Save,
        }]
        },
  ]
}