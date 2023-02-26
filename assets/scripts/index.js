document.addEventListener('mousemove', (event) => {
    const y = event.pageY;
    const x = event.pageX;
    const cursor = document.querySelector('.cursor')
    const scrollLeft = (window.pageXOffset !== undefined) ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft;
    const scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    cursor.style.left =  x - scrollLeft + 'px';
    cursor.style.top = y - scrollTop + 'px';
})
function mouse_hide(){
    document.getElementById('cursor').style.visibility = 'hidden';
}
function mouse_visible(){
    document.getElementById('cursor').style.visibility = 'visible';
}
$(document).ready(function (){
    $(window).on('load', function() {
        $('#loader').fadeOut();
        $('#preloader').delay(350).fadeOut('slow'); 
        $('body').delay(350).css({'overflow':'visible'});
    })
})