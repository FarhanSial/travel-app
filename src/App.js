import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';

import { Routes, Route } from 'react-router';
import { Home } from './pages/Home/Home';
import { Book } from './pages/Book/Book';
import {Packages} from "./pages/Packages/Packages"
import { Services } from './pages/Services/Services';

function App() {
  return (
    <> 
    <div className='Head'>
      <Header />
      </div>
   

``      <Routes>
        <Route  path="/" element={<Home />} />
        <Route path="/book" element={<Book/>}/>
        <Route path="/Packages" element={<Packages/>}/>
        <Route path="/Services" element={<Services/>}/>



      </Routes>
    </>

  );
}

export default App;
