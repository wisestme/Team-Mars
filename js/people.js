let closeIcon = document.querySelector('.fa-cross');
let menuIcon = document.querySelector('.fa-bars');
let modal = document.querySelector('#modal');

menuIcon.addEventListener('click', function(){
	modal.style.left = '0';
});

closeIcon.addEventListener('click', function(){
	modal.style.left = '-100vw';
});

// First Slider
$('.slides')
	.not('slick-initialized')
	.slick({
	autoplay: true,
	autoplaySpeed: 3000,
	dots: true,
	prevArrow: ".prev",
	nextArrow: ".next"
});


// expand menu items

// Get the plus icons
var expandButtons = document.querySelectorAll('.fa-plus');

// Get the footer menu
 var footerMenu = document.querySelectorAll('.footer-menu');
 console.log(footerMenu);

 var footerMenuList = document.getElementById('footer').getElementsByTagName('li');
 console.log(footerMenuList);

 for (footerMenuItem of footerMenuList) {
 	footerMenuItem.classList.add('hide');
 }

 

// Loop through all the icons and add event listeners
for (expandButton of expandButtons) {
	expandButton.addEventListener('click', function() {
		//get the hidden menu items
		var menuList = this.parentNode.parentNode.childNodes[3].children;
		
		// Loop through the hidden items and display them
		for (menuItem of menuList) {
			// menuItem.style.display = 'block';
			menuItem.classList.toggle('hide');
			menuItem.classList.toggle('show');
			menuItem.style.zIndex = '2';
		}	
		
		//this.parentNode.parentNode.childNodes[3].childNodes.style.display= 'block';
	})
}