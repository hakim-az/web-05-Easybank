//HAMBURGER NAVBAR
const hamburger = document.querySelector('#hamburger');
const navList = document.querySelector('.nav-menu');
const bars = document.querySelectorAll('#hamburger span');
let isActive = false;

hamburger.addEventListener('click', function(){
    navList.classList.toggle('active');
    if(!isActive) {
        bars[0].style.transform = 'rotate(-45deg)';
        bars[1].style.opacity = '0';
        bars[2].style.transform = 'rotate(45deg)';
        isActive = true;
    } else {
        bars[0].style.transform = 'rotate(0deg)';
        bars[1].style.opacity = '1';
        bars[2].style.transform = 'rotate(0deg)';
        isActive = false;
    }
})

// FIXED NAVBAR
const navbar = document.querySelector('.nav-bar');
const header = document.querySelector('.header');

const headerObserver = new IntersectionObserver(function(entries,headerObserver){
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            navbar.classList.add('scrolled');
        }else{
            navbar.classList.remove('scrolled');
        }
    });
});

headerObserver.observe(header);