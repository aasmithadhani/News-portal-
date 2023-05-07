// import './App.css';
// import Cards from './Card'
import Test from './Test'
import Data from './Data'

import { Route,Routes, BrowserRouter } from 'react-router-dom';




function App() {

  return (
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Test/>}/>
      <Route path="/data/:title" element={<Data/>}/>
    </Routes>
   </BrowserRouter> 
  );
}

export default App;
