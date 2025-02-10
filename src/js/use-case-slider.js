/*
 * hero swiper https://swiperjs.com/
 */
(function () {
	new Swiper('.use-cases', {
		slidesPerView: 3,
		spaceBetween: 30,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
	});
}());