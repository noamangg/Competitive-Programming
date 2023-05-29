let scroller = document.querySelector(".scroller");
let body = document.body;
let x = Math.floor((window.scrollY * 100) / body.scrollHeight);
scroller.style.width = `${x + 3}%`;
window.onscroll = function (e) {
    x = (window.scrollY * 100) / body.scrollHeight;
    scroller.style.width = `${x + 3}%`;
    console.log(window.scrollY);
    console.log(body.scrollHeight);
}


// let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
// window.addEventListener("scroll", () => {
//     let scrollTop = document.documentElement.scrollTop;
//     scroller.style.width = `${(scrollTop / height) * 100}%`;
// })