$(document).ready(function(){
	var isLateralNavAnimating = false;
	
	$('.cd-nav-trigger').on('click', function(event){
		event.preventDefault();
		//stop if nav animation is running 
		if( !isLateralNavAnimating ) {
			if($(this).parents('.csstransitions').length > 0 ) isLateralNavAnimating = true; 
			
			$('body').toggleClass('navigation-is-open');
			$('.cd-navigation-wrapper').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				//animation is over
				isLateralNavAnimating = false;
			});
		}
	});

	$('.more-info').click(function(e){
		e.preventDefault();
	  	$(this).closest(".card").toggleClass('flip');
	});

	function setColumns() {
	   $('.gallery').css('width', $('.works-section').width());
	  var workColls = Math.floor($('.works-section').width() / 400)
	      itemWidth = Math.floor($('.works-section').width() / workColls);
	  $('.gallery > ul> li').css('width', itemWidth+'px');
	};
	setColumns();
	//$(".main").mCustomScrollbar();
});