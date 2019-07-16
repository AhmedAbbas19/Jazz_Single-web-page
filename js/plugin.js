$(document).ready(function() {

  "use strict";
  // variables
  var navBar = $('.navbar'),
      backTop = $('.back-top'),
      close = $('.bubble i'),
      donate = $('.Donate'),
      i = 0;

  // nice scroll Library
  $('html').niceScroll();

  // carousel interval
  $('.carousel').carousel({
    interval: 3000
  });

  // on click buttons

  /*------Back-top Button------*/
  backTop.on('click',function() {
    $('html,body').animate({scrollTop: 0}, 900);
  });

  /*------NavBar Buttons------*/
  $('#AboutBtn').on('click',function() {
    $("html, body").animate({scrollTop: $('#About').offset().top }, 1000);
  });

  $('#SupportBtn').on('click',function() {
    $("html, body").animate({scrollTop: $('#Support').offset().top }, 1000);
  });

  $('#DonorsBtn').on('click',function() {
    $("html, body").animate({scrollTop: $('#Donors').offset().top }, 1000);
  });

  $('#ContactsBtn').on('click',function() {
    $("html, body").animate({scrollTop: $('#Contacts').offset().top }, 1000);
  });

  /*------Bubble Form X-Button------*/
  close.on('click',function() {
    $('.bubble').fadeOut(600);
  });

  donate.on('click',function() {
    $('.bubble').fadeIn(600);
  });


  // on scroll
  $(window).scroll(function() {

    // navbar style
    if ($(window).width() <= 751) {
        $('.navbar-inverse').css("background", "rgba(0, 0, 0,1)");
    }
    else {
        if ($(this).scrollTop() > 300) {
        $('.navbar-inverse').css("background", "rgba(0, 0, 0,1)");
        }
        else {
        $('.navbar-inverse').css("background", "rgba(0, 0, 0,0.4)");
        }
      }

      // ///////

    if ($(this).scrollTop() < i) {
      i = $(this).scrollTop();
      navBar.css("top", "0");
    }
    else if ($(this).scrollTop() > 150) {
      i = $(this).scrollTop();
      navBar.css("top", "-80px");
    }

    // back top button (Show&Hide)
    if ($(this).scrollTop() >= 800) {
      backTop.fadeIn("slow");
    } else {
      backTop.fadeOut("slow");
    }

  });


});

// loading page
$(window).load(function() {
  "use strict";

  $(".loading .sk-cube-grid").fadeOut(2000, function() {

      $("body").css("overflow", "auto");
      $(this).parent().fadeOut(900, function() {

          $(this).remove();
      });
  });
});
