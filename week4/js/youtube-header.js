// html의 div 가져오기
const div = document.querySelector('div');

// header 시작

// header 생성
const header = document.createElement("header");
div.appendChild(header);

// header-left 생성
const headerLeft = document.createElement("div");
headerLeft.className = 'header-left';
header.appendChild(headerLeft);

const leftMenuIcon = document.createElement('span');
leftMenuIcon.className = 'material-symbols-outlined left-menu-icon';
leftMenuIcon.textContent = 'menu';
headerLeft.appendChild(leftMenuIcon);

const logo = document.createElement('h1');
logo.className = 'logo'
logo.textContent = 'Youtube'
headerLeft.appendChild(logo);

// header-middle 생성
const headerMiddle = document.createElement('div');
headerMiddle.className = 'header-middle';
header.appendChild(headerMiddle);

const search = document.createElement('form');
search.className = 'search';
search.method = 'get';
headerMiddle.appendChild(search);

const searchText = document.createElement('input');
searchText.className = 'search-text';
searchText.type = 'text';
searchText.placeholder = "  검색";
searchText.autocomplete = "on";
search.appendChild(searchText);

const searchButton = document.createElement('button');
searchButton.className = 'search-button';
search.appendChild(searchButton);

const searchIcon = document.createElement('span');
searchIcon.className = "material-symbols-outlined search-icon";
searchIcon.textContent = 'search';
searchButton.appendChild(searchIcon);

const mic = document.createElement('button');
mic.className = "mic"
headerMiddle.appendChild(mic);

const micIcon = document.createElement('span');
micIcon.className = 'material-symbols-outlined mic-icon';
micIcon.textContent = 'mic';
mic.appendChild(micIcon);

// header-right 생성
const headerRight = document.createElement('div');
headerRight.className = 'header-right';
header.appendChild(headerRight);

const make = document.createElement('button');
make.className = 'make';
headerRight.appendChild(make);

const makeIcon = document.createElement('span');
makeIcon.className = "material-symbols-outlined make-icon";
makeIcon.textContent = "add";
make.appendChild(makeIcon);

const makeText = document.createElement('span');
makeText.className = 'make-text';
makeText.textContent = '만들기';
make.appendChild(makeText);

const bell = document.createElement('button');
bell.className = 'bell';
headerRight.appendChild(bell);

const bellIcon = document.createElement('span');
bellIcon.className = 'material-symbols-outlined bell-icon';
bellIcon.textContent = 'notifications';
bell.appendChild(bellIcon);

const profile = document.createElement('button');
profile.className = 'profile';
headerRight.appendChild(profile);

const profileIcon = document.createElement('span');
profileIcon.className = 'material-symbols-outlined profile-icon';
profileIcon.textContent = 'account_circle';
profile.appendChild(profileIcon);

// header 끝
