window.onload = function(){
//DOMContentLoaded : HTML 문서가 로드되고 DOM 트리가 완성되었을때
    const buttons = document.querySelectorAll('.board-button');
    console.log(buttons)
    
    buttons.forEach(button => {
        button.addEventListener('mouseover', function(){
            // mouseenter : 자식요소는 건드리지 않음
            // mouseover : 자식요소까지 건드림
            // console.log(button.innerHTML);
            button.style.background = '#a47864';
        });
        button.addEventListener('mouseout', function(){
            // mouseleave : 자식요소는 건드리지 않음
            // mouseout : 자식요소까지 건드림
            button.style.background = '';
        });
    });
};