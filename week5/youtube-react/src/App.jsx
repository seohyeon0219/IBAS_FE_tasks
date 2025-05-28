import React, { useState } from 'react';
import YoutubeHeader from './components/YoutubeHeader.jsx';
import YoutubeBottom from './components/YoutubeBottom.jsx';
import Sidebar from './components/Sidebar';

import './components/YoutubeHeader.css';
import './components/YoutubeBottom.css';
import './components/Sidebar.css';
import './App.css'

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };

  return (
    <>
      <Sidebar isOpen = {isSidebarOpen} toggleSidebar={toggleSidebar}/>

      {isSidebarOpen && (
        <div className='sidebar-overlay' onClick={toggleSidebar}></div>
      )}

      <YoutubeHeader toggleSidebar={toggleSidebar} />
      <YoutubeBottom />      
    </>
  );
}
