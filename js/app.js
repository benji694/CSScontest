window.scroll(0, 0);
const header = document.querySelector('header');
let homeView = true;
window.setInterval((e) => {
    var top = window.pageYOffset || document.documentElement.scrollTop;
    if (top > 1 && homeView === true) {
        window.scroll(0, 715);
        header.className = 'headerScrolled';
        setTimeout(() => {homeView = false}, 1000)
    } else if(top < 714 && homeView === false){
        window.scroll(0, 0);
        header.className = 'headerUnscrolled';
        setTimeout(() => {homeView = true}, 1000)
    }
    console.log(top)
}, 500);
