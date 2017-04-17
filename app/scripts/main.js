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
    .slick()

})();
