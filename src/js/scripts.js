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

	




});