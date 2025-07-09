window.onload = () =>{
    console.log(location.href);
    const buttons = document.querySelectorAll('.board-button');
    
    if(location.href.includes("1_noticeBoardListPage.html")){
        const button = document.getElementById('notice-board');
        button.style.background = '#a47864';

        buttons[1].addEventListener('mouseover', function(){
            buttons[1].style.background = '#a47864';
        });
        buttons[1].addEventListener('mouseout', function(){
            buttons[1].style.background = '';
        });
        buttons[2].addEventListener('mouseover', function(){
            buttons[2].style.background = '#a47864';
        });
        buttons[2].addEventListener('mouseout', function(){
            buttons[2].style.background = '';
        });
        buttons[3].addEventListener('mouseover', function(){
            buttons[3].style.background = '#a47864';
        });
        buttons[3].addEventListener('mouseout', function(){
            buttons[3].style.background = '';
        });
        buttons[4].addEventListener('mouseover', function(){
            buttons[4].style.background = '#a47864';
        });
        buttons[4].addEventListener('mouseout', function(){
            buttons[4].style.background = '';
        });
    } else if(location.href.includes("2_memberBoardListPage1.html")){
        const button = document.getElementById('license-review-board');
        button.style.background = '#a47864';

        buttons[0].addEventListener('mouseover', function(){
            buttons[0].style.background = '#a47864';
        });
        buttons[0].addEventListener('mouseout', function(){
            buttons[0].style.background = '';
        });
        buttons[2].addEventListener('mouseover', function(){
            buttons[2].style.background = '#a47864';
        });
        buttons[2].addEventListener('mouseout', function(){
            buttons[2].style.background = '';
        });
        buttons[3].addEventListener('mouseover', function(){
            buttons[3].style.background = '#a47864';
        });
        buttons[3].addEventListener('mouseout', function(){
            buttons[3].style.background = '';
        });
        buttons[4].addEventListener('mouseover', function(){
            buttons[4].style.background = '#a47864';
        });
        buttons[4].addEventListener('mouseout', function(){
            buttons[4].style.background = '';
        });
    } else if(location.href.includes("3_memberBoardListPage2.html")){
        const button = document.getElementById('study-board');
        button.style.background = '#a47864';

        buttons[0].addEventListener('mouseover', function(){
            buttons[0].style.background = '#a47864';
        });
        buttons[0].addEventListener('mouseout', function(){
            buttons[0].style.background = '';
        });
        buttons[1].addEventListener('mouseover', function(){
            buttons[1].style.background = '#a47864';
        });
        buttons[1].addEventListener('mouseout', function(){
            buttons[1].style.background = '';
        });
        buttons[3].addEventListener('mouseover', function(){
            buttons[3].style.background = '#a47864';
        });
        buttons[3].addEventListener('mouseout', function(){
            buttons[3].style.background = '';
        });
        buttons[4].addEventListener('mouseover', function(){
            buttons[4].style.background = '#a47864';
        });
        buttons[4].addEventListener('mouseout', function(){
            buttons[4].style.background = '';
        });
    } else if(location.href.includes("4_memberBoardListPage3.html")){
        const button = document.getElementById('guideline-board');
        button.style.background = '#a47864';

        buttons[0].addEventListener('mouseover', function(){
            buttons[0].style.background = '#a47864';
        });
        buttons[0].addEventListener('mouseout', function(){
            buttons[0].style.background = '';
        });
        buttons[1].addEventListener('mouseover', function(){
            buttons[1].style.background = '#a47864';
        });
        buttons[1].addEventListener('mouseout', function(){
            buttons[1].style.background = '';
        });
        buttons[2].addEventListener('mouseover', function(){
            buttons[2].style.background = '#a47864';
        });
        buttons[2].addEventListener('mouseout', function(){
            buttons[2].style.background = '';
        });
        buttons[4].addEventListener('mouseover', function(){
            buttons[4].style.background = '#a47864';
        });
        buttons[4].addEventListener('mouseout', function(){
            buttons[4].style.background = '';
        });
    }else if(location.href.includes("5_memberBoardListPage4.html")){
        const button = document.getElementById('bestPost-board');
        button.style.background = '#a47864';
        buttons[0].addEventListener('mouseover', function(){
            buttons[0].style.background = '#a47864';
        });
        buttons[0].addEventListener('mouseout', function(){
            buttons[0].style.background = '';
        });
        buttons[1].addEventListener('mouseover', function(){
            buttons[1].style.background = '#a47864';
        });
        buttons[1].addEventListener('mouseout', function(){
            buttons[1].style.background = '';
        });
        buttons[2].addEventListener('mouseover', function(){
            buttons[2].style.background = '#a47864';
        });
        buttons[2].addEventListener('mouseout', function(){
            buttons[2].style.background = '';
        });
        buttons[3].addEventListener('mouseover', function(){
            buttons[3].style.background = '#a47864';
        });
        buttons[3].addEventListener('mouseout', function(){
            buttons[3].style.background = '';
        });
    }

    buttons[5].addEventListener('mouseover', function(){
        buttons[5].style.background = '#a47864';
    });
    buttons[5].addEventListener('mouseout', function(){
        buttons[5].style.background = '';
        });
}