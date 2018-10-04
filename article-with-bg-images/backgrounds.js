"use strict";

$(function() {
  $(window).scroll(function() {
    var scroll_top = $(window).scrollTop();
    var scroll_bottom = $(document).height() - $(window).height() - $(window).scrollTop();
    var current_bgimg = $('.bgimg.current');
    var prev_bgimg = $('.bgimg.current').prevAll('.bgimg').first();
    var next_bgimg = $('.bgimg.current').nextAll('.bgimg').first();

    if (next_bgimg.length && 
        (scroll_top + $(window).height() >= $('.bgimg__text', next_bgimg).offset()['top'])) {
    // When the full title is visible / when the text scrolls onto the bottom of the window, change bg image
      $('body').css('background-image', 'url(' + next_bgimg.data('bgimg') + ')');
      current_bgimg.removeClass('current');
      next_bgimg.addClass('current');
    } else if (prev_bgimg.length && (scroll_top + $(window).height() <= current_bgimg.offset()['top'])) {
      $('body').css('background-image', 'url(' + prev_bgimg.data('bgimg') + ')');
      current_bgimg.removeClass('current');
      prev_bgimg.addClass('current');
    }

  });
})
