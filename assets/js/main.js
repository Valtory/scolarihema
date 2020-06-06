
(function($) {

	// Breakpoints.
		skel.breakpoints({
			xlarge:	'(max-width: 1680px)',
			large:	'(max-width: 1280px)',
			medium:	'(max-width: 980px)',
			small:	'(max-width: 736px)',
			xsmall:	'(max-width: 480px)'
		});
			// codigo que empece a poner
			


	$(function() {

		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

	// Off-Canvas Navigation.

		// Navigation Panel.
			$(
				'<div id="navPanel">' +
					$('#nav').html() +
					'<a href="#navPanel" class="close"></a>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left'
				});

		// Fix: Remove transitions on WP<10 (poor/buggy performance).
			if (skel.vars.os == 'wp' && skel.vars.osVersion < 10)
				$('#navPanel')
					.css('transition', 'none');

	});

})(jQuery);

var script_url = 'https://script.google.com/macros/s/AKfycbxB9X_HObj8pvS7sQgQmAcLb013Fm8_NNyYNDnj6IK9x7K4hk4f/exec';
			function insert_value() {
				var id1 = $("#id").val();
				var name = $("#name").val();
				var email = $("#email").val();
				var message = $("#message").val();
				var url = script_url + "?callback=ctrlq&name=" + name + "&id=" + id1 + "&email=" + email + "&message=" + message;
				var request = jQuery.ajax({
					crossDomain: true,
					url : url,
					method: "GET",
					dataType: "jsonp",

				});
				//$("#resetForm").reset();

			}
			function ctrlq(e) {
				alert('Genial! Pronto nos pondremos en contacto con vos.')
			}
