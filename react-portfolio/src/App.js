

import { Routes,Route} from 'react-router-dom'
import Layout from './components/Layout';

import './App.scss';


function App() {
  return (
    <>
 
   
    <Routes>
   
    <Route path="/" element={<Layout/>}>
    </Route>
    {/* <Route path="/Home" element={<Home/>}>
    </Route>
    <Route path="/About" element={<About/>}> */}

    {/* </Route> */}
    </Routes>
    
    </>
  )
}

export default App;
