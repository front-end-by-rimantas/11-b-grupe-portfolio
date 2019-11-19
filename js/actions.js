"use strict";

// header
const hamburger = document.querySelector('#main_header .fa-bars');
const close = document.querySelector('#main_header .fa-times');
const header = document.querySelector('#main_header');

// bevarde funkcija: function(){}
hamburger.addEventListener('click', function(){
    return header.classList.add('show-menu');
});

// arrow function: () => {}
close.addEventListener('click', () => {
    header.classList.remove('show-menu');
});

// scroll
window.addEventListener('scroll', headerScroll);
window.addEventListener('scroll', headerBackground);

// hero

// about me

// portfolio

// services
renderServices( services );

// team

// numbers
renderAchievements( numbers );

// pricing

// blog
renderBlog( blog );

// contact us

// maps

// footer

