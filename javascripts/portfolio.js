$(document).ready( () => {

  $('.home').click(function() {
      $('html,body').animate({
          scrollTop: $(".index-body").offset().top},
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
  $('.experience').click(function() {
      $('html,body').animate({
          scrollTop: $("#experience-section").offset().top},
          'slow');
  });

  $(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 1200) {
      $('.social').show(1000);
    } else {
      $('.social').hide(1000);
    }
  });
      $(window).scroll(function(){
          if ($(this).scrollTop() > 100) {
            $('.navbar-inverse').addClass('navbar-fixed-top');
          } else {
            $('.navbar-inverse').removeClass('navbar-fixed-top');
          }
      });

});
