


// let $body,
// 	windowHeight,
// 	windowWidth,
// 	degree = 0.0174532925,
// 	mediaPoint1 = 1024,
// 	mediaPoint2 = 768,
// 	mediaPoint3 = 480,
// 	mediaPoint4 = 320,
// 	devStatus = window.productionStatus === 'development';


// $(document).ready(function ($) {
// 	$body = $('body');

// 	if (devStatus) {
// 		pageWidget(['index']);
// 		pageWidget(['about']);
// 		getAllClasses('html', '.elements_list');
// 	}
// });

// $(window).on('load', function () {
// 	updateSizes();
// 	loadFunc();
// });

// $(window).on('resize', function () {
// 	resizeFunc();
// });

// $(window).on('scroll', function () {
// 	scrollFunc();
// });

// function loadFunc() {
// 	calcViewportHeight();
// }

// function resizeFunc() {
// 	updateSizes();

// 	calcViewportHeight();
// }

// function scrollFunc() {}

// function calcViewportHeight() {
// 	if (isMobile.apple.phone || isMobile.android.phone || isMobile.seven_inch) {
// 		var vh = window.innerHeight * 0.01;
// 		// var vh2 = document.documentElement.clientHeight * 0.01;

// 		document.documentElement.style.setProperty('--vh', vh + 'px');
// 	}
// }

// function updateSizes() {
// 	windowWidth = window.innerWidth;
// 	windowHeight = window.innerHeight;
// }

// if ('objectFit' in document.documentElement.style === false) {
// 	document.addEventListener('DOMContentLoaded', function () {
// 		Array.prototype.forEach.call(
// 			document.querySelectorAll('img[data-object-fit]'),
// 			function (image) {
// 				(image.runtimeStyle || image.style).background =
// 					'url("' +
// 					image.src +
// 					'") no-repeat 50%/' +
// 					(image.currentStyle
// 						? image.currentStyle['object-fit']
// 						: image.getAttribute('data-object-fit'));

// 				image.src =
// 					"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='" +
// 					image.width +
// 					"' height='" +
// 					image.height +
// 					"'%3E%3C/svg%3E";
// 			}
// 		);
// 	});
// }

// function getRandomInt(min, max) {
// 	return Math.floor(Math.random() * (max - min)) + min;
// }

// function getRandom(min, max) {
// 	return Math.random() * (max - min) + min;
// }

// var styles = ['color: #fff', 'background: #cf8e1f'].join(';');
// var message = 'Developed by KotoFeelGood https://api.whatsapp.com/send?phone=79615311386&text=%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9%20%D0%B4%D0%B5%D0%BD%D1%8C%2C%20%D1%8F%20%D0%BF%D0%BE%20%D0%BF%D0%BE%D0%B2%D0%BE%D0%B4%D1%83%20%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D1%8F%20%D1%81%D0%B0%D0%B9%D1%82%D0%B0';

// console.info('%c%s', styles, message);






























