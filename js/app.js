var header = $("header");

//VIEWPORT CHECK +++
$.fn.isInViewport = function(y) {
  var y = y || 1;
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();
  var elementHeight = $(this).height();
  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();
  var deltaTop = Math.min(1, (elementBottom - viewportTop) / elementHeight);
  var deltaBottom = Math.min(1, (viewportBottom - elementTop) / elementHeight);
  // console.log(deltaTop * deltaBottom);
  return deltaTop * deltaBottom >= y;
};

// ++ SCROLL EVENTS
if ($('.page-active').length > 0) {
  $(function() {
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      if (scroll >= 500) {
        header.addClass("is-white");
      } else {
        header.removeClass("is-white");
      }
    });
  });
}

if ($('.modal').length > 0) {
  MicroModal.init({
    openTrigger: 'data-modal',
    disableScroll: false,
    disableFocus: true,
    awaitCloseAnimation: true,
  });
}

$(window).on('load', function() {
  $('.loader-image').fadeOut(1500);
  $('.loader-component').delay(1500).fadeOut('slow');
  $('main').css({
    opacity: 1
  });
});

$(document).ready(function() {
  //CARGAR MODULOS
  $("<div class='loader-image'></div>").appendTo(".loader-component");
  $("header").load("_header.html");
  $("footer").load("_footer.html");
  $("#modal-menu").load("modals/_menu.html");
});

//MOUSE FUNCTIONS
$('body').on('click', '.btn-read-more', function() {
  event.preventDefault();
  $(this).toggleClass('active');
  $(this).parents('.read-more-container').toggleClass('active');
});

var $btns = $('.filter-btn').click(function() {
  if (this.id == 'all') {
    $('#open_positions > .open-position').fadeIn(450)
  } else {
    var $el = $('.' + this.id).fadeIn(450);
    $('#open_positions > .open-position').not($el).fadeOut();
  }
  $btns.removeClass('active');
  $(this).addClass('active');
})
