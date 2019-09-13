$(document).ready(function(){
	'use strict';

	let coverHeight = $('.cover').height();

	$(window).on('scroll', function() {
		// $('body').scrollTop()
		// console.log($('window').scrollTop())

		if ($(window).scrollTop() > coverHeight) {
			// $('.navbar').removeClass('bg-transparent');
			// $('.navbar').addClass('bg-pre-transparent');
			$('.navbar')
				.removeClass('bg-transparent')
				.addClass('bg-pre-transparent');
		} else {
			// $('.navbar').addClass('bg-transparent');
			// $('.navbar').removeClass('bg-pre-transparent');
			$('.navbar')
				.addClass('bg-transparent')
				.removeClass('bg-pre-transparent');
		}
	});

	let grid = $('.grid').isotope({
	  // options
	  itemSelector : '.grid-item',
	  layoutMode   : 'masonry',
	  filter: $('.filter__link--active').attr('data-filter')
	});

	$('[data-filter]').on('click', function(e) {
		e.preventDefault();

		// console.log(e);

		// console.log(this);

		let filter = $(this).attr('data-filter');

		console.log(filter);

		grid.isotope({ filter: filter });

		$('[data-filter]').removeClass('filter__link--active');
		$(this).addClass('filter__link--active');

	});

	// $('[data-filter=".webdesign"]').addClass('filter__link--active');
	// grid.isotope({ filter: filter });

});