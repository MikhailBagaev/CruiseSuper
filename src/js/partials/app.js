$(function() {
    var jcarousel = $('.jcarousel');
    jcarousel
        .on('jcarousel:create jcarousel:reload', function() {

            carousel = $(this),
            width = carousel.innerWidth();

            if (width > 900) {
                width = width / 7;
            } else if (width > 700) {
                width = width / 5;
            } else if (width > 500) {
                width = width / 3;
            } else {
            	width = width /2;
            };
            carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
        })          
        .jcarousel({
            wrap: 'circular',
            animation: {
	        duration: 300,
	        easing:   'swing',
	        complete: function() {
	        }
            }
        });  
        $('.jcarousel-prev').jcarouselControl({
            target: '-=1'                       
        });             	
        
        $('.jcarousel-next').jcarouselControl({
            target: '+=1'
        });         
 });

$(function() {
    var jcarousel = $('.jcarousel1');
    jcarousel
        .on('jcarousel:create jcarousel:reload', function() {

            carousel = $(this),
            width = carousel.innerWidth();

            if (width > 900) {
                width = width / 3;
            } else if (width > 600) {
                width = width / 2;
            } else {
            	width = width /1;
            };
            carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
        })          
        .jcarousel({
            wrap: 'circular',
            animation: {
	        duration: 300,
	        easing:   'swing',
	        complete: function() {
	        }
            }
        });  
        $('.jcarousel1-prev').jcarouselControl({
            target: '-=1'                       
        });             	
        
        $('.jcarousel1-next').jcarouselControl({
            target: '+=1'
        });         
 });



$(function() {
    $(window).scroll(function() {

        if ($(this).innerWidth() > 767) {

            if($(this).scrollTop() > 164) {
                $('#menu').addClass('fixed');
            }
            else if ($(this).scrollTop() < 216) {
                $('#menu').removeClass('fixed');
            }

        } else {

            if($(this).scrollTop() > 344) {
                $('#menu').addClass('fixed');
            }
            else if ($(this).scrollTop() < 396) {
                $('#menu').removeClass('fixed');
            } 
        }
    });
});
