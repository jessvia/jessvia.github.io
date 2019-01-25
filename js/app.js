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
if ($('.arcus-home,.arcus-products,.arcus-finhub, .arcus-card-ai, .arcus-contact').length > 0) {
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

//LOAD STUFF
function swiperPartners() {
  if ($('.arcus-home,.arcus-merchants').length > 0) {
    partner_slider = new Swiper('.section-swiper-partners .swiper-container', {
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      speed: 400,
      slidesPerView: 1,
      autoplay: {
        delay: 5000,
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
      breakpoints: {
        767: {
          autoHeight: true,
        },
        991: {
          autoHeight: false,
        },
      },
    });
  } else if ($('.arcus-finhub').length > 0) {
    partner_slider = new Swiper('.section-swiper-partners .swiper-container', {
      effect: 'fade',
      reverseDirection: true,
      initialSlide: 6,
      fadeEffect: {
        crossFade: true
      },
      speed: 400,
      slidesPerView: 1,
      autoplay: {
        delay: 5000,
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
      breakpoints: {
        767: {
          autoHeight: true,
        },
        991: {
          autoHeight: false,
        },
      },
    });
    partner_slider.removeSlide([1, 4, 7, 8]);
    partner_slider.update();
  }
}

function swiperPress() {
  card_slider = new Swiper('.section-swiper-press .swiper-container', {
    speed: 400,
    spaceBetween: 30,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    autoplay: {
      delay: 3000,
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
  });
}

if ($('.section-swiper-press').length > 0) {
  swiperPress();
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
  $("#modal-demo").load("modals/_demo.html");
  $("#swiper-partners").load("partials/_swiper-partners.html", function() {
    swiperPartners();
  });
});
//MOUSE FUNCTIONS
$('body').on('click', '.btn-read-more', function() {
  event.preventDefault();
  $(this).toggleClass('active');
  $(this).parents('.read-more-container').toggleClass('active');
});

$('body').on('click', '.btn-more-terms', function() {
  event.preventDefault();
  $(this).toggleClass('active');
  $(this).parents('.terms-read-more-container').toggleClass('active');
});

$('body').on('click', '.item-dropdown', function() {
  $(this).toggleClass('active');
  $(this).siblings('.item-dropdown').removeClass('active');
});

$('body').on('click', '.blog-article-container > .blog-article-link', function() {
  event.preventDefault();
  $(this).parents('.blog-article-container').toggleClass('active');
  $(this).parents('.blog-article-container').siblings().removeClass('active');
});

$('body').on('click', '.grid-team .btn-load-more', function() {
  event.preventDefault();
  $('.grid-team').toggleClass('active');
  $(this).toggleClass('active');
});

$('body').on('click', '.grid-press-release .btn-load-more', function() {
  event.preventDefault();
  $('.grid-press-release').toggleClass('active');
  $(this).toggleClass('active');
});

$('body').on('mouseenter', '.nav-dropdown ', function() {
  $(this).addClass('active');
  $(this).siblings().removeClass('active');
  header.addClass('active');
});

$('main').on('mouseenter', function() {
  $('.nav-dropdown').removeClass('active');
  header.removeClass('active');
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
