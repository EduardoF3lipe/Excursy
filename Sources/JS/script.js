//animação menu mobile
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('ri-menu-3-fill');
    navbar.classList.toggle('open');
}


ScrollReveal({ 
    // reset: true,
    distance: '50px',
    durantion: 2500,
    delay: 200,
    easing: 'ease-out'
});


//Animação scroll para aparecer
ScrollReveal().reveal('.About-text, .value-text', { delay: 200, origin:'right'});
ScrollReveal().reveal('.About-img, .value-img', { delay: 300, origin:'left' });
ScrollReveal().reveal('.brands', { delay: 100 });

ScrollReveal().reveal('.home-text, .home-img', { distance: '0px', opacity: 1000, durantion: 3000});

ScrollReveal().reveal('.Interests h2', { delay: 200, origin:'left' });
ScrollReveal().reveal('.Interests p', { delay: 400});
ScrollReveal().reveal('.box, .current-box', { delay: 300, origin:'top', interval: 500 });
ScrollReveal().reveal('.social-media', { delay: 200, origin:'top', interval: 700 });
ScrollReveal().reveal('menu-footer', { delay: 400, origin:'right', interval: 700 });


//Animação scrollUP

const scrollUp = document.querySelector('#upScroll');

window.addEventListener('scroll', checkHeight)

function checkHeight() {
    if(window.scrollY > 600) {
        scrollUp.style.display = "flex"
    } else {
        scrollUp.style.display = "none"
    }
}

scrollUp.addEventListener('click', () => {
    window.scrollTo({
        top:0,
        behavior: "smooth",
    })

})