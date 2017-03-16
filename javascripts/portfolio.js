$(document).ready( () => {

  $('.index-body h3, h1').addClass('zoomIn');

  $(window).scroll(function(event) {
    let y = $(this).scrollTop();
    if ( y >= 300 ) {
      $('.img-circle').addClass('fadeInLeft');
    }
    if ( y >= 840 ) {
      $('.left-2').addClass('fadeInLeft');
      $('.right-2').addClass('fadeInRight');
    }
    if ( y >= 1000 ) {
      $('.left-2nd').addClass('fadeInLeft');
      $('.right-2nd').addClass('fadeInRight');
    }
    if ( y >= 2000 ) {
      $('.my-work').addClass('rotateInUpLeft');
    }
    if ( y >= 2500 ) {
      $('.social').addClass('rotateIn');
    }


  });

  $('.home').click(function() {
      $('html,body').animate({
          scrollTop: $("header").offset().top},
          'slow');
  });
  $('.about').click(function() {
      $('html,body').animate({
          scrollTop: $("#about-body").offset().top},
          'slow');
  });
  $('.projects').click(function() {
      $('html,body').animate({
          scrollTop: $("#projects-section").offset().top},
          'slow');
  });
  $('.contact').click(function() {
      $('html,body').animate({
          scrollTop: $(".myfooter").offset().top},
          'slow');
  });


  $(window).scroll(function(){
      if ($(this).scrollTop() > 100) {
        $('.navbar-inverse').addClass('navbar-black-color');
        $('.back-to-top').show(500);
      } else {
        $('.navbar-inverse').removeClass('navbar-black-color');
        $('.back-to-top').hide(500);
      }
  });

  $('.back-to-top').on('click', (e) => {
    $('html, body').animate({
      scrollTop: 0
    }, 1000);
    e.preventDefault();
  });




});
