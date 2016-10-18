(function () {

	function getRandom(min, max) {
		return Math.floor(min + (max-min) * Math.random());
	}

	function setSlide(number) {
		var activeSlide = $('.slider__list').children(':nth-child(' + number + ')')
		var list = $('.slider__list');
		list.css('transform',  'translateX('+ (-100 * number ) + '%)');
		list.children().removeClass('active');
		activeSlide.addClass('active');
		console.log('SLIDE HAS BEEN CHANGED');
	}

	function nexSlide() {

	}

	setInterval(function() {
		var slide = getRandom(0, 5);
		setSlide(slide)
	}, 4000)

})();