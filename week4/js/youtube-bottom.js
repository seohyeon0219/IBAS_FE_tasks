// bottom 시작

// bottom 생성
const bottom = document.createElement('div');
bottom.className = 'bottom';
div.appendChild(bottom);

// side-nav 시작

// side-nav 생성
const sideNav = document.createElement('nav');
sideNav.className = 'side-nav';
bottom.appendChild(sideNav);

// menu 생성
const menuItems = [
    {icon: 'home', text: '홈'},
    {icon: 'play_circle', text: 'Shorts'},
    {icon: 'subscriptions', text: '구독'},
    {icon: 'account_circle', text: '내 페이지'}
];

menuItems.forEach(item => {
    const menu = document.createElement('div');
    menu.className = 'menu';

    const icon = document.createElement('span');
    icon.className = 'material-symbols-outlined menu-icon';
    icon.textContent = item.icon;

    const text = document.createElement('p');
    text.className = 'menu-text';
    text.textContent = item.text;

    menu.appendChild(icon);
    menu.appendChild(text);
    sideNav.appendChild(menu);
});

// side-nav 끝

// bottom-right 생성 
const bottomRight = document.createElement('div');
bottomRight.className = 'bottom-right';
bottom.appendChild(bottomRight);

// category-nav 시작
const categoryNav = document.createElement('nav');
categoryNav.className = 'category-nav';
bottomRight.appendChild(categoryNav);

const category = [
    '전체', '음악', '야구', '믹스', 'ASMR', '팟캐스트', '라이브', '애니메이션', '최근에 업로드된 동영상', '감상한 동영상', '새로운 맞춤 동영상'
];

category.forEach(text => {
    const categoryItem = document.createElement('div');
    categoryItem.textContent = text;
    categoryNav.appendChild(categoryItem);
});

bottomRight.appendChild(videoCard);