import React, { useState, useEffect } from 'react';
import './YoutubeBottom.css';
import thumbnail from '../assets/thumbnail.png';
import youtuber from '../assets/youtuber.png';

export default function YoutubeBottom() {

    const [videos, setVideos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('전체');

    const menuItems = [
        { icon: 'home', text: '홈'},
        { icon: 'play_circle', text: 'Shorts'},
        { icon: 'subscriptions', text: '구독'},
        { icon: 'account_circle', text: '내 페이지'},
    ];

    const category = [
        '전체', '음악', '믹스', '야구', '라이브', '축구', '최근에 업로드된 동영상', '감상한 동영상', '새로운 맞춤 동영상'
    ];

    useEffect(() => {
        const fetchVideos = async() => {
            try {
                setIsLoading(true);

                const response = await new Promise((resolve) => 
                     setTimeout(() => {
                        const videos = Array.from({ length: 8 }, () => ({
                            thumbnail: thumbnail,
                            profile: youtuber,
                            title: "[Live] 흰수염고래 YB(윤도현 밴드) - DAY6 성진 원필 | 썰플레이",
                            channel: "스튜디오 썰",
                            info: "조회수 51만회 1년 전",
                        }));
                        resolve(videos);
                }, 1000)
            );
            setVideos(response);
            } catch (err) {
                console.error('실패', err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchVideos();
    }, []);

    return (
        <div className='bottom'>
            <div className='bottom-left'>
                <nav className='side-nav'>
                    {menuItems.map((item, index) => (
                        <div className="menu" key={index}>
                            <span className="material-symbols-outlined menu-icon">
                                {item.icon}
                            </span>
                            <p className="menu-text">{item.text}</p>
                        </div>
                    ))}
                </nav>
            </div>

            <div className="bottom-right">
                <nav className="category-nav">
                    {category.map((text, index) => (
                        <div 
                        key={index}
                        className='category-nav-items'
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        style={{
                            backgroundColor: hoveredIndex === index ? '#e0e0e0' : '#f2f2f2',
                            transition: 'background-color 0.3s ease',
                        }}
                        >
                            {text}
                        </div>
                    ))}
                </nav>      

                <main className='video-card'>
                    {videos.map((video, index) => (
                        <section className='video' key={index}>
                            <div className='video-card-wrapper'>
                                <img 
                                src={video.thumbnail}
                                alt={video.title}
                                className="video-top"
                                />
                            </div>
        
                            <div className='video-bottom'>
                                <img
                                    className='youtuber'
                                    src={video.profile}
                                    alt={video.channel}
                                />
        
                                <div className='text'>
                                    <h2 className='title'>{video.title}</h2>
                                    <div className='channel'>{video.channel}</div>
                                    <div className='info'>{video.info}</div>
                                </div>
                            </div>
                        </section>
                    ))}
                </main>
            </div>
        </div>
    )
}