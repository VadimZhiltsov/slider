(function () {
	var intervalID = autoplay();

	function getRandom(min, max) {
		return Math.floor(min + (max-min) * Math.random());
	}

	function setSlide(number) {
		var activeSlide = $('.slider__list').children(':nth-child(' + number + ')')
		var list = $('.slider__list');
		list.css('transform',  'translateX('+ (-100 * (number - 1) ) + '%)');
		list.children().removeClass('active');
		activeSlide.addClass('active');
		console.log('SLIDE HAS BEEN CHANGED');
	}

	function getActiveNumber() {
		return $('.slider__list li.active').index() + 1;
	}
	
	function getSlidesCount() {
		return $('.slider__list li').length;
	}

	function nextSlide() {
		var activeSlideNumber = getActiveNumber();
		var nextSlideNumber = activeSlideNumber + 1;
		var slidesCount = getSlidesCount()

		if (nextSlideNumber <= slidesCount) {
			setSlide(nextSlideNumber);
		}

	}

	function prevSlide() {
		var activeSlideNumber = getActiveNumber();
		var prevSlideNumber = activeSlideNumber - 1;
		var slidesCount = getSlidesCount()

		if (prevSlideNumber > 0) {
			setSlide(prevSlideNumber);
		}
	}

	/*
		returns intervalId
	*/
	function autoplay() {
		return setInterval(function() {
			nextSlide()
		}, 2000);
	}

	$('.slider__prev-button').on('click', function() {
		prevSlide();
		clearInterval(intervalID);
	});

	$(document).on('click', '.slider__next-button', function() {
		nextSlide();
		clearInterval(intervalID);
	});

	$('.slider__autoplay-button').on('click', function() {
		clearInterval(intervalID);
		intervalID = autoplay();
	});
})();