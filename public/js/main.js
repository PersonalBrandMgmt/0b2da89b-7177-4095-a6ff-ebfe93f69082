;(function () {

	'use strict';


  // var getCdnUrl = function (key) {
  //   console.log(key);
  //   const imageRequest = JSON.stringify({
  //     bucket: 'cf-simple-s3-origin-cloudfrontfors3-273116933489',
  //     key,
  //   });
  //   document.getElementById('primaryImage').src = `https://d1kk667yopfgms.cloudfront.net/${btoa(imageRequest)}`
  // };

	// iPad and iPod detection
	var isiPad = function(){
		return (navigator.platform.indexOf("iPad") != -1);
	};

	var isiPhone = function(){
	    return (
			(navigator.platform.indexOf("iPhone") != -1) ||
			(navigator.platform.indexOf("iPod") != -1)
	    );
	};


	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};

	var burgerMenu = function() {

		$('.js-colorlib-nav-toggle').on('click', function(event) {
			event.preventDefault();
			var $this = $(this);
			if( $('body').hasClass('menu-show') ) {
				$('body').removeClass('menu-show');
				$('#colorlib-main-nav > .js-colorlib-nav-toggle').removeClass('show');
			} else {
				$('body').addClass('menu-show');
				setTimeout(function(){
					$('#colorlib-main-nav > .js-colorlib-nav-toggle').addClass('show');
				}, 900);
			}
		})
	};

	// Animations

	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated') ) {

				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn animated');
							} else {
								el.addClass('fadeInUp animated');
							}

							el.removeClass('item-animate');
						},  k * 200, 'easeInOutExpo' );
					});

				}, 100);

			}

		} , { offset: '85%' } );
	};


	var counter = function() {
		$('.js-counter').countTo({
			 formatter: function (value, options) {
	      return value.toFixed(options.decimals);
	    },
		});
	};

	var counterWayPoint = function() {
		if ($('#colorlib-counter').length > 0 ) {
			$('#colorlib-counter').waypoint( function( direction ) {

				if( direction === 'down' && !$(this.element).hasClass('animated') ) {
					setTimeout( counter , 400);
					$(this.element).addClass('animated');
				}
			} , { offset: '90%' } );
		}
	};

	// Owl Carousel
	var owlCarouselFeatureSlide = function() {
		var owl = $('.owl-carousel1');
		owl.owlCarousel({
			animateOut: 'fadeOut',
		   animateIn: 'fadeIn',
		   autoplay: true,
		   loop:true,
		   margin:0,
		   nav:true,
		   dots: false,
		   autoHeight: true,
		   responsive:{
		      0:{
		         items:1
		      },
		      600:{
		         items:2
		      },
		      1000:{
		         items:3
		      }
		   },
		   navText: [
		      "<i class='icon-arrow-left3 owl-direction'></i>",
		      "<i class='icon-arrow-right3 owl-direction'></i>"
	     	]
		});
		var owl2 = $('.owl-carousel');
		owl2.owlCarousel({
			animateOut: 'fadeOut',
		   animateIn: 'fadeIn',
		   autoplay: true,
		   loop:true,
		   margin:0,
		   nav:false,
		   dots: true,
		   autoHeight: true,
		   items: 1,
		   navText: [
		      "<i class='icon-arrow-left3 owl-direction'></i>",
		      "<i class='icon-arrow-right3 owl-direction'></i>"
	     	]
		});
		var owl3 = $('.owl-carousel3');
		owl3.owlCarousel({
			animateOut: 'fadeOut',
		   animateIn: 'fadeIn',
		   autoplay: true,
		   loop:true,
		   margin:0,
		   nav:false,
		   dots: false,
		   autoHeight: true,
		   items: 1,
		   navText: [
		      "<i class='icon-arrow-left3 owl-direction'></i>",
		      "<i class='icon-arrow-right3 owl-direction'></i>"
	     	]
		});
	};

	var scrollTo = function() {
        var resume = $('#resume-scroll');
			resume.click(function() {
            $('html,body').animate({
                    scrollTop: $('#colorlib-services').offset().top
				},
				'slow');
        });
        var experience = $('#experience-scroll');
        experience.click(function() {
            $('html,body').animate({
                    scrollTop: $('#colorlib-blog').offset().top
                },
                'slow');
        });
        var contact = $('#contact-scroll');
        contact.click(function() {
            $('html,body').animate({
                    scrollTop: $('#footer').offset().top
                },
                'slow');
        });
	};

	// Document on load.
	$(function(){
		fullHeight();
		burgerMenu();
		counterWayPoint();
		contentWayPoint();
		owlCarouselFeatureSlide();
		scrollTo();
		// getCdnUrl("a924d27f-3434-41b1-943d-9cb720f396a6");
	});

}());
