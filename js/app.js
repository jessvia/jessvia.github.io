$(window).on('load', function() {
  $('.loader-image').fadeOut(1500);
  $('.loader-component').delay(1500).fadeOut('slow');
  $('main').css({
    opacity: 1
  });
});

