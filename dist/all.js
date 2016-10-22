'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Slider = function () {
	function Slider(el) {
		_classCallCheck(this, Slider);

		this.el = el;
		this.$el = (0, _jquery2.default)(el);
		this.intervalID = this.autoplay();
		this.setupEventListeners();
	}

	_createClass(Slider, [{
		key: 'setupEventListeners',
		value: function setupEventListeners() {
			var _this = this;

			this.$el.find('.slider__prev-button').on('click', function () {
				_this.prevSlide();
				clearInterval(_this.intervalID);
			});

			this.$el.find('.slider__next-button').on('click', function () {
				_this.nextSlide();
				clearInterval(_this.intervalID);
			});

			this.$el.find('.slider__autoplay-button').on('click', function () {
				clearInterval(_this.intervalID);
				_this.intervalID = _this.autoplay();
			});
		}
	}, {
		key: 'setSlide',
		value: function setSlide(number) {
			var activeSlide = this.$el.find('.slider__list').children(':nth-child(' + number + ')');
			var list = this.$el.find('.slider__list');
			list.css('transform', 'translateX(' + -100 * (number - 1) + '%)');
			list.children().removeClass('active');
			activeSlide.addClass('active');
			console.log('SLIDE HAS BEEN CHANGED');

			this.currentSlide = number;
		}
	}, {
		key: 'getActiveNumber',
		value: function getActiveNumber() {
			return this.$el.find('.slider__list li.active').index() + 1;
		}
	}, {
		key: 'getSlidesCount',
		value: function getSlidesCount() {
			return this.$el.find('.slider__list li').length;
		}
	}, {
		key: 'nextSlide',
		value: function nextSlide() {
			var activeSlideNumber = this.getActiveNumber();
			var nextSlideNumber = activeSlideNumber + 1;
			var slidesCount = this.getSlidesCount();

			if (nextSlideNumber <= slidesCount) {
				this.setSlide(nextSlideNumber);
			}
		}
	}, {
		key: 'prevSlide',
		value: function prevSlide() {
			var activeSlideNumber = this.getActiveNumber();
			var prevSlideNumber = activeSlideNumber - 1;
			var slidesCount = this.getSlidesCount();

			if (prevSlideNumber > 0) {
				this.setSlide(prevSlideNumber);
			}
		}

		/*
  	returns intervalId
  */

	}, {
		key: 'autoplay',
		value: function autoplay() {
			var _this2 = this;

			return setInterval(function () {
				_this2.nextSlide();
			}, 2000);
		}
	}]);

	return Slider;
}();

var ReversedSlider = function (_Slider) {
	_inherits(ReversedSlider, _Slider);

	function ReversedSlider() {
		_classCallCheck(this, ReversedSlider);

		return _possibleConstructorReturn(this, (ReversedSlider.__proto__ || Object.getPrototypeOf(ReversedSlider)).apply(this, arguments));
	}

	_createClass(ReversedSlider, [{
		key: 'autoplay',
		value: function autoplay() {
			var _this4 = this;

			return setInterval(function () {
				_this4.prevSlide();
			}, 2000);
		}
	}]);

	return ReversedSlider;
}(Slider);

window.superSlider = new Slider(document.querySelector('#superSlider'));
window.commonSlider = new ReversedSlider(document.querySelector('#commonSlider'));
//# sourceMappingURL=all.js.map
