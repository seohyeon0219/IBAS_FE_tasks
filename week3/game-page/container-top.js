// html의 container-top 가져오기
const containerTop = document.querySelector('.container-top')

// 1부터 9까지의 배열 만들기
const topArray = [1,2,3,4,5,6,7,8,9];

// shuffle function (topArray를 랜덤으로 섞는 함수) 만들기
function shuffle(topArray){
    let index = topArray.length - 1;
    while (index > 0){
        const randomIndex = Math.floor(Math.random() * (index + 1));
        [topArray[index], topArray[randomIndex]] = [topArray[randomIndex], topArray[index]];
        index--;
    }
}

// shuffle function으로 섞은 topArray로 topButton 만들기
shuffle(topArray);

topArray.forEach((num, index) => {
    // <input type='button' value='num' draggable='true'>
    const topButton = document.createElement('input');
    topButton.type = 'button';
    topButton.value = num;
    topButton.draggable = 'true';

    // 드래그 시작 시 관련 정보 저장
    topButton.ondragstart = function(e){
        e.dataTransfer.setData('top-dragnum', topButton.value); // 숫자 저장
        e.dataTransfer.setData('top-dragindex', index);
        e.dataTransfer.setData('top-dragarea', 'top');
    };
    
    // 드랍 금지 상태 해제
    topButton.ondragover = function(e){
        e.preventDefault();
    };

    // 드랍 발생 시 처리
    topButton.ondrop = function(e){
        e.preventDefault();

        const dragNum = e.dataTransfer.getData('top-dragnum') || e.dataTransfer.getData('bottom-dragnum');
        const dragIndex = parseInt(e.dataTransfer.getData('top-dragindex')) || parseInt(e.dataTransfer.getData('bottom-dragindex'));
        const dragArea = e.dataTransfer.getData('top-dragarea') || e.dataTransfer.getData('bottom-dragarea');

        const currentValue = topButton.value;
        const currentIndex = index;

        // 위 <-> 위
        if (dragArea === 'top'){
            [topArray[currentIndex], topArray[dragIndex]] = [topArray[dragIndex], topArray[currentIndex]];

            const allTopButtons = document.querySelectorAll('.container-top input');

            allTopButtons[currentIndex].value = dragNum;
            allTopButtons[dragIndex].value = currentValue;
            
        } 
        // 아래 <-> 위
        else if (dragArea === 'bottom'){
            [bottomArray[dragIndex], topArray[currentIndex]] = [topArray[currentIndex], bottomArray[dragIndex]];

            const allTopButtons = document.querySelectorAll('.container-top input');
            const allBottomButtons = document.querySelectorAll('.container-bottom input');

            allTopButtons[currentIndex].value = dragNum;
            allBottomButtons[dragIndex].value = '';
        }
    };
    
    // Button을 containerTop에 추가 (실제 화면)
    containerTop.appendChild(topButton);

})