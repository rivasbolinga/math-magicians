import Calculator from './components/calculator/Calculator.js';
import { HashRouter, Routes, Route } from 'react-router-dom';
import  Home  from './components/home/Home.js';
import Quote from './components/quote/Quote';
import Navbar from './components/common/Navbar';
const App = () => {
    return ( 
      <>
       <HashRouter>
        <Routes>
         <Route element={ < Navbar />} >
           <Route path="/" element={<Home />} exact/>
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/Quote" element={<Quote />} />
          </Route>
        </Routes>
       </HashRouter>
      </>
    )
  
} 
export default App;
