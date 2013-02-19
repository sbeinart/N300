;(function($, window) {
	
	$('.toggle').click(function(e) {
		var $t = $(this);
		var id = $t.attr('href');
		var target = $(id);
		
		console.log(id);
		
		if(target.css('display') != 'none') {
			target.removeClass('show');
		}
		else {
			target.addClass('show');
		}
		
		e.preventDefault();
	});
	
	$('.bars').click(function(e) {
		var $t = $(this);
		
		if($t.hasClass('rotate')) {
			$t.removeClass('rotate');
		}
		else {
			$t.addClass('rotate');
		}
				
		e.preventDefault();
	});
	
}(jQuery, this));
