import Header from './Components/Header.jsx';
import Main from './Components/Main.jsx';
import Footer from './Components/Footer.jsx';
import './App.css';

import {useState} from 'react';
function App() {
    const[page, setPage]= useState('Home');

  return (
    <div className='app'>
        <Header setPage={setPage} className="header-component"/>
        <Main page={page} className="main-component"/>
        <Footer className="footer-component"/>
    </div>
  );
}

export default App;
