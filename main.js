// Mobile side menu

const navClose = document.getElementById('close');
const navMenu = document.getElementById('menu');
const nav = document.getElementById('nav');
const auth = document.getElementById('auth');
const body = document.getElementsByClassName('backDrop');

navMenu.addEventListener('click', () => {
    nav.classList.add('show-menu');
    auth.classList.add('show-menu');
    body[0].classList.add('darken');

    navClose.style.right = '1rem';
    navMenu.style.right = '-100%';
})

navClose.addEventListener('click', () => {
    nav.classList.remove('show-menu');
    auth.classList.remove('show-menu');
    body[0].classList.remove('darken');

    navClose.style.right = '-100%';
    navMenu.style.right = '1rem';
})

// Mobile drop Down menu

const featuresTab = document.getElementsByClassName('dropdown-title');
const dropdown = document.getElementsByClassName('dropdown');

//features

featuresTab[0].addEventListener('click', () => {
    dropdown[0].classList.toggle('show-dropdown');
    console.log('help');    
})

//Company

featuresTab[1].addEventListener('click', () => {
    dropdown[1].classList.toggle('show-dropdown');
})

if(window.innerWidth < 900) {
    dropdown[0].classList.add('nohover');
    dropdown[1].classList.add('nohover');
} else {
    dropdown[0].classList.remove('nohover');
    dropdown[1].classList.remove('nohover');
}