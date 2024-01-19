import './App.css';

import Navbar from '';
import Footer from '';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '';
import Contato from '';
import Home from '';



function App() {
  return (
    <>
        <BrowserRouter>
          <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Contato />} />
              <Route path="/home" element={<Home />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
    </>
  );
}
export default App;