import React, { useState } from 'react';
import './YoutubeHeader.css';
import youtubeLogo from '../assets/youtubeLogo.png';

export default function YoutubeHeader({ toggleSidebar }) {
    const [searchText, setSearchText] = useState('');

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        console.log('검색어:' ,searchText);
    };

    return (
        <header>
            <div className='header-left'>
                <span
                className='material-symbols-outlined left-menu-icon'
                onClick={toggleSidebar}
                style={{ cursor: 'pointer' }}
                >
                    menu
                </span>
                <img className='youtube-logo' src={youtubeLogo} alt='유튜브로고' />
            </div>

            <div className='header-middle'>
                <form className='search' onSubmit={handleSearchSubmit}>
                <input
                    className='search-text'
                    type='text'
                    placeholder='&nbsp;&nbsp;검색'
                    autoComplete='on'
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
            <button className='search-button'>
                <span className='material-symbols-outlined search-icon'>search</span>
            </button>
            </form>

        <button className='mic'>
          <span className='material-symbols-outlined mic-icon'>mic</span>
        </button>
      </div>

      <div className='header-right'>
        <button className='make'>
          <span className='material-symbols-outlined make-icon'>add</span>
          <span className='make-text'>만들기</span>
        </button>
        <button className='bell'>
          <span className='material-symbols-outlined bell-icon'>notifications</span>
        </button>
        <button className='profile'>
          <span className='material-symbols-outlined profile-icon'>account_circle</span>
        </button>
      </div>
    </header>
    )
}