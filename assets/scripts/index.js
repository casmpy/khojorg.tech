document.addEventListener('mousemove', (event) => {
    const y = event.pageY;
    const x = event.pageX;
    const cursor = document.querySelector('.cursor')
    const scrollLeft = (window.pageXOffset !== undefined) ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft;
    const scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    cursor.style.left =  x - scrollLeft + 'px';
    cursor.style.top = y - scrollTop + 'px';
})