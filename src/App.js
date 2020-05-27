import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

const App = () => {
  return (
    <div className='app-wrapper'>

        <Header />

        <div className="content_area_wrapper">

            <div className='content_area'>
                <Navbar />
                <Profile />
            </div>

        </div>

    </div>
  );
}

export default App;
