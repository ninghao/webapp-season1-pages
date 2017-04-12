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

})();
