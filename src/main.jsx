import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Application/Home';
import App from './App';
import Calculate from './Application/Calculate';
import Contact from './Application/Contact';
import About from './Application/About';
import ImageRecognization from './Application/ImageRecognization';
import Login from './Component/pages/login';
import Register from './Component/pages/register';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}>
          <Route index element={<Home />} />
          <Route path="/calculate" element={<Calculate />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path ='/imagerecognization' element={<ImageRecognization/>}/>
          <Route path="*" element={<div>Page Not Fount</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode >
)
