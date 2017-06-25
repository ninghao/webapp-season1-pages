(function() {
  'use strict';
  // Your custom JavaScript goes here

  /**
   * navbar
   */
  $('.ui.navbar .search-icon > i')
    .click(function () {
      let icon = $(this)
      if (icon.text() === 'search') {
        icon.text('close').parents('.content').addClass('searching')
      } else {
        icon.text('search').parents('.content').removeClass('searching')
      }
    })

  /**
   * hero
   */
  $('.ui.hero video.image')
    .visibility({
      once: false,
      continuous: true,
      onPassing(calculations) {
        if (calculations.percentagePassed >= 0.3) {
          $(this).get(0).pause()
        } else {
          $(this).get(0).play()
        }
      }
    })

  /**
   * sidebar
   */
  $('.ui.sidebar')
    .sidebar('setting', 'dimPage', false)
    .sidebar('attach events', '.ui.navbar .menu-icon')
    .sidebar('attach events', '.ui.sidebar .close-icon')

  $('.ui.navbar .menu')
    .clone()
    .appendTo('.ui.sidebar')

  /**
   * slick carousel
   */
  $('.ui.hero.carousel')
    .slick({
      // arrows: false,
      prevArrow: '<button class="ui prev bottom button"><i class="material-icons">chevron_left</i></button>',
      nextArrow: '<button class="ui next bottom button"><i class="material-icons">chevron_right</i></button>',

      responsive: [
        {
          breakpoint: 767,
          settings: {
            dots: true
          }
        }
      ]
    })

  $('.ui.vertical.story .ui.carousel.for')
    .slick({
      asNavFor: '.ui.vertical.story .ui.carousel.nav',
      arrows: false,
      slidesToShow: 1,
    })

  $('.ui.vertical.story .ui.carousel.nav')
    .slick({
      asNavFor: '.ui.vertical.story .ui.carousel.for',
      slidesToShow: 3,
      dots: true,
      prevArrow: '<button class="ui prev button"><i class="material-icons">chevron_left</i></button>',
      nextArrow: '<button class="ui next button"><i class="material-icons">chevron_right</i></button>',
      centerMode: true,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1
          }
        }
      ],
    })

  /**
   * bottom
   */
  enquire.register("screen and (max-width: 767px)", {
    match() {
      $('.ui.bottom')
        .addClass('accordion')
        .accordion({
          selector: {
            title: '.header',
            trigger: '.header',
            content: '.content'
          }
        })
    },
    unmatch() {
      $('.ui.bottom')
        .removeClass('accordion')
    }
  })

})();
