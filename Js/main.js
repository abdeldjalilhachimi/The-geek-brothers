$(function(){
    'use strict';
    // Adjust slider height
    var winHeight    = $(window).height(),
        upperHeight  = $('.upper-bar').innerHeight(),
        navBarHieght = $('.navbar').innerHeight();

    $('.slider, .carousel-item').height(winHeight - (upperHeight + navBarHieght)); 

    // Features work shuffel 
    $('.featuers-work ul li').on('click', function () {

        $(this).addClass('active').siblings().removeClass('active');
            console.log($(this).data('class'))
        if ($(this).data('class') === '.all'){

            $('.shuffel-imges .col-md ').css('opacity','1')
        
        }
        else {
            $('.shuffel-imges .col-md ').css('opacity','.4');
            $($(this).data('class')).parent().css('opacity',1)
        }
      
    });

});