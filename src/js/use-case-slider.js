/*
 * hero swiper https://swiperjs.com/
 */
(function () {
	new Swiper('.swiper2', {
		// Optional parameters
		direction: 'horizontal',
		/*autoplay: {
			delay: 3000,
			disableOnInteraction: false,
    		pauseOnMouseEnter: true,
		},*/
		speed: 400,
		loop: true,
		// If we need pagination
		pagination: {
			el: '.swiper-pagination2',
			clickable: true,
		},
	});
}());