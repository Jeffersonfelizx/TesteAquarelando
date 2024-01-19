import './App.css';

//import Navbar from '';
//import Footer from '';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './paginas/login/Login';
import Contato from './paginas/contato/Contato';
import Home from './paginas/home/Home';



function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Navbar /> */}
        <div className='min-h-[80vh]'>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </div>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}
export default App;