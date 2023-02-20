import Calculator from './components/calculator/Calculator.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  Home  from './components/home/Home.js';
import Quote from './components/quote/Quote';
import Navbar from './components/common/Navbar';
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
