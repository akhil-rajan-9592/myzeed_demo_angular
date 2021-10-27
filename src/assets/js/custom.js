// counter script
var a = 0;
$(window).scroll(function () {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counterNumber').each(function () {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    a = 1;
  }

});






$(document).ready(function () {

  $(".my-acc").click(function () {
    $(".acc-menu").slideToggle();
  });



  $(".search-wrapper input").keyup(function () {
    $(".search-result").slideDown();
  });

  var swiper = new Swiper('.indiasFastest-swiper-container', {
    pagination: {
      el: '.swiper-pagination-1',
      clickable: true,
    },
  });


  //  product detail image right align
  var container_left_margin = $('.container').css('marginLeft');
  $('.india-fastest-wrapper').css("margin-left", container_left_margin);


  // top exam slider start
  var swiper = new Swiper('.topExams-container', {
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    slidesPerView: 1,
    parallax: true,
    speed:1000,
    // speed: 2000,
    effect: 'coverflow', // 'cube', 'fade', 'coverflow',
    coverflowEffect: {
      rotate: 0, // Slide rotate in degrees
      stretch: 0, // Stretch space between slides (in px)
      depth: 100, // Depth offset in px (slides translate in Z axis)
      modifier: 1, // Effect multipler
      slideShadows : true, // Enables slides shadows
    },
    navigation: {
      nextEl: '.swiper-button-next-2',
      prevEl: '.swiper-button-prev-2',
    },
    breakpoints: {
      992: {
        slidesPerView: 3,
      },
    }
  });
  // top exam slider end

  // ads slider start
  var swiper = new Swiper('.adsWrapper-container', {
    pagination: {
      el: '.swiper-pagination-4',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next-3',
      prevEl: '.swiper-button-prev-3',
    },
  });
  // ads slider end

  // testimonial slider start
  var swiper = new Swiper('.testimonial-container', {
    pagination: {
      el: '.swiper-pagination-5',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next-4',
      prevEl: '.swiper-button-prev-4',
    },
  });
  // testimonial slider end

  // dp upload start
  var readURL = function (input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
        $('.profile-pic').attr('src', e.target.result);
      }

      reader.readAsDataURL(input.files[0]);
    }
  }


  $(".file-upload").on('change', function () {
    readURL(this);
  });

  $(".upload-button").on('click', function () {
    $(".file-upload").click();
  });

  // dp upload end


  // slide menu start
  $(".sideBar-menu").on('click', function () {
    $(".side-bar").toggleClass('active');
  });
  // slide menu end

  // top college menu start
  var swiper = new Swiper('.educationSwiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 30,

  });
  // top college menu end


  // top college filter open start
  $(".advanceFilter").on('click', function () {
    $(".advance-search-wrapper").addClass('active');
  });
  $(".advance-search-wrapper .close").on('click', function () {
    $(".advance-search-wrapper").removeClass('active');
  });
  // top college filter open end


  // course select slider start
  var swiper = new Swiper('.courseSelect-swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 60,
    

  });
  // course select slider end

// slider tab issue js start
  $(".courseSelect-swiper-container .course").on('click', function () {
    $(this).parent().siblings().children().removeClass('active');
  });

  $(".educationSwiper-container .contentWrapper").on('click', function () {
    $(this).parent().siblings().children().removeClass('active');
  });

  $(".educationSwiper-container1 .contentWrapper").on('click', function () {
    $(this).parent().siblings().children().removeClass('active');
  });
  // slider tab issue js start


  // accordian  start
  $(".accordian-wrapper .card-header").on('click', function () {
    $(this).parent().toggleClass('active');
    $(this).parent().siblings().removeClass('active');
  });

  // accordian  end


  // filter wrapper started
  $(".filterWrapper .filter .filterIcon").on('click', function () {
    $(".filterWrapper .filter ul").toggleClass('active');
  });
  // filter wrapper end


  // news update page accordian start
  $(".newsUpdatePage-section .searchWrapper").on('click', function () {
    $(this).parent().toggleClass('active');
    $(this).parent().siblings().removeClass('active');
  });
});