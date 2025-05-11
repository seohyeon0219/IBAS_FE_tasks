// html의 container-bottom 가져오기
const containerBottom = document.querySelector('.container-bottom');

// 9개의 빈 칸 button 만들기
const bottomArray = [];

for (let i = 0; i < 9; i++){
    const bottomButton = document.createElement('input');
    bottomButton.type = 'button';
    bottomButton.value = '';
    bottomArray.push(bottomButton.value);
    bottomButton.draggable = 'true';

    containerBottom.appendChild(bottomButton);

    // 드래그 시작 시 관련 정보 저장
    bottomButton.ondragstart = function(e){
        e.dataTransfer.setData('bottom-dragnum', bottomButton.value); 
        e.dataTransfer.setData('bottom-dragindex', i);
        e.dataTransfer.setData('bottom-dragarea', 'bottom');
    };

    // 드랍 금지 상태 처리
    bottomButton.ondragover = function(e){
        e.preventDefault();
    };
    
    // 드랍 발생 시 처리
    bottomButton.ondrop = function(e){
        e.preventDefault();

        const dragNum = e.dataTransfer.getData('top-dragnum') || e.dataTransfer.getData('bottom-dragnum');
        const dragIndex = parseInt(e.dataTransfer.getData('top-dragindex')) || parseInt(e.dataTransfer.getData('bottom-dragindex'));
        const dragArea = e.dataTransfer.getData('top-dragarea') || e.dataTransfer.getData('bottom-dragarea');

        const currentValue = bottomButton.value;
        const currentIndex = i;

        if (dragArea === 'bottom'){
            // 아래 <-> 아래
            [bottomArray[currentIndex], bottomArray[dragIndex]] = [bottomArray[dragIndex], bottomArray[currentIndex]];

            const allBottomButtons = document.querySelectorAll('.container-bottom input');

            allBottomButtons[currentIndex].value = dragNum;
            allBottomButtons[dragIndex].value = currentValue;
        }
        // 위 -> 아래 
        else if(dragArea === 'top'){
           [bottomArray[currentIndex], topArray[dragIndex]] = [topArray[dragIndex], bottomArray[currentIndex]];

            const allBottomButtons = document.querySelectorAll('.container-bottom input');
            const allTopButtons = document.querySelectorAll('.container-top input');

            allBottomButtons[currentIndex].value = dragNum;
            allTopButtons[dragIndex].value = '';
        }
        // 정답 확인 
        checkGameClear();
        
    };
};

// 정답일 때 함수 선언
function checkGameClear(){
    const allBottomButtons = document.querySelectorAll('.container-bottom input');
    for (let i = 0; i < 9; i++){
        if (parseInt(allBottomButtons[i].value != i + 1)){
            return;
        }
    }
}