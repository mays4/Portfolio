import './index.scss';
import Sidbar from '../Sidbar'
import { Outlet } from 'react-router-dom';




const Layout = () => {
  return (
  <div className="App">
   
     
    
  
  
 
  <Sidbar/>

  <div className="page">
   
    <Outlet/>
    
   
   
  </div>
  {/* <div className='contact-container'>
    <Contact/>
    </div> */}
</div>
  )
}

export default Layout