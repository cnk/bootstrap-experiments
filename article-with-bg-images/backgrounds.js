"use strict";

$(function() {
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var current_bgimg = $('.bgimg.current');
    var prev_bgimg = $('.bgimg.current').prevAll('.bgimg').first();
    var next_bgimg = $('.bgimg.current').nextAll('.bgimg').first();
    if (next_bgimg.length && (scroll >= next_bgimg.offset()['top'])) {
      $('body').css('background-image', 'url(' + next_bgimg.data('bgimg') + ')');
      current_bgimg.removeClass('current');
      next_bgimg.addClass('current');
    } else if (prev_bgimg.length && (scroll <= current_bgimg.offset()['top'])) {
      $('body').css('background-image', 'url(' + prev_bgimg.data('bgimg') + ')');
      current_bgimg.removeClass('current');
      prev_bgimg.addClass('current');
    }
  });
})
