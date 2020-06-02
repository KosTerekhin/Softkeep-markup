// ------HEADER BUTTONS-----

// ------------------SIDE MENU OPEN/CLOSE----------------------

const menuButton = document.querySelector('#humburger-menu-icon');
const sideMenu = document.querySelector('#sidemenu');

menuButton.addEventListener('click', () => {
	sideMenu.classList.toggle('sidemenu-hidden');
});

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

var w = window.innerWidth;
w < 1441 && sideMenu.classList.add('sidemenu-hidden');
