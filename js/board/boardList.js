window.onload = () =>{
    // board-button클래스를 가지고 있는 태그를 buttons에 담기
    const buttons = document.querySelectorAll('.board-button');

    // select 변수 생성
    let select;

    // 각각 URL마다 select변수에 index와 매칭 시킬 수 있는 숫자 대입
    if(location.href.includes('notice')){
        select = 0;
    } else if(location.href.includes('license')){
        select = 1;
    } else if(location.href.includes('study')){
        select = 2;
    } else if(location.href.includes('guideline')){
        select = 3;
    } else if(location.href.includes('bestPost')){
        select = 4;
    }

    /* for문을 이용하여 buttons의 index와 각각의 URL마다 매칭 시킬 수 있게 만든
    // select와 비교하여 index와 select가 일치하면 배경색을 넣어줌
    // index와 select가 일치하지 않으면 addEventListener이용하여 이벤트 추가
    // 이벤트가 들어온 요소에만 배경색이 바뀌어야 하므로 function()함수를 이용하여
       this 사용 */
    for(let i = 0; i < buttons.length; i++){
        if(i == select){
            buttons[i].style.background = '#a47864';
        } else {
            buttons[i].addEventListener('mouseover', function(){
                this.style.background = '#a47864';
            });
            buttons[i].addEventListener('mouseout', function(){
                this.style.background = '';
            });
        }
    }
}