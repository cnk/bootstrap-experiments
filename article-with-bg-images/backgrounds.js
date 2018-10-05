"use strict";

$(function() {
  $(window).scroll(function() {
    var img_transition_offset = 75;
    var scroll_top = $(window).scrollTop();
    var scroll_bottom = $(document).height() - $(window).height() - $(window).scrollTop();
    var current_bgimg = $('.bgimg.current');
    var prev_bgimg = $('.bgimg.current').prevAll('.bgimg').first();
    var next_bgimg = $('.bgimg.current').nextAll('.bgimg').first();

    // When the title is visible change bg image
    if (next_bgimg.length &&
        (scroll_top + $(window).height() + img_transition_offset >= $('.bgimg__text', next_bgimg).offset()['top'])) {
      $('body').css('background-image', 'url(' + next_bgimg.data('bgimg') + ')');
      current_bgimg.removeClass('current');
      next_bgimg.addClass('current');
    } else if (prev_bgimg.length &&
               (scroll_top + $(window).height() - img_transition_offset <= current_bgimg.offset()['top'])) {
      $('body').css('background-image', 'url(' + prev_bgimg.data('bgimg') + ')');
      current_bgimg.removeClass('current');
      prev_bgimg.addClass('current');
    }

    if ($('.bgimg__text', current_bgimg).length &&
        scroll_top + $(window).height() >= $('.bgimg__text', current_bgimg).offset()['top'] + 20) {
      $('.pages').css('background-color', 'rgb(0,0,0,0.5)')
    } else {
      $('.pages').css('background-color', 'rgb(0,0,0,0)')
    }
  });
})
