import './App.css';
import Header from './Header.jsx';
import Main from './Main.jsx';
import Footer from './Footer.jsx';

import { useState } from 'react';

function App() {

  const [page, setPage] = useState('Home');

  return (
    <div className="app">
      <Header setPage={setPage} />
      <Main page={page} />
      <Footer />
    </div>
  );
}

export default App;
