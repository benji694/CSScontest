window.scroll(0, 0);
const header = document.querySelector('header');
let homeView = true;

const hideHeader = () => {
    window.scroll(0, 715);
    header.className = 'headerScrolled';
    setTimeout(() => {homeView = false}, 1000)
}
const showHeader = () => {
    window.scroll(0, 0);
    header.className = 'headerUnscrolled';
    setTimeout(() => {homeView = true}, 1000)
}
window.setInterval((e) => {
    var top = window.pageYOffset || document.documentElement.scrollTop;
    if (top > 1 && homeView === true) {
        hideHeader();
    } else if(top < 714 && homeView === false){
        showHeader();
    }
}, 500);

const btnScroll = document.querySelector('#scrollBtn');
btnScroll.addEventListener('click', () => {
    hideHeader();
})