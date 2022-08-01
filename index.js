const navHeader = document.querySelector('.nav'),
    navList = document.querySelector('.nav-list'),
    burger = document.querySelector('.burger');

if (burger) {
    burger.addEventListener('click', () => {
        // burger.classList.remove('burger');
        burger.classList.toggle('open');
        navList.classList.toggle('nav-list__active');
    })
}

function changeBackground () {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
        navHeader.classList.toggle('nav-footer');
    } else if (window.pageYOffset === 0 &&  navHeader.classList.contains('nav-footer')) {
        navHeader.classList.remove('nav-footer');
        navHeader.classList.add('nav');
    }
}

window.addEventListener('scroll', changeBackground);



