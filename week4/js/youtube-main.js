// main 생성
const videoCard = document.createElement('main');
videoCard.className = 'video-card';
 
// video 생성
const videos = Array(8).fill({
    thumbnail: '../youtube-png/video.png',
    profile: '../youtube-png/youtuber.png',
    title: 'Peder Elias - Loving You Girl (Lyric Video) ft.Hkeem',
    channel: 'Peder Elias',
    info: "조회수 468만회 3년 전"
});

videos.forEach(video => {
    const section = document.createElement('section');
    section.className = 'video';
    videoCard.appendChild(section);

    // video-top 생성
    const thumbnail = document.createElement('img');
    thumbnail.src = video.thumbnail;
    thumbnail.alt = video.title;
    thumbnail.className = 'video-top';
    section.appendChild(thumbnail);

    // video-bottom 생성
    const videoBottom = document.createElement('div');
    videoBottom.className = 'video-bottom';
    section.appendChild(videoBottom);

    // youtuber 생성
    const youtuber = document.createElement('img');
    youtuber.className = 'youtuber';
    youtuber.src = video.profile;
    youtuber.alt = video.channel;
    videoBottom.appendChild(youtuber);

    // text 생성
    const text = document.createElement('div');
    text.className = 'text';
    videoBottom.appendChild(text);

    // title 생성
    const title = document.createElement('h2');
    title.className = 'title';
    title.textContent = video.title;
    text.appendChild(title);

    // channel 생성
    const channel = document.createElement('div');
    channel.className = 'channel';
    channel.textContent = video.channel;
    text.appendChild(channel);

    // info 생성
    const info = document.createElement('div');
    info.className = 'info';
    info.textContent = video.info;
    text.appendChild(info);

});

bottomRight.appendChild(videoCard);