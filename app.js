$(document).ready(function() {
    $('.container').hide();
})

$('.show').on('click', function() {
    $('.container').show();
})

$('.away').on('click', function() {
    $('.container').hide();
})

let currentPic = 1;
$('.next-button').on('click', function() {
    if(currentPic === 1) {
        $('.slide-container').css('transform', 'translateX(-100vw)');
        currentPic = 2;
    } else if (currentPic === 2) {
        $('.slide-container').css('transform', 'translateX(-200vw)');
        currentPic = 3;
    } else if (currentPic === 3) {
        $('.slide-container').css('transform', 'translateX(0vw)');
        currentPic = 1;
    }
})

$('.before-button').on('click', function() {
    if(currentPic === 1) {
        $('.slide-container').css('transform', 'translateX(-200vw)');
        currentPic = 3;
    } else if (currentPic === 3) {
        $('.slide-container').css('transform', 'translateX(-100vw)');
        currentPic = 2;
    } else if (currentPic === 2) {
        $('.slide-container').css('transform', 'translateX(0vw)');
        currentPic = 1;
    }
})

let currentPicEnd = 1;
$('.next-button2').on('click', function() {
    if(currentPicEnd === 1) {
        $('.slide-container2').css('transform', 'translateX(-100vw)');
        currentPicEnd = 2;
    } else if (currentPicEnd === 2) {
        $('.slide-container2').css('transform', 'translateX(-200vw)');
        currentPicEnd = 3;
    } else if (currentPicEnd === 3) {
        $('.slide-container2').css('transform', 'translateX(0vw)');
        currentPicEnd = 1;
    }
})

$('.before-button2').on('click', function() {
    if(currentPicEnd === 1) {
        $('.slide-container2').css('transform', 'translateX(-200vw)');
        currentPicEnd = 3;
    } else if (currentPicEnd === 3) {
        $('.slide-container2').css('transform', 'translateX(-100vw)');
        currentPicEnd = 2;
    } else if (currentPicEnd === 2) {
        $('.slide-container2').css('transform', 'translateX(0vw)');
        currentPicEnd = 1;
    }
})

