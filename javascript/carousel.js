$(document).ready(function() {
	$('#main--carousel').owlCarousel();
});

var owl = $('#main--carousel');
owl.owlCarousel({
	items: 1,
	loop: true,
	margin: 0,
	dots: false,
	nav: true
});

$(document).ready(function() {
	$('#top-bottom-carousel').owlCarousel();
});

var owl = $('#top-bottom-carousel');
owl.owlCarousel({
	items: 6,
	loop: true,
	margin: 0,
	dots: false,
	nav: false,
	mouseDrag: false,
	touchDrag: false,
	pullDrag: false,

	responsive: {
		0: {
			mouseDrag: true,
			touchDrag: true,
			pullDrag: true,
			nav: true,
			items: 1
		},
		767: {
			mouseDrag: true,
			touchDrag: true,
			pullDrag: true,
			nav: true,
			items: 2
		},
		899: {
			mouseDrag: true,
			touchDrag: true,
			pullDrag: true,
			nav: true,
			items: 3
		},
		1200: {
			mouseDrag: true,
			touchDrag: true,
			pullDrag: true,
			nav: true,
			items: 4
		},
		1700: {
			mouseDrag: true,
			touchDrag: true,
			pullDrag: true,
			nav: true,
			items: 5
		},
		1800: {
			mouseDrag: false,
			touchDrag: false,
			pullDrag: false,
			nav: false,
			items: 6
		}
	}
});

$(document).ready(function() {
	$('#body-carousel-1').owlCarousel();
});

var owl1 = $('#body-carousel-1');
owl1.owlCarousel({
	items: 5,
	margin: 0,
	loop: true,
	dots: false,
	nav: true,
	mouseDrag: true,
	touchDrag: true,

	responsive: {
		0: {
			items: 1
		},
		767: {
			items: 2
		},
		899: {
			items: 3
		},
		1250: {
			items: 5
		},
		1441: {
			items: 4
		},
		1800: {
			items: 5
		}
	}
});

$(document).ready(function() {
	$('#body-carousel-2').owlCarousel();
});

var owl = $('#body-carousel-2');
owl.owlCarousel({
	items: 5,
	margin: 0,
	loop: true,
	dots: false,
	nav: true,
	mouseDrag: true,
	touchDrag: true,
	responsive: {
		0: {
			items: 1
		},
		767: {
			items: 2
		},
		899: {
			items: 3
		},
		1250: {
			items: 5
		},
		1441: {
			items: 4
		},
		1800: {
			items: 5
		}
	}
});

$(document).ready(function() {
	$('#body-carousel-3').owlCarousel();
});

var owl = $('#body-carousel-3');
owl.owlCarousel({
	items: 5,
	margin: 0,
	loop: true,
	dots: false,
	nav: true,
	mouseDrag: true,
	touchDrag: true,
	responsive: {
		0: {
			items: 1
		},
		767: {
			items: 2
		},
		899: {
			items: 3
		},
		1250: {
			items: 5
		},
		1441: {
			items: 4
		},
		1800: {
			items: 5
		}
	}
});

$(document).ready(function() {
	$('#body-carousel-4').owlCarousel();
});

var owl = $('#body-carousel-4');
owl.owlCarousel({
	items: 5,
	margin: 0,
	loop: true,
	dots: false,
	nav: true,
	mouseDrag: true,
	touchDrag: true,
	responsive: {
		0: {
			items: 1
		},
		767: {
			items: 2
		},
		899: {
			items: 3
		},
		1250: {
			items: 5
		},
		1441: {
			items: 4
		},
		1800: {
			items: 5
		}
	}
});
