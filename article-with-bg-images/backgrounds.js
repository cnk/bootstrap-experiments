"use strict";
/*global jQuery */

// (function($, window, document) {
//   function change_bg_image_on_scroll() {
//   };

//   $(window).scroll(function() {
//     var current_scroll_position = $(window).scrollTop();
//     if (scroll >= 200) {
//       $('body').addClass('scrolled');
//     } else {
//       $('body').removeClass('scrolled');
//     }
//   });

// })(jQuery, this, this.document);

$(function() {
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var current_bgimg = $('.bgimg.current');
    var next_bgimg = $('.bgimg.current').nextAll('.bgimg').first();
    if (next_bgimg.length && (scroll >= next_bgimg.offset()['top'])) {
      $('body').css('background-image', 'url(' + next_bgimg.data('bgimg') + ')');
      current_bgimg.removeClass('current');
      next_bgimg.addClass('current');
    }
  });
})
