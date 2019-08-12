/* ===================================================================
 * Glint - Main JS
 *
 * ------------------------------------------------------------------- */

//  javascript image

// loder
document.onreadystatechange = function() {
  var state = document.readyState;
  if (state == "interactive") {
    document.getElementById("contents").style.visibility = "hidden";
  } else if (state == "complete") {
    setTimeout(function() {
      document.getElementById("interactive");
      document.getElementById("load").style.visibility = "hidden";
      document.getElementById("contents").style.visibility = "visible";
    }, 1000);
  }
};

// end loader

function showProducts1() {
  document.getElementById("products1").style.maxHeight = "5000px";
  var images = document.querySelectorAll("#products1 img");
  for (var i = 0; i < images.length; i++) {
    images[i].src = images[i].getAttribute("data-src");
  }
  document.getElementById("products1").style.display = "block";
  document.getElementById("btnHideProducts1").style.display = "block";
  document.getElementById("btnShowProducts1").style.display = "none";
}

function hideProducts1() {
  document.getElementById("products1").style.display = "none";
  document.getElementById("btnHideProducts1").style.display = "none";
  document.getElementById("btnShowProducts1").style.display = "block";
}
//=============================
function showProducts2() {
  document.getElementById("products2").style.maxHeight = "5000px";
  var images = document.querySelectorAll("#products2 img");
  for (var i = 0; i < images.length; i++) {
    images[i].src = images[i].getAttribute("data-src");
  }
  document.getElementById("products2").style.display = "block";
  document.getElementById("btnHideProducts2").style.display = "block";
  document.getElementById("btnShowProducts2").style.display = "none";
}

function hideProducts2() {
  document.getElementById("products2").style.display = "none";
  document.getElementById("btnHideProducts2").style.display = "none";
  document.getElementById("btnShowProducts2").style.display = "block";
}
//=============================
function showProducts3() {
  document.getElementById("products3").style.maxHeight = "5000px";
  var images = document.querySelectorAll("#products3 img");
  for (var i = 0; i < images.length; i++) {
    images[i].src = images[i].getAttribute("data-src");
  }
  document.getElementById("products3").style.display = "block";
  document.getElementById("btnHideProducts3").style.display = "block";
  document.getElementById("btnShowProducts3").style.display = "none";
}

function hideProducts3() {
  document.getElementById("products3").style.display = "none";
  document.getElementById("btnHideProducts3").style.display = "none";
  document.getElementById("btnShowProducts3").style.display = "block";
}
//=============================
function showProducts4() {
  document.getElementById("products4").style.maxHeight = "5000px";
  var images = document.querySelectorAll("#products4 img");
  for (var i = 0; i < images.length; i++) {
    images[i].src = images[i].getAttribute("data-src");
  }
  document.getElementById("products4").style.display = "block";
  document.getElementById("btnHideProducts4").style.display = "block";
  document.getElementById("btnShowProducts4").style.display = "none";
}

function hideProducts4() {
  document.getElementById("products4").style.display = "none";
  document.getElementById("btnHideProducts4").style.display = "none";
  document.getElementById("btnShowProducts4").style.display = "block";
}
//=============================

(function($) {
  "use strict";

  var cfg = {
      scrollDuration: 800, // smoothscroll duration
      mailChimpURL:
        "https://facebook.us8.list-manage.com/subscribe/post?u=cdb7b577e41181934ed6a6a44&amp;id=e6957d85dc" // mailchimp url
    },
    $WIN = $(window);

  // Add the User Agent to the <html>
  // will be used for IE10 detection (Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0))
  var doc = document.documentElement;
  doc.setAttribute("data-useragent", navigator.userAgent);

  /* Preloader
   * -------------------------------------------------- */
  var clPreloader = function() {
    $("html").addClass("cl-preload");

    $WIN.on("load", function() {
      //force page scroll position to top at page refresh
      // $('html, body').animate({ scrollTop: 0 }, 'normal');

      // will first fade out the loading animation
      $("#loader").fadeOut("slow", function() {
        // will fade out the whole DIV that covers the website.
        $("#preloader")
          .delay(300)
          .fadeOut("slow");
      });

      // for hero content animations
      $("html").removeClass("cl-preload");
      $("html").addClass("cl-loaded");
    });
  };

  /* Menu on Scrolldown
   * ------------------------------------------------------ */
  var clMenuOnScrolldown = function() {
    var menuTrigger = $(".header-menu-toggle");

    $WIN.on("scroll", function() {
      if ($WIN.scrollTop() > 150) {
        menuTrigger.addClass("opaque");
      } else {
        menuTrigger.removeClass("opaque");
      }
    });
  };

  /* OffCanvas Menu
   * ------------------------------------------------------ */
  var clOffCanvas = function() {
    var menuTrigger = $(".header-menu-toggle"),
      nav = $(".header-nav"),
      closeButton = nav.find(".header-nav__close"),
      siteBody = $("body"),
      mainContents = $("section, footer");

    // open-close menu by clicking on the menu icon
    menuTrigger.on("click", function(e) {
      e.preventDefault();
      // menuTrigger.toggleClass('is-clicked');
      siteBody.toggleClass("menu-is-open");
    });

    // close menu by clicking the close button
    closeButton.on("click", function(e) {
      e.preventDefault();
      menuTrigger.trigger("click");
    });

    // close menu clicking outside the menu itself
    siteBody.on("click", function(e) {
      if (
        !$(e.target).is(
          ".header-nav, .header-nav__content, .header-menu-toggle, .header-menu-toggle span"
        )
      ) {
        // menuTrigger.removeClass('is-clicked');
        siteBody.removeClass("menu-is-open");
      }
    });
  };

  /* photoswipe
   * ----------------------------------------------------- */
  var clPhotoswipe = function() {
    var items = [],
      $pswp = $(".pswp")[0],
      $folioItems = $(".item-folio");

    // get items
    $folioItems.each(function(i) {
      var $folio = $(this),
        $thumbLink = $folio.find(".thumb-link"),
        $title = $folio.find(".item-folio__title"),
        $caption = $folio.find(".item-folio__caption"),
        $titleText = "<h4>" + $.trim($title.html()) + "</h4>",
        $captionText = $.trim($caption.html()),
        $href = $thumbLink.attr("href"),
        $size = $thumbLink.data("size").split("x"),
        $width = $size[0],
        $height = $size[1];

      var item = {
        src: $href,
        w: $width,
        h: $height
      };

      if ($caption.length > 0) {
        item.title = $.trim($titleText + $captionText);
      }

      items.push(item);
    });

    // bind click event
    $folioItems.each(function(i) {
      $(this).on("click", function(e) {
        e.preventDefault();
        var options = {
          index: i,
          showHideOpacity: true
        };

        // initialize PhotoSwipe
        var lightBox = new PhotoSwipe(
          $pswp,
          PhotoSwipeUI_Default,
          items,
          options
        );
        lightBox.init();
      });
    });
  };

  /* Stat Counter
   * ------------------------------------------------------ */
  var clStatCount = function() {
    var statSection = $(".about-stats"),
      stats = $(".stats__count");

    statSection.waypoint({
      handler: function(direction) {
        if (direction === "center") {
          stats.each(function() {
            var $this = $(this);

            $({ Counter: 0 }).animate(
              { Counter: $this.text() },
              {
                duration: 1000,
                easing: "swing",
                step: function(curValue) {
                  $this.text(Math.ceil(curValue));
                }
              }
            );
          });
        }

        // trigger once only
        this.destroy();
      },

      offset: "90%"
    });
  };

  /* Masonry
   * ---------------------------------------------------- */

  var clMasonryFolio = function() {
    var containerBricks = $(".masonry");

    containerBricks.imagesLoaded(function() {
      containerBricks.masonry({
        itemSelector: ".masonry__brick",
        resize: true
      });
    });
  };

  /* slick slider
   * ------------------------------------------------------ */

  var clSlickSlider = function() {
    // $(".clients").slick({
    //   arrows: false,
    //   dots: true,
    //   infinite: true,
    //   slidesToShow: 4,
    //   slidesToScroll: 2,
    //   // autoplay: true,

    //   pauseOnFocus: false,
    //   autoplaySpeed: 1000,
    //   responsive: [
    //     {
    //       breakpoint: 1200,
    //       settings: {
    //         slidesToShow: 5
    //       }
    //     },
    //     {
    //       breakpoint: 1000,
    //       settings: {
    //         slidesToShow: 2
    //       }
    //     },
    //     {
    //       breakpoint: 800,
    //       settings: {
    //         slidesToShow: 3,
    //         slidesToScroll: 2
    //       }
    //     },
    //     {
    //       breakpoint: 500,
    //       settings: {
    //         slidesToShow: 2,
    //         slidesToScroll: 2
    //       }
    //     }
    //   ]
    // });

    // new slider
    // $(".clients").slick({
    //   dots: true,
    //   infinite: false,
    //   speed: 300,
    //   slidesToShow: 4,
    //   slidesToScroll: 4,
    //   responsive: [
    //     {
    //       breakpoint: 1024,
    //       settings: {
    //         slidesToShow: 3,
    //         slidesToScroll: 3,
    //         infinite: true,
    //         dots: true
    //       }
    //     },
    //     {
    //       breakpoint: 600,
    //       settings: {
    //         slidesToShow: 2,
    //         slidesToScroll: 2
    //       }
    //     },
    //     {
    //       breakpoint: 480,
    //       settings: {
    //         slidesToShow: 1,
    //         slidesToScroll: 1
    //       }
    //     }

    //   ]
    // });

    $(".testimonials").slick({
      arrows: true,
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      pauseOnFocus: false,
      autoplaySpeed: 1500,
      responsive: [
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 800,
          settings: {
            arrows: false,
            dots: true
          }
        }
      ]
    });
  };

  /* Smooth Scrolling
   * ------------------------------------------------------ */
  var clSmoothScroll = function() {
    $(".smoothscroll").on("click", function(e) {
      var target = this.hash,
        $target = $(target);

      e.preventDefault();
      e.stopPropagation();

      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $target.offset().top
          },
          cfg.scrollDuration,
          "swing"
        )
        .promise()
        .done(function() {
          // check if menu is open
          if ($("body").hasClass("menu-is-open")) {
            $(".header-menu-toggle").trigger("click");
          }

          window.location.hash = target;
        });
    });
  };

  /* Placeholder Plugin Settings
   * ------------------------------------------------------ */
  var clPlaceholder = function() {
    $("input, textarea, select").placeholder();
  };

  /* Alert Boxes
   * ------------------------------------------------------ */
  var clAlertBoxes = function() {
    $(".alert-box").on("click", ".alert-box__close", function() {
      $(this)
        .parent()
        .fadeOut(500);
    });
  };

  /* Contact Form
   * ------------------------------------------------------ */
  var clContactForm = function() {
    /* local validation */
    $("#contactForm").validate({
      /* submit via ajax */
      submitHandler: function(form) {
        var sLoader = $(".submit-loader");

        $.ajax({
          type: "POST",
          url: "inc/sendEmail.php",
          data: $(form).serialize(),
          beforeSend: function() {
            sLoader.slideDown("slow");
          },
          success: function(msg) {
            // Message was sent
            if (msg == "OK") {
              sLoader.slideUp("slow");
              $(".message-warning").fadeOut();
              $("#contactForm").fadeOut();
              $(".message-success").fadeIn();
            }
            // There was an error
            else {
              sLoader.slideUp("slow");
              $(".message-warning").html(msg);
              $(".message-warning").slideDown("slow");
            }
          },
          error: function() {
            sLoader.slideUp("slow");
            $(".message-warning").html(
              "Something went wrong. Please try again."
            );
            $(".message-warning").slideDown("slow");
          }
        });
      }
    });
  };

  /* Animate On Scroll
   * ------------------------------------------------------ */
  var clAOS = function() {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 300,
      once: true,
      disable: "mobile"
    });
  };

  /* AjaxChimp
   * ------------------------------------------------------ */
  var clAjaxChimp = function() {
    $("#mc-form").ajaxChimp({
      language: "es",
      url: cfg.mailChimpURL
    });

    // Mailchimp translation
    //
    //  Defaults:
    //	 'submit': 'Submitting...',
    //  0: 'We have sent you a confirmation email',
    //  1: 'Please enter a value',
    //  2: 'An email address must contain a single @',
    //  3: 'The domain portion of the email address is invalid (the portion after the @: )',
    //  4: 'The username portion of the email address is invalid (the portion before the @: )',
    //  5: 'This email address looks fake or invalid. Please enter a real email address'

    $.ajaxChimp.translations.es = {
      submit: "Submitting...",
      0: '<i class="fa fa-check"></i> We have sent you a confirmation email',
      1: '<i class="fa fa-warning"></i> You must enter a valid e-mail address.',
      2: '<i class="fa fa-warning"></i> E-mail address is not valid.',
      3: '<i class="fa fa-warning"></i> E-mail address is not valid.',
      4: '<i class="fa fa-warning"></i> E-mail address is not valid.',
      5: '<i class="fa fa-warning"></i> E-mail address is not valid.'
    };
  };

  /* Back to Top
   * ------------------------------------------------------ */
  var clBackToTop = function() {
    var pxShow = 500, // height on which the button will show
      fadeInTime = 400, // how slow/fast you want the button to show
      fadeOutTime = 400, // how slow/fast you want the button to hide
      scrollSpeed = 300, // how slow/fast you want the button to scroll to top. can be a value, 'slow', 'normal' or 'fast'
      goTopButton = $(".go-top");

    // Show or hide the sticky footer button
    $(window).on("scroll", function() {
      if ($(window).scrollTop() >= pxShow) {
        goTopButton.fadeIn(fadeInTime);
      } else {
        goTopButton.fadeOut(fadeOutTime);
      }
    });
  };

  /* Initialize
   * ------------------------------------------------------ */
  (function ssInit() {
    clPreloader();
    clMenuOnScrolldown();
    clOffCanvas();
    clPhotoswipe();
    clStatCount();
    clMasonryFolio();
    clSlickSlider();
    clSmoothScroll();
    clPlaceholder();
    clAlertBoxes();
    clContactForm();
    clAOS();
    clAjaxChimp();
    clBackToTop();
  })();
})(jQuery);
