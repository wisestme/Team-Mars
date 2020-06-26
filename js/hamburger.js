let closeIcon = document.querySelector('.fa-cross');
let menuIcons = document.querySelectorAll('.fa-bars');
let modal = document.querySelector('#modal');

console.log(menuIcons);
for(menuIcon of menuIcons) {
	menuIcon.addEventListener('click', function(){
	modal.style.top = '0';
});
}


closeIcon.addEventListener('click', function(){
	modal.style.top = '-110vh';
});
