import React from 'react';
import './Sidebar.css';
import youtubeLogo from '../assets/youtubeLogo.png';

const Sidebar = ({ isOpen, toggleSidebar }) => {
const menuGroups = [
    [
        { icon: 'home', text: '홈' },
        { icon: 'play_circle', text: 'Shorts' },
        { icon: 'subscriptions', text: '구독' },
    ],
    [
        { sectionTitle: '내 페이지' },
        { icon: 'history', text: '시청 기록' },
        { icon: 'list', text: '재생목록' },
        { icon: 'watch_later', text: '나중에 볼 동영상' },
        { icon: 'thumb_up', text: '좋아요 표시한 동영상' },
    ],
    [
        { sectionTitle: '탐색' },
        { icon: 'whatshot', text: '인기 급상승' },
        { icon: 'shopping_bag', text: '쇼핑' },
        { icon: 'music_note', text: '음악' },
        { icon: 'movie', text: '영화' },
        { icon: 'sensors', text: '실시간' },
        { icon: 'sports_esports', text: '게임' },
    ]
    ];

        
    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <div className='sidebar-header-left'>
                <span className='material-symbols-outlined sidebar-menu-icon'
                onClick={toggleSidebar}
                style={{cursor: 'pointer'}}
                >menu</span>
                <img className="sidebar-youtube-logo" src={youtubeLogo} alt='유튜브로고'/>
            </div>
           <ul className="sidebar-menu">
            {menuGroups.map((group, groupIdx) => (
                <React.Fragment key={groupIdx}>
                    {group.map((item, itemIdx) => {
                        if (item.sectionTitle) {
                            return (
                                <li key={itemIdx} className="sidebar-section-title">
                                    {item.sectionTitle}
                                </li>
                            );
                        }

                        return (
                            <li key={itemIdx} className="sidebar-menu-item">
                                <span className="material-symbols-outlined sidebar-menu-icon">
                                {item.icon}
                                </span>
                                <span className="sidebar-menu-text">{item.text}</span>
                            </li>
                        );
                    })}
                <hr/>
                </React.Fragment>
                ))}
            </ul>


            <footer className='sidebar-footer'>
                <div className='sidebar-footer-text'>
                    정보 보도자료 저작권 문의하기<br/>
                    크리에이터 광고 개발자<br/><br/>
                </div>
                <div className='sidebar-footer-text'>
                    약관 개인정보처리방침<br/>
                    정책 및 안전<br/>
                    YouTube 작동의 원리<br/>
                    새로운 기능 테스트하기<br/><br/>
                </div>


                <div className='sidebar-footer-text-bottom'>© 2025 Google LLC, Sundar Pichai, <br/>
                    1600 Amphitheatre Parkway, <br/>
                    Mountain View CA 94043, USA, <br/>
                    0807-882-594 (무료), yt-support-<br/>
                    solutions-kr@google.com, 호스팅: <br/>
                    Google LLC, 사업자정보, 불법촬영물 <br/>
                    신고<br/>
                    크리에이터들이 유튜브 상에 게시, 태그 <br/>
                    또는 추천한 상품들은 판매자들의 약관<br/>
                    에 따라 판매됩니다. 유튜브는 이러한 <br/>
                    제품들을 판매하지 않으며, 그에 대한 <br/>
                    책임을 지지 않습니다.
                </div>
            </footer>


        </div>
    );
};

export default Sidebar;
