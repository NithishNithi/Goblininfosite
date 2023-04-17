let menu =document.querySelector('#menu-icon');
let nav=document.querySelector('.nav');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    nav.classList.toggle('open');
};
const sr = ScrollReveal({
    distance:'65px',
    duration:2600,
    delay:450,
    reset:true
});

sr.reveal('.hero-txt',{delay:200,orgin:'top'});
sr.reveal('.hero-img',{delay:450,orgin:'top'});
sr.reveal('.icons',{delay:500,orgin:'left'});
sr.reveal('.scroll-down',{delay:500,orgin:'right'});
sr.reveal('header',{delay:150,orgin:'right'});