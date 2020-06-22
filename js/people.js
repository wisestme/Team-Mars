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
var expandButtons = document.querySelectorAll('.open-close');
var plusIcons = document.querySelectorAll('.fa-plus');

// Get the close icons
var closeButtons = document.querySelectorAll('.fa-window-close');


// Get the footer menu
 var footerMenu = document.querySelectorAll('.footer-menu');
 console.log(footerMenu);

 var footerMenuList = document.getElementById('footer').getElementsByTagName('li');
 console.log(footerMenuList);

 for (footerMenuItem of footerMenuList) {
 	footerMenuItem.classList.add('hide');
 }

 

// Loop through all the icons and add event listeners
for (plusIcon of plusIcons) {
	plusIcon.addEventListener('click', function() {
		// hide all the expand buttons
		for (plusIcon of plusIcons){
			plusIcon.classList.add('hide');
		}

		
		//get the hidden menu items
		var menuList = this.parentNode.parentNode.parentNode.childNodes[3].children;
		
		// Get current close icon
		var currentClose = this.parentNode.children[1];
		console.log(currentClose);
		currentClose.style.display = 'block';
		// Loop through the hidden items and display them
		for (menuItem of menuList) {

			// menuItem.style.display = 'block';
			menuItem.classList.toggle('hide');
			menuItem.classList.toggle('show');
			//menuItem.style.zIndex = '2';

		}	
		
		//this.parentNode.parentNode.childNodes[3].childNodes.style.display= 'block';
	})
}

function hideCloseButton() {
	for (closeButton of closeButtons) {
	closeButton.classList.add('hide');
	// closeButton.style.zIndex = '-2';
}
}

// hideCloseButton();

// add event listener to close icons

for (closeButton of closeButtons) {
	closeButton.addEventListener('click', function() {
		for (plusIcon of plusIcons){
			plusIcon.classList.remove('hide');
			hideCloseButton();

			//get the hidden menu items
		var menuList = this.parentNode.parentNode.parentNode.childNodes[3].children;
			for (menuItem of menuList) {

			// menuItem.style.display = 'block';
			
			menuItem.classList.remove('show');
			menuItem.classList.add('hide');
			//menuItem.style.zIndex = '2';

		}
		}
	})
}