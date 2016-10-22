class Slider {
	constructor(el) {
		this.el = el;
		this.$el = $(el);
		this.intervalID = this.autoplay();
		this.setupEventListeners();
	}

	setupEventListeners() {
			this.$el.find('.slider__prev-button').on('click', () => {
				this.prevSlide();
				clearInterval(this.intervalID);
			});

			this.$el.find('.slider__next-button').on('click', () =>  {
				this.nextSlide();
				clearInterval(this.intervalID);
			});

			this.$el.find('.slider__autoplay-button').on('click', () =>  {
				clearInterval(this.intervalID);
				this.intervalID = this.autoplay();
			});

	}

	setSlide(number) {
		var activeSlide = this.$el.find('.slider__list').children(':nth-child(' + number + ')')
		var list = this.$el.find('.slider__list');
		list.css('transform',  'translateX('+ (-100 * (number - 1) ) + '%)');
		list.children().removeClass('active');
		activeSlide.addClass('active');
		console.log('SLIDE HAS BEEN CHANGED');

		this.currentSlide = number;
	}
	getActiveNumber() {
		return this.$el.find('.slider__list li.active').index() + 1;
	}


	getSlidesCount() {
		return this.$el.find('.slider__list li').length;
	}

	nextSlide() {
		var activeSlideNumber = this.getActiveNumber();
		var nextSlideNumber = activeSlideNumber + 1;
		var slidesCount = this.getSlidesCount()

		if (nextSlideNumber <= slidesCount) {
			this.setSlide(nextSlideNumber);
		}

	}

	prevSlide() {
		var activeSlideNumber = this.getActiveNumber();
		var prevSlideNumber = activeSlideNumber - 1;
		var slidesCount = this.getSlidesCount()

		if (prevSlideNumber > 0) {
			this.setSlide(prevSlideNumber);
		}
	}

	/*
		returns intervalId
	*/
	autoplay() {
		return setInterval(() => {
			this.nextSlide()
		}, 2000);
	}

}

class ReversedSlider extends Slider {
	autoplay() {
		return setInterval(() => {
			this.prevSlide()
		}, 2000);
	}
}

window.superSlider = new Slider(document.querySelector('#superSlider'));
window.commonSlider = new ReversedSlider(document.querySelector('#commonSlider'));


	