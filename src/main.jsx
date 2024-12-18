import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Application/Home';
import App from './App';
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
        <Route path='/' element={<App />}>
          <Route index element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path='/imagerecognization' element={<ImageRecognization />} />
          <Route path='/register' element={<Register />} />
          <Route path="*" element={<div>Page Not Fount</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode >
)
