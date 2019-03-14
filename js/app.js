// LOAD SCRIPTS
$(document).ready(function() {
  function loadScript(scripts, callback) {
    var progress = 0;
    scripts.forEach(function(script) {
      $.getScript(script, function() {
        if (++progress == scripts.length) callback();
      });
    });
  }

  // SELECTTRIC
  loadScript(["js/jquery.selectric.js"], function() {
    $(function() {
      $('select').selectric({
        maxHeight: 200
      });
    });
  });

});


$(window).on('load', function() {
  $('.loader-image').fadeOut(1500);
  $('.loader-component').delay(1500).fadeOut('slow');
  $('main').css({
    opacity: 1
  });
});

// LOAD HTML
$(document).ready(function() {
  $("header").load("_header.html");
	$("footer").load("_footer.html");
	
    $("<div id='modal-menu' class='mobile__nav'></div>").prependTo("body");
    $("<div id='modal-filter' class='mobile__filter'></div>").prependTo("body");
    $("#modal-menu").load("_menu.html");
    $("#modal-filter").load("_filter.html");
});

// MENU HAM
$('body').on('click', '.menu-icon', function() {
  $('.menu-icon').toggleClass('active');
  $('#modal-menu').toggleClass('open');
});

// MENU MOBILE CONTENT
$('body').on('click touchstart', '.mobile__nav li a', function() {
  $(this).toggleClass('active').parent().toggleClass('active');
});

// ACCORDION
var i, acc = document.getElementsByClassName("accordion");
for (i = 0; i < acc.length; i++) acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var t = this.nextElementSibling;
    $(t).toggleClass('active');
    $(this).closest('.section__careers--item').toggleClass('active');
    t.style.maxHeight ? t.style.maxHeight = null : t.style.maxHeight = t.scrollHeight + "px"
});


// FILTRO
$('body').on('click', '.section__work .accordion__filter', function() {

    if ($(window).width() >= 767) {

        var t = this.nextElementSibling;
        $(this).toggleClass('active');
        $(t).toggleClass('active');

        if($('span', '#filter').text() == 'Cerrar filtros'){
            $('span', '#filter').text('Filtros');
        } else {
            $('span', '#filter').text('Cerrar filtros');
        }
        
    } else {
        $("#modal-filter").addClass("is-open");

        $('body').on('click', '.accordion__filter', function() {
            var t = this.nextElementSibling;
            $(this).toggleClass('active');
            $(t).toggleClass('active');
        });

    }
});

$('body').on('click touchstart', '.btn-close', function() {
    $(this).parent().removeClass('is-open');
  });


    //PRIVACIDAD
$(".site-press li").click(function() {
    var buttonId = Number($(this).attr("id"));
    $('.site-press li').removeClass("active");
    $(this).addClass("active");
    $(".section__press--content").hide();
    $(".section__press--content[data-id="+buttonId+"]").fadeIn(); 
});


// INPUTSS
$(document).ready(function() {
	// Test for placeholder support
    $.support.placeholder = (function(){
        var i = document.createElement('input');
        return 'placeholder' in i;
    })();

    // Hide labels by default if placeholders are supported
    if($.support.placeholder) {
        $('.form-label').each(function(){
            $(this).addClass('js-hide-label');
        });  

        // Code for adding/removing classes here
        $('.form-group').find('input, textarea').on('keyup blur focus', function(e){
            
            // Cache our selectors
            var $this = $(this),
                $parent = $this.parent().find("label");
                $error = $this.parent().find(".input-error");
					
						switch(e.type) {
							case 'keyup': {
                $parent.toggleClass('js-hide-label', $this.val() == '');
                $error.toggleClass('active', $this.val() == '');
							} break;
							case 'blur': {
								if( $this.val() == '' ) {
                    $parent.addClass('js-hide-label');
                  
                } else {
                    $parent.removeClass('js-hide-label').addClass('js-unhighlight-label');
                    
                }
							} break;
							case 'focus': {
								if( $this.val() !== '' ) {
                    $parent.removeClass('js-unhighlight-label');
                }
						    } break;
						    default: break;
						}
        });
    } 
});

// VIDEO HERO 
var vid = document.getElementById("video");
var pauseButton = document.querySelector("#play");
var pauseHTML = document.querySelector("#pause");

if (window.matchMedia('(prefers-reduced-motion)').matches) {
    vid.removeAttribute("autoplay");
    vid.pause();
    pauseButton.innerHTML = "Play";
}

function vidFade() {
    vid.classList.add("stopfade");
}

vid.addEventListener('ended', function()
{
// only functional if "loop" is removed 
vid.pause();
// to capture IE10
vidFade();
}); 

$(window).scroll(function() {
var winTop = $(this).scrollTop();
var vid = document.getElementById("video");

    if(winTop >= $('.section__hero').height()-$('header').height()){

        vid.pause();
        vid.classList.remove("stopfade");
        $('.img-original').fadeIn();
        $('#pause').hide();
        
        // if(vid.paused) {
        //     $('#video')[0].pause();
        //     vid.classList.remove("stopfade");
        //     $('.img-original').fadeIn();
        //     $('#pause').hide();
        // } else {
        //     $('#video')[0].pause();
        //     vid.classList.remove("stopfade");
        //     $('.img-original').fadeIn();
        //     $('#pause').hide();
        // }

    }else {
        vid.pause();
        vid.classList.remove("stopfade");
        $('.img-original').fadeIn();
        $('#pause').hide();

        // if(vid.paused) {
        //     $('#video')[0].pause();
        //     vid.classList.remove("stopfade");
        //     $('.img-original').fadeIn();
        //     $('#pause').hide();
        // } else {
        //     $('#video')[0].pause();
        //     vid.classList.remove("stopfade");
        //     $('.img-original').fadeIn();
        //     $('#pause').hide();
        // }
    }
});

pauseButton.addEventListener("click", function() {
if (vid.paused) {
    vid.play();
    vid.classList.add("stopfade");
    $('.img-original').fadeOut();
    $('#pause').show();
} else {
    vid.pause();
    vid.classList.remove("stopfade");
} 
})

pauseHTML.addEventListener("click", function() {
    vid.classList.toggle("stopfade");
    vid.pause();
    $('.img-original').fadeIn();
    $('#pause').hide();
})