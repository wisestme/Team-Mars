let closeIcon = document.querySelector('.fa-cross');
let menuIcon = document.querySelector('.fa-bars');
let modal = document.querySelector('#modal');

menuIcon.addEventListener('click', function(){
	modal.style.left = '0';
});

closeIcon.addEventListener('click', function(){
	modal.style.left = '-100vw';
});