$(document).ready(function () {
  "use strict";

  //show nav link underline 
  $(".nav-link").on("mouseleave", function () {
    $(this).addClass("change")
  });
  $(".nav-link").on("mousemove", function () {
    $(this).removeClass("change")
  });

  // fixed header
  $(window).scroll(function () {
    let scroll = $(window).scrollTop();
    let scrollBottom = $('footer').offset().top;

    if ((scrollBottom - scroll) < $('footer').height()) {
      $(".fixed-social-links").fadeOut()
    } else {
      $(".fixed-social-links").fadeIn()
    }

    if (scroll > 1) {
      $("header").addClass("fixed");
    } else {
      $("header").removeClass("fixed");
    }
  });

  //main slider owl
  $(".main-slider-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 6000,
    items: 1,
    nav: true,
    dots: false,
    rtl: true,
    smartSpeed: 1000,
    center: true,
    slideTransition: "ease-in",
    animateIn: "fadeIn",
    navText: ["<i class='bi bi-arrow-left'></i>", "<i class='bi bi-arrow-right'></i>"],
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      768: {
        items: 1,
        nav: true,
      },

      992: {
        items: 1,
      }
    }
  });

  //why slider owl
  $(".why-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    items: 4,
    nav: true,
    dots: false,
    rtl: true,
    smartSpeed: 2000,
    margin: 20,
    navText: ["<i class='bi bi-arrow-left'></i>", "<i class='bi bi-arrow-right'></i>"],
    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: true,
      },
      768: {
        items: 2,
      },

      992: {
        items: 3,
      },
      1200: {
        items: 3,
      }
    }
  });

  //clients slider owl
  $(".clients-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    items: 6,
    nav: false,
    dots: false,
    rtl: true,
    margin: 25,
    navText: ["<i class='bi bi-arrow-left'></i>", "<i class='bi bi-arrow-right'></i>"],
    responsive: {
      0: {
        items: 2,
      },
      575: {
        items: 3,
      },
      768: {
        items: 3,
      },

      992: {
        items: 5,
      }
    }
  });

  //team slider owl
  $(".team-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    items: 4,
    nav: false,
    dots: true,
    rtl: true,
    margin: 25,
    navText: ["<i class='bi bi-arrow-left'></i>", "<i class='bi bi-arrow-right'></i>"],
    responsive: {
      0: {
        items: 1,
      },
      575: {
        items: 2,
      },
      768: {
        items: 3,
      },

      992: {
        items: 4,
      }
    }
  });

  //blogs slider owl
  $(".blogs-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    items: 3,
    nav: false,
    dots: true,
    rtl: true,
    smartSpeed: 2000,
    margin: 20,
    navText: ["<i class='bi bi-arrow-left'></i>", "<i class='bi bi-arrow-right'></i>"],
    responsive: {
      0: {
        items: 1,
      },
      575: {
        items: 2,
      },
      768: {
        items: 3,
      },

      992: {
        items: 3,
      }
    }
  });

  //to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 500) {
      $("#toTop").fadeIn(100);
    } else {
      $("#toTop").fadeOut(100);
    }
  });

  $("#toTop").click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, 0);
  });

  //validate form
  (function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    let forms = document.querySelectorAll(".needs-validation")

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener("submit", function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          } else {
            event.preventDefault()
          }
          form.classList.add("was-validated")
        }, false)
      })
  })();

  //lazyload images
  $("img").Lazy({
    scrollDirection: "vertical",
    effect: "fadeIn",
    visibleOnly: false,
  });

  //services change bg on hover
  $(".services .col-box").mouseenter(function () {
    let boxTarget = $(this).data('target');
    let bgBox = $(`*[data-index="${boxTarget}"]`);
    let allBgBoxs = $(".serv-bg");

    allBgBoxs.css({"background-image": "none", "opacity": 0});
    bgBox.css({"background-image": `url(${$(this).data('src')})`, "opacity": 1});
  });

  $(".services .serv-backgrounds").mouseleave(function () {
    let boxTarget = $(".services .col-box").data('target', '1');
    let bgBox = $(".serv-bg").data('index', '1');

    bgBox.css({"background-image": `url(${$(boxTarget).data('src')})`, "opacity": 1});
  });
});

$(window).on("load", function () {
  $('.loader').delay(500).fadeOut(500);

  //file upload
  $('.apply-job input[type="file"], .apply-in-careers input[type="file"]').each(function () {
    // get label text
    var label = $(this).parents('.form-group').find('label').text();
    label = (label) ? label : 'Upload your resume';

    // wrap the file input
    $(this).wrap('<div class="input-file"></div>');
    // display label
    $(this).before('<a class="text">' + label + '</a>');
    // we will display selected file here
    $(this).before('<span class="file-selected"></span>');

    // file input change listener 
    $(this).change(function (e) {
      // Get this file input value
      var val = $(this).val();

      // Let's only show filename.
      // By default file input value is a fullpath, something like 
      // C:\fakepath\Nuriootpa1.jpg depending on your browser.
      var filename = val.replace(/^.*[\\\/]/, '');

      // Display the filename
      $(this).siblings('.file-selected').text(filename);
    });
  });

  //select 2
  $(".select2").select2();

  // Default
  $("#post_rating .ratyli").ratyli();

  //dataTable
  $("#client_dataTable").DataTable({
    "paging": false,
    "bSort": true,
    "ordering": true
  });

  if ($(".wow").length) {
    let wow = new WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 50,
      mobile: false,
      live: true
    });
    // wow.init();
  }
});