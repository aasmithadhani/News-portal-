// import './App.css';
// import Cards from './Card'
import Test from './Test'
import Data from './Data'

import { Route,Routes, BrowserRouter } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Faqs from './Faqs';




function App() {

  return (
    
    <BrowserRouter>
    <Routes>
      <Route path="/news" element={<Test/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/data/:title" element={<Data/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/Faqs" element={<Faqs/>}/>
    </Routes>
   </BrowserRouter> 
  );
}

export default App;
