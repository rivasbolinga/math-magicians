import Calculator from './components/Calculator.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  Home  from './components/Home.js';
import Quote from './components/Quote';
import Navbar from './components/Navbar';
const App = () => {
    return ( 
      <>
       <BrowserRouter>
       <Navbar />
        <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/calculator" element={<Calculator />} />
         <Route path="/Quote" element={<Quote />} />
      </Routes>
    </BrowserRouter>
      </>
    )
  
} 
export default App;
