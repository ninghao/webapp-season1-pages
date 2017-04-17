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
      prevArrow: '<button class="ui prev button"><i class="material-icons">chevron_left</i></button>',
      nextArrow: '<button class="ui next button"><i class="material-icons">chevron_right</i></button>',

      responsive: [
        {
          breakpoint: 767,
          settings: {
            dots: true
          }
        }
      ]
    })

})();
