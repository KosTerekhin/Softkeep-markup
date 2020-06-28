// ------HEADER BUTTONS-----

// ------------------SIDE MENU OPEN/CLOSE----------------------

const menuButton = document.querySelector('#humburger-menu-icon');
const sideMenu = document.querySelector('#sidemenu');

menuButton.addEventListener('click', () => {
	sideMenu.classList.toggle('sidemenu-hidden');
});
// sidemenu from 1441
var w = window.innerWidth;
w < 1441 && sideMenu.classList.add('sidemenu-hidden');

// ------------------srcroll-up------------------
const scroll = document.querySelector('#scroll-top');

$(window).scroll(function() {
	if ($(this).scrollTop() > 40) {
		$('#scroll-top').fadeIn(500);
	} else {
		$('#scroll-top').fadeOut(500);
	}
});

$('#scroll-top').click(function() {
	$('html, body').animate({ scrollTop: 0 }, 'slow');
});

// ------------------Rating Initialization------------------
$(document).ready(function() {
	$('#rateMe1').mdbRate();
});
$(document).ready(function() {
	$('#rateMe2').mdbRate();
});
$(document).ready(function() {
	$('#rateMe3').mdbRate();
});

// ------------------MODAL IMAGES------------------

modalImg = document.getElementById('modal-content');

window.addEventListener('click', (e) => {
	if (e.target.getAttribute('data-target') === '#modal-download') {
		modalImg.setAttribute('src', e.target.getAttribute('src'));
		console.log(e.target.getAttribute('src'));
	}
});
