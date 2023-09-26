import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Home  from  './pages/Home'
import Ourproduct from './components/ourproduct/ourproduct';
import Aboutus from './components/aboutus/aboutus';
import Contactus from './components/contactus/contactus';
import Wholesale from './components/wholesale/wholesale';
import Authentication from './components/authentication/authentication';
import Listview from './components/view/listview';
import Itemview from './components/view/itemview';
import Battery from './components/view/battery';

function App() {
  return (
    <div className='Appwidth'>

        <BrowserRouter>
          <Header/>
            <Routes>   
                <Route exact path='/' element={<Home />}  />
                <Route path='/ourproduct' element={<Ourproduct />} />
                <Route path='/aboutus' element={<Aboutus />} />
                <Route path='/contactus' element={<Contactus />} />
                <Route path='/wholesale' element={<Wholesale />} />
                <Route path='/authentication' element={<Authentication />} />
                <Route path='/authentication' element={<Authentication />} />
                <Route path='/listview' element={<Listview />} />
                <Route path='/itemview' element={<Itemview />} />
                <Route path='/battery' element={<Battery />} /> 
            </Routes>
          <Footer/> 
        </BrowserRouter>

      
    </div>
  );
}

export default App;