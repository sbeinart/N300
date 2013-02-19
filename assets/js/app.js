;(function($, window) {
	
	$('.toggle').click(function(e) {
		var $t = $(this);
		var id = $t.attr('href');
		var target = $(id);
		
		console.log(id);
		
		if(target.hasClass('show')) {
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
	
	$('.type a').click(function() {
		var $buttons = $('.type a');
		var $t       = $(this);
		var length   = $buttons.length;
		var type     = $t.attr('href').replace('#', '');
		
		$buttons.removeClass('primary');
		$t.addClass('primary');
		
		for(x = 2; x <= length; x++) {
			$('body').removeClass('type-'+x);
		}
		
		$('body').addClass(type);
		
		$('.toggle').removeClass('rotate');
		$('.show').removeClass('show');
		
		if(type) {
			$('.nav').hide();
			
			setTimeout(function() {
				$('.nav').show();
				$('.nav').attr('style', '');
			}, 500);
		}
	});
	
}(jQuery, this));
